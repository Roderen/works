import React from "react"
import Card from "./components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Card>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
  }
}

export default App;
