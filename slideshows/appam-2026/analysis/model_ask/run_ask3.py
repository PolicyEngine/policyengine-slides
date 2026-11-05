#!/usr/bin/env python3
"""Rerun the three current Claude models at default effort after the max-effort calls timed out. See PREREGISTERED.md."""
import concurrent.futures as cf, datetime as dt, json, os, pathlib, subprocess
HERE = pathlib.Path(__file__).resolve().parent
PROMPT = (HERE / "prompt.txt").read_text()
OUT = HERE / "answers"; EMPTY = HERE / "empty"
TIMEOUT = 900
CLAUDE = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5"]

def now():
    return dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def parse(text):
    try:
        return json.loads(text[text.index("{"): text.rindex("}") + 1])["outputs"]
    except Exception:
        return None

def ask(model):
    env = dict(os.environ)
    for key in ("OPENAI_API_KEY", "CODEX_API_KEY", "CLAUDE_EFFORT", "CLAUDE_CODE_EFFORT_LEVEL"):
        env.pop(key, None)
    for attempt in (1, 2):
        started = now()
        path = OUT / f"{model}.attempt{attempt}.json"
        cmd = ["claude", "-p", "--model", model, "--tools", "", "--no-session-persistence", "--setting-sources", "",
               "--strict-mcp-config", "--output-format", "json", "--system-prompt", "You are a helpful assistant."]
        errors, tools, served, text, rc = [], [], None, "", None
        try:
            with path.open("w") as out, (OUT / f"{model}.attempt{attempt}.stderr").open("w") as err:
                rc = subprocess.run(cmd, input=PROMPT, text=True, stdout=out, stderr=err, cwd=EMPTY, env=env, timeout=TIMEOUT).returncode
            data = json.loads(path.read_text())
            served = ",".join((data.get("modelUsage") or {}).keys())
            text = data.get("result") or ""
            if data.get("usage", {}).get("server_tool_use", {}).get("web_search_requests"):
                tools.append("web_search")
            if data.get("is_error"):
                errors.append(text[:200])
        except Exception as error:
            errors.append(repr(error)[:200])
        outputs = parse(text)
        record = dict(model=model, attempt=attempt, started=started, ended=now(), rc=rc, tools=tools, errors=errors, served=served,
                      parsed=outputs is not None, outputs=outputs, raw=None if outputs else text[:2000], effort="model default")
        print(now(), model, {k: record[k] for k in ("attempt", "started", "ended", "rc", "tools", "served", "parsed", "errors")}, flush=True)
        if outputs is not None:
            return record
    return record

with cf.ThreadPoolExecutor(max_workers=3) as pool:
    results = list(pool.map(ask, CLAUDE))
run2 = json.loads((HERE / "answers-run2.json").read_text())
merged = [r for r in run2["results"] if r["model"] not in CLAUDE] + results
(HERE / "answers.json").write_text(json.dumps({"prompt_sha256_prefix": "d4d40386", "ended": now(), "results": merged}, indent=1))
print(now(), "done", flush=True)
