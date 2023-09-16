import React from "react"
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from "@toast-ui/editor";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const {onContentChange} = this.props;

    this.editor = new Editor({
      el: this.editorRef.current,
      height: '200px',
      hideModeSwitch: true,
    });

    this.editor.addHook('change', () => {
      const content = this.editor.getMarkdown();
      onContentChange(content);
    });
  }

  render() {
    return <div ref={this.editorRef}/>
  }
}

export default MarkdownEditor;