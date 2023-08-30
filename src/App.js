import React from "react"
import ListGroup from "./components/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <ListGroup>
            <p>one</p>
            <p>two</p>
          </ListGroup>
        </div>
    )
  }
}

export default App;
