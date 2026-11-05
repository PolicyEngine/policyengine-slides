#!/usr/bin/env python3
"""Five calls per model on prompt-v2.txt, tools off, default effort. See PREREGISTERED.md, amendment 4."""
import concurrent.futures as cf, datetime as dt, json, os, pathlib, subprocess
HERE = pathlib.Path(__file__).resolve().parent
PROMPT = (HERE / "prompt-v2.txt").read_text()
OUT = HERE / "answers-v2"; OUT.mkdir(exist_ok=True)
EMPTY = pathlib.Path("/private/tmp/claude-501/appam-ask-empty"); EMPTY.mkdir(parents=True, exist_ok=True)
LANE = str(pathlib.Path.home() / ".subfleet/lanes/codex-6")
TIMEOUT = 600
CALLS = 5
CODEX = ["gpt-6.1-sol", "gpt-6.1-terra", "gpt-6-astra", "gpt-6-luna", "gpt-6-sol", "gpt-5.6-terra"]
CLAUDE = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5", "claude-opus-4-7"]
OFF = ["apps", "browser_use", "browser_use_external", "browser_use_full_cdp_access", "code_mode_host",
       "computer_use", "goals", "hooks", "image_generation", "in_app_browser", "multi_agent", "plugins",
       "remote_plugin", "shell_snapshot", "shell_tool", "skill_search", "skill_mcp_dependency_install",
       "sleep_tool", "tool_suggest", "unified_exec", "unified_exec_tty", "view_image", "worktrees"]
SAFE = {"agent_message", "assistant_message", "reasoning", "error"}


def now():
    return dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def parse(text):
    try:
        return json.loads(text[text.index("{"): text.rindex("}") + 1])["outputs"]
    except Exception:
        return None


def codex(model, stem):
    env = dict(os.environ, SUBFLEET_ATTACHED_OK="1", CODEX_HOME=LANE)
    env.pop("OPENAI_API_KEY", None); env.pop("CODEX_API_KEY", None)
    cmd = ["codex", "exec", "--json", "--skip-git-repo-check", "--ephemeral", "--ignore-user-config", "--ignore-rules",
           "-s", "read-only", "-m", model, "-C", str(EMPTY), "-c", "project_doc_max_bytes=0", "-c", 'web_search="disabled"']
    for feature in OFF:
        cmd += ["--disable", feature]
    cmd.append(PROMPT)
    path = OUT / f"{stem}.jsonl"
    with path.open("w") as out, (OUT / f"{stem}.stderr").open("w") as err:
        rc = subprocess.run(cmd, stdout=out, stderr=err, stdin=subprocess.DEVNULL, env=env, timeout=TIMEOUT).returncode
    text, tools, errors = "", [], []
    for line in path.read_text().splitlines():
        try:
            event = json.loads(line)
        except Exception:
            continue
        if event.get("type") == "item.completed":
            item = event["item"]
            if item.get("type") in ("agent_message", "assistant_message"):
                text = item.get("text", "")
            elif item.get("type") not in SAFE:
                tools.append(item.get("type"))
        elif event.get("type") in ("error", "turn.failed"):
            errors.append(str(event)[:200])
    return rc, text, tools, errors, None


def claude(model, stem):
    env = dict(os.environ)
    for key in ("OPENAI_API_KEY", "CODEX_API_KEY", "CLAUDE_EFFORT", "CLAUDE_CODE_EFFORT_LEVEL"):
        env.pop(key, None)
    cmd = ["claude", "-p", "--model", model, "--tools", "", "--no-session-persistence", "--setting-sources", "",
           "--strict-mcp-config", "--output-format", "json", "--system-prompt", "You are a helpful assistant."]
    path = OUT / f"{stem}.json"
    with path.open("w") as out, (OUT / f"{stem}.stderr").open("w") as err:
        rc = subprocess.run(cmd, input=PROMPT, text=True, stdout=out, stderr=err, cwd=EMPTY, env=env, timeout=TIMEOUT).returncode
    data = json.loads(path.read_text())
    tools = ["web_search"] if data.get("usage", {}).get("server_tool_use", {}).get("web_search_requests") else []
    errors = [str(data.get("result"))[:200]] if data.get("is_error") else []
    return rc, data.get("result") or "", tools, errors, ",".join((data.get("modelUsage") or {}).keys())


def ask(job):
    model, call_no = job
    run = claude if model.startswith("claude") else codex
    attempts = []
    for attempt in (1, 2):
        stem = f"{model}.call{call_no}.attempt{attempt}"
        started = now()
        try:
            rc, text, tools, errors, served = run(model, stem)
        except Exception as error:
            rc, text, tools, errors, served = -1, "", [], [repr(error)[:200]], None
        outputs = parse(text)
        record = dict(model=model, call=call_no, attempt=attempt, started=started, ended=now(), rc=rc, tools=tools, errors=errors,
                      served=served, parsed=outputs is not None, outputs=outputs, raw=None if outputs else text[:3000])
        attempts.append(record)
        print(now(), model, f"call {call_no}", {k: record[k] for k in ("attempt", "rc", "tools", "served", "parsed")}, (errors or [""])[0][:120], flush=True)
        if outputs is not None:
            break
    return dict(model=model, call=call_no, attempts=attempts, final=attempts[-1] if attempts[-1]["parsed"] else None)


jobs = [(model, k) for k in range(1, CALLS + 1) for model in CODEX + CLAUDE]
with cf.ThreadPoolExecutor(max_workers=8) as pool:
    results = list(pool.map(ask, jobs))
(HERE / "answers-v2.json").write_text(json.dumps({"prompt": "prompt-v2.txt", "ended": now(), "results": results}, indent=1))
print(now(), "done", flush=True)
