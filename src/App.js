import React from "react"
import MarkdownEditor from "./components/MarkdownEditor";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <div className="App">
        <MarkdownEditor onContentChange={console.log} />
      </div>
  );
};

export default App;