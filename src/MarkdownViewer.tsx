import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props{
  content: string
}
const MarkdownViewer = ({content}: Props) => {
  return (
      // 'prose' handles all font sizes, spacing, and bullet points automatically
    <article className='prose prose-slate lg:pose-xl dark:pros-invert max-w-none'>
      {/* remarkPlugins enables GFM features like tables and checkboxes */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}

export default MarkdownViewer