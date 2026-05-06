import React, { useRef, useState, useEffect } from "react";
import MarkdownViewer from "./components/MarkdownViewer";
import { ToggleTheme } from "./components/ToggleTheme";

const App = () => {
  const [markdown, setMarkdown] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('markdown_content');
      return saved || "# Welcome back!\nStart typing to see the magic...";
    }
    return "";
  });

  // 2. Sync to localStorage whenever markdown changes
  useEffect(() => {
    localStorage.setItem('markdown_content', markdown);
  }, [markdown]);

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  // track if the scroll ipdate is already scheduled
  const ticking = useRef(false);

  const syncScroll = (source: HTMLElement, target: HTMLElement) => {
    // calc scroll precentage 0 to 1
    const scrollPercentage =
      source.scrollTop / (source.scrollHeight - source.clientHeight);
    // apply to target

    target.scrollTop =
      scrollPercentage * (target.scrollHeight - target.clientHeight);

    // reset the ticking so the next scroll event can trigger an updte
    ticking.current = false;
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    if (!ticking.current) {
      const source = e.currentTarget as HTMLElement;
      const target =
        source === editorRef.current
          ? (previewRef.current as HTMLElement)
          : (editorRef.current as HTMLElement);

      if (target) {
        // schedule the update for the next browser repaint
        // using requestAnimationFrame (rAF) is the gold standard for high-performance scroll syncing
        window.requestAnimationFrame(() => syncScroll(source, target));

        ticking.current = true;
      }
    }
  };

  return (
    
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <header className="flex justify-between items-center p-4 border-b dark:border-slate-800">
        <h1 className="font-bold dark:text-white">Markdown Editor</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setMarkdown("")}
            className="text-xs text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
          <ToggleTheme />
        </div>
      </header>
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full bg-white dark:bg-slate-900 overflow-hidden">
      <section className="flex flex-col border-r border-slate-200 dark:border-slate-800">
        <div className="bg-slate-100 dark:bg-slate-800 text-xs font-mono uppercase tracking-widest text-slate-500 p-2 dark:text-slate-200">
          Markdown Editor
        </div>
        <textarea
          ref={editorRef}
          onScroll={handleScroll}
          className="flex-1 p-6 outline-none bg-transparent resize-none font-mono text-sm dark:text-slate-200"
          placeholder="Enter markdown..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </section>

      <section
        className="flex flex-col overflow-y-auto"
        ref={previewRef}
        onScroll={handleScroll}
      >
        <div className="bg-slate-100 dark:bg-slate-800 p-2 text-xs font-mono uppercase tracking-widest text-slate-500 sticky top-0 z-10 dark:text-slate-200">
          Live Preview
        </div>
        <div className="p-8">
          <MarkdownViewer content={markdown} />
        </div>
      </section>
    </main>
    </div>
  );
};

export default App;
