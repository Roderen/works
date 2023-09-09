import React from "react"
import Item from "./Item";
import {v4 as uuidv4} from 'uuid';

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      noteList: [],
    }
  }

  changeInputValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  createNote = (e) => {
    e.preventDefault();
    this.setState({
      noteList: [{
        id: uuidv4(),
        value: this.state.inputValue,
      }, ...this.state.noteList]
    })
  }

  removeTask = (id) => {
    const result = this.state.noteList.findIndex(item => item.id === id);
    const deletedNote = this.state.noteList.splice(result, 1);
    this.setState(deletedNote);
  }

  render() {
    return <>
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.createNote}>
            <div className="me-3">
              <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.changeInputValue}
                  required
                  className="form-control" placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>

        <div className="list-group">
          {this.state.noteList.map(({id, value}) => (
              <Item
                  key={id}
                  task={value}
                  onRemove={() => this.removeTask(id)}
              />
          ))}
        </div>
      </div>
    </>
  }
}

export default TodoBox;