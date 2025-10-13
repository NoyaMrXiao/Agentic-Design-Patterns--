# Chapter 3: Parallelization | <mark>第三章：并行化</mark>

---

## Parallelization Pattern Overview | <mark>并行化模式概述</mark>

In the previous chapters, we've explored Prompt Chaining for sequential workflows and Routing for dynamic decision-making and transitions between different paths. While these patterns are essential, many complex agentic tasks involve multiple sub-tasks that can be executed *simultaneously* rather than one after another. This is where the **Parallelization** pattern becomes crucial.

<mark>在前面的章节中，我们探讨了用于顺序工作流的提示链以及用于动态决策和路径转换的路由模式。虽然这些模式至关重要，但许多复杂的智能体任务涉及多个可以<em>同时</em>执行的子任务，而非一个接一个地执行。这就是<strong>并行化</strong>模式变得至关重要的地方。</mark>

Parallelization involves executing multiple components, such as LLM calls, tool usages, or even entire sub-agents, concurrently (see Fig.1). Instead of waiting for one step to complete before starting the next, parallel execution allows independent tasks to run at the same time, significantly reducing the overall execution time for tasks that can be broken down into independent parts.

<mark>并行化涉及同时执行多个组件，例如大语言模型调用、工具使用或甚至整个子智能体（见图 1）。与等待一个步骤完成后再开始下一个步骤不同，并行执行允许独立任务同时运行，显著减少可分解为独立部分的任务的总执行时间。</mark>

Consider an agent designed to research a topic and summarize its findings. A sequential approach might:

<mark>考虑一个设计用于研究主题并总结其发现的智能体。顺序方法可能：</mark>

1. Search for Source A.
2. Summarize Source A.
3. Search for Source B.
4. Summarize Source B.
5. Synthesize a final answer from summaries A and B.

1. <mark>搜索来源 A。</mark>
2. <mark>总结来源 A。</mark>
3. <mark>搜索来源 B。</mark>
4. <mark>总结来源 B。</mark>
5. <mark>从总结 A 和 B 中综合一个最终答案。</mark>

A parallel approach could instead:

<mark>并行方法则可以优化为：</mark>

1. Search for Source A *and* Search for Source B simultaneously.
2. Once both searches are complete, Summarize Source A *and* Summarize Source B simultaneously.
3. Synthesize a final answer from summaries A and B (this step is typically sequential, waiting for the parallel steps to finish).

1. <mark>同时搜索来源 A <em>和</em>搜索来源 B。</mark>
2. <mark>一旦两个搜索都完成，同时总结来源 A <em>和</em>总结来源 B。</mark>
3. <mark>从总结 A 和 B 中综合一个最终答案（此步骤通常是顺序的，等待并行步骤完成）。</mark>

The core idea is to identify parts of the workflow that do not depend on the output of other parts and execute them in parallel. This is particularly effective when dealing with external services (like APIs or databases) that have latency, as you can issue multiple requests concurrently.

<mark>核心思想是识别工作流中不依赖于其他部分输出的环节，并并行执行它们。这在处理具有延迟的外部服务（如 API 或数据库）时特别有效，因为可以同时发出多个请求。</mark>

Implementing parallelization often requires frameworks that support asynchronous execution or multi-threading/multi-processing. Modern agentic frameworks are designed with asynchronous operations in mind, allowing you to easily define steps that can run in parallel.

<mark>实现并行化通常需要支持异步执行或多线程/多进程的框架。现代智能体框架在设计时考虑了异步操作，允许轻松定义可以并行运行的步骤。</mark>

![Parallelization Example](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdQ1oP1d0qmTlX2E8rDyysf0Wf68gmUFHZo2C9JVWMx3jVZhbEzOohJeLymQxKoM_ivD2XIa7xOwNqj_r7DHssN8VPtkRxlo66j5z3yLXB4_7RQq-PYsdvY7Wvx4vZo2oo?key=_g4B5WuCtKCN3ODzzzjI8Q)

*Fig.1. Example of parallelization with sub-agents*

<mark><strong>图 1：</strong>使用子智能体的并行化示例</mark>

Frameworks like LangChain, LangGraph, and Google ADK provide mechanisms for parallel execution. In LangChain Expression Language (LCEL), you can achieve parallel execution by combining runnable objects using operators like | (for sequential) and by structuring your chains or graphs to have branches that execute concurrently. LangGraph, with its graph structure, allows you to define multiple nodes that can be executed from a single state transition, effectively enabling parallel branches in the workflow. Google ADK provides robust, native mechanisms to facilitate and manage the parallel execution of agents, significantly enhancing the efficiency and scalability of complex, multi-agent systems. This inherent capability within the ADK framework allows developers to design and implement solutions where multiple agents can operate concurrently, rather than sequentially.

<mark>LangChain、LangGraph 和 Google ADK 等框架提供了并行执行的机制。</mark>

<mark>在 LangChain 表达式语言（LCEL）中，可以通过使用 | （用于顺序）等操作符组合可运行对象来实现并行执行，并通过构造链或图以具有并发执行的分支。LangGraph 凭借其图结构，允许定义可以从单个状态转换执行的多个节点，有效地在工作流中启用并行分支。Google ADK 提供了强大的原生机制来促进和管理智能体的并行执行，显著增强了复杂多智能体系统的效率和可扩展性。ADK 框架内的这种固有能力允许开发人员设计和实现多个智能体可以并发操作而非顺序操作的解决方案。</mark>

The Parallelization pattern is vital for improving the efficiency and responsiveness of agentic systems, especially when dealing with tasks that involve multiple independent lookups, computations, or interactions with external services. It's a key technique for optimizing the performance of complex agent workflows.

<mark>并行化模式对于提高智能体系统的效率和响应能力至关重要，特别是在处理涉及多个独立查找、计算或与外部服务交互的任务时。这是优化复杂智能体工作流性能的关键技术。</mark>

---

## Practical Applications & Use Cases | <mark>实际应用和用例</mark>

Parallelization is a powerful pattern for optimizing agent performance across various applications:

<mark>并行化是在各种应用中优化智能体性能的强大模式：</mark>

**1. Information Gathering and Research:**

<mark><strong>1. 信息收集和研究：</strong></mark>

Collecting information from multiple sources simultaneously is a classic use case.

<mark>同时从多个来源收集信息是一个经典的用例。</mark>

- **Use Case:** An agent researching a company.
- **Parallel Tasks:** Search news articles, pull stock data, check social media mentions, and query a company database, all at the same time.
- **Benefit:** Gathers a comprehensive view much faster than sequential lookups.

- <mark><strong>用例：</strong>研究公司的智能体。</mark>
- <mark><strong>并行任务：</strong>同时搜索新闻文章、提取股票数据、检查社交媒体提及和查询公司数据库。</mark>
- <mark><strong>好处：</strong>比顺序查找更快地收集全面信息。</mark>

**2. Data Processing and Analysis:**

<mark><strong>2. 数据处理和分析：</strong></mark>

Applying different analysis techniques or processing different data segments concurrently.

<mark>同时应用不同的分析技术或处理不同的数据段。</mark>

- **Use Case:** An agent analyzing customer feedback.
- **Parallel Tasks:** Run sentiment analysis, extract keywords, categorize feedback, and identify urgent issues simultaneously across a batch of feedback entries.
- **Benefit:** Provides a multi-faceted analysis quickly.

- <mark><strong>用例：</strong>分析客户反馈的智能体。</mark>
- <mark><strong>并行任务：</strong>在一批反馈条目中同时运行情感分析、提取关键词、分类反馈和识别紧急问题。</mark>
- <mark><strong>好处：</strong>快速提供多方面的分析。</mark>

**3. Multi-API or Tool Interaction:**

<mark><strong>3. 多 API 或工具交互：</strong></mark>

Calling multiple independent APIs or tools to gather different types of information or perform different actions.

<mark>调用多个独立的 API 或工具来收集不同类型的信息或执行不同的操作。</mark>

- **Use Case:** A travel planning agent.
- **Parallel Tasks:** Check flight prices, search for hotel availability, look up local events, and find restaurant recommendations concurrently.
- **Benefit:** Presents a complete travel plan faster.

- <mark><strong>用例：</strong>旅行规划智能体。</mark>
- <mark><strong>并行任务：</strong>同时检查航班价格、搜索酒店可用性、查找本地活动和寻找餐厅推荐。</mark>
- <mark><strong>好处：</strong>更快地呈现完整的旅行计划。</mark>

**4. Content Generation with Multiple Components:**

<mark><strong>4. 多组件内容生成：</strong></mark>

Generating different parts of a complex piece of content in parallel.

<mark>并行生成复杂内容的不同部分。</mark>

- **Use Case:** An agent creating a marketing email.
- **Parallel Tasks:** Generate a subject line, draft the email body, find a relevant image, and create a call-to-action button text simultaneously.
- **Benefit:** Assembles the final email more efficiently.

- <mark><strong>用例：</strong>创建营销邮件的智能体。</mark>
- <mark><strong>并行任务：</strong>同时生成主题行、起草邮件正文、查找相关图片和创建行动号召按钮文本。</mark>
- <mark><strong>好处：</strong>更高效地组装最终邮件。</mark>

**5. Validation and Verification:**

<mark><strong>5. 验证和核实：</strong></mark>

Performing multiple independent checks or validations concurrently.

<mark>同时执行多个独立的检查或验证。</mark>

- **Use Case:** An agent verifying user input.
- **Parallel Tasks:** Check email format, validate phone number, verify address against a database, and check for profanity simultaneously.
- **Benefit:** Provides faster feedback on input validity.

- <mark><strong>用例：</strong>验证用户输入的智能体。</mark>
- <mark><strong>并行任务：</strong>同时检查邮件格式、验证电话号码、对照数据库验证地址和检查不当内容。</mark>
- <mark><strong>好处：</strong>更快地提供输入有效性反馈。</mark>

**6. Multi-Modal Processing:**

<mark><strong>6. 多模态处理：</strong></mark>

Processing different modalities (text, image, audio) of the same input concurrently.

<mark>同时处理同一输入的不同模态（文本、图像、音频）。</mark>

- **Use Case:** An agent analyzing a social media post with text and an image.
- **Parallel Tasks:** Analyze the text for sentiment and keywords *and* analyze the image for objects and scene description simultaneously.
- **Benefit:** Integrates insights from different modalities more quickly.

- <mark><strong>用例：</strong>分析包含文本和图像的社交媒体帖子的智能体。</mark>
- <mark><strong>并行任务：</strong>同时分析文本的情感和关键词，以及分析图像中的对象和场景描述。</mark>
- <mark><strong>好处：</strong>更快地整合来自不同模态的洞察。</mark>

**7. A/B Testing or Multiple Options Generation:**

<mark><strong>7. A/B 测试或多选项生成：</strong></mark>

Generating multiple variations of a response or output in parallel to select the best one.

<mark>并行生成响应或输出的多个变体以选择最佳的一个。</mark>

- **Use Case:** An agent generating different creative text options.
- **Parallel Tasks:** Generate three different headlines for an article simultaneously using slightly different prompts or models.
- **Benefit:** Allows for quick comparison and selection of the best option.

- <mark><strong>用例：</strong>生成不同创意文本选项的智能体。</mark>
- <mark><strong>并行任务：</strong>使用略有不同的提示或模型，同时为文章生成三个不同的标题。</mark>
- <mark><strong>好处：</strong>允许快速比较和选择最佳选项。</mark>

Parallelization is a fundamental optimization technique in agentic design, allowing developers to build more performant and responsive applications by leveraging concurrent execution for independent tasks.

<mark>并行化是智能体设计中的基本优化技术，允许开发人员通过利用独立任务的并发执行来构建更高性能和响应更快的应用。</mark>

---

## Hands-On Code Example (LangChain) | <mark>使用 LangChain 的实战代码</mark>

Parallel execution within the LangChain framework is facilitated by the LangChain Expression Language (LCEL). The primary method involves structuring multiple runnable components within a dictionary or list construct. When this collection is passed as input to a subsequent component in the chain, the LCEL runtime executes the contained runnables concurrently.

<mark>LangChain 框架内的并行执行通过 LangChain 表达式语言（LCEL）实现。主要方法是在字典或列表构造中构建多个可运行组件。当这个集合作为输入传递给链中的后续组件时，LCEL 运行时会并发执行包含的可运行对象。</mark>

In the context of LangGraph, this principle is applied to the graph's topology. Parallel workflows are defined by architecting the graph such that multiple nodes, lacking direct sequential dependencies, can be initiated from a single common node. These parallel pathways execute independently before their results can be aggregated at a subsequent convergence point in the graph.

<mark>在 LangGraph 的上下文中，此原则应用于图的拓扑结构。并行工作流通过构建图来定义，使得多个缺乏直接顺序依赖性的节点可以从单个公共节点启动。这些并行路径独立执行，然后在图中的后续汇聚点聚合其结果。</mark>

The following implementation demonstrates a parallel processing workflow constructed with the LangChain framework. This workflow is designed to execute two independent operations concurrently in response to a single user query. These parallel processes are instantiated as distinct chains or functions, and their respective outputs are subsequently aggregated into a unified result.

<mark>以下实现展示了使用 LangChain 框架构建的并行处理工作流。此工作流旨在响应单个用户查询时并发执行多个独立操作。这些并行过程被实例化为不同的链或函数，它们各自的输出随后被聚合为统一的结果。</mark>

The prerequisites for this implementation include the installation of the requisite Python packages, such as langchain, langchain-community, and a model provider library like langchain-openai. Furthermore, a valid API key for the chosen language model must be configured in the local environment for authentication.

<mark>此实现的先决条件包括安装必需的 Python 包，如 langchain、langchain-community 和像 langchain-openai 这样的模型提供者库。此外，必须在本地环境中配置所选语言模型的有效 API 密钥以进行身份验证。</mark>

```python
import os
import asyncio
from typing import Optional

from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import Runnable, RunnableParallel, RunnablePassthrough

# --- Configuration ---
# Ensure your API key environment variable is set (e.g., OPENAI_API_KEY)
try:
    llm: Optional[ChatOpenAI] = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)
 
except Exception as e:
    print(f"Error initializing language model: {e}")
    llm = None

# --- Define Independent Chains ---
# These three chains represent distinct tasks that can be executed in parallel.

summarize_chain: Runnable = (
    ChatPromptTemplate.from_messages([
        ("system", "Summarize the following topic concisely:"),
        ("user", "{topic}")
    ])
    | llm
    | StrOutputParser()
)

questions_chain: Runnable = (
    ChatPromptTemplate.from_messages([
        ("system", "Generate three interesting questions about the following topic:"),
        ("user", "{topic}")
    ])
    | llm
    | StrOutputParser()
)

terms_chain: Runnable = (
    ChatPromptTemplate.from_messages([
        ("system", "Identify 5-10 key terms from the following topic, separated by commas:"),
        ("user", "{topic}")
    ])
    | llm
    | StrOutputParser()
)

# --- Build the Parallel + Synthesis Chain ---

# 1. Define the block of tasks to run in parallel. The results of these,
#    along with the original topic, will be fed into the next step.
map_chain = RunnableParallel(
    {
        "summary": summarize_chain,
        "questions": questions_chain,
        "key_terms": terms_chain,
        "topic": RunnablePassthrough(),  # Pass the original topic through
    }
)

# 2. Define the final synthesis prompt which will combine the parallel results.
synthesis_prompt = ChatPromptTemplate.from_messages([
    ("system", """Based on the following information:
    Summary: {summary}
    Related Questions: {questions}
    Key Terms: {key_terms}
    Synthesize a comprehensive answer."""),
    ("user", "Original topic: {topic}")
])

# 3. Construct the full chain by piping the parallel results directly
#    into the synthesis prompt, followed by the LLM and output parser.
full_parallel_chain = map_chain | synthesis_prompt | llm | StrOutputParser()

# --- Run the Chain ---
async def run_parallel_example(topic: str) -> None:
    """
    Asynchronously invokes the parallel processing chain with a specific topic
    and prints the synthesized result.

    Args:
        topic: The input topic to be processed by the LangChain chains.
    """
    if not llm:
        print("LLM not initialized. Cannot run example.")
        return

    print(f"\n--- Running Parallel LangChain Example for Topic: '{topic}' ---")
    try:
        # The input to `ainvoke` is the single 'topic' string, 
        # then passed to each runnable in the `map_chain`.
        response = await full_parallel_chain.ainvoke(topic)
        print("\n--- Final Response ---")
        print(response)
    except Exception as e:
        print(f"\nAn error occurred during chain execution: {e}")

if __name__ == "__main__":
    test_topic = "The history of space exploration"
    # In Python 3.7+, asyncio.run is the standard way to run an async function.
    asyncio.run(run_parallel_example(test_topic))
```

The provided Python code implements a LangChain application designed for processing a given topic efficiently by leveraging parallel execution. Note that asyncio provides concurrency, not parallelism. It achieves this on a single thread by using an event loop that intelligently switches between tasks when one is idle (e.g., waiting for a network request). This creates the effect of multiple tasks progressing at once, but the code itself is still being executed by only one thread, constrained by Python's Global Interpreter Lock (GIL).

<mark>提供的 Python 代码实现了一个 LangChain 应用，旨在通过利用并行执行来高效处理给定主题。</mark>

<mark>请注意，asyncio 提供的是并发性（concurrency）而非并行性（parallelism）。它通过使用事件循环在单个线程上实现这一点，该事件循环在一个任务空闲时（例如等待网络请求）智能地在任务之间切换。这创造了多个任务同时进行的效果，但代码本身仍然只由一个线程执行，受到 Python 全局解释器锁（GIL）的限制。</mark>

The code begins by importing essential modules from langchain_openai and langchain_core, including components for language models, prompts, output parsing, and runnable structures. The code attempts to initialize a ChatOpenAI instance, specifically using the "gpt-4o-mini" model, with a specified temperature for controlling creativity. A try-except block is used for robustness during the language model initialization. Three independent LangChain "chains" are then defined, each designed to perform a distinct task on the input topic. The first chain is for summarizing the topic concisely, using a system message and a user message containing the topic placeholder. The second chain is configured to generate three interesting questions related to the topic. The third chain is set up to identify between 5 and 10 key terms from the input topic, requesting them to be comma-separated. Each of these independent chains consists of a ChatPromptTemplate tailored to its specific task, followed by the initialized language model and a StrOutputParser to format the output as a string.

<mark>代码首先从 langchain_openai 和 langchain_core 导入必要的模块，包括语言模型、提示、输出解析和可运行结构的组件。代码尝试初始化一个 ChatOpenAI 实例，专门使用 "gpt-4o-mini" 模型，并指定温度参数来控制创造性。在语言模型初始化过程中使用 try-except 块来增强鲁棒性。</mark>

<mark>然后定义了三个独立的 LangChain 链，每个都设计用于在输入主题上执行不同的任务。第一个链用于简洁地总结主题，使用系统消息和包含主题占位符的用户消息。第二个链配置为生成与主题相关的三个有趣问题。第三个链设置为从输入主题中识别 5 到 10 个关键术语，要求它们用逗号分隔。这些独立链中的每一个都由针对其特定任务定制的 ChatPromptTemplate 组成，然后是初始化的语言模型和用于将输出格式化为字符串的 StrOutputParser。</mark>

A RunnableParallel block is then constructed to bundle these three chains, allowing them to execute simultaneously. This parallel runnable also includes a RunnablePassthrough to ensure the original input topic is available for subsequent steps. A separate ChatPromptTemplate is defined for the final synthesis step, taking the summary, questions, key terms, and the original topic as input to generate a comprehensive answer. The full end-to-end processing chain, named full_parallel_chain, is created by sequencing the map_chain (the parallel block) into the synthesis prompt, followed by the language model and the output parser. An asynchronous function run_parallel_example is provided to demonstrate how to invoke this full_parallel_chain. This function takes the topic as input and uses invoke to run the asynchronous chain. Finally, the standard Python if __name__ == "__main__": block shows how to execute the run_parallel_example with a sample topic, in this case, "The history of space exploration", using asyncio.run to manage the asynchronous execution.

<mark>然后构建一个 RunnableParallel 块来捆绑这三个链，允许它们同时执行。这个并行可运行对象还包括一个 RunnablePassthrough，以确保原始输入主题可用于后续步骤。为最终综合步骤定义了一个单独的 ChatPromptTemplate，将总结、问题、关键术语和原始主题作为输入来生成全面的答案。</mark>

<mark>完整的端到端处理链（命名为 full_parallel_chain）是通过将 map_chain（并行块）排列到综合提示中，然后是语言模型和输出解析器来创建的。提供了一个异步函数 run_parallel_example 来演示如何调用此 full_parallel_chain。此函数将主题作为输入，并使用 ainvoke 来运行异步链。最后，标准的 Python `if __name__ == "__main__":` 块显示了如何使用样本主题执行 run_parallel_example，在这种情况下是「太空探索的历史」，使用 asyncio.run 来管理异步执行。</mark>

In essence, this code sets up a workflow where multiple LLM calls (for summarizing, questions, and terms) happen at the same time for a given topic, and their results are then combined by a final LLM call. This showcases the core idea of parallelization in an agentic workflow using LangChain.

<mark>本质上，这段代码设置了一个工作流，其中对给定主题的多个大语言模型调用（用于总结、问题和术语）同时发生，然后它们的结果由最终的大语言模型调用合并。这展示了使用 LangChain 在智能体工作流中并行化的核心思想。</mark>

---

## Hands-On Code Example (Google ADK) | <mark>使用 Google ADK 的实战代码</mark>

Okay, let's now turn our attention to a concrete example illustrating these concepts within the Google ADK framework. We'll examine how the ADK primitives, such as ParallelAgent and SequentialAgent, can be applied to build an agent flow that leverages concurrent execution for improved efficiency.

<mark>现在让我们转向一个具体示例，说明 Google ADK 框架内的这些概念。我们将研究如何应用 ADK 原语（如 ParallelAgent 和 SequentialAgent）来构建利用并发执行以提高效率的智能体流。</mark>

```python
from google.adk.agents import LlmAgent, ParallelAgent, SequentialAgent
from google.adk.tools import google_search
GEMINI_MODEL="gemini-2.0-flash"

# --- 1. Define Researcher Sub-Agents (to run in parallel) ---

# Researcher 1: Renewable Energy
researcher_agent_1 = LlmAgent(
    name="RenewableEnergyResearcher",
    model=GEMINI_MODEL,
    instruction="""You are an AI Research Assistant specializing in energy.
Research the latest advancements in 'renewable energy sources'.
Use the Google Search tool provided.
Summarize your key findings concisely (1-2 sentences).
Output *only* the summary.
""",
    description="Researches renewable energy sources.",
    tools=[google_search],
    # Store result in state for the merger agent
    output_key="renewable_energy_result"
)

# Researcher 2: Electric Vehicles
researcher_agent_2 = LlmAgent(
    name="EVResearcher",
    model=GEMINI_MODEL,
    instruction="""You are an AI Research Assistant specializing in transportation.
Research the latest developments in 'electric vehicle technology'.
Use the Google Search tool provided.
Summarize your key findings concisely (1-2 sentences).
Output *only* the summary.
""",
    description="Researches electric vehicle technology.",
    tools=[google_search],
    # Store result in state for the merger agent
    output_key="ev_technology_result"
)

# Researcher 3: Carbon Capture
researcher_agent_3 = LlmAgent(
    name="CarbonCaptureResearcher",
    model=GEMINI_MODEL,
    instruction="""You are an AI Research Assistant specializing in climate solutions.
Research the current state of 'carbon capture methods'.
Use the Google Search tool provided.
Summarize your key findings concisely (1-2 sentences).
Output *only* the summary.
""",
    description="Researches carbon capture methods.",
    tools=[google_search],
    # Store result in state for the merger agent
    output_key="carbon_capture_result"
)

# --- 2. Create the ParallelAgent (Runs researchers concurrently) ---
# This agent orchestrates the concurrent execution of the researchers.
# It finishes once all researchers have completed and stored their results in state.
parallel_research_agent = ParallelAgent(
    name="ParallelWebResearchAgent",
    sub_agents=[researcher_agent_1, researcher_agent_2, researcher_agent_3],
    description="Runs multiple research agents in parallel to gather information."
)

# --- 3. Define the Merger Agent (Runs *after* the parallel agents) ---
# This agent takes the results stored in the session state by the parallel agents
# and synthesizes them into a single, structured response with attributions.
merger_agent = LlmAgent(
    name="SynthesisAgent",
    model=GEMINI_MODEL,  # Or potentially a more powerful model if needed for synthesis
    instruction="""You are an AI Assistant responsible for combining research findings into a structured report.
Your primary task is to synthesize the following research summaries, clearly attributing findings to their source areas. Structure your response using headings for each topic. Ensure the report is coherent and integrates the key points smoothly.

**Crucially: Your entire response MUST be grounded *exclusively* on the information provided in the 'Input Summaries' below. Do NOT add any external knowledge, facts, or details not present in these specific summaries.**

**Input Summaries:**

*   **Renewable Energy:**
    {renewable_energy_result}
*   **Electric Vehicles:**
    {ev_technology_result}
*   **Carbon Capture:**
    {carbon_capture_result}

**Output Format:**

## Summary of Recent Sustainable Technology Advancements

### Renewable Energy Findings
(Based on RenewableEnergyResearcher's findings)
[Synthesize and elaborate *only* on the renewable energy input summary provided above.]

### Electric Vehicle Findings
(Based on EVResearcher's findings)
[Synthesize and elaborate *only* on the EV input summary provided above.]

### Carbon Capture Findings
(Based on CarbonCaptureResearcher's findings)
[Synthesize and elaborate *only* on the carbon capture input summary provided above.]

### Overall Conclusion
[Provide a brief (1-2 sentence) concluding statement that connects *only* the findings presented above.]

Output *only* the structured report following this format. Do not include introductory or concluding phrases outside this structure, and strictly adhere to using only the provided input summary content.
""",
    description="Combines research findings from parallel agents into a structured, cited report, strictly grounded on provided inputs.",
    # No tools needed for merging
    # No output_key needed here, as its direct response is the final output of the sequence
)

# --- 4. Create the SequentialAgent (Orchestrates the overall flow) ---
# This is the main agent that will be run. It first executes the ParallelAgent
# to populate the state, and then executes the MergerAgent to produce the final output.
sequential_pipeline_agent = SequentialAgent(
    name="ResearchAndSynthesisPipeline",
    # Run parallel research first, then merge
    sub_agents=[parallel_research_agent, merger_agent],
    description="Coordinates parallel research and synthesizes the results."
)
root_agent = sequential_pipeline_agent
```

This code defines a multi-agent system used to research and synthesize information on sustainable technology advancements. It sets up three LlmAgent instances to act as specialized researchers. ResearcherAgent_1 focuses on renewable energy sources, ResearcherAgent_2 researches electric vehicle technology, and ResearcherAgent_3 investigates carbon capture methods. Each researcher agent is configured to use a GEMINI_MODEL and the google_search tool. They are instructed to summarize their findings concisely (1-2 sentences) and store these summaries in the session state using output_key.

<mark>这段代码定义了一个多智能体系统，用于研究和综合可持续技术进展的信息。它设置了三个 LlmAgent 实例作为专业研究员。ResearcherAgent_1 专注于可再生能源，ResearcherAgent_2 研究电动车技术，ResearcherAgent_3 调查碳捕获方法。每个研究员智能体都配置为使用 GEMINI_MODEL 和 google_search 工具。它们被指示简洁地总结其发现（1-2 句话）并使用 output_key 将这些总结存储在会话状态中。</mark>

A ParallelAgent named ParallelWebResearchAgent is then created to run these three researcher agents concurrently. This allows the research to be conducted in parallel, potentially saving time. The ParallelAgent completes its execution once all its sub-agents (the researchers) have finished and populated the state.

<mark>然后创建了一个名为 ParallelWebResearchAgent 的 ParallelAgent 来并发运行这三个研究员智能体。这允许并行进行研究，可能节省时间。ParallelAgent 在其所有子智能体（研究员）完成并填充状态后完成其执行。</mark>

Next, a MergerAgent (also an LlmAgent) is defined to synthesize the research results. This agent takes the summaries stored in the session state by the parallel researchers as input. Its instruction emphasizes that the output must be strictly based only on the provided input summaries, prohibiting the addition of external knowledge. The MergerAgent is designed to structure the combined findings into a report with headings for each topic and a brief overall conclusion.

<mark>接下来，定义了一个 MergerAgent（也是一个 LlmAgent）来综合研究结果。这个智能体将并行研究员存储在会话状态中的总结作为输入。其指令强调输出必须严格基于所提供的输入总结，禁止添加外部知识。MergerAgent 旨在将合并的发现结构化为一个报告，每个主题都有标题和简要的总体结论。</mark>

Finally, a SequentialAgent named ResearchAndSynthesisPipeline is created to orchestrate the entire workflow. As the primary controller, this main agent first executes the ParallelAgent to perform the research. Once the ParallelAgent is complete, the SequentialAgent then executes the MergerAgent to synthesize the collected information. The sequential_pipeline_agent is set as the root_agent, representing the entry point for running this multi-agent system. The overall process is designed to efficiently gather information from multiple sources in parallel and then combine it into a single, structured report.

<mark>最后，创建了一个名为 ResearchAndSynthesisPipeline 的 SequentialAgent 来协调整个工作流。作为主要控制器，这个主智能体首先执行 ParallelAgent 来执行研究。一旦 ParallelAgent 完成，SequentialAgent 然后执行 MergerAgent 来综合收集的信息。sequential_pipeline_agent 被设置为 root_agent，代表运行这个多智能体系统的入口点。整个过程旨在高效地并行从多个来源收集信息，然后将其合并为单个结构化报告。</mark>

---

## At a Glance | <mark>要点速览</mark>

**What:** Many agentic workflows involve multiple sub-tasks that must be completed to achieve a final goal. A purely sequential execution, where each task waits for the previous one to finish, is often inefficient and slow. This latency becomes a significant bottleneck when tasks depend on external I/O operations, such as calling different APIs or querying multiple databases. Without a mechanism for concurrent execution, the total processing time is the sum of all individual task durations, hindering the system's overall performance and responsiveness.

<mark><strong>问题所在：</strong>许多智能体工作流涉及多个必须完成以实现最终目标的子任务。纯粹的顺序执行，即每个任务等待前一个任务完成，通常效率低下且速度缓慢。当任务依赖于外部 I/O 操作（如调用不同的 API 或查询多个数据库）时，这种延迟会成为重大瓶颈。没有并发执行机制，总处理时间是所有单个任务持续时间的总和，阻碍了系统的整体性能和响应能力。</mark>

**Why:** The Parallelization pattern provides a standardized solution by enabling the simultaneous execution of independent tasks. It works by identifying components of a workflow, like tool usages or LLM calls, that do not rely on each other's immediate outputs. Agentic frameworks like LangChain and the Google ADK provide built-in constructs to define and manage these concurrent operations. For instance, a main process can invoke several sub-tasks that run in parallel and wait for all of them to complete before proceeding to the next step. By running these independent tasks at the same time rather than one after another, this pattern drastically reduces the total execution time.

<mark><strong>解决之道：</strong>并行化模式通过启用独立任务的同时执行提供标准化解决方案。它通过识别工作流中的组件（如工具使用或大语言模型调用）来工作，这些组件不依赖于彼此的直接输出。像 LangChain 和 Google ADK 这样的智能体框架提供内置构造来定义和管理这些并发操作。例如，主进程可以调用几个并行运行的子任务，并等待所有子任务完成后再继续下一步。通过同时运行这些独立任务而非一个接一个地运行，这种模式大大减少了总执行时间。</mark>

**Rule of thumb:** Use this pattern when a workflow contains multiple independent operations that can run simultaneously, such as fetching data from several APIs, processing different chunks of data, or generating multiple pieces of content for later synthesis.

<mark><strong>经验法则：</strong>当工作流包含可以同时运行的多个独立操作时使用此模式，例如从多个 API 获取数据、处理不同的数据块或生成多个内容片段以供后续综合。</mark>

**Visual summary**

<mark><strong>可视化总结</strong></mark>

![Parallelization Pattern](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8fQf2xrLnudtFHqb8IcpEUrOPshi5GKqyY-dj_xOuMsUtrLIudrjfEW7x8CQAoL_aeiSQL4PFHaLhWez5cD0uoMDqf3iGblWzl-awCyk3hw8qZRvBpc7qUmqJyYKSLuY?key=_g4B5WuCtKCN3ODzzzjI8Q)

*Fig.2: Parallelization design pattern*

<mark><strong>图 2：</strong>并行化设计模式</mark>

---

## Key Takeaways | <mark>核心要点</mark>

Here are the key takeaways:

<mark>以下是关键要点：</mark>

- **Parallelization** is a pattern for executing independent tasks concurrently to improve efficiency.
- It is particularly useful when tasks involve waiting for external resources, such as API calls.
- The adoption of a concurrent or parallel architecture introduces substantial complexity and cost, impacting key development phases such as design, debugging, and system logging.
- Frameworks like LangChain and Google ADK provide built-in support for defining and managing parallel execution.
- In LangChain Expression Language (LCEL), RunnableParallel is a key construct for running multiple runnables side-by-side.
- Google ADK can facilitate parallel execution through LLM-Driven Delegation, where a Coordinator agent's LLM identifies independent sub-tasks and triggers their concurrent handling by specialized sub-agents.
- Parallelization helps reduce overall latency and makes agentic systems more responsive for complex tasks.

- <mark><strong>并行化</strong>是一种并发执行独立任务以提高效率的模式。</mark>
- <mark>当任务涉及等待外部资源（如 API 调用）时，它特别有用。</mark>
- <mark>采用并发或并行架构会引入大量复杂性和成本，影响设计、调试和系统日志记录等关键开发阶段。</mark>
- <mark>像 LangChain 和 Google ADK 这样的框架提供定义和管理并行执行的内置支持。</mark>
- <mark>在 LangChain 表达式语言（LCEL）中，RunnableParallel 是并行运行多个可运行对象的关键构造。</mark>
- <mark>Google ADK 可以通过大语言模型驱动的委托来促进并行执行，其中协调器智能体的大语言模型识别独立的子任务并触发专门的子智能体对它们进行并发处理。</mark>
- <mark>并行化有助于减少总体延迟，并使智能体系统对复杂任务的响应更快。</mark>

---

## Conclusion | <mark>结语</mark>

The parallelization pattern is a method for optimizing computational workflows by concurrently executing independent sub-tasks. This approach reduces overall latency, particularly in complex operations that involve multiple model inferences or calls to external services.

<mark>并行化模式是通过并发执行独立子任务来优化计算工作流的方法。这种方法减少了总体延迟，特别是在涉及多个模型推理或对外部服务调用的复杂操作中。</mark>

Frameworks provide distinct mechanisms for implementing this pattern. In LangChain, constructs like RunnableParallel are used to explicitly define and execute multiple processing chains simultaneously. In contrast, frameworks like the Google Agent Developer Kit (ADK) can achieve parallelization through multi-agent delegation, where a primary coordinator model assigns different sub-tasks to specialized agents that can operate concurrently.

<mark>框架为实现此模式提供了不同的机制。在 LangChain 中，像 RunnableParallel 这样的构造用于显式定义和同时执行多个处理链。相比之下，像 Google 智能体开发套件（ADK）这样的框架可以通过多智能体委托实现并行化，其中主协调器模型将不同的子任务分配给可以并发操作的专门智能体。</mark>

By integrating parallel processing with sequential (chaining) and conditional (routing) control flows, it becomes possible to construct sophisticated, high-performance computational systems capable of efficiently managing diverse and complex tasks.

<mark>通过将并行处理与顺序（链式）和条件（路由）控制流集成，可以构建能够高效管理多样化和复杂任务的复杂、高性能计算系统。</mark>

---

## References | <mark>参考文献</mark>

Here are some resources for further reading on the Parallelization pattern and related concepts:

<mark>以下是有关并行化模式和相关概念的进一步阅读资源：</mark>

1. LangChain Expression Language (LCEL) Documentation (Parallelism): [https://python.langchain.com/docs/concepts/lcel/](https://python.langchain.com/docs/concepts/lcel/)

   <mark>LangChain 表达式语言（LCEL）文档（并行性）：[https://python.langchain.com/docs/concepts/lcel/](https://python.langchain.com/docs/concepts/lcel/)</mark>

2. Google Agent Developer Kit (ADK) Documentation (Multi-Agent Systems): [https://google.github.io/adk-docs/agents/multi-agents/](https://google.github.io/adk-docs/agents/multi-agents/)

   <mark>Google 智能体开发套件（ADK）文档（多智能体系统）：[https://google.github.io/adk-docs/agents/multi-agents/](https://google.github.io/adk-docs/agents/multi-agents/)</mark>

3. Python asyncio Documentation: [https://docs.python.org/3/library/asyncio.html](https://docs.python.org/3/library/asyncio.html)

   <mark>Python asyncio 文档：[https://docs.python.org/3/library/asyncio.html](https://docs.python.org/3/library/asyncio.html)</mark>

