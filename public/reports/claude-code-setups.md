# Claude Code Superpowers — Setup Strategies from Your Stars

> Derived from **kaiser-data**'s 2,728 starred repos (snapshot `2026-11-09T14:44:53.318Z`), cross-referenced with the repo-similarity graph (2,728 nodes / 9,126 edges, 41 communities).
>
> Generated 2026-11-09 by `scripts/reports/claude_code_setups.py` (regenerate any time — no API cost).

![Top tools by stars](assets/claude-code-setups-top-tools.svg)

![Tools per category](assets/claude-code-setups-categories.svg)


## The big idea

A modern Claude Code setup is **layered**, and the 2026 superpower is *on-demand context*, not a big always-loaded instruction blob. A harness runs the loop; **skills** and config shape behavior only when triggered; **memory** persists context across sessions; **token-savers** compress what the model sees; **code-graph/retrieval** feeds it the right code; **MCP** adds reach; **observability** measures it; **local runtimes** cut cost. Your stars already contain a best-in-class tool for every one of those layers — this report assembles them into three ready-to-run strategies.

## Three setup strategies (built from your stars)

| Layer | 🟢 Token-saver | 🟡 Balanced (recommended) | 🔴 Max-performance |
|---|---|---|---|
| **Harness** | `claude-code` (Sonnet) | `claude-code` (Sonnet→Opus on hard tasks) | `claude-code` (Opus) + `cc-switch` to model-shop |
| **Skills** | `caveman` (trim) + 1–2 essentials | `obra/superpowers` + `anthropics/skills` | `superpowers` + `wshobson/agents` + vertical packs |
| **Config** | one lean `CLAUDE.md` (karpathy-skills) | `claude-code-templates` (configure+monitor) | `gstack` / `centminmod` full kit |
| **Memory** | off / minimal | `claude-mem` (you run this) | `claude-mem` + `mem0` backend |
| **Token-saver** | `rtk` proxy + `semble` search + `headroom` | `semble` for code search; `codeburn` to watch spend | `codeburn` dashboard; spend where it pays |
| **Code-graph** | `graphify` (AST, no API) | `graphify` / `codegraph` | `codegraph` + `codebase-memory-mcp` |
| **MCP** | none global | `context7` (live docs) | `context7` + curated from `awesome-mcp-servers` |
| **Observability** | skip | `langfuse` (you wire this) | `langfuse` + `opik`/`phoenix` evals |
| **Local runtime** | `ollama` for grunt work | `litellm` gateway, escalate to cloud | cloud frontier; `litellm` for fallback |

**One-line verdict:** the *token-saver* and *max-performance* columns share the same backbone — a lean harness, on-demand skills, and a clean context. They differ mainly in *model tier* and *how many measurement/eval layers* you bolt on. The expensive mistake is the same in both: front-loading instructions the model only half-reads.

## Executive summary

- **60 Claude-Code 'superpower' projects** in your stars (**5,443,783★** combined), spanning 9 setup layers:
  - **Harness / coding agent** (13): `openclaw`, `hermes-agent`, `opencode`, `claude-code`, `codex`, `pi`, `gemini-cli`, `deer-flow`, `ruflo`, `learn-claude-code`, `cline`, `goose`, `oh-my-claudecode`
  - **Skills framework** (7): `superpowers`, `ECC`, `skills`, `awesome-claude-skills`, `scientific-agent-skills`, `agents`, `claude-skills`
  - **Config / setup kit** (11): `andrej-karpathy-skills`, `cc-switch`, `system-prompts-and-models-of-ai-tools`, `gstack`, `claude-code-best-practice`, `awesome-claude-code`, `claude-cookbooks`, `claude-howto`, `claude-code-templates`, `claude-code-system-prompts`, `my-claude-code-setup`
  - **Memory / context** (6): `claude-mem`, `mem0`, `mempalace`, `memvid`, `engram`, `basic-memory`
  - **Token-saver / compression** (7): `caveman`, `rtk`, `headroom`, `oh-my-openagent`, `toon`, `codeburn`, `semble`
  - **Code-graph / retrieval** (5): `graphify`, `Understand-Anything`, `codegraph`, `codebase-memory-mcp`, `GitNexus`
  - **MCP ecosystem** (3): `awesome-mcp-servers`, `servers`, `context7`
  - **Observability / evals** (6): `langfuse`, `opik`, `phoenix`, `openllmetry`, `agent-flow`, `Irrlicht`
  - **Local runtime** (2): `ollama`, `litellm`
- **Skills are the leverage point.** `obra/superpowers` (the most-starred repo in this whole set) and `anthropics/skills` replace most always-on `CLAUDE.md` prose with on-demand expertise — cheaper *and* sharper.
- **Token-saving is now a stack, not a setting.** A proxy (`rtk`), a leaner code-search (`semble`, ~98% fewer tokens than reading files), output compression (`headroom`), and a spend dashboard (`codeburn`) compose into 60–90% reductions on real dev loops.
- **You already run three layers well** — `claude-mem` (memory), `graphify` (code-graph), and `langfuse` (observability) — plus `context7` over MCP. The gap is a **skills framework** and a deliberate **model-tier policy**.

## The setup, layer by layer

| Layer | What it buys you | Your starred picks |
|---|---|---|
| **Harness / coding agent** | The agent loop itself | `openclaw`, `hermes-agent`, `opencode`, `claude-code`, `codex`, `pi` |
| **Skills framework** | On-demand expertise (the modern superpower) | `superpowers`, `ECC`, `skills`, `awesome-claude-skills`, `scientific-agent-skills`, `agents` |
| **Config / setup kit** | Shape behavior up front, cheaply | `andrej-karpathy-skills`, `cc-switch`, `system-prompts-and-models-of-ai-tools`, `gstack`, `claude-code-best-practice`, `awesome-claude-code` |
| **Memory / context** | Persist context across sessions | `claude-mem`, `mem0`, `mempalace`, `memvid`, `engram`, `basic-memory` |
| **Token-saver / compression** | Shrink what the model has to read | `caveman`, `rtk`, `headroom`, `oh-my-openagent`, `toon`, `codeburn` |
| **Code-graph / retrieval** | Feed the *right* code, not all of it | `graphify`, `Understand-Anything`, `codegraph`, `codebase-memory-mcp`, `GitNexus` |
| **MCP ecosystem** | External reach (docs, tools, data) | `awesome-mcp-servers`, `servers`, `context7` |
| **Observability / evals** | Measure cost & quality | `langfuse`, `opik`, `phoenix`, `openllmetry`, `agent-flow`, `Irrlicht` |
| **Local runtime** | Cut cost / go offline | `ollama`, `litellm` |

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Layer | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Harness / coding agent | TypeScript | MIT | 394,230 (▲521) | Hot | 84 | very active | 0d ago | 11mo | 17 |
| [obra/superpowers](https://github.com/obra/superpowers) | Skills framework | Shell | MIT | 314,888 (▲3,897) | Mature | 64 | active | 6d ago | 1.1y | 1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | Skills framework | JavaScript | MIT | 299,980 (▲4,744) | Hot | 79 | very active | 0d ago | 9mo | 4 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Harness / coding agent | Python | MIT | 261,966 (▲2,276) | Hot | 85 | very active | 0d ago | 1.3y | 20 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | Config / setup kit | — | — | 231,187 (▲2,841) | Declining | 18 | stale | 6mo ago | 9mo | 0 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | Harness / coding agent | TypeScript | MIT | 225,675 (▲1,671) | Hot | 94 | very active | 0d ago | 1.5y | 15 |
| [anthropics/skills](https://github.com/anthropics/skills) | Skills framework | Python | — | 190,342 (▲3,726) | Mature | 50 | active | 3d ago | 1.1y | 6 |
| [ollama/ollama](https://github.com/ollama/ollama) | Local runtime | Go | MIT | 186,456 (▲795) | Classic | 83 | very active | 2d ago | 3.4y | 13 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Harness / coding agent | TypeScript | — | 155,079 (▲822) | Hot | 78 | very active | 3d ago | 1.7y | 8 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | Config / setup kit | Rust | MIT | 153,013 (▲1,841) | Hot | 79 | very active | 0d ago | 1.3y | 21 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Code-graph / retrieval | Python | Apache-2.0 | 144,848 (▲3,948) | Hot | 87 | very active | 2d ago | 7mo | 24 |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Config / setup kit | — | GPL-3.0 | 144,581 (▲162) | Declining | 41 | active | 28d ago | 1.7y | 2 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Config / setup kit | TypeScript | MIT | 140,897 (▲2,258) | Rising | 76 | very active | 0d ago | 8mo | 1 |
| [openai/codex](https://github.com/openai/codex) | Harness / coding agent | Rust | Apache-2.0 | 134,247 (▲1,393) | Hot | 93 | very active | 0d ago | 1.6y | 31 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | Harness / coding agent | TypeScript | MIT | 121,019 (▲1,483) | Hot | 80 | very active | 0d ago | 1.3y | 7 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Token-saver / compression | Go | Apache-2.0 | 118,531 (▲1,675) | Hot | 79 | very active | 1d ago | 7mo | 17 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Memory / context | TypeScript | Apache-2.0 | 115,227 (▲4,919) | Hot | 90 | very active | 0d ago | 1.2y | 33 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Harness / coding agent | TypeScript | Apache-2.0 | 108,803 (▲133) | Hot | 100 | very active | 1d ago | 1.6y | 15 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP ecosystem | — | MIT | 97,519 (▲325) | Hot | 60 | very active | 3d ago | 1.9y | 4 |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | MCP ecosystem | TypeScript | NOASSERTION | 91,888 (▲144) | Mature | 80 | very active | 4d ago | 2.0y | 2 |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | Code-graph / retrieval | TypeScript | MIT | 91,707 (▲1,938) | Hot | 74 | very active | 2d ago | 8mo | 13 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | Token-saver / compression | Rust | Apache-2.0 | 85,981 (▲681) | Hot | 75 | very active | 0d ago | 9mo | 13 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Harness / coding agent | Python | MIT | 85,183 (▲304) | Hot | 89 | very active | 0d ago | 1.5y | 56 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Harness / coding agent | TypeScript | MIT | 81,326 (▲725) | Hot | 78 | very active | 0d ago | 1.4y | 3 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Harness / coding agent | Python | MIT | 80,126 (▲373) | Hot | 58 | very active | 13d ago | 1.4y | 22 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Token-saver / compression | Python | Apache-2.0 | 79,211 (▲580) | Hot | 99 | very active | 0d ago | 10mo | 49 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Skills framework | Python | — | 79,113 (▲546) | Declining | 26 | active | 1mo ago | 1.1y | 0 |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Code-graph / retrieval | TypeScript | MIT | 77,167 (▲947) | Hot | 77 | very active | 8d ago | 9mo | 8 |
| [cline/cline](https://github.com/cline/cline) | Harness / coding agent | TypeScript | Apache-2.0 | 71,491 (▲283) | Mature | 83 | very active | 0d ago | 2.3y | 17 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | Token-saver / compression | TypeScript | NOASSERTION | 70,798 (▲186) | Rising | 77 | very active | 0d ago | 11mo | 1 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | Config / setup kit | HTML | MIT | 68,875 (▲417) | Mature | 64 | very active | 0d ago | 1.0y | 1 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Memory / context | Python | Apache-2.0 | 68,688 (▲411) | Classic | 87 | very active | 3d ago | 3.4y | 29 |
| [upstash/context7](https://github.com/upstash/context7) | MCP ecosystem | TypeScript | MIT | 64,415 (▲338) | Hot | 85 | very active | 0d ago | 1.6y | 11 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Local runtime | Python | NOASSERTION | 62,968 (▲417) | Classic | 94 | very active | 0d ago | 3.3y | 30 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Memory / context | Python | MIT | 60,487 (▲246) | Hot | 76 | very active | 0d ago | 7mo | 24 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Config / setup kit | Python | NOASSERTION | 57,592 (▲500) | Mature | 61 | very active | 0d ago | 1.6y | 1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Skills framework | Python | MIT | 56,584 (▲784) | Hot | 77 | very active | 0d ago | 1.1y | 14 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | Harness / coding agent | Rust | Apache-2.0 | 56,394 (▲266) | Mature | 99 | very active | 0d ago | 2.2y | 37 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | Config / setup kit | Jupyter Notebook | MIT | 54,461 (▲362) | Classic | 59 | very active | 5d ago | 3.2y | 8 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Code-graph / retrieval | C | MIT | 48,401 (▲409) | Hot | 76 | very active | 2d ago | 8mo | 4 |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | Code-graph / retrieval | TypeScript | NOASSERTION | 48,363 (▲160) | Hot | 78 | very active | 0d ago | 1.3y | 15 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | Config / setup kit | Python | MIT | 46,788 (▲383) | Hot | 69 | very active | 6d ago | 1.0y | 7 |
| [wshobson/agents](https://github.com/wshobson/agents) | Skills framework | Python | MIT | 42,350 (▲253) | Hot | 64 | very active | 1d ago | 1.3y | 22 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Harness / coding agent | TypeScript | MIT | 40,710 (▲197) | Hot | 80 | very active | 0d ago | 10mo | 8 |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | Observability / evals | TypeScript | NOASSERTION | 37,199 (▲314) | Classic | 89 | very active | 0d ago | 3.5y | 19 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | Config / setup kit | Python | MIT | 33,232 (▲170) | Hot | 73 | very active | 0d ago | 1.4y | 25 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Skills framework | Python | MIT | 29,515 (▲361) | Hot | 80 | very active | 4d ago | 1.1y | 4 |
| [toon-format/toon](https://github.com/toon-format/toon) | Token-saver / compression | TypeScript | MIT | 25,622 (▲24) | Hot | 73 | very active | 8d ago | 1.0y | 3 |
| [comet-ml/opik](https://github.com/comet-ml/opik) | Observability / evals | Python | Apache-2.0 | 23,282 (▲163) | Classic | 99 | very active | 0d ago | 3.5y | 23 |
| [memvid/memvid](https://github.com/memvid/memvid) | Memory / context | Rust | Apache-2.0 | 17,390 (▲38) | Declining | 44 | slowing | 3mo ago | 1.5y | 0 |
| [Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts) | Config / setup kit | JavaScript | MIT | 13,112 (▲42) | Rising | 77 | very active | 4d ago | 11mo | 1 |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | Observability / evals | Python | NOASSERTION | 12,215 (▲112) | Classic | 84 | very active | 0d ago | 4.0y | 20 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | Token-saver / compression | TypeScript | MIT | 11,737 (▲77) | Hot | 79 | very active | 1d ago | 7mo | 8 |
| [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram) | Memory / context | Go | MIT | 7,871 (▲130) | Hot | 79 | very active | 0d ago | 8mo | 7 |
| [traceloop/openllmetry](https://github.com/traceloop/openllmetry) | Observability / evals | Python | Apache-2.0 | 7,527 (▲9) | Classic | 72 | very active | 0d ago | 3.2y | 9 |
| [MinishLab/semble](https://github.com/MinishLab/semble) | Token-saver / compression | Python | MIT | 6,385 (▲39) | Hot | 73 | very active | 1d ago | 7mo | 4 |
| [basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory) | Memory / context | Python | AGPL-3.0 | 4,541 (▲92) | Hot | 79 | very active | 1d ago | 1.9y | 3 |
| [centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup) | Config / setup kit | Python | MIT | 2,723 (▲14) | Mature | 46 | active | 1mo ago | 1.3y | 1 |
| [patoles/agent-flow](https://github.com/patoles/agent-flow) | Observability / evals | TypeScript | Apache-2.0 | 1,776 (▲17) | Rising | 62 | active | 11d ago | 7mo | 4 |
| [ingo-eichhorst/Irrlicht](https://github.com/ingo-eichhorst/Irrlicht) | Observability / evals | Go | MIT | 101 | Hot | 80 | very active | 1d ago | 1.2y | 6 |

## By layer

### Harness / coding agent

_The loop that reads, plans, edits, and runs. Pick one as your daily driver; keep a second installed to diff behavior and model-shop._

- **[openclaw/openclaw](https://github.com/openclaw/openclaw)** · 394,230★ · TypeScript · Hot  
  Cross-platform personal-assistant harness — an 'any OS, any platform' agent runtime.  
  <sub>topics: ai, assistant, own-your-data, personal, crustacean, molty, openclaw</sub>
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** · 261,966★ · Python · Hot  
  Long-lived 'agent that grows with you' harness — persistent, personalized agent loop.  
  <sub>topics: ai, ai-agent, ai-agents, llm, anthropic, chatgpt, claude, claude-code</sub>
- **[anomalyco/opencode](https://github.com/anomalyco/opencode)** · 225,675★ · TypeScript · Hot  
  Open-source terminal coding agent — a provider-agnostic alternative harness.  
  <sub>topics: —</sub>
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 155,079★ · TypeScript · Hot  
  Claude Code itself — the agentic CLI that lives in your terminal; the baseline every setup here extends.  
  <sub>topics: —</sub>
- **[openai/codex](https://github.com/openai/codex)** · 134,247★ · Rust · Hot  
  OpenAI's lightweight terminal coding agent — useful as a second harness to diff behavior against Claude Code.  
  <sub>topics: —</sub>
- **[earendil-works/pi](https://github.com/earendil-works/pi)** · 121,019★ · TypeScript · Hot  
  Unified LLM-API + agent-loop + TUI toolkit — a kit for rolling your own coding agent.  
  <sub>topics: —</sub>
- **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** · 108,803★ · TypeScript · Hot  
  Gemini's open-source terminal agent — the third major CLI harness; handy for model-shopping.  
  <sub>topics: gemini, gemini-api, ai, ai-agents, cli, mcp-client, mcp-server</sub>
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,183★ · Python · Hot  
  Long-horizon SuperAgent harness that researches, codes, and writes — multi-step autonomy.  
  <sub>topics: agent, agentic, agentic-framework, agentic-workflow, ai, ai-agents, deep-research, langchain</sub>
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** · 81,326★ · TypeScript · Hot  
  Agent meta-harness for Claude — deploys multi-agent swarms with coordination.  
  <sub>topics: agent-memory, agent-orchestration, agentic-ai, agentic-workflow, ai-agents, autonomous-agents, claude, claude-code</sub>
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** · 80,126★ · Python · Hot  
  Builds a nano Claude Code-like harness from zero — the best teaching walkthrough of how the loop works.  
  <sub>topics: agent, claude-code, teaching, agent-development, ai-agent, claude, educational, llm</sub>
- **[cline/cline](https://github.com/cline/cline)** · 71,491★ · TypeScript · Mature  
  Autonomous coding agent as SDK / IDE extension / CLI — strong for in-editor agentic workflows.  
  <sub>topics: —</sub>
- **[aaif-goose/goose](https://github.com/aaif-goose/goose)** · 56,394★ · Rust · Mature  
  Extensible open agent that installs and runs tools, not just suggestions — MCP-native.  
  <sub>topics: mcp, acp, ai, ai-agents</sub>
- **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** · 40,710★ · TypeScript · Hot  
  Teams-first multi-agent orchestration layer for Claude Code.  
  <sub>topics: agentic-coding, ai-agents, claude, claude-code, oh-my-opencode, opencode, vibe-coding, automation</sub>

### Skills framework

_The biggest 2026 upgrade. Skills load only when triggered, so they add capability without taxing every session — the opposite of a big always-on CLAUDE.md._

- **[obra/superpowers](https://github.com/obra/superpowers)** · 314,888★ · Shell · Mature  
  Agentic skills framework + dev methodology — the headline 'give your agent superpowers' skill collection.  
  <sub>topics: ai, brainstorming, coding, obra, sdlc, skills, superpowers, subagent-driven-development</sub>
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** · 299,980★ · JavaScript · Hot  
  Agent-harness performance system bundling skills, instincts, and memory into one optimization layer.  
  <sub>topics: ai-agents, anthropic, claude, claude-code, developer-tools, llm, mcp, productivity</sub>
- **[anthropics/skills](https://github.com/anthropics/skills)** · 190,342★ · Python · Mature  
  Anthropic's official Agent Skills repo — canonical examples of the skills format.  
  <sub>topics: agent-skills</sub>
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** · 79,113★ · Python · Declining  
  Curated index of Claude Skills + tooling — the discovery hub for what's worth installing.  
  <sub>topics: claude, claude-code, agent-skills, ai-agents, antigravity, automation, codex, composio</sub>
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** · 56,584★ · Python · Hot  
  Domain skill pack that turns an agent into a research scientist — example of vertical skills.  
  <sub>topics: ai-scientist, bioinformatics, chemoinformatics, claude, claude-skills, claudecode, clinical-research, computational-biology</sub>
- **[wshobson/agents](https://github.com/wshobson/agents)** · 42,350★ · Python · Hot  
  Multi-harness agentic plugin marketplace (Claude Code, Codex, Cursor) — subagents & commands.  
  <sub>topics: anthropic, agent-skills, agentic-ai, ai-agents, cursor, cursor-rules, mcp, multi-agent</sub>
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** · 29,515★ · Python · Hot  
  Very large skill/agent/command collection (380+ skills) — browse it for patterns, don't install it wholesale.  
  <sub>topics: agentic-ai, anthropic-claude, claude-ai, claude-code, claude-skills, claude-code-skills, ai-coding-agent, claude-code-plugins</sub>

### Config / setup kit

_Turnkey CLAUDE.md / command / hook bundles. Steal a good one, then trim to what you actually use — bloat here is paid on every prompt._

- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** · 231,187★ · — · Declining  
  A single CLAUDE.md derived from Karpathy's habits — the 'one good config file' approach.  
  <sub>topics: —</sub>
- **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)** · 153,013★ · Rust · Hot  
  Desktop all-in-one for managing Claude Code/Codex/OpenClaw — swap providers & configs fast.  
  <sub>topics: ai-tools, claude-code, desktop-app, open-source, rust, tauri, codex, mcp</sub>
- **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)** · 144,581★ · — · Declining  
  Leaked/collected system prompts of major AI coding tools — prompt-engineering reference.  
  <sub>topics: ai, cursor, lovable, system-prompts, v0, cursorai, devin, replit</sub>
- **[garrytan/gstack](https://github.com/garrytan/gstack)** · 140,897★ · TypeScript · Rising  
  Garry Tan's exact Claude Code setup — 23 opinionated tools as a turnkey starting point.  
  <sub>topics: —</sub>
- **[shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)** · 68,875★ · HTML · Mature  
  Best-practices collection: vibe-coding → agentic engineering.  
  <sub>topics: claude-ai, claude-code, best-practices, claude, claude-code-best-practices, agentic-engineering, anthropic, claude-code-agents</sub>
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** · 57,592★ · Python · Mature  
  The awesome-list for Claude Code skills, hooks, slash-commands, and orchestrators.  
  <sub>topics: anthropic, anthropic-claude, awesome, awesome-list, awesome-lists, awesome-resources, claude, claude-code</sub>
- **[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)** · 54,461★ · Jupyter Notebook · Classic  
  Official recipes/notebooks for effective Claude usage patterns.  
  <sub>topics: —</sub>
- **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** · 46,788★ · Python · Hot  
  Visual, example-driven guide to Claude Code from basics to advanced — the learning path.  
  <sub>topics: claude-code, guide, tutorial</sub>
- **[davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)** · 33,232★ · Python · Hot  
  CLI to configure AND monitor Claude Code — installs commands/agents/hooks and watches usage.  
  <sub>topics: anthropic, anthropic-claude, claude, claude-code, agent-skills, ai-agents, claude-code-plugins, cli</sub>
- **[Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** · 13,112★ · JavaScript · Rising  
  Claude Code's full system prompt + 27 builtin tool descriptions — know what you're configuring.  
  <sub>topics: claude-code, claude-code-system-prompts, system-prompts</sub>
- **[centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup)** · 2,723★ · Python · Mature  
  A shared starter CLAUDE.md + memory-bank configuration template you can fork.  
  <sub>topics: claude, claude-ai, claude-code, subagents, claudecode-config, claudecode-hooks, claudecode-subagents</sub>

### Memory / context

_Persist decisions and context across sessions so the agent doesn't re-derive what it already learned. The backend is swappable._

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** · 115,227★ · TypeScript · Hot  
  Persistent context across sessions for every agent — captures work and re-injects it (you run this).  
  <sub>topics: ai, ai-agents, ai-memory, anthropic, artificial-intelligence, claude, claude-agent-sdk, claude-agents</sub>
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** · 68,688★ · Python · Classic  
  Universal memory layer for AI agents — the most-adopted general memory backend.  
  <sub>topics: ai, chatgpt, llm, python, rag, long-term-memory, memory, memory-management</sub>
- **[MemPalace/mempalace](https://github.com/MemPalace/mempalace)** · 60,487★ · Python · Hot  
  Best-benchmarked open-source AI memory system — drop-in long-term memory.  
  <sub>topics: ai, chromadb, llm, mcp, memory, python</sub>
- **[memvid/memvid](https://github.com/memvid/memvid)** · 17,390★ · Rust · Declining  
  Memory layer that replaces RAG pipelines with a compact server — novel storage approach.  
  <sub>topics: ai, context, embedded, faiss, knowledge-base, knowledge-graph, llm, machine-learning</sub>
- **[Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)** · 7,871★ · Go · Hot  
  Agent-agnostic Go binary giving coding agents persistent memory.  
  <sub>topics: gentle-shell-package</sub>
- **[basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory)** · 4,541★ · Python · Hot  
  Local Markdown knowledge base exposed over MCP — the agent reads and writes plain notes you can also edit by hand.  
  <sub>topics: ai, claude, llm, mcp, open-source, python, obsidian, obsidian-md</sub>

### Token-saver / compression

_Measure first (`codeburn`), then compress: leaner code search, output trimming, and a front proxy stack to 60–90% on common loops._

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** · 118,531★ · Go · Hot  
  'Why use many token when few token do trick' — a Claude Code skill that aggressively trims tokens.  
  <sub>topics: ai, anthropic, caveman, claude, claude-code, llm, meme, prompt-engineering</sub>
- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** · 85,981★ · Rust · Hot  
  CLI proxy that cuts LLM token consumption 60–90% on common dev commands — sits in front of the agent.  
  <sub>topics: agentic-coding, ai-coding, anthropic, claude-code, cli, command-line-tool, cost-reduction, developer-tools</sub>
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** · 79,211★ · Python · Hot  
  Compresses tool outputs, logs, files, and RAG chunks before they hit the model's context.  
  <sub>topics: agent, ai, anthropic, compression, context-engineering, context-window, fastapi, langchain</sub>
- **[code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** · 70,798★ · TypeScript · Rising  
  omo/lazycodex — a coding agent built for 'tokenmaxxers'; efficiency-first harness.  
  <sub>topics: opencode, ai, anthropic, claude, claude-skills, cursor, gemini, ide</sub>
- **[toon-format/toon](https://github.com/toon-format/toon)** · 25,622★ · TypeScript · Hot  
  Token-Oriented Object Notation — compact schema-aware encoding to shrink structured payloads.  
  <sub>topics: data-format, llm, serialization, tokenization</sub>
- **[getagentseal/codeburn](https://github.com/getagentseal/codeburn)** · 11,737★ · TypeScript · Hot  
  TUI dashboard showing where your AI coding tokens go — measure before you optimize.  
  <sub>topics: ai-coding, claude-code, cli, codex, cost-tracking, developer-tools, observability, terminal-ui</sub>
- **[MinishLab/semble](https://github.com/MinishLab/semble)** · 6,385★ · Python · Hot  
  Fast, accurate code search for agents using ~98% fewer tokens than reading files.  
  <sub>topics: agents, code-search, embeddings, mcp, mcp-server, model-context-protocol, retrieval</sub>

### Code-graph / retrieval

_Give the agent structure instead of raw files — graphs and indexes answer 'how does X relate to Y' without scanning the repo._

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** · 144,848★ · Python · Hot  
  Coding-assistant skill that turns a repo into a knowledge graph (you use this on this project).  
  <sub>topics: claude-code, graphrag, knowledge-graph, codex, openclaw, skills, antigravity, gemini</sub>
- **[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)** · 91,707★ · TypeScript · Hot  
  Turns any code into an interactive teaching graph — comprehension over impression.  
  <sub>topics: claude-code, claude-skills, understandcode, codex, codex-skills, knowledge-graph, opencode-skills, antigravity-skills</sub>
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** · 77,167★ · TypeScript · Hot  
  Pre-indexed code knowledge graph for Claude Code/Codex/Cursor — structural retrieval.  
  <sub>topics: —</sub>
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** · 48,401★ · C · Hot  
  High-performance code-intelligence MCP server — indexes codebases for retrieval.  
  <sub>topics: claude-code, code-analysis, code-intelligence, developer-tools, knowledge-graph, mcp, mcp-server, model-context-protocol</sub>
- **[abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)** · 48,363★ · TypeScript · Hot  
  Zero-server code-intelligence engine — client-side code graph.  
  <sub>topics: —</sub>

### MCP ecosystem

_External capabilities via a standard protocol. Each connected server costs context, so connect deliberately — `context7` (live docs) is the highest-ROI default._

- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** · 97,519★ · — · Hot  
  The big community index of MCP servers — discovery for what to connect.  
  <sub>topics: ai, mcp</sub>
- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** · 91,888★ · TypeScript · Mature  
  The official reference MCP servers — the canonical catalog of capabilities to plug in.  
  <sub>topics: —</sub>
- **[upstash/context7](https://github.com/upstash/context7)** · 64,415★ · TypeScript · Hot  
  Up-to-date library docs for LLMs via MCP — kills 'hallucinated API' errors (you have this wired).  
  <sub>topics: llm, mcp, mcp-server, vibe-coding</sub>

### Observability / evals

_You can't optimize what you can't see. Trace runs, watch spend, and score outputs before trusting an autonomous setup._

- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,199★ · TypeScript · Classic  
  Open-source LLM engineering platform: traces, evals, metrics, prompts (you trace Claude Code into this).  
  <sub>topics: analytics, llm, llmops, large-language-models, openai, self-hosted, ycombinator, monitoring</sub>
- **[comet-ml/opik](https://github.com/comet-ml/opik)** · 23,282★ · Python · Classic  
  Debug/evaluate/monitor LLM apps, RAG, and agents — eval-first observability.  
  <sub>topics: open-source, langchain, openai, playground, prompt-engineering, llama-index, llm, llm-evaluation</sub>
- **[Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)** · 12,215★ · Python · Classic  
  AI observability & evaluation — OpenTelemetry-based tracing for agents.  
  <sub>topics: llmops, ai-monitoring, ai-observability, llm-eval, aiengineering, datasets, agents, llms</sub>
- **[traceloop/openllmetry](https://github.com/traceloop/openllmetry)** · 7,527★ · Python · Classic  
  Open-source OpenTelemetry-based observability for LLM apps — standards-based traces.  
  <sub>topics: llmops, observability, open-telemetry, metrics, monitoring, opentelemetry, datascience, ml</sub>
- **[patoles/agent-flow](https://github.com/patoles/agent-flow)** · 1,776★ · TypeScript · Rising  
  Real-time visualization of Claude Code agent orchestration — watch agents think, branch, coordinate.  
  <sub>topics: agent-visualization, ai-agents, claude-code, developer-tools, llm, vscode-extension</sub>
- **[ingo-eichhorst/Irrlicht](https://github.com/ingo-eichhorst/Irrlicht)** · 101★ · Go · Hot  
  Claude Code session lights in the macOS menu bar — at-a-glance session state.  
  <sub>topics: —</sub>

### Local runtime

_Run open models locally or proxy many models behind one endpoint — the cost floor for grunt work and the fallback when the cloud is down._

- **[ollama/ollama](https://github.com/ollama/ollama)** · 186,456★ · Go · Classic  
  Run open models locally with one command — point an agent at it to slash API cost or go offline.  
  <sub>topics: llama, llm, llms, go, golang, ollama, mistral, gemma</sub>
- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** · 62,968★ · Python · Classic  
  OpenAI-compatible proxy/gateway to 100+ LLMs — swap models under any harness from one endpoint.  
  <sub>topics: anthropic, langchain, llm, llmops, openai, ai-gateway, azure-openai, bedrock</sub>

## Graph analysis — how they relate

**Community clustering.** These 60 tools span **18 of the graph's 41 communities** — the Claude-Code ecosystem is spread across agent-framework, memory, retrieval, and observability neighborhoods rather than forming one tidy cluster.

- **Community 10** (8): `anthropics/claude-code`, `anthropics/skills`, `ComposioHQ/awesome-claude-skills`, `multica-ai/andrej-karpathy-skills`, `luongnv89/claude-howto`, `Piebald-AI/claude-code-system-prompts`, `anthropics/claude-cookbooks`, `Gentleman-Programming/engram`
- **Community 0** (7): `anomalyco/opencode`, `earendil-works/pi`, `affaan-m/ECC`, `davila7/claude-code-templates`, `JuliusBrussee/caveman`, `getagentseal/codeburn`, `patoles/agent-flow`
- **Community 11** (6): `openai/codex`, `cline/cline`, `shareAI-lab/learn-claude-code`, `MemPalace/mempalace`, `basicmachines-co/basic-memory`, `BerriAI/litellm`
- **Community 9** (6): `NousResearch/hermes-agent`, `ruvnet/ruflo`, `Yeachan-Heo/oh-my-claudecode`, `centminmod/my-claude-code-setup`, `thedotmack/claude-mem`, `code-yeongyu/oh-my-openagent`
- **Community 13** (4): `google-gemini/gemini-cli`, `MinishLab/semble`, `punkpeye/awesome-mcp-servers`, `upstash/context7`
- **Community 16** (4): `aaif-goose/goose`, `obra/superpowers`, `mem0ai/mem0`, `toon-format/toon`
- **Community 8** (4): `K-Dense-AI/scientific-agent-skills`, `hesreallyhim/awesome-claude-code`, `modelcontextprotocol/servers`, `traceloop/openllmetry`
- **Community 2** (4): `farion1231/cc-switch`, `Graphify-Labs/graphify`, `Egonex-AI/Understand-Anything`, `DeusData/codebase-memory-mcp`
- **Community 18** (4): `x1xhlol/system-prompts-and-models-of-ai-tools`, `langfuse/langfuse`, `comet-ml/opik`, `Arize-ai/phoenix`
- **Community 34** (2): `openclaw/openclaw`, `garrytan/gstack`
- **Community 4** (2): `alirezarezvani/claude-skills`, `shanraisshan/claude-code-best-practice`
- **Community 7** (2): `rtk-ai/rtk`, `headroomlabs-ai/headroom`
- **Community 15** (2): `abhigyanpatwari/GitNexus`, `ingo-eichhorst/Irrlicht`

**Centrality (PageRank in the full 2,728-repo graph)** — the most 'hub-like' setup tools in your ecosystem:

- `hesreallyhim/awesome-claude-code` — PageRank 0.0028
- `affaan-m/ECC` — PageRank 0.0016
- `multica-ai/andrej-karpathy-skills` — PageRank 0.0014
- `shanraisshan/claude-code-best-practice` — PageRank 0.0014
- `NousResearch/hermes-agent` — PageRank 0.0011
- `punkpeye/awesome-mcp-servers` — PageRank 0.0011
- `MemPalace/mempalace` — PageRank 0.0008
- `wshobson/agents` — PageRank 0.0007
- `modelcontextprotocol/servers` — PageRank 0.0007
- `comet-ml/opik` — PageRank 0.0007

**Direct links between these tools** (top similarity edges where both endpoints are in this report):

- `modelcontextprotocol/servers` ⇄ `hesreallyhim/awesome-claude-code` (w=1.000) — authors: github-actions[bot]
- `anthropics/claude-cookbooks` ⇄ `anthropics/skills` (w=0.654) — authors: cj-ant
- `alirezarezvani/claude-skills` ⇄ `shanraisshan/claude-code-best-practice` (w=0.611) — topics: agentic-ai, claude-ai, claude-code, claude-code-skills; authors: claude
- `langfuse/langfuse` ⇄ `comet-ml/opik` (w=0.524) — topics: llm, llmops, openai, open-source
- `aaif-goose/goose` ⇄ `punkpeye/awesome-mcp-servers` (w=0.500) — topics: mcp, ai
- `rtk-ai/rtk` ⇄ `affaan-m/ECC` (w=0.438) — topics: anthropic, claude-code, developer-tools, llm; authors: dependabot[bot]
- `patoles/agent-flow` ⇄ `affaan-m/ECC` (w=0.400) — topics: ai-agents, claude-code, developer-tools, llm
- `JuliusBrussee/caveman` ⇄ `affaan-m/ECC` (w=0.386) — topics: anthropic, claude, claude-code, llm; authors: dependabot[bot]
- `affaan-m/ECC` ⇄ `davila7/claude-code-templates` (w=0.385) — topics: ai-agents, anthropic, claude, claude-code
- `wshobson/agents` ⇄ `davila7/claude-code-templates` (w=0.343) — topics: anthropic, agent-skills, ai-agents, mcp; authors: vshulcz
- `hesreallyhim/awesome-claude-code` ⇄ `davila7/claude-code-templates` (w=0.338) — topics: anthropic, anthropic-claude, claude, claude-code; authors: github-actions[bot]
- `NousResearch/hermes-agent` ⇄ `code-yeongyu/oh-my-openagent` (w=0.333) — topics: ai, ai-agents, anthropic, chatgpt
- `wshobson/agents` ⇄ `ComposioHQ/awesome-claude-skills` (w=0.326) — topics: agent-skills, ai-agents, cursor, mcp
- `Arize-ai/phoenix` ⇄ `comet-ml/opik` (w=0.306) — topics: llmops, prompt-engineering, llm-evaluation, openai; authors: pcbeingused333
- `DeusData/codebase-memory-mcp` ⇄ `Graphify-Labs/graphify` (w=0.290) — topics: claude-code, code-analysis, developer-tools, knowledge-graph
- …and 10 more.

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). This ecosystem moves fast and a lot of it is one-person projects — check before wiring one into your daily loop.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| google-gemini/gemini-cli | 100 | Hot | very active | 5 | 14% | 685 |
| aaif-goose/goose | 99 | Mature | very active | 5 | 21% | 158 |
| headroomlabs-ai/headroom | 99 | Hot | very active | 7 | 22% | 177 |
| comet-ml/opik | 99 | Classic | very active | 5 | 13% | 659 |
| anomalyco/opencode | 94 | Hot | very active | 4 | 21% | 894 |
| BerriAI/litellm | 94 | Classic | very active | 4 | 26% | 1552 |
| openai/codex | 93 | Hot | very active | 6 | 11% | 1272 |
| thedotmack/claude-mem | 90 | Hot | very active | 3 | 28% | 393 |
| bytedance/deer-flow | 89 | Hot | very active | 16 | 7% | 3 |
| langfuse/langfuse | 89 | Classic | very active | 3 | 25% | 738 |
| mem0ai/mem0 | 87 | Classic | very active | 3 | 41% | 416 |
| Graphify-Labs/graphify | 87 | Hot | very active | 3 | 23% | 250 |
| NousResearch/hermes-agent | 85 | Hot | very active | 3 | 28% | 47 |
| upstash/context7 | 85 | Hot | very active | 2 | 36% | 172 |
| openclaw/openclaw | 84 | Hot | very active | 2 | 29% | 281 |
| Arize-ai/phoenix | 84 | Classic | very active | 2 | 27% | 903 |
| cline/cline | 83 | Mature | very active | 2 | 42% | 468 |
| ollama/ollama | 83 | Classic | very active | 2 | 39% | 273 |
| earendil-works/pi | 80 | Hot | very active | 1 | 63% | 276 |
| Yeachan-Heo/oh-my-claudecode | 80 | Hot | very active | 1 | 70% | 288 |
| alirezarezvani/claude-skills | 80 | Hot | very active | 1 | 53% | 17 |
| modelcontextprotocol/servers | 80 | Mature | very active | 1 | 97% | 33 |
| ingo-eichhorst/Irrlicht | 80 | Hot | very active | 1 | 68% | 47 |
| affaan-m/ECC | 79 | Hot | very active | 1 | 96% | 19 |
| farion1231/cc-switch | 79 | Hot | very active | 1 | 66% | 84 |
| Gentleman-Programming/engram | 79 | Hot | very active | 1 | 88% | 131 |
| basicmachines-co/basic-memory | 79 | Hot | very active | 1 | 88% | 93 |
| JuliusBrussee/caveman | 79 | Hot | very active | 1 | 58% | 56 |
| getagentseal/codeburn | 79 | Hot | very active | 1 | 82% | 84 |
| anthropics/claude-code | 78 | Hot | very active | 1 | 61% | 260 |
| ruvnet/ruflo | 78 | Hot | very active | 1 | 54% | 1738 |
| abhigyanpatwari/GitNexus | 78 | Hot | very active | 1 | 60% | 1079 |
| K-Dense-AI/scientific-agent-skills | 77 | Hot | very active | 1 | 66% | 109 |
| Piebald-AI/claude-code-system-prompts | 77 | Rising | very active | 1 | 100% | 281 |
| code-yeongyu/oh-my-openagent | 77 | Rising | very active | 1 | 100% | 365 |
| colbymchenry/codegraph | 77 | Hot | very active | 1 | 80% | 33 |
| garrytan/gstack | 76 | Rising | very active | 1 | 100% | 6 |
| MemPalace/mempalace | 76 | Hot | very active | 1 | 66% | 19 |
| DeusData/codebase-memory-mcp | 76 | Hot | very active | 1 | 97% | 49 |
| rtk-ai/rtk | 75 | Hot | very active | 1 | 56% | 475 |
| Egonex-AI/Understand-Anything | 74 | Hot | very active | 1 | 82% | 8 |
| davila7/claude-code-templates | 73 | Hot | very active | 2 | 46% | 22 |
| toon-format/toon | 73 | Hot | very active | 1 | 90% | 32 |
| MinishLab/semble | 73 | Hot | very active | 1 | 85% | 34 |
| traceloop/openllmetry | 72 | Classic | very active | 2 | 41% | 264 |
| luongnv89/claude-howto | 69 | Hot | very active | 1 | 77% | 10 |
| obra/superpowers | 64 | Mature | active | 1 | 100% | 17 |
| wshobson/agents | 64 | Hot | very active | 1 | 52% | 0 |
| shanraisshan/claude-code-best-practice | 64 | Mature | very active | 1 | 100% | 0 |
| patoles/agent-flow | 62 | Rising | active | 1 | 70% | 6 |
| hesreallyhim/awesome-claude-code | 61 | Mature | very active | 1 | 100% | 0 |
| punkpeye/awesome-mcp-servers | 60 | Hot | very active | 1 | 96% | 0 |
| anthropics/claude-cookbooks | 59 | Classic | very active | 2 | 39% | 0 |
| shareAI-lab/learn-claude-code | 58 | Hot | very active | 1 | 64% | 0 |
| anthropics/skills | 50 | Mature | active | 2 | 40% | 0 |
| centminmod/my-claude-code-setup | 46 | Mature | active | 1 | 100% | 0 |
| memvid/memvid | 44 | Declining | slowing | 0 | 0% | 12 |
| x1xhlol/system-prompts-and-models-of-ai-tools | 41 | Declining | active | 1 | 50% | 0 |
| ComposioHQ/awesome-claude-skills | 26 | Declining | active | 0 | 0% | 0 |
| multica-ai/andrej-karpathy-skills | 18 | Declining | stale | 0 | 0% | 0 |

## Adjacent (deliberately not listed here)

- **campfirein/byterover-cli** — archived upstream — the portable `brv` memory layer is no longer maintained
- **memodb-io/Acontext** — archived upstream (2026-10) — the skills-as-memory hybrid is no longer maintained
- **n8n-io/n8n** (209,907★) — workflow-automation platform — orchestrates agents but isn't a Claude-Code setup layer
- **langgenius/dify** (160,755★) — agentic-workflow platform — covered by the agent-orchestration report
- **langchain-ai/langchain** (149,261★) — agent-engineering library — app framework, not a CC setup tool
- **open-webui/open-webui** (158,196★) — chat UI for local models — a frontend, not an agent setup
- **ultraworkers/claw-code** (194,926★) — art/exhibit harness — not a practical setup layer
- **multica-ai/multica** (55,404★) — managed-agents platform — team product, see agent-orchestration report

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Selection**: keyword scan (claude-code / skill / agent harness / mcp / memory / token / observability / code-graph / setup) across name+description+topics, then manual curation into the nine setup layers. General agent *application* frameworks, chat UIs, and broad platforms were routed to adjacent reports or excluded (see above).
- **The three-strategy table is opinionated**, built only from repos in your stars — it is a starting point, not a benchmark. Validate model-tier and token-saver claims against your own `langfuse`/`codeburn` traces.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.

<sub>Tools covered: 60 · Snapshot: 2026-11-09T14:44:53.318Z</sub>
