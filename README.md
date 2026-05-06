# 🚀 Modern Markdown Editor (2026 Edition)

A professional, high-performance Markdown editor built with **React 19**, **TypeScript**, and **Tailwind CSS v4**. Featuring live preview, smooth scroll synchronization, and persistent local storage.

## ✨ Features

- **⚡ Real-time Live Preview**: Instant rendering using `react-markdown` and `remark-gfm`.
- **📜 Smooth Scroll Sync**: A `requestAnimationFrame` optimized algorithm that links the editor and preview scroll positions.
- **🎨 Tailwind v4 Typography**: Uses the latest CSS-first `@tailwindcss/typography` engine for beautiful document styling.
- **💻 Professional Syntax Highlighting**: Language-aware code blocks with a custom **Copy to Clipboard** button.
- **🌓 Adaptive Dark Mode**: Built-in dark mode with automatic `prose-invert` styling for high-contrast reading.
- **💾 Local Persistence**: Automatically saves your work to `localStorage` so you never lose a draft.
- **🔗 GitHub Flavored Markdown**: Full support for tables, task lists, and strikethroughs.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: [TypeScript](https://typescriptlang.org)
- **Build Tool**: [Vite](https://vite.dev)
- **Markdown Engine**: `react-markdown` + `remark-gfm`
- **Syntax Highlighting**: `react-syntax-highlighter` (Prism)

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

## 📂 Architecture

- `App.tsx`: Manages the state, persistence, and the scroll-sync algorithm.
- `MarkdownViewer.tsx`: Handles the conversion of raw text into styled HTML components.
- `CodeBlock.tsx`: A wrapper for syntax highlighting with integrated clipboard logic.
- `index.css`: Configures Tailwind v4 plugins and custom dark-mode variables.

## 🔮 Future Roadmap

Planned features to take this editor to the next level:

- **📊 Mermaid.js Integration**: Render flowcharts and diagrams directly from text.
- **📁 File System Access API**: Open and save files directly from your computer without "uploading" (Native 2026 Browser Standard).
- **📝 Word & Reading Time Counter**: Real-time statistics for writers and bloggers.
- **🧪 MathJax/KaTeX Support**: High-quality LaTeX mathematical formula rendering.
- **📄 Export to PDF**: One-click professional PDF generation with custom styling.
- **☁️ Cloud Sync**: Optional Firebase or Supabase integration for cross-device editing.
- **🤖 AI Writing Assistant**: Integration with local LLMs (via WebGPU) for grammar correction and content expansion.


## 📜 License

MIT License - feel free to use this for your own projects!
