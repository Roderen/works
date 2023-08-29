import React from "react"
import Progress from "./components/Progress";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Progress percentage={70}/>
        </div>
    )
  }
}

export default App;
