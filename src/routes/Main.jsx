import React from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoItem from "../components/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
  const formData = useSelector(state => state.formData);
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch({type: 'REMOVE_CARD', payload: id});
  }

  return (
      <>
        <h1 className="text-center mt-5 mb-5">TODO LIST</h1>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <TodoForm/>
            </div>

            <div className="col-8">
              <div className="row" id="todoItems">
                {formData ? formData.map(item =>
                    <TodoItem key={item.id} data={item} linkToPage={true} onRemove={() => removeTask(item.id)}/>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Main;