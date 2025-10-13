# 智能体设计模式 - 在线阅读应用

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

一个优雅的在线阅读应用，用于阅读《智能体设计模式》中英文对照电子书

### 🌐 [在线预览 / Live Demo](https://agentic-design-patterns.pages.dev/)

</div>

---

## 📖 项目简介

这是一个基于 React + TypeScript + Vite 构建的现代化电子书阅读应用，专为《Agentic Design Patterns》（智能体设计模式）一书设计。应用采用极简美学设计，提供流畅的阅读体验。

### ✨ 核心特性

- 📚 **中文内容提取** - 智能提取并显示 Markdown 文档中的中文翻译内容
- 🎨 **极简设计** - 遵循原研哉美学，简约而不简单
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🔄 **独立滚动** - 左侧导航和右侧内容独立滚动，互不影响
- 🌗 **优雅排版** - 精心设计的字体、间距和行高
- 🖼️ **图片支持** - 完整支持 Markdown 图片语法
- ⚡ **快速加载** - 使用 Vite 构建，秒级启动
- 🎯 **章节导航** - 清晰的章节结构和导航
- 🔗 **GitHub 集成** - 一键访问项目源码

---

## 🚀 快速开始

> 💡 **提示**: 你可以直接访问 [在线演示](https://agentic-design-patterns.pages.dev/) 体验完整功能，无需本地安装！

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/ginobefun/agentic-design-patterns-cn.git
cd agentic-design-patterns-cn/vite-react-app
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动

4. **构建生产版本**

```bash
npm run build
```

构建产物将输出到 `dist` 目录

5. **预览生产版本**

```bash
npm run preview
```

---

## 📁 项目结构

```
vite-react-app/
├── public/                 # 静态资源
│   ├── book/              # Markdown 书籍文件
│   │   ├── 00-Table-of-Contents.md
│   │   ├── 01-Dedication.md
│   │   └── ...
│   ├── images/            # 书籍插图
│   │   ├── chapter01_fig1.png
│   │   ├── chapter02_fig1.jpg
│   │   └── ...
│   └── logo.png           # 应用图标
├── src/
│   ├── App.tsx            # 主应用组件
│   ├── App.css            # 应用样式
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── README.md              # 项目文档
```

---

## 🎨 设计理念

### 极简美学

应用设计遵循原研哉（Kenya Hara）的极简美学理念：

- **留白** - 充足的空白空间让内容呼吸
- **细线条** - 纤细的边框和分隔线
- **轻字重** - 使用 font-weight: 300 的轻字体
- **柔和色彩** - 以灰度为主的配色方案
- **微妙动画** - 流畅而不突兀的过渡效果

### 排版优化

- **字体系统** - 优先使用系统字体栈，确保最佳性能
- **行高** - 使用 1.8-2.0 的行高，提升可读性
- **字间距** - 适度的字间距（letter-spacing: 0.02em）
- **段落间距** - 充足的段落间距，避免视觉疲劳
- **代码高亮** - 深色背景的代码块，易于阅读

### 响应式设计

- **移动端优化**
  - 侧边栏默认隐藏，点击菜单按钮展开
  - 触摸友好的按钮尺寸（最小 44px）
  - 优化的字体大小和行高
  - 防止背景滚动

- **桌面端优化**
  - 固定侧边栏，便于快速导航
  - 宽松的内容区域（max-width: 3xl）
  - 居中对齐，聚焦内容

---

## 🛠️ 技术栈

### 核心技术

- **React 19.1.1** - 最新的 React 版本，支持并发特性
- **TypeScript 5.9** - 类型安全的 JavaScript
- **Vite 7.1** - 下一代前端构建工具

### UI 框架

- **Tailwind CSS 4.1** - 原子化 CSS 框架
- **自定义滚动条** - 极简风格的滚动条设计

### 开发工具

- **ESLint** - 代码质量检查
- **TypeScript ESLint** - TypeScript 专用 Linter
- **React Hooks ESLint** - React Hooks 最佳实践

---

## 🎯 核心功能

### 1. Markdown 解析

应用实现了一个完整的 Markdown 解析器，支持：

- ✅ 标题（H1-H5）
- ✅ 段落
- ✅ 有序列表
- ✅ 无序列表
- ✅ 代码块（带语法高亮）
- ✅ 行内代码
- ✅ 粗体和斜体
- ✅ 链接
- ✅ 图片
- ✅ 分隔线
- ✅ 中文内容提取（从 `<mark>` 标签）

### 2. 中文内容提取

应用智能提取 Markdown 文档中的中文内容：

- 提取 `<mark>` 标签内的中文翻译
- 保留代码块完整内容
- 保留图片和链接
- 保留文档结构（标题层级）

### 3. 导航系统

- **章节列表** - 显示所有章节，支持快速跳转
- **上一章/下一章** - 快捷导航按钮
- **章节编号** - 清晰的章节编号系统
- **当前章节高亮** - 直观显示当前阅读位置

### 4. 滚动优化

- **独立滚动区域** - 侧边栏和内容区各自独立滚动
- **固定高度布局** - 使用 `h-screen` 确保视口高度
- **平滑滚动** - 切换章节时平滑滚动到顶部
- **自定义滚动条** - 极简风格的滚动条

---

## 🔧 配置说明

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### TypeScript 配置

项目使用严格的 TypeScript 配置：

- `strict: true` - 启用所有严格类型检查
- `noUnusedLocals: true` - 检测未使用的局部变量
- `noUnusedParameters: true` - 检测未使用的参数
- `noFallthroughCasesInSwitch: true` - 检测 switch 语句的穿透

### Tailwind CSS 配置

使用 Tailwind CSS v4 的最新语法：

- 通过 Vite 插件集成
- 自动生成原子化 CSS
- 支持自定义主题和工具类

---

## 📱 浏览器支持

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ iOS Safari (iOS 14+)
- ✅ Chrome for Android (最新版)

---

## 🤝 贡献指南

欢迎贡献代码！以下是一些可以改进的方向：

### 功能增强

- [ ] 添加全文搜索功能
- [ ] 添加书签功能
- [ ] 添加阅读进度保存
- [ ] 添加夜间模式
- [ ] 添加字体大小调节
- [ ] 添加目录大纲导航
- [ ] 添加代码复制按钮
- [ ] 支持 PDF 导出

### 性能优化

- [ ] 实现虚拟滚动
- [ ] 添加图片懒加载
- [ ] 实现章节预加载
- [ ] 优化首屏加载速度

### 用户体验

- [ ] 添加键盘快捷键
- [ ] 添加阅读进度条
- [ ] 优化移动端手势操作
- [ ] 添加页面切换动画

### 贡献步骤

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add: some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目基于 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 许可证开源。

- ✅ **允许** - 复制、分发、展示和演绎作品（需署名）
- ❌ **禁止** - 任何形式的商业使用
- 📧 **商业合作** - 如需商业使用，请联系原作者和译者

---

## 🙏 致谢

- **原书作者** - [Antonio Gulli](https://www.linkedin.com/in/searchguy/)
- **译者** - [@ginobefun](https://github.com/ginobefun)
- **设计灵感** - 原研哉（Kenya Hara）的极简美学
- **开源社区** - React、Vite、Tailwind CSS 等优秀项目

---

## 📞 联系方式

- **项目主页** - [GitHub Repository](https://github.com/ginobefun/agentic-design-patterns-cn)
- **问题反馈** - [GitHub Issues](https://github.com/ginobefun/agentic-design-patterns-cn/issues)
- **译者** - [@ginobefun](https://github.com/ginobefun)

---

## ⭐ 支持项目

如果这个项目对你有帮助，请考虑：

- 🌟 给项目加 Star
- 🍴 Fork 并参与贡献
- 📢 分享给更多需要的人
- 💝 支持原书作者的公益事业（版税捐赠给救助儿童会）

---

<div align="center">

**让我们一起构建更智能的未来！**

*Built with ❤️ using React + TypeScript + Vite*

</div>
