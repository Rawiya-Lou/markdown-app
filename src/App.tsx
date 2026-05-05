import { useState } from "react"
import MarkdownViewer from "./MarkdownViewer"


const App = () => {
  const [markdown, setMarkdown] = useState('# Hello World\nThis is **bold** text.');


  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 p-8">
      <textarea className="w-full h-40 p-4 border rounded mb-8 dark:bg-slate-800 dark:text-white" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        <div className="border-t pt-8">
          <MarkdownViewer content={markdown} />
        </div>
    </div>
  )
}

export default App