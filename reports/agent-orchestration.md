# AI Agent Orchestration — Landscape Report

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities).
>
> Generated 2026-11-23 by `scripts/reports/agent_orchestration.py` (regenerate any time — no API cost).

![Top tools by stars](assets/agent-orchestration-top-tools.svg)

![Tools per category](assets/agent-orchestration-categories.svg)


> **Orchestration** = coordinating multiple agents / tools / steps toward a goal: routing, planning, parallelism, hand-offs, state and recovery. The tools below differ mostly in **how you express that coordination** — in code, on a visual canvas, across coding agents, or as durable production infra.

## Executive summary

- **37 agent-orchestration tools** in your stars (**1,586,476★**), organized by *how you express coordination*:
  - **Code-first agent frameworks** (15): `MetaGPT`, `crewAI`, `langgraph`, `agno`, `dspy`, `agentscope`, `openai-agents-python`, `smolagents`, `semantic-kernel`, `adk-python`, `camel`, `voltagent`, `harness-sdk`, `beeai-framework`, `AutoAgents`
  - **Visual / low-code platforms** (4): `n8n`, `dify`, `langflow`, `sim`
  - **Coding-agent orchestration** (10): `deer-flow`, `ruflo`, `oh-my-openagent`, `agents`, `oh-my-claudecode`, `paseo`, `eigent`, `agent-orchestrator`, `coding-agent-template`, `kanzo`
  - **Agent OS / long-horizon harness** (1): `eliza`
  - **Durable / production infra** (2): `flyte`, `agent-kit`
  - **Vertical / domain systems** (2): `TradingAgents`, `gpt-researcher`
  - **Protocols & meta-frameworks** (3): `ROMA`, `tinyagi`, `agent-workflow-protocol`
- **The split that matters:** *code-first frameworks* (langgraph, openai-agents, semantic-kernel) give you fine control in a programming language; *visual platforms* (n8n, dify) trade control for speed and non-engineer access; *coding-agent orchestration* (ruflo, agent-orchestrator) is a newer niche that runs **swarms of coding agents** in parallel.
- **Big-tech has entered:** Microsoft (agent-framework, semantic-kernel), Google (adk-python), OpenAI (openai-agents-python), AWS (strands-agents) all ship first-party frameworks — a strong maturity signal.
- **Highest-health picks:** `n8n`/`dify` (100), `strands-agents` (96), `microsoft/agent-framework` & `semantic-kernel` (92). `Flowise` used to sit in this band and was **archived upstream** in August 2026 — see *Retired from the scored set*.

## Pick by how you want to express coordination

| You want… | Use this approach | Top picks |
|---|---|---|
| Fine-grained control, in code | Code-first framework | `langgraph`, `openai-agents-python` |
| Fast builds / non-engineers | Visual / low-code | `n8n`, `dify` |
| Parallel **coding** agents | Coding-agent orchestration | `ruflo`, `OrchestratorInc/agent-orchestrator` |
| Always-on autonomous agents | Agent OS / harness | `elizaOS/eliza`, `deer-flow` |
| Durable, fault-tolerant prod | Production infra | `flyte`, `inngest/agent-kit` |
| A standard, not a library | Protocol / meta | `agent-workflow-protocol` |

## Comparison by approach

### Code-first agent frameworks

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 71,432 (▲140) | Python | 14 | stale | Declining | 0 |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 61,201 (▲213) | Python | 93 | very active | Classic | 4 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,310 (▲286) | Python | 78 | very active | Classic | 1 |
| [agno-agi/agno](https://github.com/agno-agi/agno) | 43,268 (▲61) | Python | 97 | very active | Classic | 5 |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 39,194 (▲103) | Python | 78 | very active | Classic | 1 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 36,551 (▲465) | Python | 97 | very active | Mature | 6 |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | 30,839 (▲126) | Python | 85 | very active | Hot | 2 |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | 30,500 (▲110) | Python | 68 | very active | Mature | 3 |
| [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | 28,794 (▲14) | C# | 100 | very active | Classic | 10 |
| [google/adk-python](https://github.com/google/adk-python) | 22,324 (▲85) | Python | 84 | very active | Hot | 2 |
| [camel-ai/camel](https://github.com/camel-ai/camel) | 18,053 (▲14) | Python | 75 | very active | Classic | 2 |
| [VoltAgent/voltagent](https://github.com/VoltAgent/voltagent) | 11,004 (▲22) | TypeScript | 82 | active | Mature | 4 |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | 9,279 (▲55) | TypeScript | 86 | very active | Hot | 3 |
| [i-am-bee/beeai-framework](https://github.com/i-am-bee/beeai-framework) | 3,458 (▼3) | Python | 90 | very active | Mature | 3 |
| [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) | 793 (▲9) | Rust | 68 | active | Mature | 2 |

### Visual / low-code platforms

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 211,911 (▲1,304) | TypeScript | 100 | very active | Classic | 10 |
| [langgenius/dify](https://github.com/langgenius/dify) | 161,747 (▲475) | Python | 85 | very active | Classic | 2 |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 156,880 (▲180) | Python | 79 | very active | Classic | 1 |
| [simstudioai/sim](https://github.com/simstudioai/sim) | 30,191 (▲45) | TypeScript | 78 | very active | Mature | 1 |

### Coding-agent orchestration

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 85,675 (▲280) | Python | 89 | very active | Hot | 11 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 82,319 (▲463) | TypeScript | 79 | very active | Hot | 1 |
| [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 71,080 (▲138) | TypeScript | 77 | very active | Rising | 1 |
| [wshobson/agents](https://github.com/wshobson/agents) | 42,834 (▲261) | Python | 68 | very active | Hot | 2 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 41,030 (▲170) | TypeScript | 80 | very active | Hot | 1 |
| [getpaseo/paseo](https://github.com/getpaseo/paseo) | 24,776 (▲609) | TypeScript | 78 | very active | Hot | 1 |
| [eigent-ai/eigent](https://github.com/eigent-ai/eigent) | 15,872 (▲43) | TypeScript | 78 | very active | Hot | 1 |
| [OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator) | 15,049 (▲245) | TypeScript | 88 | very active | Hot | 3 |
| [vercel-labs/coding-agent-template](https://github.com/vercel-labs/coding-agent-template) | 1,801 | TypeScript | 27 | slowing | Declining | 0 |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | 1,324 (▲110) | Rust | 77 | very active | Hot | 1 |

### Agent OS / long-horizon harness

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [elizaOS/eliza](https://github.com/elizaOS/eliza) | 19,913 (▲26) | Java | 80 | very active | Mature | 1 |

### Durable / production infra

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [flyteorg/flyte](https://github.com/flyteorg/flyte) | 7,803 (▼37) | Go | 90 | very active | Classic | 3 |
| [inngest/agent-kit](https://github.com/inngest/agent-kit) | 963 | TypeScript | 17 | stale | Declining | 0 |

### Vertical / domain systems

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 123,575 (▲769) | Python | 78 | very active | Mature | 1 |
| [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 30,878 (▲146) | Python | 80 | very active | Classic | 1 |

### Protocols & meta-frameworks

| Tool | ★ | Lang | Health | Activity | Lifecycle | Bus factor |
|---|---|---|---|---|---|---|
| [sentient-agi/ROMA](https://github.com/sentient-agi/ROMA) | 5,200 (▲1) | Python | 14 | stale | Declining | 0 |
| [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | 3,636 (▲3) | TypeScript | 30 | stale | Declining | 0 |
| [veegee82/agent-workflow-protocol](https://github.com/veegee82/agent-workflow-protocol) | 19 | Python | 19 | stale | Declining | 0 |

## Details

### Code-first agent frameworks

_SDKs you write agents in — maximum control over routing, state and hand-offs; the engineer's default._

- **[FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT)** · 71,432★ · Python · Declining · health 14  
  Multi-agent 'software company' — assigns SOPs/roles (PM, architect, engineer).  
  <sub>topics: agent, gpt, llm, metagpt, multi-agent</sub>
- **[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)** · 61,201★ · Python · Classic · health 93  
  Role-based 'crew' multi-agent framework — agents with roles, goals & tools collaborate.  
  <sub>topics: agents, ai, ai-agents, llms, aiagentframework</sub>
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** · 45,310★ · Python · Classic · health 78  
  Graph-based agent runtime — explicit nodes/edges/state; the de-facto control-flow framework.  
  <sub>topics: agents, ai, ai-agents, chatgpt, deepagents, enterprise</sub>
- **[agno-agi/agno](https://github.com/agno-agi/agno)** · 43,268★ · Python · Classic · health 97  
  Fast multimodal agent framework (ex-phidata) with memory/tools/teams.  
  <sub>topics: developer-tools, python, agents, ai, ai-agents</sub>
- **[stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)** · 39,194★ · Python · Classic · health 78  
  Programmatic prompt/pipeline optimization — compile agent behavior instead of hand-prompting.  
  <sub>topics: —</sub>
- **[agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope)** · 36,551★ · Python · Mature · health 97  
  Build agents you can see/understand/trust; strong observability + multi-agent.  
  <sub>topics: agent, chatbot, large-language-models, llm, llm-agent, multi-agent</sub>
- **[openai/openai-agents-python](https://github.com/openai/openai-agents-python)** · 30,839★ · Python · Hot · health 85  
  Lightweight, powerful framework for multi-agent workflows; handoffs + guardrails + tracing.  
  <sub>topics: agents, ai, framework, llm, python, openai</sub>
- **[huggingface/smolagents](https://github.com/huggingface/smolagents)** · 30,500★ · Python · Mature · health 68  
  Minimalist code-agent framework — agents that write & run Python to act.  
  <sub>topics: —</sub>
- **[microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel)** · 28,794★ · C# · Classic · health 100  
  Microsoft's enterprise SDK (C#/Python) for plugging LLMs + planning into apps.  
  <sub>topics: ai, artificial-intelligence, llm, openai, sdk</sub>
- **[google/adk-python](https://github.com/google/adk-python)** · 22,324★ · Python · Hot · health 84  
  Google's code-first Agent Development Kit — build, evaluate & deploy agents.  
  <sub>topics: agent, agents, agents-sdk, ai, ai-agents, multi-agent-systems</sub>
- **[camel-ai/camel](https://github.com/camel-ai/camel)** · 18,053★ · Python · Classic · health 75  
  Large multi-agent 'society' framework for studying agent cooperation at scale.  
  <sub>topics: ai-societies, artificial-intelligence, deep-learning, large-language-models, multi-agent-systems, natural-language-processing</sub>
- **[VoltAgent/voltagent](https://github.com/VoltAgent/voltagent)** · 11,004★ · TypeScript · Mature · health 82  
  TypeScript agent-engineering platform + open-source framework.  
  <sub>topics: agents, ai, chatbots, llm, mcp, nodejs</sub>
- **[strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk)** · 9,279★ · TypeScript · Hot · health 86  
  Model-driven agents in a few lines; very high health (96) and bus factor 7.  
  <sub>topics: agentic, agentic-ai, agents, ai, autonomous-agents, llm</sub>
- **[i-am-bee/beeai-framework](https://github.com/i-am-bee/beeai-framework)** · 3,458★ · Python · Mature · health 90  
  Production-ready agents in both Python and TypeScript.  
  <sub>topics: agents, ai, framework, ai-agent, llm, multiagent</sub>
- **[liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents)** · 793★ · Rust · Mature · health 68  
  Rust multi-agent framework to build, deploy & coordinate agents.  
  <sub>topics: agents, ai, ai-agents, ai-agents-framework, llm</sub>

### Visual / low-code platforms

_Drag-and-drop canvases — fastest to a working flow, accessible to non-engineers, less granular control._

- **[n8n-io/n8n](https://github.com/n8n-io/n8n)** · 211,911★ · TypeScript · Classic · health 100  
  Fair-code workflow automation with native AI nodes — the giant (189k★, health 100).  
  <sub>topics: automation, ipaas, n8n, workflow, typescript, self-hosted</sub>
- **[langgenius/dify](https://github.com/langgenius/dify)** · 161,747★ · Python · Classic · health 85  
  Production-ready platform for agentic workflow development (health 100).  
  <sub>topics: ai, gpt, llm, openai, python, agent</sub>
- **[langflow-ai/langflow](https://github.com/langflow-ai/langflow)** · 156,880★ · Python · Classic · health 79  
  Popular drag-and-drop builder for agents & flows; visual graph of components.  
  <sub>topics: react-flow, chatgpt, large-language-models, generative-ai, agents, multiagent</sub>
- **[simstudioai/sim](https://github.com/simstudioai/sim)** · 30,191★ · TypeScript · Mature · health 78  
  Build, deploy & orchestrate agents — 'central intelligence layer for your AI workforce'.  
  <sub>topics: agentic-workflow, agents, ai, nextjs, typescript, agent-workflow</sub>

### Coding-agent orchestration

_Coordinate *swarms of coding agents* (Claude Code, Codex, Cursor…) on a codebase — plan, spawn, run in parallel, handle CI._

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,675★ · Python · Hot · health 89  
  Long-horizon SuperAgent harness that researches, codes & creates with sandboxes (bf6).  
  <sub>topics: agent, agentic, agentic-framework, agentic-workflow, ai, ai-agents</sub>
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** · 82,319★ · TypeScript · Hot · health 79  
  Agent-orchestration platform for Claude — multi-agent swarms coordinating autonomous coding.  
  <sub>topics: agent-memory, agent-orchestration, agentic-ai, agentic-workflow, ai-agents, autonomous-agents</sub>
- **[code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** · 71,080★ · TypeScript · Rising · health 77  
  'omo' — agent harness (formerly oh-my-opencode) for coding workflows.  
  <sub>topics: opencode, ai, anthropic, claude, claude-skills, cursor</sub>
- **[wshobson/agents](https://github.com/wshobson/agents)** · 42,834★ · Python · Hot · health 68  
  Multi-harness agentic plugin marketplace (Claude Code, Codex, Cursor, OpenCode, Gemini).  
  <sub>topics: anthropic, agent-skills, agentic-ai, ai-agents, cursor, cursor-rules</sub>
- **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** · 41,030★ · TypeScript · Hot · health 80  
  Teams-first multi-agent orchestration for Claude Code.  
  <sub>topics: agentic-coding, ai-agents, claude, claude-code, oh-my-opencode, opencode</sub>
- **[getpaseo/paseo](https://github.com/getpaseo/paseo)** · 24,776★ · TypeScript · Hot · health 78  
  Run & coordinate coding agents from phone, desktop and CLI.  
  <sub>topics: agents, claude-code, codex, opencode, ade, copilot</sub>
- **[eigent-ai/eigent](https://github.com/eigent-ai/eigent)** · 15,872★ · TypeScript · Hot · health 78  
  Open-source cowork desktop — local/free multi-agent productivity workspace.  
  <sub>topics: agent-framework, agent-skills, agentic-ai, agentic-workflow, claude-cowork, claude-cowork-alternative</sub>
- **[OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator)** · 15,049★ · TypeScript · Hot · health 88  
  Orchestrates parallel coding agents — plans tasks, spawns agents, handles CI autonomously.  
  <sub>topics: claude-code, codex-cli, orchestration, orchestrator, skills, agent-fleet</sub>
- **[vercel-labs/coding-agent-template](https://github.com/vercel-labs/coding-agent-template)** · 1,801★ · TypeScript · Declining · health 27  
  Multi-agent coding platform on Vercel Sandbox + AI Gateway; declining, verify first.  
  <sub>topics: —</sub>
- **[emanuele-em/kanzo](https://github.com/emanuele-em/kanzo)** · 1,324★ · Rust · Hot · health 77  
  Kanban board + MCP server in one 4.5 MB binary — you and your coding agents share one task board; 10–60 tokens per agent reply.  
  <sub>topics: ai-agents, claude-code, cli, codex, coding-agents, kanban</sub>

### Agent OS / long-horizon harness

_Runtimes for always-on, long-running autonomous agents._

- **[elizaOS/eliza](https://github.com/elizaOS/eliza)** · 19,913★ · Java · Mature · health 80  
  Open-source 'agentic operating system' — long-running autonomous agents.  
  <sub>topics: agent, agentic, ai, autonomous, chatbot, crypto</sub>

### Durable / production infra

_Fault-tolerant execution — retries, checkpointing, deterministic routing for production._

- **[flyteorg/flyte](https://github.com/flyteorg/flyte)** · 7,803★ · Go · Classic · health 90  
  Dynamic, resilient orchestration (Go/K8s) — coordinate data, models & compute durably.  
  <sub>topics: machine-learning, scale, workflow, mlops, python, agent-runtime</sub>
- **[inngest/agent-kit](https://github.com/inngest/agent-kit)** · 963★ · TypeScript · Declining · health 17  
  Build multi-agent networks in TS with deterministic routing + durable execution via MCP.  
  <sub>topics: agent, ai, ai-agent-framework, ai-agents, llm</sub>

### Vertical / domain systems

_Reference multi-agent architectures for a specific domain._

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** · 123,575★ · Python · Mature · health 78  
  Multi-agent LLM framework for financial trading — a vertical reference architecture (79k★).  
  <sub>topics: agent, finance, llm, multiagent, trading</sub>
- **[assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher)** · 30,878★ · Python · Classic · health 80  
  Autonomous research agent that plans, searches & writes cited reports.  
  <sub>topics: ai, python, agent, automation, research, search</sub>

### Protocols & meta-frameworks

_Standards and meta-layers above any single framework._

- **[sentient-agi/ROMA](https://github.com/sentient-agi/ROMA)** · 5,200★ · Python · Declining · health 14  
  Recursive meta-agent framework to build multi-agent systems; declining/low health.  
  <sub>topics: —</sub>
- **[TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)** · 3,636★ · TypeScript · Declining · health 30  
  Agent-teams orchestrator aimed at one-person companies.  
  <sub>topics: —</sub>
- **[veegee82/agent-workflow-protocol](https://github.com/veegee82/agent-workflow-protocol)** · 19★ · Python · Declining · health 19  
  Open standard for multi-agent workflows — scripted pipelines to self-organizing teams.  
  <sub>topics: agentic, agentic-ai, agentic-ai-development, agentic-engineering, agentic-framework, agentic-workflow</sub>

## Graph analysis — how they relate

**Community clustering.** These 37 tools span **15 of the graph's 45 communities**.

- **Community 11** (10): `langchain-ai/langgraph`, `VoltAgent/voltagent`, `i-am-bee/beeai-framework`, `liquidos-ai/AutoAgents`, `crewAIInc/crewAI`, `agno-agi/agno`, `n8n-io/n8n`, `langflow-ai/langflow`, `ruvnet/ruflo`, `inngest/agent-kit`
- **Community 30** (6): `agentscope-ai/agentscope`, `assafelovic/gpt-researcher`, `langgenius/dify`, `simstudioai/sim`, `elizaOS/eliza`, `flyteorg/flyte`
- **Community 35** (4): `FoundationAgents/MetaGPT`, `bytedance/deer-flow`, `TauricResearch/TradingAgents`, `veegee82/agent-workflow-protocol`
- **Community 7** (3): `stanfordnlp/dspy`, `OrchestratorInc/agent-orchestrator`, `getpaseo/paseo`
- **Community 6** (2): `camel-ai/camel`, `eigent-ai/eigent`
- **Community 0** (2): `wshobson/agents`, `Yeachan-Heo/oh-my-claudecode`
- **Community 1** (2): `vercel-labs/coding-agent-template`, `TinyAGI/tinyagi`

**Centrality (PageRank in the full 1,071-repo graph)** — most 'hub-like' orchestration tools in your ecosystem:

- `openai/openai-agents-python` — PageRank 0.0011
- `langchain-ai/langgraph` — PageRank 0.0010
- `liquidos-ai/AutoAgents` — PageRank 0.0009
- `agno-agi/agno` — PageRank 0.0009
- `microsoft/semantic-kernel` — PageRank 0.0007
- `huggingface/smolagents` — PageRank 0.0006
- `emanuele-em/kanzo` — PageRank 0.0006
- `inngest/agent-kit` — PageRank 0.0006
- `wshobson/agents` — PageRank 0.0006
- `langgenius/dify` — PageRank 0.0005

**Direct links between orchestration tools** (top similarity edges where both endpoints are in this report):

- `i-am-bee/beeai-framework` ⇄ `openai/openai-agents-python` (w=0.574) — topics: agents, ai, framework, llm; authors: dependabot[bot]
- `agno-agi/agno` ⇄ `crewAIInc/crewAI` (w=0.555) — topics: agents, ai, ai-agents; authors: HhH666-ux, lxcxjxhx, lkuko
- `crewAIInc/crewAI` ⇄ `liquidos-ai/AutoAgents` (w=0.429) — topics: agents, ai, ai-agents
- `liquidos-ai/AutoAgents` ⇄ `inngest/agent-kit` (w=0.429) — topics: ai, ai-agents, llm
- `camel-ai/camel` ⇄ `eigent-ai/eigent` (w=0.367) — topics: multi-agent-systems; authors: Wendong-Fan, fengju0213
- `simstudioai/sim` ⇄ `langgenius/dify` (w=0.336) — topics: agentic-workflow, ai, nextjs, deepseek; authors: b84330808
- `assafelovic/gpt-researcher` ⇄ `langgenius/dify` (w=0.301) — topics: ai, python, agent, automation; authors: pei711
- `FoundationAgents/MetaGPT` ⇄ `TauricResearch/TradingAgents` (w=0.300) — topics: agent, llm
- `FoundationAgents/MetaGPT` ⇄ `agentscope-ai/agentscope` (w=0.264) — topics: agent, llm, multi-agent
- `langflow-ai/langflow` ⇄ `langchain-ai/langgraph` (w=0.250) — topics: chatgpt, generative-ai, agents, multiagent
- `veegee82/agent-workflow-protocol` ⇄ `google/adk-python` (w=0.217) — topics: agentic, agentic-ai, agents, llms
- `strands-agents/harness-sdk` ⇄ `eigent-ai/eigent` (w=0.165) — topics: agentic-ai, multi-agent-systems, agent-framework
- `eigent-ai/eigent` ⇄ `ruvnet/ruflo` (w=0.165) — topics: agentic-ai, agentic-workflow, multi-agent-systems

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Orchestration is load-bearing — weigh this heavily before standardizing on one.

| Tool | Approach | Health | Lifecycle | Activity | Bus factor |
|---|---|---|---|---|---|
| microsoft/semantic-kernel | Code-first agent frameworks | 100 | Classic | very active | 10 |
| n8n-io/n8n | Visual / low-code platforms | 100 | Classic | very active | 10 |
| agentscope-ai/agentscope | Code-first agent frameworks | 97 | Mature | very active | 6 |
| agno-agi/agno | Code-first agent frameworks | 97 | Classic | very active | 5 |
| crewAIInc/crewAI | Code-first agent frameworks | 93 | Classic | very active | 4 |
| i-am-bee/beeai-framework | Code-first agent frameworks | 90 | Mature | very active | 3 |
| flyteorg/flyte | Durable / production infra | 90 | Classic | very active | 3 |
| bytedance/deer-flow | Coding-agent orchestration | 89 | Hot | very active | 11 |
| OrchestratorInc/agent-orchestrator | Coding-agent orchestration | 88 | Hot | very active | 3 |
| strands-agents/harness-sdk | Code-first agent frameworks | 86 | Hot | very active | 3 |
| openai/openai-agents-python | Code-first agent frameworks | 85 | Hot | very active | 2 |
| langgenius/dify | Visual / low-code platforms | 85 | Classic | very active | 2 |
| google/adk-python | Code-first agent frameworks | 84 | Hot | very active | 2 |
| VoltAgent/voltagent | Code-first agent frameworks | 82 | Mature | active | 4 |
| assafelovic/gpt-researcher | Vertical / domain systems | 80 | Classic | very active | 1 |
| Yeachan-Heo/oh-my-claudecode | Coding-agent orchestration | 80 | Hot | very active | 1 |
| elizaOS/eliza | Agent OS / long-horizon harness | 80 | Mature | very active | 1 |
| langflow-ai/langflow | Visual / low-code platforms | 79 | Classic | very active | 1 |
| ruvnet/ruflo | Coding-agent orchestration | 79 | Hot | very active | 1 |
| langchain-ai/langgraph | Code-first agent frameworks | 78 | Classic | very active | 1 |
| stanfordnlp/dspy | Code-first agent frameworks | 78 | Classic | very active | 1 |
| simstudioai/sim | Visual / low-code platforms | 78 | Mature | very active | 1 |
| eigent-ai/eigent | Coding-agent orchestration | 78 | Hot | very active | 1 |
| getpaseo/paseo | Coding-agent orchestration | 78 | Hot | very active | 1 |
| TauricResearch/TradingAgents | Vertical / domain systems | 78 | Mature | very active | 1 |
| emanuele-em/kanzo | Coding-agent orchestration | 77 | Hot | very active | 1 |
| code-yeongyu/oh-my-openagent | Coding-agent orchestration | 77 | Rising | very active | 1 |
| camel-ai/camel | Code-first agent frameworks | 75 | Classic | very active | 2 |
| liquidos-ai/AutoAgents | Code-first agent frameworks | 68 | Mature | active | 2 |
| huggingface/smolagents | Code-first agent frameworks | 68 | Mature | very active | 3 |
| wshobson/agents | Coding-agent orchestration | 68 | Hot | very active | 2 |
| TinyAGI/tinyagi | Protocols & meta-frameworks | 30 | Declining | stale | 0 |
| vercel-labs/coding-agent-template | Coding-agent orchestration | 27 | Declining | slowing | 0 |
| veegee82/agent-workflow-protocol | Protocols & meta-frameworks | 19 | Declining | stale | 0 |
| inngest/agent-kit | Durable / production infra | 17 | Declining | stale | 0 |
| FoundationAgents/MetaGPT | Code-first agent frameworks | 14 | Declining | stale | 0 |
| sentient-agi/ROMA | Protocols & meta-frameworks | 14 | Declining | stale | 0 |

⚠️ **Adopt with caution** (low health and/or declining): `FoundationAgents/MetaGPT`, `sentient-agi/ROMA`, `inngest/agent-kit`, `veegee82/agent-workflow-protocol`, `vercel-labs/coding-agent-template`, `TinyAGI/tinyagi`.

## Coverage

Your stars now cover the canonical orchestration frameworks (crewAI, AutoGen, LangGraph, langflow, semantic-kernel, ADK, agentscope, …) — no major gaps left in this category.

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Selection**: scan for orchestration / multi-agent / swarm / workflow / agent-framework signals, then manual curation by approach. RAG frameworks, eval/observability platforms, and single-purpose agents were routed to their own reports or excluded; only tools whose *primary* job is coordinating agents/steps appear here.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub. Re-run after a fresh `classified.json` to refresh.

### Retired from the scored set

Archived upstream, so they no longer appear in this report's tables — `sample.mjs` excludes archived repos. Metrics are frozen at the date shown and are not refreshed.

| Project | Category | Why it left | Metrics as of |
|---|---|---|---|
| [`FlowiseAI/Flowise`](https://github.com/FlowiseAI/Flowise) | Visual / low-code platforms | Archived upstream; last in the dataset 2026-08-11. Build AI agents visually; popular drag-and-drop builder. | 2026-08-11 |

<sub>Tools covered: 37 across 7 approaches · Snapshot: 2026-11-23T16:50:13.482Z</sub>
