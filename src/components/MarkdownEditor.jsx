import React, {useRef, useEffect} from "react"
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from "@toast-ui/editor";

const MarkdownEditor = ({onContentChange}) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      height: '200px',
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
  }, [onContentChange])

  return <div ref={editorRef}/>

};

export default MarkdownEditor;