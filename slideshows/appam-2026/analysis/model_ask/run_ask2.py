#!/usr/bin/env python3
"""One no-tools call per model for the APPAM family. See PREREGISTERED.md."""
import concurrent.futures as cf, datetime as dt, json, os, pathlib, subprocess

HERE = pathlib.Path(__file__).resolve().parent
PROMPT = (HERE / "prompt.txt").read_text()
OUT = HERE / "answers"; OUT.mkdir(exist_ok=True)
EMPTY = HERE / "empty"; EMPTY.mkdir(exist_ok=True)
LANE = str(pathlib.Path.home() / ".subfleet/lanes/codex-6")
TIMEOUT = 900
CODEX = ["gpt-6-sol", "gpt-6.1-sol", "gpt-6.1-terra", "gpt-6-astra", "gpt-6-luna", "gpt-5.6-terra"]
CLAUDE = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5", "claude-opus-4-7"]
OFF = ["apps", "browser_use", "browser_use_external", "browser_use_full_cdp_access", "code_mode_host",
       "computer_use", "goals", "hooks", "image_generation", "in_app_browser", "multi_agent", "plugins",
       "remote_plugin", "shell_snapshot", "shell_tool", "skill_search", "skill_mcp_dependency_install",
       "sleep_tool", "tool_suggest", "unified_exec", "unified_exec_tty", "view_image", "worktrees"]
SAFE_ITEMS = {"agent_message", "assistant_message", "reasoning", "error"}


def now():
    return dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def parse(text):
    try:
        return json.loads(text[text.index("{"): text.rindex("}") + 1])["outputs"]
    except Exception:
        return None


def codex(model, attempt):
    env = dict(os.environ, SUBFLEET_ATTACHED_OK="1", CODEX_HOME=LANE)
    env.pop("OPENAI_API_KEY", None); env.pop("CODEX_API_KEY", None)
    cmd = ["codex", "exec", "--json", "--skip-git-repo-check", "--ephemeral", "--ignore-user-config", "--ignore-rules",
           "-s", "read-only", "-m", model, "-C", str(EMPTY), "-c", "project_doc_max_bytes=0", "-c", 'web_search="disabled"']
    for feature in OFF:
        cmd += ["--disable", feature]
    cmd.append(PROMPT)
    path = OUT / f"{model}.attempt{attempt}.jsonl"
    with path.open("w") as out, (OUT / f"{model}.attempt{attempt}.stderr").open("w") as err:
        rc = subprocess.run(cmd, stdout=out, stderr=err, stdin=subprocess.DEVNULL, env=env, timeout=TIMEOUT).returncode
    text, tools, other = "", [], []
    for line in path.read_text().splitlines():
        try:
            event = json.loads(line)
        except Exception:
            continue
        if event.get("type") == "item.completed":
            item = event["item"]
            if item.get("type") in ("agent_message", "assistant_message"):
                text = item.get("text", "")
            elif item.get("type") not in SAFE_ITEMS:
                tools.append(item.get("type"))
        elif event.get("type") in ("error", "turn.failed"):
            other.append(str(event)[:200])
    return rc, text, tools, other, model


def claude(model, attempt):
    env = dict(os.environ)
    env.pop("OPENAI_API_KEY", None); env.pop("CODEX_API_KEY", None)
    cmd = ["claude", "-p", "--model", model, "--tools", "", "--no-session-persistence", "--setting-sources", "",
           "--strict-mcp-config", "--output-format", "json", "--system-prompt", "You are a helpful assistant."]
    path = OUT / f"{model}.attempt{attempt}.json"
    with path.open("w") as out, (OUT / f"{model}.attempt{attempt}.stderr").open("w") as err:
        rc = subprocess.run(cmd, input=PROMPT, text=True, stdout=out, stderr=err, cwd=EMPTY, env=env, timeout=TIMEOUT).returncode
    try:
        data = json.loads(path.read_text())
    except Exception as error:
        return rc, "", [], [str(error)], None
    served = ",".join((data.get("modelUsage") or {}).keys())
    tools = []
    if data.get("usage", {}).get("server_tool_use", {}).get("web_search_requests"):
        tools.append("web_search")
    other = [str(data.get("result"))[:200]] if data.get("is_error") else []
    return rc, data.get("result") or "", tools, other, served


def ask(model):
    call = claude if model.startswith("claude") else codex
    for attempt in (1, 2):
        started = now()
        try:
            rc, text, tools, other, served = call(model, attempt)
        except Exception as error:
            rc, text, tools, other, served = -1, "", [], [repr(error)], None
        outputs = parse(text)
        record = dict(model=model, attempt=attempt, started=started, ended=now(), rc=rc, tools=tools,
                      errors=other, served=served, parsed=outputs is not None, outputs=outputs, raw=None if outputs else text[:2000])
        # Print no values here: the log stays free of answers until the report reads them together.
        print(now(), model, {k: record[k] for k in ("attempt", "started", "ended", "rc", "tools", "served", "parsed", "errors")}, flush=True)
        if outputs is not None:
            return record
    return record


with cf.ThreadPoolExecutor(max_workers=6) as pool:
    results = list(pool.map(ask, CODEX + CLAUDE))
(HERE / "answers.json").write_text(json.dumps({"prompt_sha256_prefix": "d4d40386", "ended": now(), "results": results}, indent=1))
print(now(), "done", flush=True)
