import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlock from "./CodeBlock";

interface Props {
  content: string;
}

const MarkdownViewer = ({ content }: Props) => {
  return (
    <article
      className="prose prose-slate max-w-none dark:prose-invert transition-colors duration-200"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            
            if (!inline && match) {
              const codeString = String(children).replace(/\n$/, "");
              
              return (
                /* Wrap your existing highlighter with CodeBlock */
                <CodeBlock code={codeString}>
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </CodeBlock>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownViewer;
