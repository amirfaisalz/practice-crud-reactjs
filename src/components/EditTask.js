import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateTask, fetchTaskDetail } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  const [select, setSelect] = useState('');

  useEffect(() => {
    dispatch(fetchTaskDetail(id));
  }, [dispatch, id]);

  const taskDetail = useSelector((state) => state.taskReducer.taskDetail);
  const error = useSelector((state) => state.taskReducer.error);
  const loading = useSelector((state) => state.taskReducer.loading);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const selectChange = (event) => {
    setSelect(event.target.value);
  };

  let history = useHistory();

  const data = {
    title,
    category: select,
  };

  const updateTaskBtn = (event) => {
    event.preventDefault();
    dispatch(updateTask(data, id));
    history.push('/');
  };

  const backBtn = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Edit Task</h1>
      {loading ? (
        <h4 className="loading">Loading...</h4>
      ) : (
        <div>
          {error ? (
            <h4 className="loading">{error}</h4>
          ) : (
            <div className="inputGroup">
              <button className="backBtn" onClick={(event) => backBtn(event)}>Back</button>
              <input
                type="text"
                placeholder="input title"
                onChange={titleChange}
                defaultValue={taskDetail.title}
              />
              <p>{title}</p>
              <select
                onChange={selectChange}
                defaultValue={taskDetail.category}>
                <option>Category...</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Mobile">Mobile</option>
              </select>
              <p>select: {select}</p>
              <button onClick={(event) => updateTaskBtn(event)}>
                Update Task
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
