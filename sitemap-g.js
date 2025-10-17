import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

// 定义所有章节
const chapters = [
  { id: '00', title: '目录', priority: 1.0 },
  { id: '01', title: '献辞', priority: 0.7 },
  { id: '02', title: '致谢', priority: 0.7 },
  { id: '03', title: '序言', priority: 0.8 },
  { id: '04', title: '思想领袖的观点', priority: 0.8 },
  { id: '05', title: '介绍', priority: 0.9 },
  { id: '06', title: '什么是智能体', priority: 0.9 },
  { id: '07', title: '第一章：提示链', priority: 0.9 },
  { id: '08', title: '第二章：路由', priority: 0.9 },
  { id: '09', title: '第三章：并行化', priority: 0.9 },
  { id: '10', title: '第四章：反思', priority: 0.9 },
  { id: '11', title: '第五章：工具使用', priority: 0.9 },
  { id: '12', title: '第六章：规划', priority: 0.9 },
  { id: '13', title: '第七章：多智能体协作', priority: 0.9 },
]

// 生成 sitemap 链接
const links = [
  // 主页
  { 
    url: '/', 
    changefreq: 'weekly', 
    priority: 1.0,
    lastmod: new Date().toISOString()
  },
  // 所有章节页面
  ...chapters.map(chapter => ({
    url: `/#${chapter.id}`,
    changefreq: 'monthly',
    priority: chapter.priority,
    lastmod: new Date().toISOString()
  }))
]

// 生成 sitemap
const sitemap = new SitemapStream({ 
  hostname: 'https://agentic-design-patterns.pages.dev/'
})

links.forEach(link => sitemap.write(link))
sitemap.end()

// 写入文件
streamToPromise(sitemap).then(data => {
  // 格式化 XML
  const xmlString = data.toString()
  const prettyXml = xmlString
    .replace(/></g, '>\n<')
    .replace(/<url>/g, '\n  <url>')
    .replace(/<\/urlset>/g, '\n</urlset>')
    .replace(/<loc>/g, '\n    <loc>')
    .replace(/<lastmod>/g, '\n    <lastmod>')
    .replace(/<changefreq>/g, '\n    <changefreq>')
    .replace(/<priority>/g, '\n    <priority>')
    .replace(/<\/url>/g, '\n  </url>\n')
  
  // 确保 public 目录存在
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public', { recursive: true })
  }
  
  fs.writeFileSync('./public/sitemap.xml', prettyXml)
  console.log('✅ sitemap.xml 已生成')
  console.log(`📄 包含 ${links.length} 个链接`)
  console.log('   - 1 个主页链接')
  console.log(`   - ${chapters.length} 个章节链接`)
  console.log('📍 文件位置: ./public/sitemap.xml')
}).catch(err => {
  console.error('❌ 生成 sitemap 失败:', err)
  process.exit(1)
})