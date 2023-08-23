import React from "react"
import DefinitionsList from "./components/Definitions";

class App extends React.Component {
  render() {
    const definitions = [
      { dt: 'one', dd: 'two', id: 1 },
      { dt: 'another term', dd: 'another description', id: 2 },
    ];

    return (
        <div className="App">
          <DefinitionsList data={definitions} />
        </div>
    )
  }
}

export default App;
