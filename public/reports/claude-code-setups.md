# Claude Code Superpowers — Setup Strategies from Your Stars

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities).
>
> Generated 2026-11-23 by `scripts/reports/claude_code_setups.py` (regenerate any time — no API cost).

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

- **60 Claude-Code 'superpower' projects** in your stars (**5,537,092★** combined), spanning 9 setup layers:
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Harness / coding agent | TypeScript | MIT | 395,087 (▲517) | Hot | 84 | very active | 0d ago | 12mo | 23 |
| [obra/superpowers](https://github.com/obra/superpowers) | Skills framework | Shell | MIT | 324,803 (▲6,434) | Mature | 62 | active | 20d ago | 1.1y | 1 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | Skills framework | JavaScript | MIT | 309,385 (▲5,141) | Hot | 79 | very active | 0d ago | 10mo | 5 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Harness / coding agent | Python | MIT | 265,607 (▲1,798) | Hot | 85 | very active | 0d ago | 1.3y | 14 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | Config / setup kit | — | — | 235,273 (▲1,633) | Declining | 17 | stale | 7mo ago | 10mo | 0 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | Harness / coding agent | TypeScript | MIT | 228,765 (▲1,544) | Hot | 89 | very active | 0d ago | 1.6y | 22 |
| [anthropics/skills](https://github.com/anthropics/skills) | Skills framework | Python | — | 199,342 (▲3,622) | Mature | 49 | active | 7d ago | 1.2y | 6 |
| [ollama/ollama](https://github.com/ollama/ollama) | Local runtime | Go | MIT | 187,903 (▲695) | Classic | 83 | very active | 1d ago | 3.4y | 13 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Harness / coding agent | TypeScript | — | 156,795 (▲924) | Mature | 79 | very active | 0d ago | 1.8y | 2 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | Config / setup kit | Rust | MIT | 156,625 (▲1,742) | Hot | 84 | very active | 0d ago | 1.3y | 28 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Code-graph / retrieval | Python | Apache-2.0 | 152,387 (▲3,606) | Hot | 82 | very active | 0d ago | 7mo | 22 |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | Config / setup kit | — | GPL-3.0 | 144,826 (▲120) | Declining | 40 | active | 1mo ago | 1.7y | 2 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Config / setup kit | TypeScript | MIT | 142,458 (▲691) | Rising | 80 | very active | 0d ago | 8mo | 1 |
| [openai/codex](https://github.com/openai/codex) | Harness / coding agent | Rust | Apache-2.0 | 136,230 (▲728) | Hot | 83 | very active | 0d ago | 1.6y | 26 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | Harness / coding agent | TypeScript | MIT | 123,495 (▲1,181) | Hot | 90 | very active | 0d ago | 1.3y | 12 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Token-saver / compression | Go | Apache-2.0 | 122,357 (▲1,708) | Hot | 79 | very active | 0d ago | 7mo | 15 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Memory / context | TypeScript | Apache-2.0 | 119,258 (▲1,706) | Hot | 85 | very active | 0d ago | 1.2y | 28 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Harness / coding agent | TypeScript | Apache-2.0 | 109,023 (▲157) | Hot | 95 | very active | 1d ago | 1.6y | 13 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP ecosystem | — | MIT | 98,418 (▲659) | Hot | 60 | very active | 0d ago | 2.0y | 4 |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | Code-graph / retrieval | TypeScript | MIT | 93,765 (▲949) | Hot | 75 | very active | 0d ago | 8mo | 17 |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | MCP ecosystem | TypeScript | NOASSERTION | 92,190 (▲149) | Mature | 80 | very active | 4d ago | 2.0y | 2 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | Token-saver / compression | Rust | Apache-2.0 | 87,576 (▲847) | Hot | 75 | very active | 0d ago | 10mo | 11 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Harness / coding agent | Python | MIT | 85,675 (▲280) | Hot | 89 | very active | 0d ago | 1.6y | 47 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Harness / coding agent | TypeScript | MIT | 82,319 (▲463) | Hot | 79 | very active | 0d ago | 1.5y | 5 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Harness / coding agent | Python | MIT | 80,796 (▲322) | Mature | 75 | very active | 8d ago | 1.4y | 20 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Token-saver / compression | Python | Apache-2.0 | 80,636 (▲832) | Hot | 84 | very active | 0d ago | 10mo | 24 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Skills framework | Python | — | 80,143 (▲513) | Declining | 25 | slowing | 2mo ago | 1.1y | 0 |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Code-graph / retrieval | TypeScript | MIT | 78,497 (▲767) | Hot | 79 | very active | 0d ago | 10mo | 8 |
| [cline/cline](https://github.com/cline/cline) | Harness / coding agent | TypeScript | Apache-2.0 | 71,845 (▲166) | Mature | 83 | very active | 0d ago | 2.4y | 20 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | Token-saver / compression | TypeScript | NOASSERTION | 71,080 (▲138) | Rising | 77 | very active | 0d ago | 11mo | 2 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Memory / context | Python | Apache-2.0 | 69,376 (▲314) | Classic | 89 | very active | 0d ago | 3.4y | 26 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | Config / setup kit | HTML | MIT | 69,348 (▲243) | Mature | 64 | very active | 0d ago | 1.1y | 1 |
| [upstash/context7](https://github.com/upstash/context7) | MCP ecosystem | TypeScript | MIT | 65,334 (▲424) | Hot | 85 | very active | 0d ago | 1.7y | 7 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Local runtime | Python | NOASSERTION | 63,771 (▲428) | Classic | 99 | very active | 0d ago | 3.3y | 29 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Memory / context | Python | MIT | 60,672 (▲96) | Hot | 76 | very active | 0d ago | 7mo | 7 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Config / setup kit | Python | NOASSERTION | 58,660 (▲530) | Mature | 61 | very active | 0d ago | 1.6y | 1 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Skills framework | Python | MIT | 58,208 (▲790) | Hot | 75 | very active | 0d ago | 1.1y | 14 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | Harness / coding agent | Rust | Apache-2.0 | 56,895 (▲214) | Mature | 94 | very active | 0d ago | 2.3y | 37 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | Config / setup kit | Jupyter Notebook | MIT | 55,105 (▲347) | Classic | 52 | very active | 3d ago | 3.3y | 7 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Code-graph / retrieval | C | MIT | 49,072 (▲352) | Hot | 76 | very active | 2d ago | 9mo | 6 |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | Code-graph / retrieval | TypeScript | NOASSERTION | 48,755 (▲157) | Hot | 78 | very active | 0d ago | 1.3y | 12 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | Config / setup kit | Python | MIT | 47,533 (▲240) | Hot | 71 | very active | 3d ago | 1.0y | 9 |
| [wshobson/agents](https://github.com/wshobson/agents) | Skills framework | Python | MIT | 42,834 (▲261) | Hot | 68 | very active | 0d ago | 1.3y | 24 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Harness / coding agent | TypeScript | MIT | 41,030 (▲170) | Hot | 80 | very active | 3d ago | 10mo | 10 |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | Observability / evals | TypeScript | NOASSERTION | 37,754 (▲265) | Classic | 94 | very active | 0d ago | 3.5y | 17 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | Config / setup kit | Python | MIT | 34,131 (▲297) | Hot | 71 | very active | 1d ago | 1.4y | 26 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Skills framework | Python | MIT | 30,332 (▲453) | Hot | 85 | very active | 0d ago | 1.1y | 7 |
| [toon-format/toon](https://github.com/toon-format/toon) | Token-saver / compression | TypeScript | MIT | 25,652 (▲18) | Hot | 73 | very active | 12d ago | 1.1y | 3 |
| [comet-ml/opik](https://github.com/comet-ml/opik) | Observability / evals | Java | Apache-2.0 | 23,491 (▲49) | Classic | 94 | very active | 0d ago | 3.5y | 28 |
| [memvid/memvid](https://github.com/memvid/memvid) | Memory / context | Rust | Apache-2.0 | 17,438 (▲20) | Declining | 42 | slowing | 4mo ago | 1.5y | 0 |
| [Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts) | Config / setup kit | JavaScript | MIT | 13,216 (▲45) | Mature | 77 | very active | 3d ago | 1.0y | 2 |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | Observability / evals | Python | NOASSERTION | 12,384 (▲70) | Classic | 83 | very active | 0d ago | 4.0y | 14 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | Token-saver / compression | TypeScript | MIT | 11,893 (▲58) | Hot | 79 | very active | 0d ago | 7mo | 7 |
| [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram) | Memory / context | Go | MIT | 8,274 (▲92) | Hot | 80 | very active | 0d ago | 9mo | 5 |
| [traceloop/openllmetry](https://github.com/traceloop/openllmetry) | Observability / evals | Python | Apache-2.0 | 7,550 (▲9) | Classic | 79 | very active | 0d ago | 3.2y | 11 |
| [MinishLab/semble](https://github.com/MinishLab/semble) | Token-saver / compression | Python | MIT | 6,477 (▲45) | Hot | 71 | very active | 15d ago | 7mo | 3 |
| [basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory) | Memory / context | Python | AGPL-3.0 | 4,690 (▲92) | Hot | 79 | very active | 1d ago | 2.0y | 7 |
| [centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup) | Config / setup kit | Python | MIT | 2,745 (▲10) | Mature | 50 | active | 0d ago | 1.4y | 1 |
| [patoles/agent-flow](https://github.com/patoles/agent-flow) | Observability / evals | TypeScript | Apache-2.0 | 1,810 (▲22) | Rising | 67 | active | 3d ago | 8mo | 5 |
| [ingo-eichhorst/Irrlicht](https://github.com/ingo-eichhorst/Irrlicht) | Observability / evals | Go | MIT | 103 (▲1) | Hot | 80 | very active | 0d ago | 1.2y | 5 |

## By layer

### Harness / coding agent

_The loop that reads, plans, edits, and runs. Pick one as your daily driver; keep a second installed to diff behavior and model-shop._

- **[openclaw/openclaw](https://github.com/openclaw/openclaw)** · 395,087★ · TypeScript · Hot  
  Cross-platform personal-assistant harness — an 'any OS, any platform' agent runtime.  
  <sub>topics: ai, assistant, own-your-data, personal, crustacean, molty, openclaw</sub>
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** · 265,607★ · Python · Hot  
  Long-lived 'agent that grows with you' harness — persistent, personalized agent loop.  
  <sub>topics: ai, ai-agent, ai-agents, llm, anthropic, chatgpt, claude, claude-code</sub>
- **[anomalyco/opencode](https://github.com/anomalyco/opencode)** · 228,765★ · TypeScript · Hot  
  Open-source terminal coding agent — a provider-agnostic alternative harness.  
  <sub>topics: —</sub>
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 156,795★ · TypeScript · Mature  
  Claude Code itself — the agentic CLI that lives in your terminal; the baseline every setup here extends.  
  <sub>topics: —</sub>
- **[openai/codex](https://github.com/openai/codex)** · 136,230★ · Rust · Hot  
  OpenAI's lightweight terminal coding agent — useful as a second harness to diff behavior against Claude Code.  
  <sub>topics: —</sub>
- **[earendil-works/pi](https://github.com/earendil-works/pi)** · 123,495★ · TypeScript · Hot  
  Unified LLM-API + agent-loop + TUI toolkit — a kit for rolling your own coding agent.  
  <sub>topics: —</sub>
- **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** · 109,023★ · TypeScript · Hot  
  Gemini's open-source terminal agent — the third major CLI harness; handy for model-shopping.  
  <sub>topics: gemini, gemini-api, ai, ai-agents, cli, mcp-client, mcp-server</sub>
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,675★ · Python · Hot  
  Long-horizon SuperAgent harness that researches, codes, and writes — multi-step autonomy.  
  <sub>topics: agent, agentic, agentic-framework, agentic-workflow, ai, ai-agents, deep-research, langchain</sub>
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** · 82,319★ · TypeScript · Hot  
  Agent meta-harness for Claude — deploys multi-agent swarms with coordination.  
  <sub>topics: agent-memory, agent-orchestration, agentic-ai, agentic-workflow, ai-agents, autonomous-agents, claude, claude-code</sub>
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** · 80,796★ · Python · Mature  
  Builds a nano Claude Code-like harness from zero — the best teaching walkthrough of how the loop works.  
  <sub>topics: agent, claude-code, teaching, agent-development, ai-agent, claude, educational, llm</sub>
- **[cline/cline](https://github.com/cline/cline)** · 71,845★ · TypeScript · Mature  
  Autonomous coding agent as SDK / IDE extension / CLI — strong for in-editor agentic workflows.  
  <sub>topics: —</sub>
- **[aaif-goose/goose](https://github.com/aaif-goose/goose)** · 56,895★ · Rust · Mature  
  Extensible open agent that installs and runs tools, not just suggestions — MCP-native.  
  <sub>topics: mcp, acp, ai, ai-agents</sub>
- **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** · 41,030★ · TypeScript · Hot  
  Teams-first multi-agent orchestration layer for Claude Code.  
  <sub>topics: agentic-coding, ai-agents, claude, claude-code, oh-my-opencode, opencode, vibe-coding, automation</sub>

### Skills framework

_The biggest 2026 upgrade. Skills load only when triggered, so they add capability without taxing every session — the opposite of a big always-on CLAUDE.md._

- **[obra/superpowers](https://github.com/obra/superpowers)** · 324,803★ · Shell · Mature  
  Agentic skills framework + dev methodology — the headline 'give your agent superpowers' skill collection.  
  <sub>topics: ai, brainstorming, coding, obra, sdlc, skills, superpowers, subagent-driven-development</sub>
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** · 309,385★ · JavaScript · Hot  
  Agent-harness performance system bundling skills, instincts, and memory into one optimization layer.  
  <sub>topics: ai-agents, anthropic, claude, claude-code, developer-tools, llm, mcp, productivity</sub>
- **[anthropics/skills](https://github.com/anthropics/skills)** · 199,342★ · Python · Mature  
  Anthropic's official Agent Skills repo — canonical examples of the skills format.  
  <sub>topics: agent-skills</sub>
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** · 80,143★ · Python · Declining  
  Curated index of Claude Skills + tooling — the discovery hub for what's worth installing.  
  <sub>topics: claude, claude-code, agent-skills, ai-agents, antigravity, automation, codex, composio</sub>
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** · 58,208★ · Python · Hot  
  Domain skill pack that turns an agent into a research scientist — example of vertical skills.  
  <sub>topics: ai-scientist, bioinformatics, chemoinformatics, claude, claude-skills, claudecode, clinical-research, computational-biology</sub>
- **[wshobson/agents](https://github.com/wshobson/agents)** · 42,834★ · Python · Hot  
  Multi-harness agentic plugin marketplace (Claude Code, Codex, Cursor) — subagents & commands.  
  <sub>topics: anthropic, agent-skills, agentic-ai, ai-agents, cursor, cursor-rules, mcp, multi-agent</sub>
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** · 30,332★ · Python · Hot  
  Very large skill/agent/command collection (380+ skills) — browse it for patterns, don't install it wholesale.  
  <sub>topics: agentic-ai, anthropic-claude, claude-ai, claude-code, claude-skills, claude-code-skills, ai-coding-agent, claude-code-plugins</sub>

### Config / setup kit

_Turnkey CLAUDE.md / command / hook bundles. Steal a good one, then trim to what you actually use — bloat here is paid on every prompt._

- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** · 235,273★ · — · Declining  
  A single CLAUDE.md derived from Karpathy's habits — the 'one good config file' approach.  
  <sub>topics: —</sub>
- **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)** · 156,625★ · Rust · Hot  
  Desktop all-in-one for managing Claude Code/Codex/OpenClaw — swap providers & configs fast.  
  <sub>topics: ai-tools, claude-code, desktop-app, open-source, rust, tauri, codex, mcp</sub>
- **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)** · 144,826★ · — · Declining  
  Leaked/collected system prompts of major AI coding tools — prompt-engineering reference.  
  <sub>topics: ai, cursor, lovable, system-prompts, v0, cursorai, devin, replit</sub>
- **[garrytan/gstack](https://github.com/garrytan/gstack)** · 142,458★ · TypeScript · Rising  
  Garry Tan's exact Claude Code setup — 23 opinionated tools as a turnkey starting point.  
  <sub>topics: —</sub>
- **[shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)** · 69,348★ · HTML · Mature  
  Best-practices collection: vibe-coding → agentic engineering.  
  <sub>topics: claude-ai, claude-code, best-practices, claude, claude-code-best-practices, agentic-engineering, anthropic, claude-code-agents</sub>
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** · 58,660★ · Python · Mature  
  The awesome-list for Claude Code skills, hooks, slash-commands, and orchestrators.  
  <sub>topics: anthropic, anthropic-claude, awesome, awesome-list, awesome-lists, awesome-resources, claude, claude-code</sub>
- **[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)** · 55,105★ · Jupyter Notebook · Classic  
  Official recipes/notebooks for effective Claude usage patterns.  
  <sub>topics: —</sub>
- **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** · 47,533★ · Python · Hot  
  Visual, example-driven guide to Claude Code from basics to advanced — the learning path.  
  <sub>topics: claude-code, guide, tutorial</sub>
- **[davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)** · 34,131★ · Python · Hot  
  CLI to configure AND monitor Claude Code — installs commands/agents/hooks and watches usage.  
  <sub>topics: anthropic, anthropic-claude, claude, claude-code, agent-skills, ai-agents, claude-code-plugins, cli</sub>
- **[Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** · 13,216★ · JavaScript · Mature  
  Claude Code's full system prompt + 27 builtin tool descriptions — know what you're configuring.  
  <sub>topics: claude-code, claude-code-system-prompts, system-prompts</sub>
- **[centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup)** · 2,745★ · Python · Mature  
  A shared starter CLAUDE.md + memory-bank configuration template you can fork.  
  <sub>topics: claude, claude-ai, claude-code, subagents, claudecode-config, claudecode-hooks, claudecode-subagents</sub>

### Memory / context

_Persist decisions and context across sessions so the agent doesn't re-derive what it already learned. The backend is swappable._

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** · 119,258★ · TypeScript · Hot  
  Persistent context across sessions for every agent — captures work and re-injects it (you run this).  
  <sub>topics: ai, ai-agents, ai-memory, anthropic, artificial-intelligence, claude, claude-agent-sdk, claude-agents</sub>
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** · 69,376★ · Python · Classic  
  Universal memory layer for AI agents — the most-adopted general memory backend.  
  <sub>topics: ai, chatgpt, llm, python, rag, long-term-memory, memory, memory-management</sub>
- **[MemPalace/mempalace](https://github.com/MemPalace/mempalace)** · 60,672★ · Python · Hot  
  Best-benchmarked open-source AI memory system — drop-in long-term memory.  
  <sub>topics: ai, chromadb, llm, mcp, memory, python</sub>
- **[memvid/memvid](https://github.com/memvid/memvid)** · 17,438★ · Rust · Declining  
  Memory layer that replaces RAG pipelines with a compact server — novel storage approach.  
  <sub>topics: ai, context, embedded, faiss, knowledge-base, knowledge-graph, llm, machine-learning</sub>
- **[Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)** · 8,274★ · Go · Hot  
  Agent-agnostic Go binary giving coding agents persistent memory.  
  <sub>topics: gentle-shell-package</sub>
- **[basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory)** · 4,690★ · Python · Hot  
  Local Markdown knowledge base exposed over MCP — the agent reads and writes plain notes you can also edit by hand.  
  <sub>topics: ai, claude, llm, mcp, open-source, python, obsidian, obsidian-md</sub>

### Token-saver / compression

_Measure first (`codeburn`), then compress: leaner code search, output trimming, and a front proxy stack to 60–90% on common loops._

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** · 122,357★ · Go · Hot  
  'Why use many token when few token do trick' — a Claude Code skill that aggressively trims tokens.  
  <sub>topics: ai, anthropic, caveman, claude, claude-code, llm, meme, prompt-engineering</sub>
- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** · 87,576★ · Rust · Hot  
  CLI proxy that cuts LLM token consumption 60–90% on common dev commands — sits in front of the agent.  
  <sub>topics: agentic-coding, ai-coding, anthropic, claude-code, cli, command-line-tool, cost-reduction, developer-tools</sub>
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** · 80,636★ · Python · Hot  
  Compresses tool outputs, logs, files, and RAG chunks before they hit the model's context.  
  <sub>topics: agent, ai, anthropic, compression, context-engineering, context-window, fastapi, langchain</sub>
- **[code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** · 71,080★ · TypeScript · Rising  
  omo/lazycodex — a coding agent built for 'tokenmaxxers'; efficiency-first harness.  
  <sub>topics: opencode, ai, anthropic, claude, claude-skills, cursor, gemini, ide</sub>
- **[toon-format/toon](https://github.com/toon-format/toon)** · 25,652★ · TypeScript · Hot  
  Token-Oriented Object Notation — compact schema-aware encoding to shrink structured payloads.  
  <sub>topics: data-format, llm, serialization, tokenization</sub>
- **[getagentseal/codeburn](https://github.com/getagentseal/codeburn)** · 11,893★ · TypeScript · Hot  
  TUI dashboard showing where your AI coding tokens go — measure before you optimize.  
  <sub>topics: ai-coding, claude-code, cli, codex, cost-tracking, developer-tools, observability, terminal-ui</sub>
- **[MinishLab/semble](https://github.com/MinishLab/semble)** · 6,477★ · Python · Hot  
  Fast, accurate code search for agents using ~98% fewer tokens than reading files.  
  <sub>topics: agents, code-search, embeddings, mcp, mcp-server, model-context-protocol, retrieval</sub>

### Code-graph / retrieval

_Give the agent structure instead of raw files — graphs and indexes answer 'how does X relate to Y' without scanning the repo._

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** · 152,387★ · Python · Hot  
  Coding-assistant skill that turns a repo into a knowledge graph (you use this on this project).  
  <sub>topics: claude-code, graphrag, knowledge-graph, codex, openclaw, skills, antigravity, gemini</sub>
- **[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)** · 93,765★ · TypeScript · Hot  
  Turns any code into an interactive teaching graph — comprehension over impression.  
  <sub>topics: claude-code, claude-skills, understandcode, codex, codex-skills, knowledge-graph, opencode-skills, antigravity-skills</sub>
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** · 78,497★ · TypeScript · Hot  
  Pre-indexed code knowledge graph for Claude Code/Codex/Cursor — structural retrieval.  
  <sub>topics: —</sub>
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** · 49,072★ · C · Hot  
  High-performance code-intelligence MCP server — indexes codebases for retrieval.  
  <sub>topics: claude-code, code-analysis, code-intelligence, developer-tools, knowledge-graph, mcp, mcp-server, model-context-protocol</sub>
- **[abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)** · 48,755★ · TypeScript · Hot  
  Zero-server code-intelligence engine — client-side code graph.  
  <sub>topics: —</sub>

### MCP ecosystem

_External capabilities via a standard protocol. Each connected server costs context, so connect deliberately — `context7` (live docs) is the highest-ROI default._

- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** · 98,418★ · — · Hot  
  The big community index of MCP servers — discovery for what to connect.  
  <sub>topics: ai, mcp</sub>
- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** · 92,190★ · TypeScript · Mature  
  The official reference MCP servers — the canonical catalog of capabilities to plug in.  
  <sub>topics: —</sub>
- **[upstash/context7](https://github.com/upstash/context7)** · 65,334★ · TypeScript · Hot  
  Up-to-date library docs for LLMs via MCP — kills 'hallucinated API' errors (you have this wired).  
  <sub>topics: llm, mcp, mcp-server, vibe-coding</sub>

### Observability / evals

_You can't optimize what you can't see. Trace runs, watch spend, and score outputs before trusting an autonomous setup._

- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,754★ · TypeScript · Classic  
  Open-source LLM engineering platform: traces, evals, metrics, prompts (you trace Claude Code into this).  
  <sub>topics: analytics, llm, llmops, large-language-models, openai, self-hosted, monitoring, observability</sub>
- **[comet-ml/opik](https://github.com/comet-ml/opik)** · 23,491★ · Java · Classic  
  Debug/evaluate/monitor LLM apps, RAG, and agents — eval-first observability.  
  <sub>topics: open-source, langchain, openai, playground, prompt-engineering, llama-index, llm, llm-evaluation</sub>
- **[Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)** · 12,384★ · Python · Classic  
  AI observability & evaluation — OpenTelemetry-based tracing for agents.  
  <sub>topics: llmops, ai-monitoring, ai-observability, llm-eval, aiengineering, datasets, agents, llms</sub>
- **[traceloop/openllmetry](https://github.com/traceloop/openllmetry)** · 7,550★ · Python · Classic  
  Open-source OpenTelemetry-based observability for LLM apps — standards-based traces.  
  <sub>topics: llmops, observability, open-telemetry, metrics, monitoring, opentelemetry, datascience, ml</sub>
- **[patoles/agent-flow](https://github.com/patoles/agent-flow)** · 1,810★ · TypeScript · Rising  
  Real-time visualization of Claude Code agent orchestration — watch agents think, branch, coordinate.  
  <sub>topics: agent-visualization, ai-agents, claude-code, developer-tools, llm, vscode-extension</sub>
- **[ingo-eichhorst/Irrlicht](https://github.com/ingo-eichhorst/Irrlicht)** · 103★ · Go · Hot  
  Claude Code session lights in the macOS menu bar — at-a-glance session state.  
  <sub>topics: —</sub>

### Local runtime

_Run open models locally or proxy many models behind one endpoint — the cost floor for grunt work and the fallback when the cloud is down._

- **[ollama/ollama](https://github.com/ollama/ollama)** · 187,903★ · Go · Classic  
  Run open models locally with one command — point an agent at it to slash API cost or go offline.  
  <sub>topics: llama, llm, llms, go, golang, ollama, mistral, gemma</sub>
- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** · 63,771★ · Python · Classic  
  OpenAI-compatible proxy/gateway to 100+ LLMs — swap models under any harness from one endpoint.  
  <sub>topics: anthropic, langchain, llm, llmops, openai, ai-gateway, azure-openai, bedrock</sub>

## Graph analysis — how they relate

**Community clustering.** These 60 tools span **17 of the graph's 45 communities** — the Claude-Code ecosystem is spread across agent-framework, memory, retrieval, and observability neighborhoods rather than forming one tidy cluster.

- **Community 21** (8): `earendil-works/pi`, `K-Dense-AI/scientific-agent-skills`, `davila7/claude-code-templates`, `hesreallyhim/awesome-claude-code`, `colbymchenry/codegraph`, `modelcontextprotocol/servers`, `upstash/context7`, `traceloop/openllmetry`
- **Community 24** (6): `google-gemini/gemini-cli`, `cline/cline`, `alirezarezvani/claude-skills`, `shanraisshan/claude-code-best-practice`, `MinishLab/semble`, `punkpeye/awesome-mcp-servers`
- **Community 0** (6): `Yeachan-Heo/oh-my-claudecode`, `affaan-m/ECC`, `ComposioHQ/awesome-claude-skills`, `wshobson/agents`, `centminmod/my-claude-code-setup`, `patoles/agent-flow`
- **Community 30** (5): `shareAI-lab/learn-claude-code`, `luongnv89/claude-howto`, `MemPalace/mempalace`, `memvid/memvid`, `basicmachines-co/basic-memory`
- **Community 8** (5): `x1xhlol/system-prompts-and-models-of-ai-tools`, `langfuse/langfuse`, `comet-ml/opik`, `Arize-ai/phoenix`, `BerriAI/litellm`
- **Community 17** (4): `anthropics/claude-code`, `anthropics/skills`, `Piebald-AI/claude-code-system-prompts`, `anthropics/claude-cookbooks`
- **Community 11** (4): `aaif-goose/goose`, `ruvnet/ruflo`, `mem0ai/mem0`, `headroomlabs-ai/headroom`
- **Community 22** (4): `NousResearch/hermes-agent`, `thedotmack/claude-mem`, `code-yeongyu/oh-my-openagent`, `toon-format/toon`
- **Community 13** (4): `rtk-ai/rtk`, `getagentseal/codeburn`, `abhigyanpatwari/GitNexus`, `ingo-eichhorst/Irrlicht`
- **Community 3** (3): `anomalyco/opencode`, `Graphify-Labs/graphify`, `Egonex-AI/Understand-Anything`
- **Community 7** (3): `farion1231/cc-switch`, `JuliusBrussee/caveman`, `DeusData/codebase-memory-mcp`
- **Community 1** (2): `openclaw/openclaw`, `garrytan/gstack`
- **Community 5** (2): `multica-ai/andrej-karpathy-skills`, `Gentleman-Programming/engram`

**Centrality (PageRank in the full 2,925-repo graph)** — the most 'hub-like' setup tools in your ecosystem:

- `hesreallyhim/awesome-claude-code` — PageRank 0.0028
- `shanraisshan/claude-code-best-practice` — PageRank 0.0012
- `multica-ai/andrej-karpathy-skills` — PageRank 0.0011
- `NousResearch/hermes-agent` — PageRank 0.0011
- `punkpeye/awesome-mcp-servers` — PageRank 0.0011
- `affaan-m/ECC` — PageRank 0.0010
- `MemPalace/mempalace` — PageRank 0.0007
- `langfuse/langfuse` — PageRank 0.0006
- `modelcontextprotocol/servers` — PageRank 0.0006
- `anthropics/claude-code` — PageRank 0.0006

**Direct links between these tools** (top similarity edges where both endpoints are in this report):

- `modelcontextprotocol/servers` ⇄ `hesreallyhim/awesome-claude-code` (w=1.000) — authors: github-actions[bot]
- `anthropics/claude-cookbooks` ⇄ `anthropics/claude-code` (w=0.750) — authors: mhegazy
- `anthropics/claude-cookbooks` ⇄ `anthropics/skills` (w=0.667) — authors: cj-ant
- `langfuse/langfuse` ⇄ `comet-ml/opik` (w=0.595) — topics: llm, llmops, openai, open-source; authors: feiiiiii5
- `aaif-goose/goose` ⇄ `punkpeye/awesome-mcp-servers` (w=0.500) — topics: mcp, ai
- `patoles/agent-flow` ⇄ `affaan-m/ECC` (w=0.400) — topics: ai-agents, claude-code, developer-tools, llm
- `alirezarezvani/claude-skills` ⇄ `shanraisshan/claude-code-best-practice` (w=0.397) — topics: agentic-ai, claude-ai, claude-code, claude-code-skills; authors: claude
- `affaan-m/ECC` ⇄ `davila7/claude-code-templates` (w=0.385) — topics: ai-agents, anthropic, claude, claude-code
- `hesreallyhim/awesome-claude-code` ⇄ `davila7/claude-code-templates` (w=0.335) — topics: anthropic, anthropic-claude, claude, claude-code; authors: github-actions[bot]
- `NousResearch/hermes-agent` ⇄ `code-yeongyu/oh-my-openagent` (w=0.333) — topics: ai, ai-agents, anthropic, chatgpt
- `wshobson/agents` ⇄ `ComposioHQ/awesome-claude-skills` (w=0.326) — topics: agent-skills, ai-agents, cursor, mcp
- `basicmachines-co/basic-memory` ⇄ `MemPalace/mempalace` (w=0.285) — topics: ai, llm, mcp, python
- `hesreallyhim/awesome-claude-code` ⇄ `K-Dense-AI/scientific-agent-skills` (w=0.252) — topics: claude, agent-skills; authors: github-actions[bot]
- `langfuse/langfuse` ⇄ `BerriAI/litellm` (w=0.241) — topics: llm, llmops, openai, langchain
- `shareAI-lab/learn-claude-code` ⇄ `luongnv89/claude-howto` (w=0.232) — topics: claude-code, tutorial
- …and 5 more.

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). This ecosystem moves fast and a lot of it is one-person projects — check before wiring one into your daily loop.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| BerriAI/litellm | 99 | Classic | very active | 6 | 16% | 1591 |
| google-gemini/gemini-cli | 95 | Hot | very active | 4 | 16% | 695 |
| aaif-goose/goose | 94 | Mature | very active | 4 | 20% | 166 |
| langfuse/langfuse | 94 | Classic | very active | 4 | 19% | 746 |
| comet-ml/opik | 94 | Classic | very active | 4 | 19% | 671 |
| earendil-works/pi | 90 | Hot | very active | 3 | 38% | 279 |
| anomalyco/opencode | 89 | Hot | very active | 3 | 26% | 903 |
| bytedance/deer-flow | 89 | Hot | very active | 11 | 10% | 3 |
| mem0ai/mem0 | 89 | Classic | very active | 4 | 26% | 416 |
| NousResearch/hermes-agent | 85 | Hot | very active | 3 | 32% | 59 |
| alirezarezvani/claude-skills | 85 | Hot | very active | 2 | 48% | 24 |
| thedotmack/claude-mem | 85 | Hot | very active | 2 | 36% | 416 |
| upstash/context7 | 85 | Hot | very active | 2 | 43% | 188 |
| openclaw/openclaw | 84 | Hot | very active | 2 | 48% | 293 |
| farion1231/cc-switch | 84 | Hot | very active | 2 | 27% | 96 |
| headroomlabs-ai/headroom | 84 | Hot | very active | 2 | 44% | 179 |
| openai/codex | 83 | Hot | very active | 3 | 24% | 1313 |
| cline/cline | 83 | Mature | very active | 2 | 29% | 472 |
| Arize-ai/phoenix | 83 | Classic | very active | 2 | 28% | 925 |
| ollama/ollama | 83 | Classic | very active | 2 | 47% | 275 |
| Graphify-Labs/graphify | 82 | Hot | very active | 2 | 26% | 262 |
| Yeachan-Heo/oh-my-claudecode | 80 | Hot | very active | 1 | 60% | 290 |
| garrytan/gstack | 80 | Rising | very active | 1 | 100% | 18 |
| Gentleman-Programming/engram | 80 | Hot | very active | 1 | 85% | 135 |
| modelcontextprotocol/servers | 80 | Mature | very active | 1 | 95% | 35 |
| ingo-eichhorst/Irrlicht | 80 | Hot | very active | 1 | 62% | 49 |
| anthropics/claude-code | 79 | Mature | very active | 1 | 99% | 269 |
| ruvnet/ruflo | 79 | Hot | very active | 1 | 94% | 1752 |
| affaan-m/ECC | 79 | Hot | very active | 1 | 89% | 19 |
| basicmachines-co/basic-memory | 79 | Hot | very active | 1 | 77% | 93 |
| JuliusBrussee/caveman | 79 | Hot | very active | 1 | 71% | 59 |
| getagentseal/codeburn | 79 | Hot | very active | 1 | 88% | 84 |
| colbymchenry/codegraph | 79 | Hot | very active | 1 | 85% | 35 |
| traceloop/openllmetry | 79 | Classic | very active | 3 | 32% | 265 |
| abhigyanpatwari/GitNexus | 78 | Hot | very active | 1 | 56% | 1115 |
| Piebald-AI/claude-code-system-prompts | 77 | Mature | very active | 1 | 99% | 291 |
| code-yeongyu/oh-my-openagent | 77 | Rising | very active | 1 | 86% | 378 |
| MemPalace/mempalace | 76 | Hot | very active | 1 | 90% | 20 |
| DeusData/codebase-memory-mcp | 76 | Hot | very active | 1 | 91% | 49 |
| shareAI-lab/learn-claude-code | 75 | Mature | very active | 7 | 23% | 0 |
| K-Dense-AI/scientific-agent-skills | 75 | Hot | very active | 1 | 58% | 109 |
| rtk-ai/rtk | 75 | Hot | very active | 1 | 51% | 507 |
| Egonex-AI/Understand-Anything | 75 | Hot | very active | 1 | 54% | 9 |
| toon-format/toon | 73 | Hot | very active | 1 | 90% | 32 |
| davila7/claude-code-templates | 71 | Hot | very active | 2 | 38% | 22 |
| luongnv89/claude-howto | 71 | Hot | very active | 1 | 73% | 11 |
| MinishLab/semble | 71 | Hot | very active | 1 | 90% | 34 |
| wshobson/agents | 68 | Hot | very active | 2 | 44% | 0 |
| patoles/agent-flow | 67 | Rising | active | 1 | 73% | 8 |
| shanraisshan/claude-code-best-practice | 64 | Mature | very active | 1 | 100% | 0 |
| obra/superpowers | 62 | Mature | active | 1 | 100% | 17 |
| hesreallyhim/awesome-claude-code | 61 | Mature | very active | 1 | 100% | 0 |
| punkpeye/awesome-mcp-servers | 60 | Hot | very active | 1 | 96% | 0 |
| anthropics/claude-cookbooks | 52 | Classic | very active | 1 | 57% | 0 |
| centminmod/my-claude-code-setup | 50 | Mature | active | 1 | 100% | 0 |
| anthropics/skills | 49 | Mature | active | 2 | 33% | 0 |
| memvid/memvid | 42 | Declining | slowing | 0 | 0% | 12 |
| x1xhlol/system-prompts-and-models-of-ai-tools | 40 | Declining | active | 1 | 50% | 0 |
| ComposioHQ/awesome-claude-skills | 25 | Declining | slowing | 0 | 0% | 0 |
| multica-ai/andrej-karpathy-skills | 17 | Declining | stale | 0 | 0% | 0 |

## Adjacent (deliberately not listed here)

- **campfirein/byterover-cli** — archived upstream — the portable `brv` memory layer is no longer maintained
- **memodb-io/Acontext** — archived upstream (2026-10) — the skills-as-memory hybrid is no longer maintained
- **n8n-io/n8n** (211,911★) — workflow-automation platform — orchestrates agents but isn't a Claude-Code setup layer
- **langgenius/dify** (161,747★) — agentic-workflow platform — covered by the agent-orchestration report
- **langchain-ai/langchain** (149,958★) — agent-engineering library — app framework, not a CC setup tool
- **open-webui/open-webui** (159,345★) — chat UI for local models — a frontend, not an agent setup
- **ultraworkers/claw-code** (194,730★) — art/exhibit harness — not a practical setup layer
- **multica-ai/multica** (57,523★) — managed-agents platform — team product, see agent-orchestration report

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Selection**: keyword scan (claude-code / skill / agent harness / mcp / memory / token / observability / code-graph / setup) across name+description+topics, then manual curation into the nine setup layers. General agent *application* frameworks, chat UIs, and broad platforms were routed to adjacent reports or excluded (see above).
- **The three-strategy table is opinionated**, built only from repos in your stars — it is a starting point, not a benchmark. Validate model-tier and token-saver claims against your own `langfuse`/`codeburn` traces.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.

<sub>Tools covered: 60 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
