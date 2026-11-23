# Terminal AI Coding Agents (TUIs) — Best Picks, Advantages & Disadvantages

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities). Pros/cons and task rankings are additionally backed by external evidence (Terminal-Bench 2.1, 2026 head-to-head comparisons) — see Methodology.
>
> Generated 2026-11-23 by `scripts/reports/ai_coding_tuis.py` (regenerate any time — no API cost).

![Top tools by stars](assets/ai-coding-tuis-top-tools.svg)

![Tools per category](assets/ai-coding-tuis-categories.svg)


## Executive summary

- **31 terminal-AI-coding tools** in your stars (**1,497,360★** combined), split into the agents themselves and the terminal ecosystem around them:
  - **Terminal coding agent** (14): `opencode`, `claude-code`, `codex`, `pi`, `gemini-cli`, `oh-my-openagent`, `goose`, `aider`, `Codewhale`, `qwen-code`, `crush`, `freebuff`, `copilot-cli`, `tig`
  - **Session / token ops** (6): `rtk`, `context-mode`, `codeburn`, `ctx`, `claude-auto-resume`, `ClaudeNightsWatch`
  - **Safety / isolation** (4): `container-use`, `tirith`, `cc-safety-net`, `agentshield`
  - **Multi-CLI glue** (5): `cc-switch`, `free-claude-code`, `zcf`, `langchain-code`, `terminal-jarvis`
  - **TUI building blocks** (2): `bubbletea`, `bubbles`
- **Short answer to 'which TUI is best':** `claude-code` for reasoning depth and the richest extension ecosystem, `codex` for the highest benchmark ceiling, `opencode` if you want open source and model freedom. `aider` remains the best *pair programmer* (as opposed to autonomous agent); `goose` the best MCP-native generalist; `crush` the best-looking.
- **The harness matters more than the model**: the same GPT-5.5 scores 83.4% on Terminal-Bench 2.1 inside Codex CLI but 76.4% inside a generic harness — a 7-point gap that is pure agent-loop engineering.
- **Platform risk is real**: Gemini CLI was deprecated for a closed-source replacement in June 2026 with the free tier cut ~50×, and qwen-code's OAuth free tier ended in April — open-source-ness and provider neutrality (`opencode`, `goose`) are hedges, not ideology.

## The terminal-agent stack at a glance

| Layer | What it does | Tools in your stars |
|---|---|---|
| **The agent (TUI)** | Plan, edit, run, iterate in your terminal | `claude-code`, `opencode`, `gemini-cli`, `codex`, `goose`, `aider`, `crush`, `qwen-code`, `copilot-cli`, `pi`, `oh-my-openagent`, `freebuff` |
| **Token / session ops** | Cut cost, track spend, recall history | `rtk`, `context-mode`, `codeburn`, `ctx`, `opaline`, `claude-auto-resume`, `ClaudeNightsWatch` |
| **Safety** | Guard the shell the agent drives | `tirith`, `cc-safety-net`, `container-use`, `agentshield` |
| **Glue / launchers** | Switch, combine, and provision the CLIs | `cc-switch`, `free-claude-code`, `zcf`, `terminal-jarvis`, `langchain-code` |
| **Build-your-own** | Frameworks the TUIs are made of | `bubbletea`, `bubbles`, `pi` |

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Category | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | Terminal coding agent | TypeScript | MIT | 228,765 (▲1,544) | Hot | 89 | very active | 0d ago | 1.6y | 22 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Terminal coding agent | TypeScript | — | 156,795 (▲924) | Mature | 79 | very active | 0d ago | 1.8y | 2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | Multi-CLI glue | Rust | MIT | 156,625 (▲1,742) | Hot | 84 | very active | 0d ago | 1.3y | 28 |
| [openai/codex](https://github.com/openai/codex) | Terminal coding agent | Rust | Apache-2.0 | 136,230 (▲728) | Hot | 83 | very active | 0d ago | 1.6y | 26 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | Terminal coding agent | TypeScript | MIT | 123,495 (▲1,181) | Hot | 90 | very active | 0d ago | 1.3y | 12 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Terminal coding agent | TypeScript | Apache-2.0 | 109,023 (▲157) | Hot | 95 | very active | 1d ago | 1.6y | 13 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | Session / token ops | Rust | Apache-2.0 | 87,576 (▲847) | Hot | 75 | very active | 0d ago | 10mo | 11 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Multi-CLI glue | Python | NOASSERTION | 72,812 (▲2,074) | Hot | 77 | very active | 1d ago | 9mo | 6 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | Terminal coding agent | TypeScript | NOASSERTION | 71,080 (▲138) | Rising | 77 | very active | 0d ago | 11mo | 2 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | Terminal coding agent | Rust | Apache-2.0 | 56,895 (▲214) | Mature | 94 | very active | 0d ago | 2.3y | 37 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | Terminal coding agent | Python | Apache-2.0 | 50,228 (▲87) | Declining | 21 | stale | 6mo ago | 3.5y | 0 |
| [charmbracelet/bubbletea](https://github.com/charmbracelet/bubbletea) | TUI building blocks | Go | MIT | 45,847 (▲106) | Classic | 86 | very active | 1d ago | 6.9y | 21 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | Terminal coding agent | Rust | MIT | 41,195 (▲13) | Hot | 80 | very active | 0d ago | 10mo | 6 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | Session / token ops | JavaScript | NOASSERTION | 34,416 (▲248) | Rising | 80 | very active | 1d ago | 9mo | 2 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | Terminal coding agent | TypeScript | Apache-2.0 | 30,896 (▲305) | Hot | 82 | very active | 0d ago | 1.4y | 9 |
| [charmbracelet/crush](https://github.com/charmbracelet/crush) | Terminal coding agent | Go | NOASSERTION | 29,172 (▲72) | Hot | 78 | very active | 0d ago | 1.5y | 14 |
| [CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff) | Terminal coding agent | TypeScript | Apache-2.0 | 14,281 (▲84) | Mature | 63 | very active | 0d ago | 2.4y | 1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | Session / token ops | TypeScript | MIT | 11,893 (▲58) | Hot | 79 | very active | 0d ago | 7mo | 7 |
| [github/copilot-cli](https://github.com/github/copilot-cli) | Terminal coding agent | Python | NOASSERTION | 11,460 (▲40) | Classic | 71 | very active | 0d ago | 3.9y | 7 |
| [charmbracelet/bubbles](https://github.com/charmbracelet/bubbles) | TUI building blocks | Go | MIT | 9,075 (▲16) | Classic | 90 | very active | 2d ago | 6.9y | 33 |
| [UfoMiao/zcf](https://github.com/UfoMiao/zcf) | Multi-CLI glue | TypeScript | MIT | 6,065 (▼4) | Mature | 77 | very active | 2d ago | 1.3y | 2 |
| [dagger/container-use](https://github.com/dagger/container-use) | Safety / isolation | Go | Apache-2.0 | 4,105 (▲12) | Declining | 34 | active | 10d ago | 1.5y | 0 |
| [sheeki03/tirith](https://github.com/sheeki03/tirith) | Safety / isolation | Rust | AGPL-3.0 | 2,785 (▲1) | Rising | 79 | very active | 1d ago | 9mo | 2 |
| [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) | Safety / isolation | TypeScript | MIT | 2,096 (▲41) | Rising | 80 | very active | 0d ago | 11mo | 2 |
| [affaan-m/agentshield](https://github.com/affaan-m/agentshield) | Safety / isolation | TypeScript | MIT | 1,440 (▲28) | Rising | 63 | active | 1mo ago | 9mo | 7 |
| [ctxrs/ctx](https://github.com/ctxrs/ctx) | Session / token ops | Rust | Apache-2.0 | 1,189 (▲7) | Hot | 80 | very active | 2d ago | 9mo | 8 |
| [terryso/claude-auto-resume](https://github.com/terryso/claude-auto-resume) | Session / token ops | Shell | MIT | 821 (▲1) | Declining | 18 | stale | 6mo ago | 1.4y | 0 |
| [zamalali/langchain-code](https://github.com/zamalali/langchain-code) | Multi-CLI glue | Python | Apache-2.0 | 440 | Abandoned | 3 | stale | 1.0y ago | 1.3y | 0 |
| [aniketkarne/ClaudeNightsWatch](https://github.com/aniketkarne/ClaudeNightsWatch) | Session / token ops | Shell | MIT | 371 (▲1) | Declining | 42 | active | 1mo ago | 1.4y | 1 |
| [rsrohan99/tig](https://github.com/rsrohan99/tig) | Terminal coding agent | Python | — | 150 (▼1) | Abandoned | 5 | stale | 1.6y ago | 1.6y | 0 |
| [BA-CalderonMorales/terminal-jarvis](https://github.com/BA-CalderonMorales/terminal-jarvis) | Multi-CLI glue | Rust | MIT | 139 | Mature | 79 | very active | 1d ago | 1.3y | 1 |

## Advantages & disadvantages — agent by agent

The core comparison. Sourced from 2026 head-to-head reviews, Terminal-Bench results, and this dataset's health/lifecycle metrics (sources in Methodology).

| Agent | ★ Stars | Advantages | Disadvantages |
|---|---|---|---|
| **[claude-code](https://github.com/anthropics/claude-code)** | 156,795 | Best-in-class multi-file refactoring and reasoning depth (SWE-bench Pro 69.2%); asks clarifying questions; subagents/hooks/skills/MCP ecosystem is the deepest; 83.1% Terminal-Bench 2.1 with Fable 5 | Not open source (no OSS license in repo); Anthropic-models only; subscription/usage costs add up on heavy agentic use |
| **[opencode](https://github.com/anomalyco/opencode)** | 228,765 | Most-starred OSS agent, MIT license; provider-neutral — 75+ endpoints incl. Bedrock, OpenRouter, local Ollama; strong TUI; no vendor lock-in | Bring-your-own-model means quality varies with the model you pick; harness benchmark scores trail the vendor-tuned agents |
| **[codex](https://github.com/openai/codex)** | 136,230 | #1 named CLI agent on Terminal-Bench 2.1 (83.4% w/ GPT-5.5); fast single-binary Rust TUI; excels at intent-driven, pattern-following edits | OpenAI-models only; less transparent reasoning than Claude Code on big refactors; ecosystem (hooks/plugins) thinner |
| **[gemini-cli](https://github.com/google-gemini/gemini-cli)** | 109,023 | 1M-token context — holds a monorepo in one window; Apache-2.0; was the best free tier in the field | Deprecated June 2026: replaced by closed-source Antigravity CLI (agy), free tier cut from ~1,000 to ~20 requests/day — adopt with exit plan |
| **[goose](https://github.com/aaif-goose/goose)** | 56,895 | MCP-first and extensible beyond coding (install/execute/test); any-LLM incl. local; Block-backed, health 99 in this snapshot | Less specialized for pure code-editing loops; leaderboard results modest — team optimizes for failure-pattern fixes, not benchmark rank |
| **[aider](https://github.com/Aider-AI/aider)** | 50,228 | Best git discipline (clean auto-commits); precise file-scoped edits; provider-resilient; the safest 'pair programmer' rather than autonomous agent | Not autonomous — no system-wide orchestration; no MCP support; momentum slowing (52d since push, health 50 in snapshot) |
| **[crush](https://github.com/charmbracelet/crush)** | 29,172 | The most polished TUI aesthetics in the field; multi-model; Charm's Bubble Tea expertise shows in UX | Youngest of the majors — no public benchmark record; non-standard license; smaller ecosystem |
| **[qwen-code](https://github.com/QwenLM/qwen-code)** | 30,896 | Competitive Qwen3-Coder models; best-in-class on Chinese-language briefs and Alibaba-cloud ecosystem; Apache-2.0 | OAuth free tier discontinued 2026-04 — headline value now requires paid API; less strong outside the Qwen model family |
| **[copilot-cli](https://github.com/github/copilot-cli)** | 11,460 | Copilot agent with native GitHub integration (issues, PRs, Actions); familiar billing for Copilot shops | Premium-request pricing — one debugging session can eat a week's free allocation; value collapses off-GitHub (GitLab/Bitbucket) |
| **[pi](https://github.com/earendil-works/pi)** | 123,495 | Minimal, hackable toolkit (API + agent loop + TUI + CLI) — ideal base for building your own agent; MIT | A toolkit, not a turnkey product — you assemble the workflow yourself; smaller community than the big four |
| **[oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** | 71,080 | Token-efficiency-first harness (the 'tokenmaxxer' pick) layered on Codex/OpenCode for complex codebases | Depends on underlying agents; opinionated workflow; no OSS license declared |
| **[freebuff](https://github.com/CodebuffAI/freebuff)** | 14,281 | Simple terminal codegen with low setup friction; Apache-2.0 | Far smaller scope and community than the majors; fewer agentic features (no deep hooks/MCP story) |
| **[tig](https://github.com/rsrohan99/tig)** | 150 | Historic multi-LLM flexibility (Gemini, Groq, Deepseek) before the majors had it | Abandoned (437d since push, health 5) — do not adopt; kept here to show the category's churn |

## Task rankings — which TUI for which job

| Task | 🥇 First pick | 🥈 Second | 🥉 Third | Evidence / note |
|---|---|---|---|---|
| **Complex multi-file refactors in a large repo** | `claude-code` — reasoning depth + style consistency | `codex` — pattern-faithful edits, benchmark leader | `opencode` — same job, any model, MIT | Claude Code leads SWE-bench Pro (69.2%); Codex CLI leads Terminal-Bench 2.1 (83.4%). |
| **Best raw agentic benchmark ceiling** | `codex` — 83.4% Terminal-Bench 2.1 (GPT-5.5) | `claude-code` — 83.1% with Fable 5; 78.9% with Opus 4.8 | `goose` — solid but optimizes failure patterns over rank | Terminal-Bench 2.1 public leaderboard, June 2026 snapshot. |
| **Model freedom / local LLMs (no vendor lock-in)** | `opencode` — 75+ endpoints incl. Ollama | `goose` — any LLM, MCP-first | `crush` — multi-model with the nicest TUI | opencode is the most-starred OSS agent and the de-facto neutral choice. |
| **Monorepo-scale context in one window** | `gemini-cli` — 1M-token context — but see deprecation caveat | `claude-code` — subagents fan out instead of one big window | `opencode` — pair with a long-context model of your choice | Gemini's 1M context is unmatched, but the OSS CLI was frozen June 2026 (Antigravity). |
| **Careful pair-programming with git discipline** | `aider` — clean scoped diffs, auto-commits | `claude-code` — plan mode + hooks for guarded edits | `codex` — tight, reviewable single-file changes | Aider remains the reference for git-native, human-in-the-loop editing. |
| **Token- and cost-conscious agentic coding** | `oh-my-openagent` — built for tokenmaxxers | `opencode` — route to cheap/local models; add rtk proxy | `qwen-code` — cheap capable models — free tier gone though | Pair any pick with `rtk` (60–90% token cut) and `codeburn` (cost tracking). |
| **GitHub-centric team workflows** | `copilot-cli` — native issues/PR/Actions integration | `claude-code` — gh CLI + hooks cover most of it | `codex` — cloud-task handoff to the Codex platform | Copilot CLI's value is the GitHub integration; it collapses off-platform. |
| **Building your own agent / custom TUI** | `pi` — toolkit: LLM API + loop + TUI ready-made | `bubbletea` — the TUI framework everything's built on | `opencode` — fork-friendly MIT reference implementation | pi gives the agent loop; Bubble Tea gives the terminal UI substrate. |

## By category

### Terminal coding agent

_The TUIs themselves — full agentic loops (plan → edit → run → iterate) living in your terminal. Differ in model access, autonomy level, ecosystem depth, and openness._

- **[anomalyco/opencode](https://github.com/anomalyco/opencode)** · 228,765★ · TypeScript · Hot  
  The most-starred open-source coding agent — provider-neutral (75+ LLM endpoints incl. local), MIT.  
  <sub>topics: —</sub>
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 156,795★ · TypeScript · Mature  
  Anthropic's agentic coding TUI — deep codebase understanding, subagents, hooks, skills, MCP.  
  <sub>topics: —</sub>
- **[openai/codex](https://github.com/openai/codex)** · 136,230★ · Rust · Hot  
  OpenAI's lightweight Rust terminal agent — tops Terminal-Bench 2.1 among named CLI agents (83.4% with GPT-5.5).  
  <sub>topics: —</sub>
- **[earendil-works/pi](https://github.com/earendil-works/pi)** · 123,495★ · TypeScript · Hot  
  Minimal AI toolkit: unified LLM API + agent loop + TUI + coding CLI — the hackable build-your-own base.  
  <sub>topics: —</sub>
- **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** · 109,023★ · TypeScript · Hot  
  Gemini in the terminal with a 1M-token context window — but deprecated June 2026 in favor of closed-source Antigravity CLI.  
  <sub>topics: gemini, gemini-api, ai, ai-agents, cli, mcp-client, mcp-server</sub>
- **[code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** · 71,080★ · TypeScript · Rising  
  omo/lazycodex — token-obsessed harness layered on Codex/OpenCode for complex codebases.  
  <sub>topics: opencode, ai, anthropic, claude, claude-skills, cursor, gemini, ide</sub>
- **[aaif-goose/goose](https://github.com/aaif-goose/goose)** · 56,895★ · Rust · Mature  
  Block's extensible on-machine agent — MCP-first, goes beyond code (install, execute, test) with any LLM.  
  <sub>topics: mcp, acp, ai, ai-agents</sub>
- **[Aider-AI/aider](https://github.com/Aider-AI/aider)** · 50,228★ · Python · Declining  
  The original AI pair programmer in the terminal — git-native, focused file-level edits, not an autonomous agent.  
  <sub>topics: chatgpt, cli, command-line, gpt-4, openai, gpt-3, gpt-35-turbo, claude-3</sub>
- **[codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)** · 41,195★ · Rust · Hot  
  Rust agent engine and terminal client with provider choice, tools and approvals; large and fast-growing.  
  <sub>topics: cli, rust, tui, ai-agent, coding-agent, agent-orchestration, mcp, multi-agent</sub>
- **[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)** · 30,896★ · TypeScript · Hot  
  Qwen team's terminal agent — strong with Qwen3-Coder and Chinese-language briefs; OAuth free tier ended 2026-04.  
  <sub>topics: agentic, ai, ai-agent, ai-coding, cli, coding-agent, developer-tools, llm</sub>
- **[charmbracelet/crush](https://github.com/charmbracelet/crush)** · 29,172★ · Go · Hot  
  Charm's glamorous multi-model coding agent — the best-looking TUI in the field (Bubble Tea pedigree).  
  <sub>topics: agentic-ai, ai, llms, ravishing</sub>
- **[CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff)** · 14,281★ · TypeScript · Mature  
  Codegen from the terminal — smaller, focused alternative.  
  <sub>topics: —</sub>
- **[github/copilot-cli](https://github.com/github/copilot-cli)** · 11,460★ · Python · Classic  
  Copilot coding agent in the terminal — deep GitHub integration, premium-request pricing model.  
  <sub>topics: —</sub>
- **[rsrohan99/tig](https://github.com/rsrohan99/tig)** · 150★ · Python · Abandoned  
  Multi-LLM Claude-Code-alike — abandoned; listed as a cautionary tale of the category's churn.  
  <sub>topics: —</sub>

### Session / token ops

_The cost layer: agentic coding burns tokens, and these tools cut, track, and recycle them across sessions._

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** · 87,576★ · Rust · Hot  
  CLI proxy that cuts LLM token use 60–90% on common dev commands — single Rust binary.  
  <sub>topics: agentic-coding, ai-coding, anthropic, claude-code, cli, command-line-tool, cost-reduction, developer-tools</sub>
- **[mksglu/context-mode](https://github.com/mksglu/context-mode)** · 34,416★ · JavaScript · Rising  
  Context-window optimizer for coding agents — sandboxes tool output (~98% reduction), persists session memory.  
  <sub>topics: claude, claude-code, claude-code-plugins, mcp, skills, codex, copilot, opencode</sub>
- **[getagentseal/codeburn](https://github.com/getagentseal/codeburn)** · 11,893★ · TypeScript · Hot  
  Local token/cost tracker across 31 coding tools and agents, by model, project, and tool.  
  <sub>topics: ai-coding, claude-code, cli, codex, cost-tracking, developer-tools, observability, terminal-ui</sub>
- **[ctxrs/ctx](https://github.com/ctxrs/ctx)** · 1,189★ · Rust · Hot  
  Search the coding-agent history already on your machine — cross-agent transcript recall.  
  <sub>topics: agents, ai, claude, codex, coding-agents, cursor, developer-tools, rust</sub>
- **[terryso/claude-auto-resume](https://github.com/terryso/claude-auto-resume)** · 821★ · Shell · Declining  
  Shell utility that resumes Claude CLI tasks when usage limits lift.  
  <sub>topics: auto-resume, claude, claude-ai, claude-code, shell-script</sub>
- **[aniketkarne/ClaudeNightsWatch](https://github.com/aniketkarne/ClaudeNightsWatch)** · 371★ · Shell · Declining  
  Autonomous task runner that watches Claude usage windows and executes queued tasks.  
  <sub>topics: —</sub>

### Safety / isolation

_An agent driving your shell is a security surface — these guard commands, sandbox environments, and audit configurations._

- **[dagger/container-use](https://github.com/dagger/container-use)** · 4,105★ · Go · Declining  
  Containerized dev environments so multiple agents work safely and independently.  
  <sub>topics: —</sub>
- **[sheeki03/tirith](https://github.com/sheeki03/tirith)** · 2,785★ · Rust · Rising  
  Terminal security for devs and agents — intercepts homograph URLs, pipe-to-shell, ANSI injection, exfiltration.  
  <sub>topics: cli, devtools, homograph-attack, rust, security, shell, supply-chain-security, terminal</sub>
- **[kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net)** · 2,096★ · TypeScript · Rising  
  Hook that catches destructive git/filesystem commands before they execute (Codex, Claude Code, more).  
  <sub>topics: claude, claude-code, claude-code-plugin, security, codex, pi-extension, ai-agents, ai-safety</sub>
- **[affaan-m/agentshield](https://github.com/affaan-m/agentshield)** · 1,440★ · TypeScript · Rising  
  Scanner for agent configs, MCP servers, and tool permissions — CLI and CI modes.  
  <sub>topics: ai-agent, anthropic, claude-code, hackathon, mcp, opus, security</sub>

### Multi-CLI glue

_Most people end up running several agents; these switch between, combine, and provision them._

- **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)** · 156,625★ · Rust · Hot  
  All-in-one switcher for Claude Code, Codex, OpenCode, OpenClaw, Gemini CLI & Hermes Agent.  
  <sub>topics: ai-tools, claude-code, desktop-app, open-source, rust, tauri, codex, mcp</sub>
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** · 72,812★ · Python · Hot  
  Run claude code, codex or pi free in terminal/VSCode/discord — proxy-style access layer.  
  <sub>topics: —</sub>
- **[UfoMiao/zcf](https://github.com/UfoMiao/zcf)** · 6,065★ · TypeScript · Mature  
  Zero-Config Code Flow — one-command setup for Claude Code & Codex.  
  <sub>topics: ai, ccr, claude, claude-ai, claude-code, cli, nodejs, typescript</sub>
- **[zamalali/langchain-code](https://github.com/zamalali/langchain-code)** · 440★ · Python · Abandoned  
  LangCode — combines gemini-cli and claude-code capabilities under one CLI; now declining.  
  <sub>topics: —</sub>
- **[BA-CalderonMorales/terminal-jarvis](https://github.com/BA-CalderonMorales/terminal-jarvis)** · 139★ · Rust · Mature  
  A 'shovel' to install and try every terminal coding tool from one place.  
  <sub>topics: cli, terminal, context-engineering, meta-prompting, agents, ai, framework, governance</sub>

### TUI building blocks

_The frameworks the agents' interfaces are built from — relevant if you build rather than buy._

- **[charmbracelet/bubbletea](https://github.com/charmbracelet/bubbletea)** · 45,847★ · Go · Classic  
  The Go TUI framework — the substrate under crush and much of the modern terminal-app wave.  
  <sub>topics: cli, framework, elm-architecture, tui, functional, golang, go, hacktoberfest</sub>
- **[charmbracelet/bubbles](https://github.com/charmbracelet/bubbles)** · 9,075★ · Go · Classic  
  Ready-made TUI components for Bubble Tea.  
  <sub>topics: elm-architecture, tui, terminal, cli, hacktoberfest</sub>

## Spotlight: the harness matters more than the model

The June 2026 Terminal-Bench 2.1 snapshot makes one thing unambiguous — the agent loop wrapping the model is worth real percentage points:

- Same GPT-5.5 model: **83.4%** inside Codex CLI vs **76.4%** inside the generic Terminus 2 harness — a 7-point gap that is pure harness engineering.
- Claude Code posts **83.1%** with Fable 5 and **78.9%** with Opus 4.8 — the model swap moves it more than most competitor-harness swaps do.
- Consequence for choosing: pick the *harness* whose ecosystem you can invest in (hooks, skills, MCP servers, safety nets), because vendor-tuned harness+model pairs beat mix-and-match on agentic work — while `opencode`/`goose` hedge the platform risk the Gemini CLI deprecation just demonstrated.

## Graph analysis — how they relate

**Community clustering.** These 31 tools span **15 of the graph's 45 communities**.

- **Community 21** (6): `earendil-works/pi`, `CodebuffAI/freebuff`, `mksglu/context-mode`, `sheeki03/tirith`, `kenryu42/cc-safety-net`, `BA-CalderonMorales/terminal-jarvis`
- **Community 24** (3): `google-gemini/gemini-cli`, `github/copilot-cli`, `UfoMiao/zcf`
- **Community 5** (3): `charmbracelet/crush`, `charmbracelet/bubbletea`, `charmbracelet/bubbles`
- **Community 13** (3): `rtk-ai/rtk`, `getagentseal/codeburn`, `Alishahryar1/free-claude-code`
- **Community 0** (3): `ctxrs/ctx`, `terryso/claude-auto-resume`, `affaan-m/agentshield`
- **Community 22** (2): `Aider-AI/aider`, `code-yeongyu/oh-my-openagent`
- **Community 33** (2): `QwenLM/qwen-code`, `codewhale-hq/Codewhale`
- **Community 7** (2): `aniketkarne/ClaudeNightsWatch`, `farion1231/cc-switch`

**Centrality (PageRank in the full 2,925-repo graph)** — most 'hub-like' terminal-coding tools in your ecosystem:

- `CodebuffAI/freebuff` — PageRank 0.0025
- `charmbracelet/bubbles` — PageRank 0.0008
- `kenryu42/cc-safety-net` — PageRank 0.0008
- `UfoMiao/zcf` — PageRank 0.0008
- `QwenLM/qwen-code` — PageRank 0.0007
- `mksglu/context-mode` — PageRank 0.0007
- `sheeki03/tirith` — PageRank 0.0007
- `charmbracelet/bubbletea` — PageRank 0.0006
- `anthropics/claude-code` — PageRank 0.0006
- `affaan-m/agentshield` — PageRank 0.0005

**Direct links between these tools** (top similarity edges where both endpoints are in this report):

- `charmbracelet/bubbles` ⇄ `charmbracelet/bubbletea` (w=1.112) — topics: elm-architecture, tui, cli, hacktoberfest; authors: janearc, andrinoff, AdamMagued
- `kenryu42/cc-safety-net` ⇄ `CodebuffAI/freebuff` (w=1.050) — authors: github-actions[bot]
- `mksglu/context-mode` ⇄ `CodebuffAI/freebuff` (w=1.000) — authors: github-actions[bot]
- `sheeki03/tirith` ⇄ `CodebuffAI/freebuff` (w=1.000) — authors: github-actions[bot]
- `codewhale-hq/Codewhale` ⇄ `QwenLM/qwen-code` (w=0.364) — topics: cli, ai-agent, coding-agent, mcp
- `codewhale-hq/Codewhale` ⇄ `rtk-ai/rtk` (w=0.290) — topics: cli, rust, open-source, developer-tools
- `earendil-works/pi` ⇄ `CodebuffAI/freebuff` (w=0.217) — authors: github-actions[bot]
- `sheeki03/tirith` ⇄ `BA-CalderonMorales/terminal-jarvis` (w=0.170) — topics: cli, security, terminal

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle + activity before adopting.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| google-gemini/gemini-cli | 95 | Hot | very active | 4 | 16% | 695 |
| aaif-goose/goose | 94 | Mature | very active | 4 | 20% | 166 |
| earendil-works/pi | 90 | Hot | very active | 3 | 38% | 279 |
| charmbracelet/bubbles | 90 | Classic | very active | 10 | 13% | 39 |
| anomalyco/opencode | 89 | Hot | very active | 3 | 26% | 903 |
| charmbracelet/bubbletea | 86 | Classic | very active | 4 | 24% | 84 |
| farion1231/cc-switch | 84 | Hot | very active | 2 | 27% | 96 |
| openai/codex | 83 | Hot | very active | 3 | 24% | 1313 |
| QwenLM/qwen-code | 82 | Hot | very active | 2 | 46% | 856 |
| codewhale-hq/Codewhale | 80 | Hot | very active | 1 | 77% | 141 |
| mksglu/context-mode | 80 | Rising | very active | 1 | 79% | 244 |
| ctxrs/ctx | 80 | Hot | very active | 1 | 87% | 77 |
| kenryu42/cc-safety-net | 80 | Rising | very active | 1 | 86% | 103 |
| anthropics/claude-code | 79 | Mature | very active | 1 | 99% | 269 |
| getagentseal/codeburn | 79 | Hot | very active | 1 | 88% | 84 |
| sheeki03/tirith | 79 | Rising | very active | 1 | 62% | 91 |
| BA-CalderonMorales/terminal-jarvis | 79 | Mature | very active | 1 | 100% | 58 |
| charmbracelet/crush | 78 | Hot | very active | 1 | 64% | 200 |
| code-yeongyu/oh-my-openagent | 77 | Rising | very active | 1 | 86% | 378 |
| Alishahryar1/free-claude-code | 77 | Hot | very active | 1 | 87% | 153 |
| UfoMiao/zcf | 77 | Mature | very active | 1 | 64% | 96 |
| rtk-ai/rtk | 75 | Hot | very active | 1 | 51% | 507 |
| github/copilot-cli | 71 | Classic | very active | 1 | 57% | 562 |
| CodebuffAI/freebuff | 63 | Mature | very active | 1 | 100% | 9 |
| affaan-m/agentshield | 63 | Rising | active | 1 | 79% | 6 |
| aniketkarne/ClaudeNightsWatch | 42 | Declining | active | 1 | 100% | 0 |
| dagger/container-use | 34 | Declining | active | 0 | 0% | 14 |
| Aider-AI/aider | 21 | Declining | stale | 0 | 0% | 93 |
| terryso/claude-auto-resume | 18 | Declining | stale | 0 | 0% | 0 |
| rsrohan99/tig | 5 | Abandoned | stale | 0 | 0% | 0 |
| zamalali/langchain-code | 3 | Abandoned | stale | 0 | 0% | 0 |

Watch items: `gemini-cli` is deprecated upstream (Antigravity CLI replaced it, June 2026) despite healthy-looking repo metrics; `aider` is slowing (52d since push in this snapshot); `tig` and `langchain-code` are effectively dead; `claude-auto-resume` and `ClaudeNightsWatch` are declining single-maintainer shell utilities.

## Adjacent (deliberately not listed as terminal coding agents)

- **cline/cline** (71,845★) — primarily an IDE extension (CLI mode is secondary) — not a TUI-first agent
- **continuedev/continue** (36,543★) — same: IDE-first open-source coding agent
- **OpenHands/OpenHands** (94,149★) — AI-dev *platform* (web/headless), not a terminal UI
- **langchain-ai/open-swe** (11,254★) — asynchronous *cloud* coding agent — no terminal in the loop
- **NousResearch/hermes-agent** (265,607★) — covered in the *hermes-vs-openclaw* and *agent-harnesses* reports
- **affaan-m/ECC** (309,385★) — harness/config framework on top of coding TUIs — see *claude-code-setups*
- **SuperClaude-Org/SuperClaude_Framework** (23,953★) — config framework — see *claude-code-setups* (retired upstream 2026-07)
- **BloopAI/vibe-kanban** (28,793★) — GUI orchestrator *over* coding agents, not a TUI
- **iOfficeAI/AionUi** (34,455★) — GUI wrapper over the CLIs, not a TUI
- **winfunc/opcode** (22,462★) — GUI toolkit for Claude Code
- **jesseduffield/lazygit** (84,032★) — beloved git TUI, but no AI

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json` for all repo metrics and graph structure. No API calls at generation time; fully reproducible.
- **Selection**: keyword scan (terminal / tui / cli / coding agent / pair programming) + manual curation. IDE-first agents, GUI wrappers, cloud agents, and config frameworks were routed to adjacent reports (see above).
- **Pros/cons & task rankings** cite external evidence gathered 2026-07: the [Terminal-Bench](https://www.tbench.ai/) 2.1 public leaderboard (June 2026 snapshot: Codex CLI 83.4% w/ GPT-5.5, Claude Code 83.1% w/ Fable 5 / 78.9% w/ Opus 4.8; same GPT-5.5 at 76.4% in the Terminus 2 harness), 2026 head-to-head comparisons ([tembo.io](https://www.tembo.io/blog/coding-cli-tools-comparison), [morphllm.com](https://www.morphllm.com/ai-coding-agent), [kilo.ai](https://kilo.ai/articles/best-cli-coding-agents)), and vendor announcements (Gemini CLI → Antigravity deprecation, qwen-code free-tier retirement). Benchmark numbers are point-in-time — treat rankings as defaults, not verdicts.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.
- Re-run after a fresh `classified.json` to refresh stars/activity; frozen benchmark citations need manual review as new models/agents ship.

<sub>Tools covered: 31 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
