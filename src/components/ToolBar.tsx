
interface ToolbarProps {
  editorRef: React.RefObject<HTMLTextAreaElement | null>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function Toolbar({ editorRef, setMarkdown }: ToolbarProps) {
  const insertText = (before: string, after: string = "") => {
    const textarea = editorRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    // Construct the new string
    const newText = 
      text.substring(0, start) + 
      before + selectedText + after + 
      text.substring(end);

    setMarkdown(newText);

    // 2026 UX: Refocus and reposition cursor after update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        end + before.length
      );
    }, 0);
  };

  return (
    <div className="flex gap-2 p-2 bg-slate-50 dark:bg-slate-900 border-b dark:border-slate-800">
      <button onClick={() => insertText("**", "**")} className="toolbar-btn">B</button>
      <button onClick={() => insertText("_", "_")} className="toolbar-btn italic">I</button>
      <button onClick={() => insertText("# ")} className="toolbar-btn">H1</button>
      <button onClick={() => insertText("[", "](url)")} className="toolbar-btn">Link</button>
    </div>
  );
}
