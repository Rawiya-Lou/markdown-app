
export const applyFormat = (
  textarea: HTMLTextAreaElement,
  markdown: string,
  setMarkdown: (val: string) => void,
  prefix: string,
  suffix: string = prefix
) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = markdown.substring(start, end);
  
  const before = markdown.substring(0, start);
  const after = markdown.substring(end);

  // New string: Text before + prefix + selected text + suffix + text after
  const newText = `${before}${prefix}${selectedText}${suffix}${after}`;
  
  setMarkdown(newText);

  // In 2026, we must refocus the textarea and set the cursor back
  setTimeout(() => {
    textarea.focus();
    textarea.setSelectionRange(start + prefix.length, end + prefix.length);
  }, 0);
};
