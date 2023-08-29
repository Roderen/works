import React from "react"
import Alert from "./components/Alert";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Alert text={"Lorem ipsum"} type={"success"} />
        </div>
    )
  }
}

export default App;
