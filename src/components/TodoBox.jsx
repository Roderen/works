import React, {useState} from "react"
import {v4 as uuidv4} from 'uuid';

import Item from "./Item";

const TodoBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [noteList, setNoteList] = useState([]);

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const createNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      value: inputValue,
    }
    setNoteList([newNote, ...noteList])
    setInputValue('');
  }

  const removeTask = (id) => {
    const result = noteList.filter(item => item.id !== id);
    setNoteList(result);
  }

  return (
      <>
        <div className="mb-3">
          <form className="d-flex" onSubmit={createNote}>
            <div className="me-3">
              <input
                  type="text"
                  value={inputValue}
                  onChange={changeInputValue}
                  required
                  className="form-control" placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>

        <div className="list-group">
          {noteList.map(({id, value}) => (
              <Item
                  key={id}
                  task={value}
                  onRemove={() => removeTask(id)}
              />
          ))}
        </div>
      </>
  );
};

export default TodoBox;