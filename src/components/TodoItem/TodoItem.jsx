import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const TodoItem = ({data, linkToPage, onRemove}) => {
  const dispatch = useDispatch();

  const updateCard = (e) => {
    const targetChecked = e.target.checked;
    dispatch({
      type: 'COMPLETE_TASK', payload: {
        targetId: e.target.getAttribute('data-id'),
        checked: targetChecked,
      }
    })
  }

  return (
      <>
        <div className="col-4">
          <div className="taskWrapper">
            <div className="taskHeading">{data.title}</div>
            <div className="taskDescription">{data.description}</div>
            <label className="completed form-check">
              <input type="checkbox" className="form-check-input" data-id={data.id} onChange={updateCard} defaultChecked={data.complete}/>
              <span>Завершено ?</span>
            </label>
            <button className="btn btn-danger delete-btn" onClick={onRemove}>Удалить</button>
            {linkToPage ? <Link to={'/card/' + data.id} params={{data}} className="btn btn-primary link-btn">Перейти</Link> : ''}
          </div>
        </div>
      </>
  );
};

export default TodoItem;