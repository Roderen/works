import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoBox from "./components/TodoBox";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <TodoBox/>
        </div>
    )
  }
}

export default App;
