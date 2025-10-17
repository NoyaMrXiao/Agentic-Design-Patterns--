import { useState, useEffect, useRef } from 'react'
import './App.css'

// 定义书籍章节结构
interface Chapter {
  id: string
  title: string
  filename: string
  order: number
  icon?: string
}

const chapters: Chapter[] = [
  { id: '00', title: '目录', filename: '00-Table-of-Contents.md', order: 0, icon: '📖' },
  { id: '01', title: '献辞', filename: '01-Dedication.md', order: 1, icon: '💝' },
  { id: '02', title: '致谢', filename: '02-Acknowledgment.md', order: 2, icon: '🙏' },
  { id: '03', title: '序言', filename: '03-Foreword.md', order: 3, icon: '📝' },
  { id: '04', title: '思想领袖的观点', filename: '04-Thought-Leader.md', order: 4, icon: '💡' },
  { id: '05', title: '介绍', filename: '05-Introduction.md', order: 5, icon: '🌟' },
  { id: '06', title: '什么是智能体', filename: '06-What-Makes-Agent.md', order: 6, icon: '🤖' },
  { id: '07', title: '第一章：提示链', filename: '07-Chapter-01-Prompt-Chaining.md', order: 7, icon: '⛓️' },
  { id: '08', title: '第二章：路由', filename: '08-Chapter-02-Routing.md', order: 8, icon: '🛤️' },
  { id: '09', title: '第三章：并行化', filename: '09-Chapter-03-Parallelization.md', order: 9, icon: '⚡' },
  { id: '10', title: '第四章：反思', filename: '10-Chapter-04-Reflection.md', order: 10, icon: '🔍' },
  { id: '11', title: '第五章：工具使用', filename: '11-Chapter-05-Tool-Use.md', order: 11, icon: '🔧' },
  { id: '12', title: '第六章：规划', filename: '12-Chapter-06-Planning.md', order: 12, icon: '📋' },
  { id: '13', title: '第七章：多智能体协作', filename: '13-Chapter-07-Multi-Agent-Collaboration.md', order: 13, icon: '👥' },
]

function App() {
 
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(chapters[0])
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(false)
  // 默认在桌面端打开侧边栏，移动端关闭
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024)
  // 内容区域的引用，用于滚动
  const contentRef = useRef<HTMLDivElement>(null)

  // SEO 优化：动态更新页面标题和 meta 标签
  useEffect(() => {
    const baseTitle = '智能体设计模式 | Agentic Design Patterns'
    const chapterTitle = selectedChapter.title
    const fullTitle = chapterTitle === '目录' ? baseTitle : `${chapterTitle} - ${baseTitle}`
    
    // 更新页面标题
    document.title = fullTitle
    
    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        chapterTitle === '目录' 
          ? '智能体设计模式中文版 - 探索AI智能体的核心设计模式和最佳实践，包含提示链、路由、并行化、反思、工具使用、规划和多智能体协作等关键概念。'
          : `智能体设计模式 - ${chapterTitle} - 深入学习AI智能体设计模式的核心概念和实践方法。`
      )
    }
    
    // 更新 Open Graph 标签
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle)
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        chapterTitle === '目录' 
          ? '智能体设计模式中文版 - 探索AI智能体的核心设计模式和最佳实践'
          : `智能体设计模式 - ${chapterTitle} - 深入学习AI智能体设计模式的核心概念`
      )
    }
    
    // 更新 Twitter Card 标签
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', fullTitle)
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 
        chapterTitle === '目录' 
          ? '智能体设计模式中文版 - 探索AI智能体的核心设计模式和最佳实践'
          : `智能体设计模式 - ${chapterTitle} - 深入学习AI智能体设计模式的核心概念`
      )
    }
    
    // 更新结构化数据
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "智能体设计模式",
      "alternateName": "Agentic Design Patterns",
      "author": {
        "@type": "Person",
        "name": "Antonio Gulli"
      },
      "inLanguage": "zh-CN",
      "description": "智能体设计模式中文版 - 探索AI智能体的核心设计模式和最佳实践",
      "url": window.location.href,
      "hasPart": chapters.map(chapter => ({
        "@type": "Chapter",
        "name": chapter.title,
        "position": chapter.order,
        "url": `${window.location.origin}/#${chapter.id}`
      }))
    }
    
    // 移除旧的 structured data
    const oldScript = document.querySelector('script[type="application/ld+json"]')
    if (oldScript) {
      oldScript.remove()
    }
    
    // 添加新的 structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
  }, [selectedChapter])

  useEffect(() => {
    loadChapter(selectedChapter)
  }, [selectedChapter])

  // 响应窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      // 在桌面端自动打开侧边栏
      if (window.innerWidth >= 1024 && !sidebarOpen) {
        setSidebarOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [sidebarOpen])
  

  // 控制移动端侧边栏打开时禁止背景滚动
  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (sidebarOpen) {
        document.body.classList.add('sidebar-open')
      } else {
        document.body.classList.remove('sidebar-open')
      }
    }

    return () => {
      document.body.classList.remove('sidebar-open')
    }
  }, [sidebarOpen])

  const loadChapter = async (chapter: Chapter) => {
    setLoading(true)
    try {
      const response = await fetch(`/book/${chapter.filename}`)
      const text = await response.text()
      setContent(text)
    } catch (error) {
      console.error('加载章节失败:', error)
      setContent('# 加载失败\n\n无法加载该章节内容。')
    } finally {
      setLoading(false)
    }
  }

  // 提取中文内容（mark标签内的内容）
  const extractChineseContent = (markdown: string) => {
    const lines = markdown.split('\n')
    const result: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // 处理代码块
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          // 开始代码块
          inCodeBlock = true
          codeBlockContent = [line]
        } else {
          // 结束代码块
          inCodeBlock = false
          codeBlockContent.push(line)
          // 保留整个代码块
          result.push(...codeBlockContent)
          result.push('') // 添加空行
          codeBlockContent = []
        }
        continue
      }
      
      if (inCodeBlock) {
        codeBlockContent.push(line)
        continue
      }
      
      // 检查是否是图片语法
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
      if (imageMatch) {
        // 保留图片语法
        result.push(line.trim())
      }
      // 提取 mark 标签中的内容
      else {
        const markMatches = line.match(/<mark>(.*?)<\/mark>/g)
        if (markMatches) {
          // 获取所有 mark 标签内的内容
          const chineseContent = markMatches
            .map(match => match.replace(/<\/?mark>/g, '').trim())
            .filter(content => content.length > 0)
            .join(' ')
          
          if (chineseContent) {
            // 检查是否是标题行
            const titleMatch = line.match(/^(#{1,6})\s+/)
            if (titleMatch) {
              result.push(`${titleMatch[1]} ${chineseContent}`)
            } else {
              result.push(chineseContent)
            }
          }
        } else if (line.trim() === '---') {
          result.push('---')
        } else if (line.trim() === '') {
          // 保留空行用于段落分隔
          result.push('')
        } else if (!line.includes('<mark>') && /[\u4e00-\u9fa5]/.test(line)) {
          // 如果没有 mark 标签但包含中文，也保留
          result.push(line.trim())
        }
      }
    }
    
    return result.join('\n')
  }

  const renderMarkdown = (markdown: string) => {
    // 先提取中文内容
    const chineseContent = extractChineseContent(markdown)
    
    // 按行处理
    const lines = chineseContent.split('\n')
    const htmlLines: string[] = []
    let i = 0
    
    while (i < lines.length) {
      const line = lines[i].trim()
      
      // 跳过空行
      if (!line) {
        i++
        continue
      }
      
      // 处理代码块
      if (line.startsWith('```')) {
        const codeLines: string[] = []
        const langMatch = line.match(/```(\w+)?/)
        const language = langMatch && langMatch[1] ? langMatch[1] : ''
        i++ // 跳过开始的 ```
        
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }
        
        if (i < lines.length) {
          i++ // 跳过结束的 ```
        }
        
        const codeContent = codeLines.join('\n')
        const escapedCode = codeContent
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
        
        htmlLines.push(`<pre class="bg-gray-900 text-gray-100 p-8 my-12 overflow-x-auto font-mono text-sm leading-relaxed"><code class="language-${language}">${escapedCode}</code></pre>`)
        continue
      }
      
      // 处理标题
      if (line.startsWith('##### ')) {
        htmlLines.push(`<h5 class="text-base font-light mt-12 mb-6 text-gray-700 tracking-wide">${line.substring(6)}</h5>`)
        i++
      } else if (line.startsWith('#### ')) {
        htmlLines.push(`<h4 class="text-lg font-light mt-16 mb-8 text-gray-800 tracking-wide">${line.substring(5)}</h4>`)
        i++
      } else if (line.startsWith('### ')) {
        htmlLines.push(`<h3 class="text-xl font-light mt-20 mb-10 text-gray-900 tracking-wide">${line.substring(4)}</h3>`)
        i++
      } else if (line.startsWith('## ')) {
        htmlLines.push(`<h2 class="text-2xl font-light mt-24 mb-12 text-gray-900 tracking-wider">${line.substring(3)}</h2>`)
        i++
      } else if (line.startsWith('# ')) {
        htmlLines.push(`<h1 class="text-3xl font-light mt-0 mb-16 text-gray-900 tracking-wider">${line.substring(2)}</h1>`)
        i++
      }
      // 处理分隔线
      else if (line === '---') {
        htmlLines.push('<hr class="my-16 border-t border-gray-200" />')
        i++
      }
      // 处理图片
      else if (line.match(/!\[([^\]]*)\]\(([^)]+)\)/)) {
        const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
        if (imageMatch) {
          const altText = imageMatch[1] || ''
          const imageSrc = imageMatch[2]
          htmlLines.push(`<img src="${imageSrc}" alt="${altText}" class="max-w-full h-auto my-12 mx-auto rounded shadow-sm" />`)
        }
        i++
      }
      // 处理有序列表
      else if (/^\d+\.\s+/.test(line)) {
        const listItems: string[] = []
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          const content = lines[i].trim().replace(/^\d+\.\s+/, '')
          const processedContent = processInlineMarkdown(content)
          listItems.push(`<li class="ml-8 my-4 pl-2 font-light leading-loose text-gray-700">${processedContent}</li>`)
          i++
        }
        htmlLines.push(`<ol class="list-decimal list-outside my-12">${listItems.join('')}</ol>`)
      }
      // 处理无序列表
      else if (/^[-*]\s+/.test(line)) {
        const listItems: string[] = []
        while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
          const content = lines[i].trim().replace(/^[-*]\s+/, '')
          const processedContent = processInlineMarkdown(content)
          listItems.push(`<li class="ml-8 my-4 pl-2 font-light leading-loose text-gray-700">${processedContent}</li>`)
          i++
        }
        htmlLines.push(`<ul class="list-disc list-outside my-12">${listItems.join('')}</ul>`)
      }
      // 处理普通段落
      else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() && 
               !lines[i].trim().startsWith('#') && 
               !lines[i].trim().startsWith('---') &&
               !lines[i].trim().startsWith('```') &&
               !/^[-*]\s+/.test(lines[i].trim()) &&
               !/^\d+\.\s+/.test(lines[i].trim()) &&
               !lines[i].trim().match(/!\[([^\]]*)\]\(([^)]+)\)/)) {
          paragraphLines.push(lines[i].trim())
          i++
        }
        if (paragraphLines.length > 0) {
          const content = paragraphLines.join(' ')
          const processedContent = processInlineMarkdown(content)
          htmlLines.push(`<p class="my-10 text-gray-700 font-light leading-loose text-base tracking-wide">${processedContent}</p>`)
        }
      }
    }
    
    return htmlLines.join('\n')
  }
  
  // 处理行内 markdown 语法
  const processInlineMarkdown = (text: string): string => {
    return text
      // 处理粗体
      .replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-medium text-gray-900">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-gray-900">$1</strong>')
      // 处理斜体
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-600 font-light">$1</em>')
      // 处理行内代码
      .replace(/`([^`]+)`/g, '<code class="bg-gray-50 text-gray-800 px-2 py-0.5 font-mono text-sm border border-gray-200">$1</code>')
      // 处理链接
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gray-900 underline decoration-1 underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-all" target="_blank">$1</a>')
  }

  return (
    <div className="h-screen bg-white flex relative overflow-hidden">
      {/* 移动端遮罩层 */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* 侧边栏 */}
      <aside
        className={`
          w-80 fixed lg:relative h-screen z-50 bg-white 
          transition-transform duration-300 ease-out flex flex-col border-r border-gray-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-8 lg:p-10 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-light text-gray-900 leading-relaxed tracking-wider mb-3">
                智能体设计模式
              </h1>
              <p className="text-xs font-light text-gray-500 tracking-wide">Agentic Design Patterns</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* GitHub 链接 - 桌面端显示 */}
              <a
                href="https://github.com/NoyaMrXiao/Agentic-Design-Patterns--"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-900 transition-colors duration-300"
                aria-label="访问 GitHub 仓库"
                title="访问 GitHub 仓库"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* 移动端关闭按钮 */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="关闭侧边栏"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 lg:p-8 muji-scrollbar">
          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => {
                    setSelectedChapter(chapter)
                    // 移动端选择后自动关闭侧边栏
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false)
                    }
                  }}
                  className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-start gap-3 border-l-2 ${
                    selectedChapter.id === chapter.id
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs mb-1 font-light tracking-wide ${
                      selectedChapter.id === chapter.id ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {chapter.order === 0 ? '目录' : chapter.order <= 6 ? '前言' : `0${chapter.order - 6}`}
                    </div>
                    <div className={`text-sm font-light leading-relaxed ${
                      selectedChapter.id === chapter.id ? 'text-gray-900' : 'text-gray-700'
                    }`}>{chapter.title}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <div className="flex flex-col items-center gap-4">
            <div className="text-xs font-light text-gray-400 tracking-wide">
              {chapters.length} 章节
            </div>
            <a
              href="https://github.com/yourusername/agentic-design-patterns-cn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-light text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
              aria-label="访问 GitHub 仓库"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
              <svg className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
        {/* 顶部工具栏 */}
        <header className="bg-white/95 backdrop-blur-md px-6 lg:px-12 py-6 flex items-center justify-between border-b border-gray-100 flex-shrink-0 z-30">
          <div className="flex items-center gap-6 flex-1 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 flex-shrink-0"
              aria-label="切换侧边栏"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="min-w-0 flex-1">
                <div className="text-xs font-light text-gray-400 tracking-wide mb-1">
                  {selectedChapter.order === 0 ? '目录' : selectedChapter.order <= 6 ? '前言' : `第 ${selectedChapter.order - 6} 章`}
                </div>
                <div className="text-sm font-light text-gray-900 truncate">{selectedChapter.title}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => {
                const currentIndex = chapters.findIndex(c => c.id === selectedChapter.id)
                if (currentIndex > 0) {
                  setSelectedChapter(chapters[currentIndex - 1])
                  contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              disabled={selectedChapter.id === chapters[0].id}
              className="px-6 py-2 text-xs font-light tracking-wide text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 hover:border-gray-300 whitespace-nowrap"
            >
              <span className="hidden sm:inline">← 上一章</span>
              <span className="sm:hidden">←</span>
            </button>
            <button
              onClick={() => {
                const currentIndex = chapters.findIndex(c => c.id === selectedChapter.id)
                if (currentIndex < chapters.length - 1) {
                  setSelectedChapter(chapters[currentIndex + 1])
                  contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              disabled={selectedChapter.id === chapters[chapters.length - 1].id}
              className="px-6 py-2 text-xs font-light tracking-wide text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
            >
              <span className="hidden sm:inline">下一章 →</span>
              <span className="sm:hidden">→</span>
            </button>
          </div>
        </header>

        {/* 内容区域 */}
        <div ref={contentRef} className="flex-1 overflow-y-auto muji-scrollbar">
          <article className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32">
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 w-12 border border-gray-200"></div>
                  <div className="animate-spin rounded-full h-12 w-12 border-t border-gray-900 absolute top-0"></div>
                </div>
                <p className="mt-8 text-gray-400 text-xs font-light tracking-wide">加载中</p>
              </div>
            ) : (
              <div
                className="prose prose-muji max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
              />
            )}
          </article>
        </div>

        {/* 底部信息栏 */}
        <footer className="bg-white px-6 hidden md:block py-8 text-xs font-light text-gray-400 text-center border-t border-gray-100 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 tracking-wide">
            <span>{selectedChapter.title}</span>
            <span className="hidden sm:inline">·</span>
            <span>Antonio Gulli</span>
            <span className="hidden lg:inline">·</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
