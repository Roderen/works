import React from "react"
import {v4 as uuidv4} from 'uuid';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  plusLog = () => {
    const {logs} = this.state;
    const lastEl = logs.at(0)?.value ?? 0;
    this.setState({
      logs: [{
        id: uuidv4(),
        value: lastEl + 1
      }, ...logs]
    });
  }

  minusLog = () => {
    const {logs} = this.state;
    const lastEl = logs.at(0)?.value ?? 0;
    this.setState({
      logs: [{
        id: uuidv4(),
        value: lastEl - 1
      }, ...logs]
    });
  }

  removeLogFromList = (id) => {
    const {logs} = this.state;
    const result = logs.findIndex((item) => item.id === id);
    this.setState(logs.splice(result, 1))
  }

  render() {
    return <>
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.plusLog}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.minusLog}>-</button>
        </div>
        <div className="list-group">
          {this.state.logs.map(({id, value}) => (
              <button
                  key={id}
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => this.removeLogFromList(id)}
              >
                {value}
              </button>
          ))}
        </div>
      </div>
    </>
  }
}

export default Component;