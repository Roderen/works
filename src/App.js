import React from "react"
import Card from "./components/Card"

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Card title={"First title"}/>
          <Card text={"Second Text"}/>
          <Card
              title={"Third title"}
              text={"Third text"}
          />
        </div>
    )
  }
}

export default App;