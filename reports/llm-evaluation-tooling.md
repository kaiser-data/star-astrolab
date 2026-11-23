# LLM Evaluation Tooling — Landscape Report

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities).
>
> Generated 2026-11-23 by `scripts/reports/llm_evaluation.py` (regenerate any time — no API cost).

![Top tools by stars](assets/llm-evaluation-tooling-top-tools.svg)

![Tools per category](assets/llm-evaluation-tooling-categories.svg)


## Executive summary

- **29 evaluation-focused tools** found in your stars (**231,999★** combined), spanning four categories:
  - **Observability + eval platform** (6): `langfuse`, `mlflow`, `opik`, `openllmetry`, `langwatch`, `opik-openclaw`
  - **Evaluation framework** (10): `promptfoo`, `evals`, `deepeval`, `phoenix`, `trulens`, `inspect_ai`, `openevals`, `agentevals`, `rhesis`, `evals`
  - **Benchmark / leaderboard** (9): `lm-evaluation-harness`, `lighteval`, `AssetOpsBench`, `guidellm`, `skill`, `LiveBench`, `evals`, `Open-Financial-LLMs-Leaderboard`, `RACE`
  - **Safety / red-team** (4): `garak`, `deepteam`, `uqlm`, `LettuceDetect`
- The field splits cleanly into **online** evaluation (tracing/observability in production) and **offline** evaluation (datasets, metrics, benchmarks before ship). Platforms increasingly do both.
- Evaluation method has converged on **LLM-as-a-judge** (deepeval, openevals) alongside classic reference metrics, plus a fast-growing **safety/red-team** wing (garak, deepteam) and **hallucination detection** (uqlm, LettuceDetect).
- Python dominates (22/29); the lone TypeScript-first platform is Langfuse.

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Category | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | Observability + eval platform | TypeScript | NOASSERTION | 37,754 (▲265) | Classic | 94 | very active | 0d ago | 3.5y | 17 |
| [mlflow/mlflow](https://github.com/mlflow/mlflow) | Observability + eval platform | Python | Apache-2.0 | 28,940 (▲105) | Classic | 78 | very active | 0d ago | 8.5y | 15 |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | Evaluation framework | TypeScript | MIT | 27,588 (▲285) | Classic | 79 | very active | 0d ago | 3.6y | 14 |
| [comet-ml/opik](https://github.com/comet-ml/opik) | Observability + eval platform | Java | Apache-2.0 | 23,491 (▲49) | Classic | 94 | very active | 0d ago | 3.5y | 28 |
| [openai/evals](https://github.com/openai/evals) | Evaluation framework | Python | NOASSERTION | 19,787 (▲36) | Declining | 16 | stale | 7mo ago | 3.8y | 0 |
| [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | Evaluation framework | Python | Apache-2.0 | 19,607 (▲96) | Classic | 81 | very active | 0d ago | 3.3y | 7 |
| [EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | Benchmark / leaderboard | Python | MIT | 14,524 (▲40) | Classic | 84 | very active | 19d ago | 6.2y | 29 |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | Evaluation framework | Python | NOASSERTION | 12,384 (▲70) | Classic | 83 | very active | 0d ago | 4.0y | 14 |
| [NVIDIA/garak](https://github.com/NVIDIA/garak) | Safety / red-team | Python | Apache-2.0 | 10,142 (▲94) | Classic | 81 | very active | 5d ago | 3.5y | 16 |
| [traceloop/openllmetry](https://github.com/traceloop/openllmetry) | Observability + eval platform | Python | Apache-2.0 | 7,550 (▲9) | Classic | 79 | very active | 0d ago | 3.2y | 11 |
| [langwatch/langwatch](https://github.com/langwatch/langwatch) | Observability + eval platform | TypeScript | Apache-2.0 | 5,052 (▲13) | Classic | 84 | very active | 0d ago | 3.2y | 7 |
| [truera/trulens](https://github.com/truera/trulens) | Evaluation framework | Python | MIT | 3,668 (▲10) | Classic | 89 | very active | 0d ago | 6.1y | 27 |
| [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) | Evaluation framework | Python | MIT | 3,314 (▲51) | Classic | 87 | very active | 0d ago | 3.0y | 29 |
| [confident-ai/deepteam](https://github.com/confident-ai/deepteam) | Safety / red-team | Python | Apache-2.0 | 3,120 (▲14) | Hot | 49 | active | 1mo ago | 1.7y | 3 |
| [huggingface/lighteval](https://github.com/huggingface/lighteval) | Benchmark / leaderboard | Python | MIT | 2,589 (▲3) | Mature | 54 | active | 6d ago | 2.8y | 6 |
| [IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench) | Benchmark / leaderboard | Python | Apache-2.0 | 2,482 (▲56) | Hot | 62 | very active | 3d ago | 1.6y | 4 |
| [vllm-project/guidellm](https://github.com/vllm-project/guidellm) | Benchmark / leaderboard | Python | Apache-2.0 | 1,804 (▲11) | Mature | 88 | very active | 0d ago | 2.5y | 24 |
| [pinchbench/skill](https://github.com/pinchbench/skill) | Benchmark / leaderboard | Python | MIT | 1,384 (▼1) | Declining | 42 | slowing | 4mo ago | 9mo | 0 |
| [LiveBench/LiveBench](https://github.com/LiveBench/LiveBench) | Benchmark / leaderboard | Python | NOASSERTION | 1,357 (▲3) | Mature | 54 | active | 1mo ago | 2.4y | 4 |
| [langchain-ai/openevals](https://github.com/langchain-ai/openevals) | Evaluation framework | Python | MIT | 1,261 (▲8) | Hot | 79 | very active | 5d ago | 1.8y | 12 |
| [cvs-health/uqlm](https://github.com/cvs-health/uqlm) | Safety / red-team | Python | Apache-2.0 | 1,215 (▼2) | Hot | 71 | very active | 15d ago | 1.6y | 5 |
| [langchain-ai/agentevals](https://github.com/langchain-ai/agentevals) | Evaluation framework | Python | MIT | 763 (▲4) | Declining | 24 | slowing | 4mo ago | 1.8y | 0 |
| [comet-ml/opik-openclaw](https://github.com/comet-ml/opik-openclaw) | Observability + eval platform | TypeScript | Apache-2.0 | 723 | Mature | 64 | active | 3d ago | 8mo | 3 |
| [KRLabsOrg/LettuceDetect](https://github.com/KRLabsOrg/LettuceDetect) | Safety / red-team | Python | MIT | 627 (▲1) | Mature | 59 | active | 1d ago | 1.8y | 5 |
| [rhesis-ai/rhesis](https://github.com/rhesis-ai/rhesis) | Evaluation framework | Python | NOASSERTION | 405 (▲1) | Mature | 79 | very active | 0d ago | 2.1y | 4 |
| [strands-agents/evals](https://github.com/strands-agents/evals) | Evaluation framework | Python | Apache-2.0 | 261 (▲3) | Hot | 85 | very active | 0d ago | 1.3y | 20 |
| [supabase/evals](https://github.com/supabase/evals) | Benchmark / leaderboard | TypeScript | Apache-2.0 | 154 (▲2) | Hot | 67 | very active | 0d ago | 6mo | 11 |
| [finos-labs/Open-Financial-LLMs-Leaderboard](https://github.com/finos-labs/Open-Financial-LLMs-Leaderboard) | Benchmark / leaderboard | JavaScript | — | 37 | Declining | 1 | stale | 11mo ago | 2.3y | 0 |
| [jszheng21/RACE](https://github.com/jszheng21/RACE) | Benchmark / leaderboard | Python | Apache-2.0 | 16 | Abandoned | 10 | stale | 2.1y ago | 2.4y | 0 |

## By category

### Observability + eval platform

_Capture traces from live LLM apps, attach scores, manage prompts & datasets. Online-first, but most now run offline eval suites too._

- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,754★ · TypeScript · Classic  
  LLM observability, metrics, evals, prompt management, datasets & playground; the most-adopted OSS platform here.  
  <sub>topics: analytics, llm, llmops, large-language-models, openai, self-hosted, monitoring, observability</sub>
- **[mlflow/mlflow](https://github.com/mlflow/mlflow)** · 28,940★ · Python · Classic  
  Broad AI engineering platform; LLM tracing + evaluate + experiment tracking on top of classic MLOps.  
  <sub>topics: machine-learning, ai, ml, mlflow, apache-spark, model-management, agentops, agents</sub>
- **[comet-ml/opik](https://github.com/comet-ml/opik)** · 23,491★ · Java · Classic  
  Debug / evaluate / monitor LLM, RAG & agentic apps with tracing + automated scoring.  
  <sub>topics: open-source, langchain, openai, playground, prompt-engineering, llama-index, llm, llm-evaluation</sub>
- **[traceloop/openllmetry](https://github.com/traceloop/openllmetry)** · 7,550★ · Python · Classic  
  OpenTelemetry-native GenAI observability; standards-based traces & metrics.  
  <sub>topics: llmops, observability, open-telemetry, metrics, monitoring, opentelemetry, datascience, ml</sub>
- **[langwatch/langwatch](https://github.com/langwatch/langwatch)** · 5,052★ · TypeScript · Classic  
  Agent observability plus evals, simulations and guardrails — OTel-based tracing with an agent-testing focus.  
  <sub>topics: ai, analytics, datasets, evaluation, gpt, llm, observability, openai</sub>
- **[comet-ml/opik-openclaw](https://github.com/comet-ml/opik-openclaw)** · 723★ · TypeScript · Mature  
  Opik plugin that exports OpenClaw agent traces (cost/tokens/errors) for monitoring.  
  <sub>topics: clawdbot, evaluation, moltbot, observability, openclaw, testing, ai-agents, llm-observability</sub>

### Evaluation framework

_Libraries to score outputs offline — reference metrics + LLM-as-a-judge — wired into CI like unit tests._

- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** · 27,588★ · TypeScript · Classic  
  Declarative prompt/eval testing + red-teaming CLI; config-driven test matrices in CI.  
  <sub>topics: llm, prompt-engineering, prompts, llmops, prompt-testing, testing, rag, evaluation</sub>
- **[openai/evals](https://github.com/openai/evals)** · 19,787★ · Python · Declining  
  OpenAI's eval registry/framework — write & share evals against a standard harness.  
  <sub>topics: —</sub>
- **[confident-ai/deepeval](https://github.com/confident-ai/deepeval)** · 19,607★ · Python · Classic  
  'The LLM eval framework' — pytest-style unit tests with metrics (faithfulness, relevancy, G-Eval/LLM-as-judge).  
  <sub>topics: evaluation-metrics, evaluation-framework, llm-evaluation, llm-evaluation-framework, llm-evaluation-metrics, python</sub>
- **[Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)** · 12,384★ · Python · Classic  
  Open-source LLM tracing + eval; notebook-friendly, OTel-based.  
  <sub>topics: llmops, ai-monitoring, ai-observability, llm-eval, aiengineering, datasets, agents, llms</sub>
- **[truera/trulens](https://github.com/truera/trulens)** · 3,668★ · Python · Classic  
  Feedback-function evaluation — programmatic scorers for groundedness/relevance.  
  <sub>topics: machine-learning, neural-networks, explainable-ml, llmops, ai-monitoring, ai-observability, evals, llm-evaluation</sub>
- **[UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai)** · 3,314★ · Python · Classic  
  UK AI Security Institute's eval framework — composable tasks, solvers and scorers with sandboxed agent evals; widely used for safety and capability evals.  
  <sub>topics: —</sub>
- **[langchain-ai/openevals](https://github.com/langchain-ai/openevals)** · 1,261★ · Python · Hot  
  Readymade evaluators (prebuilt prompts + scorers) for LLM apps.  
  <sub>topics: —</sub>
- **[langchain-ai/agentevals](https://github.com/langchain-ai/agentevals)** · 763★ · Python · Declining  
  Evaluators specialized for agent *trajectories* (tool-call sequences, not just final output).  
  <sub>topics: —</sub>
- **[rhesis-ai/rhesis](https://github.com/rhesis-ai/rhesis)** · 405★ · Python · Mature  
  Testing platform that lets engineers + PMs + domain experts generate and run test suites.  
  <sub>topics: ai-agents, ai-safety, llm, llm-evaluation, llm-testing, observability, red-teaming, annotations</sub>
- **[strands-agents/evals](https://github.com/strands-agents/evals)** · 261★ · Python · Hot  
  Strands' eval framework for agents and LLM apps — output and trajectory evaluators plus simulated users.  
  <sub>topics: agentic, agentic-ai, ai, machine-learning, python, evaluation, strands-agents</sub>

### Benchmark / leaderboard

_Fixed task sets that rank models/agents. Watch for contamination (LiveBench is explicitly designed against it)._

- **[EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)** · 14,524★ · Python · Classic  
  The de-facto academic harness — 100+ standardized benchmarks behind the HF leaderboard.  
  <sub>topics: evaluation-framework, language-model, transformer</sub>
- **[huggingface/lighteval](https://github.com/huggingface/lighteval)** · 2,589★ · Python · Mature  
  Hugging Face's lightweight, all-in-one eval suite for fast benchmark runs.  
  <sub>topics: evaluation, evaluation-framework, evaluation-metrics, huggingface</sub>
- **[IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench)** · 2,482★ · Python · Hot  
  IBM's Industry 4.0 benchmark for multi-agent asset-operations tasks — a domain benchmark with its own agent framework.  
  <sub>topics: llm-agents, model-context-protocol, time-series-forecasting, condition-based-maintenance, hvac-maintenance, iot, predictive-maintenance, ai-for-physical-assets</sub>
- **[vllm-project/guidellm](https://github.com/vllm-project/guidellm)** · 1,804★ · Python · Mature  
  Performance/inference benchmark: evaluate LLM *deployments* for real-world throughput/latency.  
  <sub>topics: —</sub>
- **[pinchbench/skill](https://github.com/pinchbench/skill)** · 1,384★ · Python · Declining  
  Benchmarks LLMs as OpenClaw *coding agents* on real tasks.  
  <sub>topics: —</sub>
- **[LiveBench/LiveBench](https://github.com/LiveBench/LiveBench)** · 1,357★ · Python · Mature  
  Challenging, contamination-free benchmark refreshed over time to resist training-set leakage.  
  <sub>topics: —</sub>
- **[supabase/evals](https://github.com/supabase/evals)** · 154★ · TypeScript · Hot  
  Supabase's evals of coding agents doing Supabase work — a vendor benchmark of agent competence on one platform.  
  <sub>topics: —</sub>
- **[finos-labs/Open-Financial-LLMs-Leaderboard](https://github.com/finos-labs/Open-Financial-LLMs-Leaderboard)** · 37★ · JavaScript · Declining  
  Domain leaderboard ranking LLMs on financial tasks.  
  <sub>topics: —</sub>
- **[jszheng21/RACE](https://github.com/jszheng21/RACE)** · 16★ · Python · Abandoned  
  Multi-dimensional code-generation benchmark (Readability, Maintainability, Correctness, Efficiency).  
  <sub>topics: benchmark, code-generation, multidimensional, llm</sub>

### Safety / red-team

_Adversarial testing, vulnerability scanning, and hallucination / uncertainty detection — evaluating *failure modes* rather than task accuracy._

- **[NVIDIA/garak](https://github.com/NVIDIA/garak)** · 10,142★ · Python · Classic  
  LLM vulnerability scanner — probes for jailbreaks, prompt injection, toxicity, data leakage.  
  <sub>topics: ai, llm-evaluation, llm-security, security-scanners, vulnerability-assessment</sub>
- **[confident-ai/deepteam](https://github.com/confident-ai/deepteam)** · 3,120★ · Python · Hot  
  Framework to red-team LLMs & LLM systems (adversarial attack suites, from the DeepEval team).  
  <sub>topics: llm-guardrails, llm-red-teaming, llm-safety, python, llm-seecurity</sub>
- **[cvs-health/uqlm](https://github.com/cvs-health/uqlm)** · 1,215★ · Python · Hot  
  Uncertainty quantification for LLMs; UQ-based hallucination detection.  
  <sub>topics: ai-evaluation, ai-safety, hallucination, hallucination-detection, hallucination-evaluation, hallucination-mitigation, llm, llm-evaluation</sub>
- **[KRLabsOrg/LettuceDetect](https://github.com/KRLabsOrg/LettuceDetect)** · 627★ · Python · Mature  
  Lightweight hallucination-detection framework for RAG outputs.  
  <sub>topics: bert, hallucination-detection, hallucination-evaluation, information-extraction, nlp, python, pytorch, token-classification</sub>

## Online vs. offline evaluation

| | What it measures | Tools in your stars |
|---|---|---|
| **Online** (production) | Live traces, cost/latency, drift, real-user feedback | `langfuse`, `mlflow`, `opik`, `openllmetry`, `opik-openclaw` |
| **Offline** (pre-ship) | Metric scores on datasets, regression gates in CI | `deepeval`, `openevals`, `agentevals`, `rhesis` |
| **Comparative** (ranking) | Model/agent leaderboards on fixed tasks | `LiveBench`, `pinchbench`, `guidellm`, `RACE`, `Open-Financial-LLMs-Leaderboard` |
| **Adversarial** (safety) | Jailbreaks, injection, hallucination, uncertainty | `garak`, `deepteam`, `uqlm`, `LettuceDetect` |

## Graph analysis — how they relate

**Community clustering.** These 29 tools span **15 of the graph's 45 communities** — evaluation tooling co-locates with the broader LLM-app / agent-infra clusters rather than forming an isolated island.

- **Community 8** (8): `langfuse/langfuse`, `mlflow/mlflow`, `comet-ml/opik`, `comet-ml/opik-openclaw`, `langwatch/langwatch`, `promptfoo/promptfoo`, `Arize-ai/phoenix`, `truera/trulens`
- **Community 21** (3): `traceloop/openllmetry`, `confident-ai/deepeval`, `confident-ai/deepteam`
- **Community 11** (2): `langchain-ai/openevals`, `langchain-ai/agentevals`
- **Community 22** (2): `rhesis-ai/rhesis`, `EleutherAI/lm-evaluation-harness`
- **Community 28** (2): `openai/evals`, `KRLabsOrg/LettuceDetect`
- **Community 2** (2): `LiveBench/LiveBench`, `pinchbench/skill`
- **Community 13** (2): `IBM/AssetOpsBench`, `cvs-health/uqlm`

**Centrality (PageRank in the full 1,071-repo graph)** — how 'hub-like' each tool is within your starred ecosystem:

- `huggingface/lighteval` — PageRank 0.0007
- `langfuse/langfuse` — PageRank 0.0006
- `strands-agents/evals` — PageRank 0.0006
- `comet-ml/opik` — PageRank 0.0005
- `langchain-ai/openevals` — PageRank 0.0004
- `NVIDIA/garak` — PageRank 0.0004
- `IBM/AssetOpsBench` — PageRank 0.0003
- `vllm-project/guidellm` — PageRank 0.0003

**Direct links between eval tools** (similarity edges where both endpoints are in this report):

- `confident-ai/deepteam` ⇄ `confident-ai/deepeval` (w=1.507) — topics: python; authors: A-Vamshi, penguine-ip, kritinv
- `comet-ml/opik-openclaw` ⇄ `comet-ml/opik` (w=0.749) — topics: evaluation, llm-observability; authors: awkoy, GuySaar8
- `langfuse/langfuse` ⇄ `comet-ml/opik` (w=0.595) — topics: llm, llmops, openai, open-source; authors: feiiiiii5
- `truera/trulens` ⇄ `Arize-ai/phoenix` (w=0.368) — topics: llmops, ai-monitoring, ai-observability, evals
- `mlflow/mlflow` ⇄ `comet-ml/opik` (w=0.318) — topics: evaluation, langchain, llm-evaluation, llmops
- `langwatch/langwatch` ⇄ `langfuse/langfuse` (w=0.291) — topics: analytics, evaluation, llm, observability
- `promptfoo/promptfoo` ⇄ `langfuse/langfuse` (w=0.268) — topics: llm, prompt-engineering, llmops, evaluation; authors: dependabot[bot]
- `langfuse/langfuse` ⇄ `mlflow/mlflow` (w=0.267) — topics: llmops, openai, observability, open-source
- `Arize-ai/phoenix` ⇄ `mlflow/mlflow` (w=0.264) — topics: llmops, agents, prompt-engineering, llm-evaluation
- `promptfoo/promptfoo` ⇄ `comet-ml/opik` (w=0.257) — topics: llm, prompt-engineering, llmops, evaluation; authors: pcbeingused333
- `Arize-ai/phoenix` ⇄ `comet-ml/opik` (w=0.227) — topics: llmops, prompt-engineering, llm-evaluation, openai
- `truera/trulens` ⇄ `cvs-health/uqlm` (w=0.222) — topics: llm-evaluation; authors: feiiiiii5, Garyouki
- `huggingface/lighteval` ⇄ `EleutherAI/lm-evaluation-harness` (w=0.217) — topics: evaluation-framework
- `EleutherAI/lm-evaluation-harness` ⇄ `confident-ai/deepeval` (w=0.175) — topics: evaluation-framework

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle + activity before adopting.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| langfuse/langfuse | 94 | Classic | very active | 4 | 19% | 746 |
| comet-ml/opik | 94 | Classic | very active | 4 | 19% | 671 |
| truera/trulens | 89 | Classic | very active | 3 | 22% | 128 |
| vllm-project/guidellm | 88 | Mature | very active | 3 | 33% | 20 |
| UKGovernmentBEIS/inspect_ai | 87 | Classic | very active | 3 | 30% | 14 |
| strands-agents/evals | 85 | Hot | very active | 4 | 26% | 37 |
| langwatch/langwatch | 84 | Classic | very active | 2 | 27% | 447 |
| EleutherAI/lm-evaluation-harness | 84 | Classic | very active | 8 | 11% | 19 |
| Arize-ai/phoenix | 83 | Classic | very active | 2 | 28% | 925 |
| confident-ai/deepeval | 81 | Classic | very active | 2 | 36% | 64 |
| NVIDIA/garak | 81 | Classic | very active | 2 | 45% | 34 |
| traceloop/openllmetry | 79 | Classic | very active | 3 | 32% | 265 |
| langchain-ai/openevals | 79 | Hot | very active | 2 | 39% | 49 |
| rhesis-ai/rhesis | 79 | Mature | very active | 1 | 66% | 193 |
| promptfoo/promptfoo | 79 | Classic | very active | 1 | 72% | 434 |
| mlflow/mlflow | 78 | Classic | very active | 1 | 54% | 181 |
| cvs-health/uqlm | 71 | Hot | very active | 1 | 76% | 47 |
| supabase/evals | 67 | Hot | very active | 2 | 35% | 0 |
| comet-ml/opik-openclaw | 64 | Mature | active | 1 | 67% | 26 |
| IBM/AssetOpsBench | 62 | Hot | very active | 1 | 69% | 0 |
| KRLabsOrg/LettuceDetect | 59 | Mature | active | 1 | 60% | 13 |
| LiveBench/LiveBench | 54 | Mature | active | 1 | 63% | 0 |
| huggingface/lighteval | 54 | Mature | active | 2 | 30% | 15 |
| confident-ai/deepteam | 49 | Hot | active | 1 | 56% | 3 |
| pinchbench/skill | 42 | Declining | slowing | 0 | 0% | 14 |
| langchain-ai/agentevals | 24 | Declining | slowing | 0 | 0% | 12 |
| openai/evals | 16 | Declining | stale | 0 | 0% | 0 |
| jszheng21/RACE | 10 | Abandoned | stale | 0 | 0% | 0 |
| finos-labs/Open-Financial-LLMs-Leaderboard | 1 | Declining | stale | 0 | 0% | 0 |

## Which one should you use?

| If you want… | Start with | Why |
|---|---|---|
| End-to-end observability + evals for a production app | `langfuse/langfuse` | Most-starred OSS platform here; tracing + evals + prompt mgmt + datasets, TS-friendly. |
| Offline eval as CI unit tests (LLM-as-judge) | `confident-ai/deepeval` | Pytest-style metrics (faithfulness, relevancy, G-Eval); largest dedicated framework. |
| To evaluate agent *trajectories*, not just answers | `langchain-ai/agentevals` | Scores tool-call sequences / multi-step behavior. |
| Standards-based tracing (vendor-neutral) | `traceloop/openllmetry` | Built on OpenTelemetry; plugs into existing observability stacks. |
| To red-team / security-scan a model | `NVIDIA/garak` + `confident-ai/deepteam` | garak = vulnerability scanner; deepteam = adversarial attack framework. |
| Hallucination / uncertainty detection | `cvs-health/uqlm` or `KRLabsOrg/LettuceDetect` | UQ-based detection; LettuceDetect targets RAG outputs specifically. |
| A contamination-resistant model leaderboard | `LiveBench/LiveBench` | Refreshed tasks designed to resist training-set leakage. |
| To benchmark coding agents | `pinchbench/skill` | Runs LLMs as coding agents on real tasks. |

## Notably absent from your stars

Several widely-used evaluation tools are **not** in this dataset — worth knowing when treating the above as a complete picture:

- **explodinggradients/ragas** — the standard RAG eval metric library (you hold the fork `vibrantlabsai/ragas`)
- **stanford-crfm/helm** — holistic benchmark from Stanford

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible via the generator script.
- **Selection**: keyword scan (eval/benchmark/leaderboard/red-team/guardrail/observability/hallucination + LLM/agent signals) across name/description/topics/README, then manual curation. Adjacent-but-excluded: RAG engines, vector DBs, LLM gateways (e.g. `litellm`), and agent frameworks that merely *embed* an eval module.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.
- Re-run after a fresh `classified.json` to refresh stars/activity.

<sub>Tools covered: 29 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
