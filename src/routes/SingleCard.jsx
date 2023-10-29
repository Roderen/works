import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import TodoItem from "../components/TodoItem/TodoItem";
import './style.scss'


const SingleCard = () => {
  const formData = useSelector(state => state.formData);
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch({type: 'REMOVE_CARD', payload: id});
  }

  const {id} = useParams();
  const data = formData.find(item => item.id === id);

  return (
      <>
        <div className="col-8" style={{margin: "50px auto"}}>
          <Link className="link-home" to={'/'}>На главную</Link>

          {data ? <TodoItem key={data.id} data={data} linkToPage={false} onRemove={() => removeTask(data.id)}/> : ''}
        </div>
      </>
  );
};

export default SingleCard;