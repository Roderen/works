import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCatalog from "./components/PostCatalog";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <PostCatalog/>
        </div>
    )
  }
}

export default App;
