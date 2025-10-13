# Chapter 6: Planning
# 第六章：规划

---

Intelligent behavior often involves more than just reacting to the immediate input. It requires foresight, breaking down complex tasks into smaller, manageable steps, and strategizing how to achieve a desired outcome. This is where the Planning pattern comes into play. At its core, planning is the ability for an agent or a system of agents to formulate a sequence of actions to move from an initial state towards a goal state.

<mark>智能行为往往不仅仅是对直接输入的反应。它需要前瞻性、将复杂任务分解为更小、可管理的步骤，以及制定如何实现预期结果的策略。这就是规划模式发挥作用的地方。规划的核心是智能体或智能体系统制定行动序列，从初始状态向目标状态移动的能力。</mark>

---

## Planning Pattern Overview

<mark>规划模式概览</mark>

In the context of AI, it's helpful to think of a planning agent as a specialist to whom you delegate a complex goal. When you ask it to "organize a team offsite," you are defining the what—the objective and its constraints—but not the how. The agent's core task is to autonomously chart a course to that goal. It must first understand the initial state (e.g., budget, number of participants, desired dates) and the goal state (a successfully booked offsite), and then discover the optimal sequence of actions to connect them. The plan is not known in advance; it is created in response to the request.

<mark>在 AI 的背景下，将规划智能体视为一个专家是有帮助的，你将复杂目标委托给它。当你要求它"组织团队外出活动"时，你定义了"什么"——目标及其约束条件——但没有定义"如何"。智能体的核心任务是自主地规划达到该目标的路线。它必须首先理解初始状态（如预算、参与人数、期望日期）和目标状态（成功预订的外出活动），然后发现连接它们的最优行动序列。计划并非预先知道的；它是响应请求而创建的。</mark>

A hallmark of this process is adaptability. An initial plan is merely a starting point, not a rigid script. The agent's real power is its ability to incorporate new information and steer the project around obstacles. For instance, if the preferred venue becomes unavailable or a chosen caterer is fully booked, a capable agent doesn't simply fail. It adapts. It registers the new constraint, re-evaluates its options, and formulates a new plan, perhaps by suggesting alternative venues or dates.

<mark>这个过程的标志是适应性。初始计划仅仅是一个起点，而不是僵化的脚本。智能体的真正力量在于其整合新信息并引导项目绕过障碍的能力。例如，如果首选场地变得不可用或选定的餐饮服务完全预订满了，有能力的智能体不会简单地失败。它会适应。它记录新的约束条件，重新评估选项，并制定新计划，也许会建议替代场地或日期。</mark>

However, it is crucial to recognize the trade-off between flexibility and predictability. Dynamic planning is a specific tool, not a universal solution. When a problem's solution is already well-understood and repeatable, constraining the agent to a predetermined, fixed workflow is more effective. This approach limits the agent's autonomy to reduce uncertainty and the risk of unpredictable behavior, guaranteeing a reliable and consistent outcome. Therefore, the decision to use a planning agent versus a simple task-execution agent hinges on a single question: does the "how" need to be discovered, or is it already known?

<mark>然而，认识到灵活性和可预测性之间的权衡是至关重要的。动态规划是一个特定的工具，而不是通用解决方案。当问题的解决方案已经被充分理解且可重复时，将智能体约束到预定的、固定的工作流程更有效。这种方法限制了智能体的自主性以减少不确定性和不可预测行为的风险，保证可靠和一致的结果。因此，使用规划智能体与简单任务执行智能体的决定取决于一个问题："如何"需要被发现，还是已经知道？</mark>

---

## Practical Applications & Use Cases

<mark>实际应用和用例</mark>

The Planning pattern is a core computational process in autonomous systems, enabling an agent to synthesize a sequence of actions to achieve a specified goal, particularly within dynamic or complex environments. This process transforms a high-level objective into a structured plan composed of discrete, executable steps.

<mark>规划模式是自主系统中的核心计算过程，使智能体能够综合一系列行动来实现指定目标，特别是在动态或复杂环境中。这个过程将高级目标转换为由离散、可执行步骤组成的结构化计划。</mark>

In domains such as procedural task automation, planning is used to orchestrate complex workflows. For example, a business process like onboarding a new employee can be decomposed into a directed sequence of sub-tasks, such as creating system accounts, assigning training modules, and coordinating with different departments. The agent generates a plan to execute these steps in a logical order, invoking necessary tools or interacting with various systems to manage dependencies.

<mark>在程序性任务自动化等领域，规划用于编排复杂工作流程。例如，新员工入职这样的业务流程可以分解为一系列有向的子任务，如创建系统账户、分配培训模块和与不同部门协调。智能体生成一个计划以逻辑顺序执行这些步骤，调用必要的工具或与各种系统交互来管理依赖关系。</mark>

Within robotics and autonomous navigation, planning is fundamental for state-space traversal. A system, whether a physical robot or a virtual entity, must generate a path or sequence of actions to transition from an initial state to a goal state. This involves optimizing for metrics such as time or energy consumption while adhering to environmental constraints, like avoiding obstacles or following traffic regulations.

<mark>在机器人和自主导航中，规划是状态空间遍历的基础。系统，无论是物理机器人还是虚拟实体，必须生成路径或行动序列以从初始状态转换到目标状态。这涉及优化时间或能源消耗等指标，同时遵守环境约束，如避开障碍物或遵循交通规则。</mark>

This pattern is also critical for structured information synthesis. When tasked with generating a complex output like a research report, an agent can formulate a plan that includes distinct phases for information gathering, data summarization, content structuring, and iterative refinement. Similarly, in customer support scenarios involving multi-step problem resolution, an agent can create and follow a systematic plan for diagnosis, solution implementation, and escalation.

<mark>这种模式对结构化信息综合也至关重要。当任务需要生成像研究报告这样的复杂输出时，智能体可以制定包含信息收集、数据总结、内容结构化和迭代改进等不同阶段的计划。同样，在涉及多步骤问题解决的客户支持场景中，智能体可以创建并遵循诊断、解决方案实施和升级的系统性计划。</mark>

In essence, the Planning pattern allows an agent to move beyond simple, reactive actions to goal-oriented behavior. It provides the logical framework necessary to solve problems that require a coherent sequence of interdependent operations.

<mark>本质上，规划模式允许智能体超越简单的反应式行动，转向目标导向的行为。它提供了解决需要一系列相互依赖操作的问题所必需的逻辑框架。</mark>

---

## Hands-on code (Crew AI)

<mark>实践代码（Crew AI）</mark>

The following section will demonstrate an implementation of the Planner pattern using the Crew AI framework. This pattern involves an agent that first formulates a multi-step plan to address a complex query and then executes that plan sequentially.

<mark>以下部分将演示使用 Crew AI 框架实现规划器模式的实现。这种模式涉及一个智能体，它首先制定多步计划来解决复杂查询，然后按顺序执行该计划。</mark>

```python path=/Users/gino/Documents/Github/agentic-design-patterns-cn/chapter06-planning.html start=1
import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI

# Load environment variables from .env file for security
load_dotenv()

# 1. Explicitly define the language model for clarity
llm = ChatOpenAI(model="gpt-4-turbo")

# 2. Define a clear and focused agent
planner_writer_agent = Agent(
   role='Article Planner and Writer',
   goal='Plan and then write a concise, engaging summary on a specified topic.',
   backstory=(
       'You are an expert technical writer and content strategist. '
       'Your strength lies in creating a clear, actionable plan before writing, '
       'ensuring the final summary is both informative and easy to digest.'
   ),
   verbose=True,
   allow_delegation=False,
   llm=llm # Assign the specific LLM to the agent
)

# 3. Define a task with a more structured and specific expected output
topic = "The importance of Reinforcement Learning in AI"
high_level_task = Task(
   description=(
       f"1. Create a bullet-point plan for a summary on the topic: '{topic}'.\n"
       f"2. Write the summary based on your plan, keeping it around 200 words."
   ),
   expected_output=(
       "A final report containing two distinct sections:\n\n"
       "### Plan\n"
       "- A bulleted list outlining the main points of the summary.\n\n"
       "### Summary\n"
       "- A concise and well-structured summary of the topic."
   ),
   agent=planner_writer_agent,
)

# Create the crew with a clear process
crew = Crew(
   agents=[planner_writer_agent],
   tasks=[high_level_task],
   process=Process.sequential,
)

# Execute the task
print("## Running the planning and writing task ##")
result = crew.kickoff()

print("\n\n---\n## Task Result ##\n---")
print(result)
```

This code uses the CrewAI library to create an AI agent that plans and writes a summary on a given topic. It starts by importing necessary libraries, including Crew.ai and langchain_openai, and loading environment variables from a .env file. A ChatOpenAI language model is explicitly defined for use with the agent. An Agent named planner_writer_agent is created with a specific role and goal: to plan and then write a concise summary. The agent's backstory emphasizes its expertise in planning and technical writing. A Task is defined with a clear description to first create a plan and then write a summary on the topic "The importance of Reinforcement Learning in AI", with a specific format for the expected output. A Crew is assembled with the agent and task, set to process them sequentially. Finally, the crew.kickoff() method is called to execute the defined task and the result is printed.

<mark>此代码使用 CrewAI 库创建一个在给定主题上规划和撰写摘要的 AI 智能体。它首先导入必要的库，包括 Crew.ai 和 langchain_openai，并从 .env 文件加载环境变量。明确定义了一个用于智能体的 ChatOpenAI 语言模型。创建了一个名为 planner_writer_agent 的智能体，具有特定的角色和目标：规划然后撰写简洁摘要。智能体的背景故事强调了其在规划和技术写作方面的专长。定义了一个任务，明确描述首先创建计划，然后就"强化学习在 AI 中的重要性"这一主题撰写摘要，并对预期输出格式有具体要求。组装了包含智能体和任务的团队，设置为按顺序处理它们。最后，调用 crew.kickoff() 方法执行定义的任务并打印结果。</mark>

---

## Google DeepResearch

<mark>Google DeepResearch</mark>

Google Gemini DeepResearch (see Fig.1) is an agent-based system designed for autonomous information retrieval and synthesis. It functions through a multi-step agentic pipeline that dynamically and iteratively queries Google Search to systematically explore complex topics. The system is engineered to process a large corpus of web-based sources, evaluate the collected data for relevance and knowledge gaps, and perform subsequent searches to address them. The final output consolidates the vetted information into a structured, multi-page summary with citations to the original sources.

<mark>Google Gemini DeepResearch（见图 1）是一个为自主信息检索和综合设计的智能体系统。它通过一个多步智能体管道运行，动态和迭代地查询 Google Search 以系统性地探索复杂主题。该系统设计用于处理大量基于网络的来源，评估收集数据的相关性和知识差距，并执行后续搜索来解决这些问题。最终输出将经过审查的信息整合成结构化的多页摘要，并引用原始来源。</mark>

Expanding on this, the system's operation is not a single query-response event but a managed, long-running process. It begins by deconstructing a user's prompt into a multi-point research plan (see Fig. 1), which is then presented to the user for review and modification. This allows for a collaborative shaping of the research trajectory before execution. Once the plan is approved, the agentic pipeline initiates its iterative search-and-analysis loop. This involves more than just executing a series of predefined searches; the agent dynamically formulates and refines its queries based on the information it gathers, actively identifying knowledge gaps, corroborating data points, and resolving discrepancies.

<mark>展开来说，系统的操作不是单一的查询-响应事件，而是一个管理的、长期运行的过程。它首先将用户的提示解构为多点研究计划（见图 1），然后呈现给用户进行审查和修改。这允许在执行前协作塑造研究轨迹。一旦计划被批准，智能体管道启动其迭代搜索和分析循环。这不仅仅涉及执行一系列预定义搜索；智能体基于收集的信息动态制定和优化查询，主动识别知识差距、证实数据点并解决差异。</mark>

![Google Deep Research Plan](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdrVzLv4sItgi77rVEnpgvLJoPEiVzCocazgQWCF76R5Rg_Znt9JUzWzi1PGt0Ylhtk1mpy8awLsxt0gDUHr6xL8l8ZbujBK7cHbt7-cjsQ2gt3_vJ1WMUB1xPUIELTKQ?key=OBPNGbus6y8MdZcoiaowsA)

<mark><strong>图 1：</strong>Google Deep Research 智能体生成使用 Google Search 作为工具的执行计划。</mark>

A key architectural component is the system's ability to manage this process asynchronously. This design ensures that the investigation, which can involve analyzing hundreds of sources, is resilient to single-point failures and allows the user to disengage and be notified upon completion. The system can also integrate user-provided documents, combining information from private sources with its web-based research. The final output is not merely a concatenated list of findings but a structured, multi-page report. During the synthesis phase, the model performs a critical evaluation of the collected information, identifying major themes and organizing the content into a coherent narrative with logical sections. The report is designed to be interactive, often including features like an audio overview, charts, and links to the original cited sources, allowing for verification and further exploration by the user. In addition to the synthesized results, the model explicitly returns the full list of sources it searched and consulted (see Fig.2). These are presented as citations, providing complete transparency and direct access to the primary information. This entire process transforms a simple query into a comprehensive, synthesized body of knowledge.

<mark>一个关键的架构组件是系统异步管理此过程的能力。这种设计确保可能涉及分析数百个来源的调查能够抵御单点故障，并允许用户脱离并在完成时得到通知。系统还可以整合用户提供的文档，将来自私有来源的信息与基于网络的研究相结合。最终输出不仅仅是发现的拼接列表，而是结构化的多页报告。在综合阶段，模型对收集的信息进行批判性评估，识别主要主题并将内容组织成具有逻辑部分的连贯叙述。报告设计为交互式的，通常包括音频概览、图表和指向原始引用来源的链接等功能，允许用户验证和进一步探索。除了综合结果外，模型还明确返回其搜索和参考的完整来源列表（见图 2）。这些以引用的形式呈现，提供完全的透明度和对主要信息的直接访问。整个过程将简单查询转换为全面、综合的知识体。</mark>

![Deep Research Execution](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcb7LsFVlqVSCvI9raTrAR4-SBKGruyBcW-ZN0Yq5hPhsQIkkTmyg2ZK73tMzLCk4GRnWZTyXSuJse3wbyqTaZoIFHZv1JRu-RCp1Rc2nxEqZ7f5uOlNyzQE9ZzeeY59Q?key=OBPNGbus6y8MdZcoiaowsA)

<mark><strong>图 2：</strong>Deep Research 计划执行的示例，导致 Google Search 被用作工具搜索各种网络来源。</mark>

By mitigating the substantial time and resource investment required for manual data acquisition and synthesis, Gemini DeepResearch provides a more structured and exhaustive method for information discovery. The system's value is particularly evident in complex, multi-faceted research tasks across various domains.

<mark>通过减轻手动数据获取和综合所需的大量时间和资源投入，Gemini DeepResearch 为信息发现提供了更结构化和详尽的方法。该系统的价值在各个领域的复杂、多方面研究任务中特别明显。</mark>

For instance, in competitive analysis, the agent can be directed to systematically gather and collate data on market trends, competitor product specifications, public sentiment from diverse online sources, and marketing strategies. This automated process replaces the laborious task of manually tracking multiple competitors, allowing analysts to focus on higher-order strategic interpretation rather than data collection (see Fig. 3).

<mark>例如，在竞争分析中，智能体可以被指导系统性地收集和整理市场趋势、竞争对手产品规格、来自多样在线来源的公众情绪和营销策略的数据。这个自动化过程取代了手动跟踪多个竞争对手的繁重任务，允许分析师专注于更高阶的战略解读而非数据收集（见图 3）。</mark>

![Deep Research Output](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfWMu5jY30L-3Z2ajZ4DxqNxyBDe0LCyt8dgHttUH4EdzVI_Nefnzv9KwuAxB2gklMbA08izrTlfww_qgQkl4zuLpB82k61nT2V-iKOZD9tRxoCQNXyA06bo1VvkmYciA?key=OBPNGbus6y8MdZcoiaowsA)

<mark><strong>图 3：</strong>Google Deep Research 智能体生成的最终输出，代表我们分析使用 Google Search 作为工具获得的来源。</mark>

Similarly, in academic exploration, the system serves as a powerful tool for conducting extensive literature reviews. It can identify and summarize foundational papers, trace the development of concepts across numerous publications, and map out emerging research fronts within a specific field, thereby accelerating the initial and most time-consuming phase of academic inquiry.

<mark>同样，在学术探索中，该系统作为进行广泛文献综述的强大工具。它可以识别和总结基础论文，追踪概念在众多出版物中的发展，并勾勒出特定领域内新兴研究前沿，从而加速学术研究初始和最耗时的阶段。</mark>

The efficiency of this approach stems from the automation of the iterative search-and-filter cycle, which is a core bottleneck in manual research. Comprehensiveness is achieved by the system's capacity to process a larger volume and variety of information sources than is typically feasible for a human researcher within a comparable timeframe. This broader scope of analysis helps to reduce the potential for selection bias and increases the likelihood of uncovering less obvious but potentially critical information, leading to a more robust and well-supported understanding of the subject matter.

<mark>这种方法的效率源于对迭代搜索和过滤循环的自动化，这是手动研究中的核心瓶颈。该系统处理比人类研究人员在可比时间框架内通常可行的更大量和更多样化信息来源的能力实现了全面性。这种更广泛的分析范围有助于减少选择偏见的潜力，增加发现不太明显但可能关键信息的可能性，导致对主题更稳健和有良好支撑的理解。</mark>

---

## OpenAI Deep Research API

<mark>OpenAI Deep Research API</mark>

The OpenAI Deep Research API is a specialized tool designed to automate complex research tasks. It utilizes an advanced, agentic model that can independently reason, plan, and synthesize information from real-world sources. Unlike a simple Q&A model, it takes a high-level query and autonomously breaks it down into sub-questions, performs web searches using its built-in tools, and delivers a structured, citation-rich final report. The API provides direct programmatic access to this entire process, using at the time of writing models like o3-deep-research-2025-06-26 for high-quality synthesis and the faster o4-mini-deep-research-2025-06-26 for latency-sensitive application

<mark>OpenAI Deep Research API 是一个专为自动化复杂研究任务设计的专门工具。它利用一个高级的智能体模型，可以独立地推理、规划并从现实世界来源综合信息。与简单的问答模型不同，它接受高级查询并自主地将其分解为子问题，使用其内置工具执行网络搜索，并提供结构化、富含引用的最终报告。API 提供对整个过程的直接编程访问，在撰写时使用像 o3-deep-research-2025-06-26 这样的模型进行高质量综合，以及用于延迟敏感应用的更快的 o4-mini-deep-research-2025-06-26。</mark>

The Deep Research API is useful because it automates what would otherwise be hours of manual research, delivering professional-grade, data-driven reports suitable for informing business strategy, investment decisions, or policy recommendations. Its key benefits include:

<mark>Deep Research API 很有用，因为它自动化了本来需要数小时手动研究的工作，提供适合告知商业策略、投资决策或政策建议的专业级、数据驱动的报告。其主要好处包括：</mark>

- **Structured, Cited Output:** It produces well-organized reports with inline citations linked to source metadata, ensuring claims are verifiable and data-backed.

- <mark><strong>结构化、有引用的输出：</strong>它生成组织良好的报告，带有链接到来源元数据的内联引用，确保声明可验证且有数据支撑。</mark>

- **Transparency:** Unlike the abstracted process in ChatGPT, the API exposes all intermediate steps, including the agent's reasoning, the specific web search queries it executed, and any code it ran. This allows for detailed debugging, analysis, and a deeper understanding of how the final answer was constructed.

- <mark><strong>透明度：</strong>与 ChatGPT 中的抽象过程不同，API 暴露所有中间步骤，包括智能体的推理、它执行的具体网络搜索查询以及运行的任何代码。这允许详细的调试、分析和对最终答案如何构建的更深理解。</mark>

- **Extensibility:** It supports the Model Context Protocol (MCP), enabling developers to connect the agent to private knowledge bases and internal data sources, blending public web research with proprietary information.

- <mark><strong>可扩展性：</strong>它支持模型上下文协议（MCP），使开发者能够将智能体连接到私有知识库和内部数据源，将公共网络研究与专有信息结合。</mark>

To use the API, you send a request to the client.responses.create endpoint, specifying a model, an input prompt, and the tools the agent can use. The input typically includes a system_message that defines the agent's persona and desired output format, along with the user_query. You must also include the web_search_preview tool and can optionally add others like code_interpreter or custom MCP tools (see Chapter 10) for internal data.

<mark>要使用 API，你向 client.responses.create 端点发送请求，指定模型、输入提示和智能体可以使用的工具。输入通常包括定义智能体角色和期望输出格式的 system_message，以及 user_query。你还必须包含 web_search_preview 工具，并可以可选地添加其他工具，如 code_interpreter 或自定义 MCP 工具（见第 10 章）用于内部数据。</mark>

```python path=/Users/gino/Documents/Github/agentic-design-patterns-cn/chapter06-planning.html start=300
from openai import OpenAI

# Initialize the client with your API key
client = OpenAI(api_key="YOUR_OPENAI_API_KEY")

# Define the agent's role and the user's research question
system_message = """You are a professional researcher preparing a structured, data-driven report.
Focus on data-rich insights, use reliable sources, and include inline citations."""
user_query = "Research the economic impact of semaglutide on global healthcare systems."

# Create the Deep Research API call
response = client.responses.create(
 model="o3-deep-research-2025-06-26",
 input=[
   {
     "role": "developer",
     "content": [{"type": "input_text", "text": system_message}]
   },
   {
     "role": "user",
     "content": [{"type": "input_text", "text": user_query}]
   }
 ],
 reasoning={"summary": "auto"},
 tools=[{"type": "web_search_preview"}]
)

# Access and print the final report from the response
final_report = response.output[-1].content[0].text
print(final_report)

# --- ACCESS INLINE CITATIONS AND METADATA ---
print("--- CITATIONS ---")
annotations = response.output[-1].content[0].annotations

if not annotations:
   print("No annotations found in the report.")
else:
   for i, citation in enumerate(annotations):
       # The text span the citation refers to
       cited_text = final_report[citation.start_index:citation.end_index]

       print(f"Citation {i+1}:")
       print(f"  Cited Text: {cited_text}")
       print(f"  Title: {citation.title}")
       print(f"  URL: {citation.url}")
       print(f"  Location: chars {citation.start_index}–{citation.end_index}")
print("\n" + "="*50 + "\n")

# --- INSPECT INTERMEDIATE STEPS ---
print("--- INTERMEDIATE STEPS ---")

# 1. Reasoning Steps: Internal plans and summaries generated by the model.
try:
   reasoning_step = next(item for item in response.output if item.type == "reasoning")
   print("\n[Found a Reasoning Step]")
   for summary_part in reasoning_step.summary:
       print(f"  - {summary_part.text}")
except StopIteration:
   print("\nNo reasoning steps found.")

# 2. Web Search Calls: The exact search queries the agent executed.
try:
   search_step = next(item for item in response.output if item.type == "web_search_call")
   print("\n[Found a Web Search Call]")
   print(f"  Query Executed: '{search_step.action['query']}'")
   print(f"  Status: {search_step.status}")
except StopIteration:
   print("\nNo web search steps found.")

# 3. Code Execution: Any code run by the agent using the code interpreter.
try:
   code_step = next(item for item in response.output if item.type == "code_interpreter_call")
   print("\n[Found a Code Execution Step]")
   print("  Code Input:")
   print(f"  ```python\n{code_step.input}\n  ```")
   print("  Code Output:")
   print(f"  {code_step.output}")
except StopIteration:
   print("\nNo code execution steps found.")
```

This code snippet utilizes the OpenAI API to perform a "Deep Research" task. It starts by initializing the OpenAI client with your API key, which is crucial for authentication. Then, it defines the role of the AI agent as a professional researcher and sets the user's research question about the economic impact of semaglutide. The code constructs an API call to the o3-deep-research-2025-06-26 model, providing the defined system message and user query as input. It also requests an automatic summary of the reasoning and enables web search capabilities. After making the API call, it extracts and prints the final generated report.

<mark>此代码片段利用 OpenAI API 执行"深度研究"任务。它首先使用你的 API 密钥初始化 OpenAI 客户端，这对身份验证至关重要。然后，它定义 AI 智能体的角色为专业研究员，并设置关于司美格鲁肽经济影响的用户研究问题。代码构造对 o3-deep-research-2025-06-26 模型的 API 调用，提供定义的系统消息和用户查询作为输入。它还请求推理的自动摘要并启用网络搜索功能。在进行 API 调用后，它提取并打印最终生成的报告。</mark>

Subsequently, it attempts to access and display inline citations and metadata from the report's annotations, including the cited text, title, URL, and location within the report. Finally, it inspects and prints details about the intermediate steps the model took, such as reasoning steps, web search calls (including the query executed), and any code execution steps if a code interpreter was used.

<mark>随后，它尝试从报告的注释中访问和显示内联引用和元数据，包括引用文本、标题、URL 和报告内的位置。最后，它检查并打印模型采取的中间步骤的详细信息，如推理步骤、网络搜索调用（包括执行的查询）以及如果使用代码解释器的任何代码执行步骤。</mark>

---

## At a Glance

<mark>概览</mark>

**What:** Complex problems often cannot be solved with a single action and require foresight to achieve a desired outcome. Without a structured approach, an agentic system struggles to handle multifaceted requests that involve multiple steps and dependencies. This makes it difficult to break down high-level objectives into a manageable series of smaller, executable tasks. Consequently, the system fails to strategize effectively, leading to incomplete or incorrect results when faced with intricate goals.

<mark><strong>什么：</strong> 复杂问题通常无法通过单一行动解决，需要前瞻性来实现期望的结果。没有结构化方法，智能体系统难以处理涉及多个步骤和依赖关系的多方面请求。这使得将高级目标分解为可管理的一系列较小、可执行任务变得困难。因此，当面对复杂目标时，系统无法有效制定策略，导致不完整或错误的结果。</mark>

**Why:** The Planning pattern offers a standardized solution by having an agentic system first create a coherent plan to address a goal. It involves decomposing a high-level objective into a sequence of smaller, actionable steps or sub-goals. This allows the system to manage complex workflows, orchestrate various tools, and handle dependencies in a logical order. LLMs are particularly well-suited for this, as they can generate plausible and effective plans based on their vast training data. This structured approach transforms a simple reactive agent into a strategic executor that can proactively work towards a complex objective and even adapt its plan if necessary.

<mark><strong>为什么：</strong> 规划模式通过让智能体系统首先创建连贯的计划来解决目标，提供了标准化解决方案。它涉及将高级目标分解为一系列较小、可执行的步骤或子目标。这允许系统管理复杂工作流程、编排各种工具并以逻辑顺序处理依赖关系。LLM 特别适合这一点，因为它们可以基于其庞大的训练数据生成合理有效的计划。这种结构化方法将简单的反应式智能体转换为能够主动朝着复杂目标工作甚至在必要时适应其计划的战略执行者。</mark>

**Rule of thumb:** Use this pattern when a user's request is too complex to be handled by a single action or tool. It is ideal for automating multi-step processes, such as generating a detailed research report, onboarding a new employee, or executing a competitive analysis. Apply the Planning pattern whenever a task requires a sequence of interdependent operations to reach a final, synthesized outcome.

<mark><strong>经验法则：</strong> 当用户请求过于复杂而无法通过单一行动或工具处理时使用此模式。它非常适合自动化多步骤过程，如生成详细研究报告、新员工入职或执行竞争分析。每当任务需要一系列相互依赖的操作来达到最终综合结果时，应用规划模式。</mark>

**Visual summary**

<mark><strong>可视化总结</strong></mark>

![Planning Design Pattern](https://lh7-rt.googleusercontent.com/docsz/AD_4nXejwQuAKuXxPUjE99j1i9JyuHqPoJPCZFJvpLh_IeyljS0ZFXAokablmWfFel7dRsa9oVzTgAPnqRZreOM-xuuz-r8A2QSrdBih9SH2_v4ubu1sG8DAkrX-SlNcA3Z81qw?key=OBPNGbus6y8MdZcoiaowsA)

<mark><strong>图 4：</strong>规划设计模式</mark>

---

## Key Takeaways

<mark>关键要点</mark>

- Planning enables agents to break down complex goals into actionable, sequential steps.

- <mark>规划使智能体能够将复杂目标分解为可操作的连续步骤。</mark>

- It is essential for handling multi-step tasks, workflow automation, and navigating complex environments.

- <mark>它对于处理多步骤任务、工作流程自动化和导航复杂环境至关重要。</mark>

- LLMs can perform planning by generating step-by-step approaches based on task descriptions.

- <mark>LLM 可以通过基于任务描述生成逐步方法来执行规划。</mark>

- Explicitly prompting or designing tasks to require planning steps encourages this behavior in agent frameworks.

- <mark>明确提示或设计需要规划步骤的任务鼓励智能体框架中的这种行为。</mark>

- Google Deep Research is an agent analyzing on our behalf sources obtained using Google Search as a tool. It reflects, plans, and executes.

- <mark>Google Deep Research 是一个代表我们分析使用 Google Search 作为工具获得的来源的智能体。它反思、规划和执行。</mark>

---

## Conclusion

<mark>结论</mark>

In conclusion, the Planning pattern is a foundational component that elevates agentic systems from simple reactive responders to strategic, goal-oriented executors. Modern large language models provide the core capability for this, autonomously decomposing high-level objectives into coherent, actionable steps. This pattern scales from straightforward, sequential task execution, as demonstrated by the CrewAI agent creating and following a writing plan, to more complex and dynamic systems. The Google DeepResearch agent exemplifies this advanced application, creating iterative research plans that adapt and evolve based on continuous information gathering. Ultimately, planning provides the essential bridge between human intent and automated execution for complex problems. By structuring a problem-solving approach, this pattern enables agents to manage intricate workflows and deliver comprehensive, synthesized results.

<mark>总之，规划模式是将智能体系统从简单的反应式响应者提升为战略性、目标导向的执行者的基础组件。现代大语言模型为此提供了核心能力，自主地将高级目标分解为连贯、可操作的步骤。这种模式从直观的、顺序任务执行（如 CrewAI 智能体创建和遵循写作计划所演示的）扩展到更复杂和动态的系统。Google DeepResearch 智能体体现了这种高级应用，创建基于持续信息收集适应和演进的迭代研究计划。最终，规划为复杂问题提供了人类意图与自动执行之间的重要桥梁。通过构建问题解决方法，此模式使智能体能够管理复杂工作流程并提供全面、综合的结果。</mark>

---

## References

<mark>参考文献</mark>

1. Google DeepResearch (Gemini Feature): [gemini.google.com](https://gemini.google.com)
2. OpenAI, Introducing deep research: [https://openai.com/index/introducing-deep-research/](https://openai.com/index/introducing-deep-research/)
3. Perplexity, Introducing Perplexity Deep Research: [https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research)

1. <mark>Google DeepResearch（Gemini 功能）：[gemini.google.com](https://gemini.google.com)</mark>
2. <mark>OpenAI，介绍深度研究：[https://openai.com/index/introducing-deep-research/](https://openai.com/index/introducing-deep-research/)</mark>
3. <mark>Perplexity，介绍 Perplexity 深度研究：[https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research)</mark>
