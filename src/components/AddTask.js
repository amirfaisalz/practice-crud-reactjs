import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/index';
import { useHistory } from 'react-router-dom';

export default function AddUser() {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [select, setSelect] = useState('');
  const [notif, setNotif] = useState('');

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const selectChange = (event) => {
    setSelect(event.target.value);
  };

  const data = {
    title,
    category: select,
  };

  const dispatch = useDispatch();

  const createTask = (event) => {
    if (!data.title) {
      setNotif('Title is required');
    } else {
      event.preventDefault();
      dispatch(addTask(data));
      history.push('/');
    }
  };

  const backBtn = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <div className="container addTask">
      <h1>Add Task</h1>
      <button onClick={(event) => backBtn(event)} className="backBtn">
        Back
      </button>
      <div className="inputGroup">
        <p>{notif}</p>
        <input type="text" placeholder="input title" onChange={titleChange} />
        <select onChange={selectChange}>
          <option>Category...</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
          <option value="Mobile">Mobile</option>
        </select>
        <button onClick={(event) => createTask(event)}>Add Task</button>
      </div>
    </div>
  );
}
