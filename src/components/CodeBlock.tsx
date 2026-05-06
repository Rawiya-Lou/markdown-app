import { useState } from "react";

export default function CodeBlock({ children, code }: { children: React.ReactNode, code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button 
        onClick={copy}
        className="absolute right-2 top-2 z-20 px-2 py-1 text-xs bg-slate-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      {children}
    </div>
  );
}
