import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
]

const sitemap = new SitemapStream({ hostname: 'https://agentic-design-patterns.pages.dev/' })
links.forEach(link => sitemap.write(link))
sitemap.end()

streamToPromise(sitemap).then(data => {
  fs.writeFileSync('./dist/sitemap.xml', data.toString())
  console.log('✅ sitemap.xml 已生成')
})