# Harness Engineering — Ten Methods That Make an Agent Harness Good

> Derived from **kaiser-data**'s 2,728 starred repos (snapshot `2026-11-09T14:44:53.318Z`), cross-referenced with the repo-similarity graph (2,728 nodes / 9,126 edges, 41 communities). Evidence frozen 2026-10-01.
>
> Generated 2026-11-09 by `scripts/reports/harness_engineering.py` (regenerate any time — no API cost).

![Top tools by stars](assets/harness-engineering-top-tools.svg)

![Tools per category](assets/harness-engineering-categories.svg)


## Executive summary

- The **agent-harnesses** report asks *which* harness approach to pick. This one asks *how to make any harness good* — ten methods, in the order you'd apply them, each backed by published evidence and mapped to **48 repos** in your stars (**1,924,178★**) that implement it.
- **The through-line: the harness should do less, and verify more.** The 2026 evidence consistently rewards *subtraction* (fewer tools, shorter instructions, elided context) and *external ground truth* (tests, browsers, hooks), and punishes self-assessment and unenforced prose.
- **Three highest-leverage moves**, if you do nothing else:
  1. **External verification** — self-grading loops claimed progress 100% of the time while 56% of cycles made none (Park & Choi, 2026).
  2. **Lean action space** — code-against-tools cut one workflow from ~150k to ~2k tokens (Anthropic); removing 80% of tools took one agent from 80% to 100% success (Vercel).
  3. **Context management** — the single most important component as budgets shrink, mostly by preventing overflow failures (Fan et al., 176 configs).
- **Measure your own harness.** Component effects are model- and budget-dependent, and almost no public harness repos log whether their rules fire.

## The ten methods

| # | Method | The rule | Evidence |
|---|---|---|---|
| 1 | **Minimal loop first** | Start from the smallest loop that works, and add a harness component only in response to an observed failure — never on the assumption the model can't cope. | Practitioner consensus in 2026 (HumanLayer, marmelab survey). Fan et al. (176 configurations, 4 models) found a bash-only action space gives capable models *substantially lower cost* at equal performance; heavy scaffolding mostly helps weaker models. |
| 2 | **Small instruction budget** | Keep the always-loaded instruction file short and hand-written (~60–100 lines); push everything else into skills or docs that load on demand. | HumanLayer recommends <60 lines; OpenAI's harness write-up (via marmelab) lists context crowding, importance dilution, decay and untestability as failure modes of large instruction files. marmelab reports machine-generated context files *reduced* success and raised cost 20%+; human-written ones gained only ~4%. |
| 3 | **Context engineering** | Treat the context window as the scarcest resource: keep the prefix stable for KV-cache hits, make history append-only, elide bulky tool output with rules *before* resorting to LLM summarization, and make compression restorable. | Fan et al.: context management matters most as budgets shrink, and rule-based elision before summarization works best — mainly by preventing overflow failures. Manus: KV-cache hit rate is the key production metric (cached input ~10× cheaper); keep URLs/paths so dropped content can be re-fetched. |
| 4 | **Lean action space** | Fewer, sharper tools. Prefer CLIs the model already knows over wide MCP surfaces, load tool definitions on demand, and let the agent write code against tools so intermediate data never enters context. | Anthropic's *code execution with MCP* (Nov 2025): a Drive→Salesforce workflow fell from ~150k to ~2k tokens (−98.7%). Vercel (as reported by marmelab) removed 80% of an agent's tools: success 80%→100%, latency 724s→141s. HumanLayer swapped the Linear MCP server for a small CLI + examples. |
| 5 | **External verification** | Give the agent back-pressure it cannot talk its way past: type checks, tests, linters, a browser on the real app. Swallow success output; surface only errors, with the fix written into the message. | Park & Choi (2026): self-evaluating loops claimed improvement 100% of the time while 56% of cycles made zero or negative progress (the 'progress mirage'); LLM judges accepted 44% of real regressions. The mirage vanished on tasks with an externally verifiable boundary. |
| 6 | **State on disk** | Persist the plan, feature list and progress to files (JSON beats markdown for anything the agent must not rewrite), commit often, and let each fresh session re-orient from those artifacts. | Anthropic's long-running harness (Nov 2025): an initializer agent writes a feature list + progress file + git repo; each coding session picks one item, verifies it, updates the files. JSON was edited inappropriately less often than markdown. Manus keeps a live todo.md to hold goals in recent attention. |
| 7 | **Sub-agents for isolation** | Use sub-agents to *isolate context*, not to role-play: give them a bounded task (explore, trace, research) and have them return a condensed answer with `file:line` citations. Keep handoff chains short. | HumanLayer: sub-agents keep the parent in the 'smart zone' and can run on cheaper models. marmelab collects counter-evidence on *reviewer* agents (one study: −8pp on a 41% baseline) and Microsoft's finding that >4 handoffs almost always failed. |
| 8 | **Guards & sandboxes** | Enforce rules with code, not prose: pre-execution hooks, permission gates, and an isolated sandbox per agent. Scan third-party skills and MCP servers before trust. | marmelab cites an analysis of 481 public CLAUDE.md files where only 4–16% of written security rules had any detectable enforcement, and reports action-by-action approval beating pre-written permission rules by 20+pp at blocking bad actions. HumanLayer warns skill registries have shipped malicious skills. |
| 9 | **Durable runs & approvals** | Make long runs survivable: checkpoint, retry and resume instead of restarting; put human approval at the plan and at irreversible actions rather than everywhere. | Follows from methods 6 and 8: durable state lets a crashed or rate-limited run resume, and approval at the irreversible step is where action-by-action review pays off. Evidence here is architectural rather than benchmarked. |
| 10 | **Observe & eval the harness** | Trace what the harness actually does (which rules fire, hook blocks, iterations, tokens), evaluate harness changes on a frozen task set with both should-fire and should-not-fire cases, and record why every control exists so it can be removed when models improve. | marmelab's survey: only 5 of 391 harness repos logged skill activations or blocks, and only one published before/after measurements for its rules. Fan et al. show component effects are model- and budget-dependent — so measure on *your* model. |

## Best repo per method

Top three from your stars for applying each method. ⚠ marks picks the snapshot reads as declining/abandoned.

| Method | 🥇 First pick | 🥈 Second | 🥉 Third |
|---|---|---|---|
| **1. Minimal loop first** | `pi` — smallest complete loop to fork | `claude-code-system-prompts` — read a mature harness's prompts | `SWE-agent` — ACI design as a research reference |
| **2. Small instruction budget** | `agents.md` — the portable short contract _(⚠ declining)_ | `skills` — canonical progressive-disclosure format | `superpowers` — methodology packaged as skills |
| **3. Context engineering** | `context-mode` — keeps raw tool output out of context | `rtk` — drop-in shell-output filter | `headroom` — compresses logs/files/RAG chunks |
| **4. Lean action space** | `jcodemunch-mcp` — symbol-level reads, not whole files | `serena` — LSP-backed retrieval + edits | `agent-browser` — compact agent-first CLI |
| **5. External verification** | `playwright-mcp` — agent checks the running app | `ultracite` — fast deterministic lint gate | `open-code-review` — review pass on every diff |
| **6. State on disk** | `planning-with-files` — plan/progress files out of the box | `spec-kit` — spec as the durable source of truth | `ralph` — fresh-context loop over a PRD _(⚠ declining)_ |
| **7. Sub-agents for isolation** | `deepagents` — isolation built into the SDK | `awesome-claude-code-subagents` — patterns to copy | `oh-my-claudecode` — delegation inside Claude Code |
| **8. Guards & sandboxes** | `cc-safety-net` — blocks destructive commands pre-exec | `container-use` — one container per agent | `SkillSpector` — vet skills before loading |
| **9. Durable runs & approvals** | `open-multi-agent` — durable approvals + run records | `trigger.dev` — retries/resume for long jobs | `plannotator` — human approves the plan |
| **10. Observe & eval the harness** | `langfuse` — traces + evals, self-hostable | `harbor` — frozen task-set evals | `codeburn` — token/cost per agent, local |

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Method | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 2. Small instruction budget | Shell | MIT | 314,888 (▲3,897) | Mature | 64 | active | 6d ago | 1.1y | 1 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | 2. Small instruction budget | — | — | 231,187 (▲2,841) | Declining | 18 | stale | 6mo ago | 9mo | 0 |
| [anthropics/skills](https://github.com/anthropics/skills) | 2. Small instruction budget | Python | — | 190,342 (▲3,726) | Mature | 50 | active | 3d ago | 1.1y | 6 |
| [github/spec-kit](https://github.com/github/spec-kit) | 6. State on disk | Python | MIT | 148,915 (▲3,667) | Hot | 84 | very active | 0d ago | 1.2y | 28 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | 1. Minimal loop first | TypeScript | MIT | 121,019 (▲1,483) | Hot | 80 | very active | 0d ago | 1.3y | 7 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 3. Context engineering | Rust | Apache-2.0 | 85,981 (▲681) | Hot | 75 | very active | 0d ago | 9mo | 13 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 3. Context engineering | Python | Apache-2.0 | 79,211 (▲580) | Hot | 99 | very active | 0d ago | 10mo | 49 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 6. State on disk | TypeScript | MIT | 74,392 (▲708) | Hot | 83 | very active | 1d ago | 1.3y | 33 |
| [upstash/context7](https://github.com/upstash/context7) | 4. Lean action space | TypeScript | MIT | 64,415 (▲338) | Hot | 85 | very active | 0d ago | 1.6y | 11 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 5. External verification | Go | Apache-2.0 | 49,705 (▲421) | Hot | 98 | very active | 0d ago | 5mo | 50 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | 4. Lean action space | Rust | Apache-2.0 | 48,185 (▲2,966) | Hot | 78 | very active | 0d ago | 10mo | 5 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 7. Sub-agents for isolation | TypeScript | MIT | 40,710 (▲197) | Hot | 80 | very active | 0d ago | 10mo | 8 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | 5. External verification | TypeScript | Apache-2.0 | 39,373 (▲394) | Hot | 79 | very active | 3d ago | 1.6y | 7 |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | 10. Observe & eval the harness | TypeScript | NOASSERTION | 37,199 (▲314) | Classic | 89 | very active | 0d ago | 3.5y | 19 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 3. Context engineering | JavaScript | NOASSERTION | 33,741 (▲510) | Rising | 80 | very active | 0d ago | 8mo | 2 |
| [oraios/serena](https://github.com/oraios/serena) | 4. Lean action space | Python | NOASSERTION | 31,232 (▲217) | Hot | 78 | very active | 12d ago | 1.6y | 17 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | 7. Sub-agents for isolation | Python | MIT | 31,137 (▲235) | Hot | 89 | very active | 0d ago | 1.3y | 15 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 6. State on disk | Shell | MIT | 27,966 (▲140) | Hot | 79 | very active | 2d ago | 10mo | 19 |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | 10. Observe & eval the harness | TypeScript | MIT | 26,988 (▲246) | Mature | 79 | very active | 0d ago | 3.5y | 1 |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 7. Sub-agents for isolation | Shell | MIT | 26,440 (▲164) | Hot | 58 | very active | 7d ago | 1.3y | 10 |
| [agentsmd/agents.md](https://github.com/agentsmd/agents.md) | 2. Small instruction budget | TypeScript | MIT | 25,409 (▲132) | Declining | 35 | active | 2mo ago | 1.2y | 2 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 8. Guards & sandboxes | Python | Apache-2.0 | 25,011 (▲1,064) | Hot | 83 | very active | 3d ago | 7mo | 3 |
| [snarktank/ralph](https://github.com/snarktank/ralph) | 6. State on disk | TypeScript | MIT | 22,185 (▲74) | Declining | 10 | stale | 9mo ago | 10mo | 0 |
| [SWE-agent/SWE-agent](https://github.com/SWE-agent/SWE-agent) | 1. Minimal loop first | Python | MIT | 20,765 (▲53) | Mature | 39 | active | 7d ago | 2.6y | 0 |
| [triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev) | 9. Durable runs & approvals | TypeScript | Apache-2.0 | 16,734 (▲40) | Classic | 88 | very active | 6d ago | 3.9y | 12 |
| [Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts) | 1. Minimal loop first | JavaScript | MIT | 13,112 (▲42) | Rising | 77 | very active | 4d ago | 11mo | 1 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 10. Observe & eval the harness | TypeScript | MIT | 11,737 (▲77) | Hot | 79 | very active | 1d ago | 7mo | 8 |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | 6. State on disk | TypeScript | MIT | 11,736 (▲55) | Hot | 68 | very active | 0d ago | 5mo | 10 |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | 9. Durable runs & approvals | TypeScript | Apache-2.0 | 9,933 (▲113) | Rising | 79 | very active | 0d ago | 10mo | 1 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 5. External verification | TypeScript | MIT | 9,800 (▲61) | Hot | 77 | very active | 0d ago | 7mo | 31 |
| [SWE-agent/mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent) | 1. Minimal loop first | Python | MIT | 9,451 (▲415) | Declining | 61 | active | 7d ago | 1.4y | 2 |
| [open-multi-agent/open-multi-agent](https://github.com/open-multi-agent/open-multi-agent) | 9. Durable runs & approvals | TypeScript | MIT | 7,052 (▲10) | Hot | 79 | very active | 3d ago | 7mo | 14 |
| [harbor-framework/harbor](https://github.com/harbor-framework/harbor) | 10. Observe & eval the harness | Python | Apache-2.0 | 6,907 (▲189) | Hot | 89 | very active | 1d ago | 1.3y | 37 |
| [dagger/container-use](https://github.com/dagger/container-use) | 8. Guards & sandboxes | Go | Apache-2.0 | 4,087 (▲4) | Mature | 42 | active | 1mo ago | 1.5y | 2 |
| [haydenbleasel/ultracite](https://github.com/haydenbleasel/ultracite) | 5. External verification | TypeScript | MIT | 3,367 | Classic | 79 | very active | 8d ago | 4.6y | 4 |
| [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) | 10. Observe & eval the harness | Python | MIT | 3,208 (▲53) | Mature | 87 | very active | 0d ago | 3.0y | 33 |
| [VibiumDev/vibium](https://github.com/VibiumDev/vibium) | 5. External verification | Go | Apache-2.0 | 2,957 (▲16) | Hot | 79 | very active | 2d ago | 11mo | 6 |
| [alexgreensh/token-optimizer](https://github.com/alexgreensh/token-optimizer) | 3. Context engineering | Python | NOASSERTION | 2,940 (▲96) | Hot | 80 | very active | 0d ago | 8mo | 3 |
| [jgravelle/jcodemunch-mcp](https://github.com/jgravelle/jcodemunch-mcp) | 4. Lean action space | Python | NOASSERTION | 2,838 (▲10) | Hot | 80 | very active | 0d ago | 9mo | 4 |
| [Infisical/agent-vault](https://github.com/Infisical/agent-vault) | 8. Guards & sandboxes | Go | NOASSERTION | 2,491 (▲24) | Hot | 67 | very active | 2d ago | 7mo | 6 |
| [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) | 8. Guards & sandboxes | TypeScript | MIT | 1,976 (▲84) | Hot | 80 | very active | 0d ago | 10mo | 3 |
| [e2b-dev/runtime](https://github.com/e2b-dev/runtime) | 8. Guards & sandboxes | Go | Apache-2.0 | 1,823 (▲25) | Classic | 93 | very active | 0d ago | 3.3y | 18 |
| [microsoft/waza](https://github.com/microsoft/waza) | 10. Observe & eval the harness | Go | MIT | 1,506 (▲8) | Hot | 78 | very active | 1d ago | 8mo | 7 |
| [chunkhound/chunkhound](https://github.com/chunkhound/chunkhound) | 3. Context engineering | Python | MIT | 1,460 (▲4) | Hot | 90 | very active | 0d ago | 1.4y | 25 |
| [petergyang/human-review](https://github.com/petergyang/human-review) | 9. Durable runs & approvals | JavaScript | MIT | 1,448 (▲3) | Mature | 55 | active | 1mo ago | 3mo | 1 |
| [repoprompt/repoprompt-ce](https://github.com/repoprompt/repoprompt-ce) | 3. Context engineering | Swift | Apache-2.0 | 986 (▲10) | Hot | 77 | very active | 0d ago | 6mo | 3 |
| [Nicolepcx/harness_engineering](https://github.com/Nicolepcx/harness_engineering) | 1. Minimal loop first | Jupyter Notebook | — | 172 (▲3) | Declining | 35 | slowing | 2mo ago | 3mo | 1 |
| [strands-labs/harness-optimizer](https://github.com/strands-labs/harness-optimizer) | 10. Observe & eval the harness | Python | Apache-2.0 | 61 (▲1) | Declining | 50 | active | 21d ago | 5mo | 3 |

## By method

### 1. Minimal loop first

**Rule.** Start from the smallest loop that works, and add a harness component only in response to an observed failure — never on the assumption the model can't cope.

**Evidence.** Practitioner consensus in 2026 (HumanLayer, marmelab survey). Fan et al. (176 configurations, 4 models) found a bash-only action space gives capable models *substantially lower cost* at equal performance; heavy scaffolding mostly helps weaker models.

- **[earendil-works/pi](https://github.com/earendil-works/pi)** · 121,019★ · TypeScript · Hot  
  Unified LLM API + small agent loop + TUI — a readable baseline to grow a harness from.  
  <sub>topics: —</sub>
- **[SWE-agent/SWE-agent](https://github.com/SWE-agent/SWE-agent)** · 20,765★ · Python · Mature  
  The project that named the *agent-computer interface* — proof that interface design moves scores.  
  <sub>topics: agent, ai, developer-tools, llm, agent-based-model, lms, cybersecurity</sub>
- **[Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** · 13,112★ · JavaScript · Rising  
  Every part of Claude Code's system prompt, tool descriptions and sub-agent prompts — a production harness to read.  
  <sub>topics: claude-code, claude-code-system-prompts, system-prompts</sub>
- **[SWE-agent/mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)** · 9,451★ · Python · Declining  
  The SWE-agent team's ~100-line agent — bash as the only tool, no config sprawl — and it still scores >74% on SWE-bench Verified. The strongest evidence that a minimal loop is enough.  
  <sub>topics: agent, agentic-ai, agentic-ai-cli, ai, ai-agent, textual</sub>
- **[Nicolepcx/harness_engineering](https://github.com/Nicolepcx/harness_engineering)** · 172★ · Jupyter Notebook · Declining  
  Code for the O'Reilly *Harness Engineering* book — worked examples of each harness layer.  
  <sub>topics: ai, ai-agent, ai-agents, ai-governance, ai-security, harness, harness-ai, harness-design</sub>

### 2. Small instruction budget

**Rule.** Keep the always-loaded instruction file short and hand-written (~60–100 lines); push everything else into skills or docs that load on demand.

**Evidence.** HumanLayer recommends <60 lines; OpenAI's harness write-up (via marmelab) lists context crowding, importance dilution, decay and untestability as failure modes of large instruction files. marmelab reports machine-generated context files *reduced* success and raised cost 20%+; human-written ones gained only ~4%.

- **[obra/superpowers](https://github.com/obra/superpowers)** · 314,888★ · Shell · Mature  
  Skills + methodology (TDD, plans, review) delivered as progressively-disclosed skills.  
  <sub>topics: ai, brainstorming, coding, obra, sdlc, skills, superpowers, subagent-driven-development</sub>
- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** · 231,187★ · — · Declining  
  A single short CLAUDE.md of behavioural rules — the minimal-instructions end of the spectrum.  
  <sub>topics: —</sub>
- **[anthropics/skills](https://github.com/anthropics/skills)** · 190,342★ · Python · Mature  
  Reference Agent Skills: knowledge loaded on demand, not pinned in every turn.  
  <sub>topics: agent-skills</sub>
- **[agentsmd/agents.md](https://github.com/agentsmd/agents.md)** · 25,409★ · TypeScript · Declining  
  AGENTS.md — one short, portable repo contract instead of a sprawling prompt.  
  <sub>topics: —</sub>

### 3. Context engineering

**Rule.** Treat the context window as the scarcest resource: keep the prefix stable for KV-cache hits, make history append-only, elide bulky tool output with rules *before* resorting to LLM summarization, and make compression restorable.

**Evidence.** Fan et al.: context management matters most as budgets shrink, and rule-based elision before summarization works best — mainly by preventing overflow failures. Manus: KV-cache hit rate is the key production metric (cached input ~10× cheaper); keep URLs/paths so dropped content can be re-fetched.

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** · 85,981★ · Rust · Hot  
  CLI proxy that filters and condenses shell output for coding agents.  
  <sub>topics: agentic-coding, ai-coding, anthropic, claude-code, cli, command-line-tool, cost-reduction, developer-tools</sub>
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** · 79,211★ · Python · Hot  
  Compresses tool outputs, logs, files and RAG chunks before they reach the model.  
  <sub>topics: agent, ai, anthropic, compression, context-engineering, context-window, fastapi, langchain</sub>
- **[mksglu/context-mode](https://github.com/mksglu/context-mode)** · 33,741★ · JavaScript · Rising  
  Sandboxes tool output out of the context window (claims ~98% reduction).  
  <sub>topics: claude, claude-code, claude-code-plugins, mcp, skills, codex, copilot, opencode</sub>
- **[alexgreensh/token-optimizer](https://github.com/alexgreensh/token-optimizer)** · 2,940★ · Python · Hot  
  Finds 'ghost tokens' and helps sessions survive compaction without quality decay.  
  <sub>topics: claude-code, token-optimization, context-window, token-usage, context-engineering, token-optimizer, claude-plugin, codex</sub>
- **[chunkhound/chunkhound](https://github.com/chunkhound/chunkhound)** · 1,460★ · Python · Hot  
  Local code-aware indexing (semantic + regex) served over MCP — give the agent a map of the codebase instead of raw greps.  
  <sub>topics: agent, ai, duckdb, mcp-server, semantic-search, tree-sitter, rag</sub>
- **[repoprompt/repoprompt-ce](https://github.com/repoprompt/repoprompt-ce)** · 986★ · Swift · Hot  
  Community edition of RepoPrompt — hand-pick files and code maps into a precise context bundle instead of letting the agent grep blindly.  
  <sub>topics: ai-agents, coding-agents, context-engineering, developer-tools, macos, mcp, model-context-protocol, prompt-engineering</sub>

### 4. Lean action space

**Rule.** Fewer, sharper tools. Prefer CLIs the model already knows over wide MCP surfaces, load tool definitions on demand, and let the agent write code against tools so intermediate data never enters context.

**Evidence.** Anthropic's *code execution with MCP* (Nov 2025): a Drive→Salesforce workflow fell from ~150k to ~2k tokens (−98.7%). Vercel (as reported by marmelab) removed 80% of an agent's tools: success 80%→100%, latency 724s→141s. HumanLayer swapped the Linear MCP server for a small CLI + examples.

- **[upstash/context7](https://github.com/upstash/context7)** · 64,415★ · TypeScript · Hot  
  Fetches current, version-specific docs on demand instead of stuffing them into prompts.  
  <sub>topics: llm, mcp, mcp-server, vibe-coding</sub>
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** · 48,185★ · Rust · Hot  
  Browser automation as a compact CLI built for agents rather than a large MCP surface.  
  <sub>topics: —</sub>
- **[oraios/serena](https://github.com/oraios/serena)** · 31,232★ · Python · Hot  
  Semantic (LSP-backed) retrieval and editing tools — fewer, sharper code tools.  
  <sub>topics: agent, ai, vibe-coding, mcp-server, ai-coding, language-server, programming, claude</sub>
- **[jgravelle/jcodemunch-mcp](https://github.com/jgravelle/jcodemunch-mcp)** · 2,838★ · Python · Hot  
  Symbol-level code retrieval — return the function, not the file.  
  <sub>topics: claude, claude-code, ai-coding, ast, code-intelligence, context-window, cursor, developer-tools</sub>

### 5. External verification

**Rule.** Give the agent back-pressure it cannot talk its way past: type checks, tests, linters, a browser on the real app. Swallow success output; surface only errors, with the fix written into the message.

**Evidence.** Park & Choi (2026): self-evaluating loops claimed improvement 100% of the time while 56% of cycles made zero or negative progress (the 'progress mirage'); LLM judges accepted 44% of real regressions. The mirage vanished on tasks with an externally verifiable boundary.

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** · 49,705★ · Go · Hot  
  Hybrid deterministic + LLM code review run against the agent's diff.  
  <sub>topics: agent, code-review, code-review-assistant, harness, repository-level-context, agent-skills</sub>
- **[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)** · 39,373★ · TypeScript · Hot  
  Lets the agent drive the real app and check its own UI changes.  
  <sub>topics: mcp, playwright</sub>
- **[modem-dev/hunk](https://github.com/modem-dev/hunk)** · 9,800★ · TypeScript · Hot  
  Review-first terminal diff viewer — keeps a human verifying what the agent changed.  
  <sub>topics: cli, code-review, diff, git, tui, agents, jj, jujutsu</sub>
- **[haydenbleasel/ultracite](https://github.com/haydenbleasel/ultracite)** · 3,367★ · TypeScript · Classic  
  Zero-config lint/format — cheap, deterministic back-pressure inside the loop.  
  <sub>topics: biome, formatter, linter, cursor, mcp, vscode, windsurf, zed</sub>
- **[VibiumDev/vibium](https://github.com/VibiumDev/vibium)** · 2,957★ · Go · Hot  
  Verification layer for coding agents — browser-driven checks that the change actually works, outside the model.  
  <sub>topics: —</sub>

### 6. State on disk

**Rule.** Persist the plan, feature list and progress to files (JSON beats markdown for anything the agent must not rewrite), commit often, and let each fresh session re-orient from those artifacts.

**Evidence.** Anthropic's long-running harness (Nov 2025): an initializer agent writes a feature list + progress file + git repo; each coding session picks one item, verifies it, updates the files. JSON was edited inappropriately less often than markdown. Manus keeps a live todo.md to hold goals in recent attention.

- **[github/spec-kit](https://github.com/github/spec-kit)** · 148,915★ · Python · Hot  
  Spec-driven development: the spec on disk steers each session.  
  <sub>topics: ai, copilot, development, engineering, prd, spec, spec-driven</sub>
- **[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)** · 74,392★ · TypeScript · Hot  
  Lightweight spec-driven workflow: change proposals and living specs in the repo carry intent across sessions.  
  <sub>topics: spec, ai, context-engineering, engineering, planning, prd, sdlc, spec-driven-development</sub>
- **[OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files)** · 27,966★ · Shell · Hot  
  Plans and progress persisted to files — crash-proof, resumable long tasks.  
  <sub>topics: claude, claude-code, claude-skills, manus, agent-skills, planning, autonomous-agents, codex</sub>
- **[snarktank/ralph](https://github.com/snarktank/ralph)** · 22,185★ · TypeScript · Declining  
  Fresh-context loop that re-reads a PRD and progress file until every item is done.  
  <sub>topics: —</sub>
- **[cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)** · 11,736★ · TypeScript · Hot  
  Patterns and starters for designing the iteration itself.  
  <sub>topics: agentic-ai, ai-agents, claude-code, codex, devops-automation, github-actions, grok, llm</sub>

### 7. Sub-agents for isolation

**Rule.** Use sub-agents to *isolate context*, not to role-play: give them a bounded task (explore, trace, research) and have them return a condensed answer with `file:line` citations. Keep handoff chains short.

**Evidence.** HumanLayer: sub-agents keep the parent in the 'smart zone' and can run on cheaper models. marmelab collects counter-evidence on *reviewer* agents (one study: −8pp on a 41% baseline) and Microsoft's finding that >4 handoffs almost always failed.

- **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** · 40,710★ · TypeScript · Hot  
  Multi-agent orchestration inside Claude Code — delegation via sub-agents.  
  <sub>topics: agentic-coding, ai-agents, claude, claude-code, oh-my-opencode, opencode, vibe-coding, automation</sub>
- **[langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)** · 31,137★ · Python · Hot  
  Planning + filesystem + sub-agents with isolated context windows, as a library.  
  <sub>topics: deepagents, langchain, langgraph, ai, python, typescript, harness, harness-engineering</sub>
- **[VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** · 26,440★ · Shell · Hot  
  100+ sub-agent definitions — useful as patterns for scoped, condensed returns.  
  <sub>topics: ai-agents, claude, claude-ai, claude-subagents, subagents, ai-agent-framework, ai-agent-tools, claude-code-subagents</sub>

### 8. Guards & sandboxes

**Rule.** Enforce rules with code, not prose: pre-execution hooks, permission gates, and an isolated sandbox per agent. Scan third-party skills and MCP servers before trust.

**Evidence.** marmelab cites an analysis of 481 public CLAUDE.md files where only 4–16% of written security rules had any detectable enforcement, and reports action-by-action approval beating pre-written permission rules by 20+pp at blocking bad actions. HumanLayer warns skill registries have shipped malicious skills.

- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** · 25,011★ · Python · Hot  
  Scans agent skills for malicious or vulnerable patterns before you load them.  
  <sub>topics: agent-security, agent-skills, agentic-ai, ai-security, claude-code, mcp, prompt-injection, security-scanner</sub>
- **[dagger/container-use](https://github.com/dagger/container-use)** · 4,087★ · Go · Mature  
  Per-agent containerized environments so agents can't trample each other or the host.  
  <sub>topics: —</sub>
- **[Infisical/agent-vault](https://github.com/Infisical/agent-vault)** · 2,491★ · Go · Hot  
  HTTP credential proxy for agents — the agent calls APIs through the vault and never holds the raw secret.  
  <sub>topics: agents, ai-agents, secrets-management</sub>
- **[kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net)** · 1,976★ · TypeScript · Hot  
  Pre-execution hook that blocks destructive git and filesystem commands.  
  <sub>topics: claude, claude-code, claude-code-plugin, security, codex, pi-extension, ai-agents, ai-safety</sub>
- **[e2b-dev/runtime](https://github.com/e2b-dev/runtime)** · 1,823★ · Go · Classic  
  E2B's sandbox runtime — isolated microVMs for AI-generated code, cloud or self-hosted (replaces the now-archived Daytona).  
  <sub>topics: ai-agents, code-interpreter, consul, devtools, firecracker, gcp, go, golang</sub>

### 9. Durable runs & approvals

**Rule.** Make long runs survivable: checkpoint, retry and resume instead of restarting; put human approval at the plan and at irreversible actions rather than everywhere.

**Evidence.** Follows from methods 6 and 8: durable state lets a crashed or rate-limited run resume, and approval at the irreversible step is where action-by-action review pays off. Evidence here is architectural rather than benchmarked.

- **[triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev)** · 16,734★ · TypeScript · Classic  
  Durable execution for agents and workflows — retries, resumes, long waits.  
  <sub>topics: automation, orchestration, scheduler, background-jobs, nextjs, serverless, ai, ai-agents</sub>
- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** · 9,933★ · TypeScript · Rising  
  Annotate and approve agent plans and diffs before execution continues.  
  <sub>topics: claude-code, opencode, obsidian, pi-mono, plan-mode, codex, agents, code-review</sub>
- **[open-multi-agent/open-multi-agent](https://github.com/open-multi-agent/open-multi-agent)** · 7,052★ · TypeScript · Hot  
  Agent runtime with durable approvals and verifiable run records.  
  <sub>topics: agent-framework, ai-agents, claude, llm, multi-agent, openai, typescript, anthropic</sub>
- **[petergyang/human-review](https://github.com/petergyang/human-review)** · 1,448★ · JavaScript · Mature  
  Google-Doc-style commenting on the agent's HTML/Markdown output, sent back as feedback — a human checkpoint with a real UI.  
  <sub>topics: ai-agents, claude-code, cli, codex, feedback, html, human-in-the-loop, markdown</sub>

### 10. Observe & eval the harness

**Rule.** Trace what the harness actually does (which rules fire, hook blocks, iterations, tokens), evaluate harness changes on a frozen task set with both should-fire and should-not-fire cases, and record why every control exists so it can be removed when models improve.

**Evidence.** marmelab's survey: only 5 of 391 harness repos logged skill activations or blocks, and only one published before/after measurements for its rules. Fan et al. show component effects are model- and budget-dependent — so measure on *your* model.

- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,199★ · TypeScript · Classic  
  Open-source tracing + evals — see which steps, tools and rules actually fire.  
  <sub>topics: analytics, llm, llmops, large-language-models, openai, self-hosted, ycombinator, monitoring</sub>
- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** · 26,988★ · TypeScript · Mature  
  Regression tests and red-teaming for prompts and agents in CI.  
  <sub>topics: llm, prompt-engineering, prompts, llmops, prompt-testing, testing, rag, evaluation</sub>
- **[getagentseal/codeburn](https://github.com/getagentseal/codeburn)** · 11,737★ · TypeScript · Hot  
  Local token/cost tracking across 37 coding agents — measure harness overhead.  
  <sub>topics: ai-coding, claude-code, cli, codex, cost-tracking, developer-tools, observability, terminal-ui</sub>
- **[harbor-framework/harbor](https://github.com/harbor-framework/harbor)** · 6,907★ · Python · Hot  
  Framework for evaluating and improving agents on frozen task sets.  
  <sub>topics: evals, rl-environments, terminal-bench</sub>
- **[UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai)** · 3,208★ · Python · Mature  
  The UK AI Security Institute's eval framework — tasks, solvers, scorers and sandboxed tool use; the standard way to put a harness under repeatable test.  
  <sub>topics: —</sub>
- **[microsoft/waza](https://github.com/microsoft/waza)** · 1,506★ · Go · Hot  
  CLI and framework for creating, testing and measuring Agent Skills — evals aimed at the skill layer, not the model.  
  <sub>topics: —</sub>
- **[strands-labs/harness-optimizer](https://github.com/strands-labs/harness-optimizer)** · 61★ · Python · Declining  
  Tunes harness 'formulas' against evals — early, research-grade, but the right idea: optimize the harness, not the prompt.  
  <sub>topics: agentic, agentic-ai, ai, genai, llm, machine-learning, strands-agents, strands-labs</sub>

## What the evidence says does *not* work

| Anti-pattern | Why |
|---|---|
| Auto-generated CLAUDE.md / AGENTS.md | Lowered task success vs. no file and raised cost 20%+ (marmelab survey). |
| Prose security rules without enforcement | 4–16% of written rules had detectable enforcement across 481 CLAUDE.md files. |
| Letting the agent grade its own progress | 100% claimed improvement vs. 56% no-or-negative progress (Park & Choi). |
| Adding a reviewer agent by default | One reported study: −8pp on a 41% baseline; separate generator/evaluator only with external signal. |
| Long specialist handoff chains | >4 handoffs almost always failed in Microsoft's Azure ops agent (via marmelab). |
| Exposing every tool you have | Removing 80% of tools raised success to 100% and cut latency ~5× (Vercel, via marmelab). |
| Timestamps / mutable history in the prompt prefix | Invalidates the KV-cache from that token on — ~10× input cost (Manus). |
| Irreversible summarization | Lost detail can't be recovered; prefer elision that keeps a path/URL (Manus, Fan et al.). |

## Harness scorecard

Ten yes/no checks, one per method. A "no" is where to work next.

| # | Check |
|---|---|
| 1 | Can you name the failure each harness component was added to fix? |
| 2 | Is the always-loaded instruction file under ~100 hand-written lines? |
| 3 | Is the prompt prefix byte-stable across turns, and is bulky tool output elided before it lands? |
| 4 | Could you delete a third of the tools without losing a task? (Try it.) |
| 5 | Does every 'done' claim pass a check the model can't fake — tests, types, a browser? |
| 6 | If the process dies now, can a fresh session resume from files alone? |
| 7 | Do sub-agents return condensed answers with `file:line` refs, in ≤4 hops? |
| 8 | Is every safety rule enforced by a hook or sandbox, not just written down? |
| 9 | Is human approval placed at the plan and at irreversible actions? |
| 10 | Do you have a frozen task set, and before/after numbers for your last harness change? |

## Graph analysis — how they relate

**Community clustering.** These 48 tools span **17 of the graph's 41 communities** — harness methods draw on very different corners of the ecosystem (context tooling, sandboxes, observability, skills).

- **Community 0** (10): `earendil-works/pi`, `agentsmd/agents.md`, `haydenbleasel/ultracite`, `VibiumDev/vibium`, `snarktank/ralph`, `cobusgreyling/loop-engineering`, `backnotprop/plannotator`, `petergyang/human-review`, `getagentseal/codeburn`, `UKGovernmentBEIS/inspect_ai`
- **Community 7** (4): `headroomlabs-ai/headroom`, `rtk-ai/rtk`, `alexgreensh/token-optimizer`, `modem-dev/hunk`
- **Community 9** (4): `oraios/serena`, `Yeachan-Heo/oh-my-claudecode`, `e2b-dev/runtime`, `open-multi-agent/open-multi-agent`
- **Community 10** (3): `Piebald-AI/claude-code-system-prompts`, `anthropics/skills`, `multica-ai/andrej-karpathy-skills`
- **Community 11** (3): `Nicolepcx/harness_engineering`, `langchain-ai/deepagents`, `VoltAgent/awesome-claude-code-subagents`
- **Community 16** (3): `obra/superpowers`, `alibaba/open-code-review`, `Infisical/agent-vault`
- **Community 8** (3): `mksglu/context-mode`, `NVIDIA/SkillSpector`, `triggerdotdev/trigger.dev`
- **Community 13** (3): `upstash/context7`, `github/spec-kit`, `Fission-AI/OpenSpec`
- **Community 18** (3): `langfuse/langfuse`, `harbor-framework/harbor`, `promptfoo/promptfoo`
- **Community 12** (2): `SWE-agent/SWE-agent`, `SWE-agent/mini-swe-agent`
- **Community 2** (2): `repoprompt/repoprompt-ce`, `jgravelle/jcodemunch-mcp`
- **Community 17** (2): `chunkhound/chunkhound`, `strands-labs/harness-optimizer`
- **Community 23** (2): `microsoft/playwright-mcp`, `microsoft/waza`

**Centrality (PageRank in the full 2,728-repo graph)**:

- `multica-ai/andrej-karpathy-skills` — PageRank 0.0014
- `microsoft/playwright-mcp` — PageRank 0.0012
- `langchain-ai/deepagents` — PageRank 0.0010
- `kenryu42/cc-safety-net` — PageRank 0.0010
- `mksglu/context-mode` — PageRank 0.0009
- `cobusgreyling/loop-engineering` — PageRank 0.0007
- `jgravelle/jcodemunch-mcp` — PageRank 0.0007
- `strands-labs/harness-optimizer` — PageRank 0.0006
- `SWE-agent/mini-swe-agent` — PageRank 0.0006
- `microsoft/waza` — PageRank 0.0006

**Direct links between repos in this report** (top similarity edges):

- `microsoft/waza` ⇄ `microsoft/playwright-mcp` (w=0.833) — authors: dependabot[bot], Copilot
- `SWE-agent/mini-swe-agent` ⇄ `SWE-agent/SWE-agent` (w=0.732) — topics: agent, ai
- `jgravelle/jcodemunch-mcp` ⇄ `mksglu/context-mode` (w=0.612) — topics: claude, claude-code, mcp, mcp-server; authors: github-actions[bot]
- `Fission-AI/OpenSpec` ⇄ `github/spec-kit` (w=0.375) — topics: spec, ai, engineering, prd; authors: dependabot[bot], kevin9327
- `chunkhound/chunkhound` ⇄ `oraios/serena` (w=0.237) — topics: agent, ai, mcp-server
- `promptfoo/promptfoo` ⇄ `langfuse/langfuse` (w=0.206) — topics: llm, prompt-engineering, llmops, evaluation
- `Nicolepcx/harness_engineering` ⇄ `langchain-ai/deepagents` (w=0.200) — topics: ai, harness, harness-engineering
- `jgravelle/jcodemunch-mcp` ⇄ `alexgreensh/token-optimizer` (w=0.161) — topics: claude-code, context-window, token-optimization, codex
- `alexgreensh/token-optimizer` ⇄ `headroomlabs-ai/headroom` (w=0.161) — topics: claude-code, token-optimization, context-window, context-engineering
- `alexgreensh/token-optimizer` ⇄ `getagentseal/codeburn` (w=0.143) — topics: claude-code, token-usage, codex, cost-tracking
- `dagger/container-use` ⇄ `oraios/serena` (w=0.111) — authors: anxkhn

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Methods outlive tools — if a pick goes stale, the method still applies; swap the repo.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| headroomlabs-ai/headroom | 99 | Hot | very active | 7 | 22% | 177 |
| alibaba/open-code-review | 98 | Hot | very active | 8 | 12% | 144 |
| e2b-dev/runtime | 93 | Classic | very active | 4 | 27% | 52 |
| chunkhound/chunkhound | 90 | Hot | very active | 5 | 16% | 45 |
| langchain-ai/deepagents | 89 | Hot | very active | 3 | 32% | 338 |
| langfuse/langfuse | 89 | Classic | very active | 3 | 25% | 738 |
| harbor-framework/harbor | 89 | Hot | very active | 4 | 26% | 30 |
| triggerdotdev/trigger.dev | 88 | Classic | very active | 3 | 22% | 706 |
| UKGovernmentBEIS/inspect_ai | 87 | Mature | very active | 3 | 24% | 11 |
| upstash/context7 | 85 | Hot | very active | 2 | 36% | 172 |
| github/spec-kit | 84 | Hot | very active | 2 | 39% | 241 |
| Fission-AI/OpenSpec | 83 | Hot | very active | 2 | 43% | 57 |
| NVIDIA/SkillSpector | 83 | Hot | very active | 2 | 48% | 22 |
| earendil-works/pi | 80 | Hot | very active | 1 | 63% | 276 |
| mksglu/context-mode | 80 | Rising | very active | 1 | 78% | 238 |
| alexgreensh/token-optimizer | 80 | Hot | very active | 1 | 51% | 307 |
| jgravelle/jcodemunch-mcp | 80 | Hot | very active | 1 | 97% | 753 |
| Yeachan-Heo/oh-my-claudecode | 80 | Hot | very active | 1 | 70% | 288 |
| kenryu42/cc-safety-net | 80 | Hot | very active | 1 | 80% | 92 |
| microsoft/playwright-mcp | 79 | Hot | very active | 2 | 37% | 74 |
| haydenbleasel/ultracite | 79 | Classic | very active | 1 | 93% | 396 |
| VibiumDev/vibium | 79 | Hot | very active | 1 | 71% | 65 |
| OthmanAdi/planning-with-files | 79 | Hot | very active | 1 | 58% | 127 |
| open-multi-agent/open-multi-agent | 79 | Hot | very active | 1 | 70% | 32 |
| backnotprop/plannotator | 79 | Rising | very active | 1 | 100% | 219 |
| getagentseal/codeburn | 79 | Hot | very active | 1 | 82% | 84 |
| promptfoo/promptfoo | 79 | Mature | very active | 1 | 100% | 432 |
| oraios/serena | 78 | Hot | very active | 1 | 78% | 18 |
| vercel-labs/agent-browser | 78 | Hot | very active | 1 | 53% | 120 |
| microsoft/waza | 78 | Hot | very active | 1 | 63% | 59 |
| Piebald-AI/claude-code-system-prompts | 77 | Rising | very active | 1 | 100% | 281 |
| repoprompt/repoprompt-ce | 77 | Hot | very active | 1 | 59% | 38 |
| modem-dev/hunk | 77 | Hot | very active | 1 | 56% | 76 |
| rtk-ai/rtk | 75 | Hot | very active | 1 | 56% | 475 |
| cobusgreyling/loop-engineering | 68 | Hot | very active | 1 | 72% | 2 |
| Infisical/agent-vault | 67 | Hot | very active | 1 | 72% | 58 |
| obra/superpowers | 64 | Mature | active | 1 | 100% | 17 |
| SWE-agent/mini-swe-agent | 61 | Declining | active | 1 | 67% | 65 |
| VoltAgent/awesome-claude-code-subagents | 58 | Hot | very active | 1 | 78% | 0 |
| petergyang/human-review | 55 | Mature | active | 1 | 100% | 8 |
| anthropics/skills | 50 | Mature | active | 2 | 40% | 0 |
| strands-labs/harness-optimizer | 50 | Declining | active | 1 | 50% | 1 |
| dagger/container-use | 42 | Mature | active | 1 | 83% | 14 |
| SWE-agent/SWE-agent | 39 | Mature | active | 0 | 0% | 10 |
| Nicolepcx/harness_engineering | 35 | Declining | slowing | 1 | 100% | 0 |
| agentsmd/agents.md | 35 | Declining | active | 1 | 67% | 0 |
| multica-ai/andrej-karpathy-skills | 18 | Declining | stale | 0 | 0% | 0 |
| snarktank/ralph | 10 | Declining | stale | 0 | 0% | 0 |

**Watch items** (snapshot reads declining/abandoned): `Nicolepcx/harness_engineering`, `SWE-agent/mini-swe-agent`, `agentsmd/agents.md`, `multica-ai/andrej-karpathy-skills`, `snarktank/ralph`, `strands-labs/harness-optimizer`.

## Where should you start?

| If your harness… | Apply method | Start with |
|---|---|---|
| declares success on work that's broken | 5. External verification | `microsoft/playwright-mcp` + tests behind a hook |
| burns tokens / hits context limits | 3. Context engineering | `mksglu/context-mode` or `rtk-ai/rtk` |
| picks the wrong tool or loops on tool calls | 4. Lean action space | cut tools; `jgravelle/jcodemunch-mcp` for code reads |
| ignores its CLAUDE.md | 2. Small instruction budget | shrink it; move detail into `anthropics/skills`-style skills |
| loses the thread on multi-hour tasks | 6. State on disk | `OthmanAdi/planning-with-files` |
| has done something destructive | 8. Guards & sandboxes | `kenryu42/cc-safety-net` + `dagger/container-use` |
| changed and you can't tell if it got better | 10. Observe & eval | `harbor-framework/harbor` + `langfuse/langfuse` |
| is being designed from scratch | 1. Minimal loop first | fork `earendil-works/pi`; read `Piebald-AI/claude-code-system-prompts` |

## Adjacent (deliberately not listed)

- **affaan-m/ECC** (299,980★) — a full meta-harness *product* — compared in the agent-harnesses report
- **ruvnet/ruflo** (81,326★) — swarm meta-harness — agent-harnesses / agent-orchestration reports
- **dair-ai/Prompt-Engineering-Guide** (79,945★) — prompt-level, not harness-level — see the ai-engineer-stack report
- **guardrails-ai/guardrails** (7,590★) — output guardrails for LLM apps, not agent-loop enforcement — decision-classifiers report
- **topoteretes/cognee** (33,177★) — long-term memory platform — agent-memory / memory-frameworks reports
- **openai/codex** (134,247★) — a coding agent (the thing being harnessed) — ai-coding-tuis report

## Methodology & sources

- **Repo data**: `data/classified.json` + `public/data/graph.json`; deterministic, no API calls at generation time. Selection: keyword scan (context / compaction / tool / sandbox / guard / hook / verification / planning / durable / tracing / eval / harness) then manual curation by *the method a repo helps you apply*. Several repos also appear in the agent-harnesses report under an approach lens.
- **Evidence** was gathered by web research on 2026-10-01 and is frozen in the generator — it does not refresh on rebuild. Numbers are point-in-time; several are vendor- or practitioner-reported, and some (Vercel, Microsoft, the 481-file and reviewer-agent studies, OpenAI's harness write-up) are cited **second-hand via the marmelab survey**, not from the primary source. Re-verify before quoting.
- **Sources:**
  - Fan et al., *An Empirical Study of Harness Design for Coding Agents*, arXiv:2609.20804 (2026-09-17) — https://arxiv.org/abs/2609.20804
  - Park & Choi, *When Do Agent Loops Mistake Stagnation for Progress?*, arXiv:2607.25152 (2026-07-27, rev. 2026-09-29) — https://arxiv.org/abs/2607.25152
  - marmelab, *The State of AI Harness Engineering 2026* (2026-09-24) — https://marmelab.com/blog/2026/09/24/the-state-of-ai-harness-engineering-2026.html
  - HumanLayer, *Skill Issue: Harness Engineering for Coding Agents* (2026-03-12) — https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents
  - Anthropic Engineering, *Code execution with MCP* (Nov 2025) — summarized at https://www.marktechpost.com/2025/11/08/anthropic-turns-mcp-agents-into-code-first-systems-with-code-execution-with-mcp-approach/
  - Anthropic Engineering, *Effective harnesses for long-running agents* (Nov 2025) — summarized at https://www.zenml.io/llmops-database/long-running-agent-harness-for-multi-context-software-development
  - Peak Ji (Manus), *Context Engineering for AI Agents: Lessons from Building Manus* (Jul 2025) — https://medium.com/@peakji/context-engineering-for-ai-agents-lessons-from-building-manus-71883f0a67f2
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.

<sub>Tools covered: 48 · Snapshot: 2026-11-09T14:44:53.318Z</sub>
