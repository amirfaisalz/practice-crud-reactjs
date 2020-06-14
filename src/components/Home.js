import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskList, deleteTask, addFavorite } from '../store/actions/index';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import _ from 'lodash';

export default function Home() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTaskList());
  }, [dispatch]);

  const addTaskBtn = (event) => {
    event.preventDefault();
    history.push('/add-task');
  };

  const detailBtn = (event, id) => {
    event.preventDefault();
    history.push('/detail/' + id);
  };

  const editBtn = (event, id) => {
    event.preventDefault();
    history.push('/edit/' + id);
  };

  const deleteBtn = (event, id) => {
    event.preventDefault();
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, this task will never comeback',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTask(id));
        swal('Task has been deleted!', {
          icon: 'success',
        });
        dispatch(fetchTaskList());
      } else {
        swal('Delete is canceled');
      }
    });
  };

  // favorite
  const favoriteBtn = (event, id, title, category) => {
    event.preventDefault();
    const data = {
      id,
      title,
      category
    }
    dispatch(addFavorite(data));
    history.push('/favorite');
  };
  // end favorite

  const taskList = useSelector((state) => state.taskReducer.taskList);
  const error = useSelector((state) => state.taskReducer.error);
  const loading = useSelector((state) => state.taskReducer.loading);

  // search with debounce
  const [searchTask, setSearchTask] = useState('');
  const changeSearchTask = _.debounce(function (event) {
    setSearchTask(event.target.value);
  }, 1000);
  const searchTaskTitle = (event) => {
    event.persist();
    changeSearchTask(event);
  };
  const searchResult = taskList.filter((element) => {
    return element.title.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1;
  });
  // end search

  return (
    <div className="container">
      <h1>Task list</h1>
      {loading ? (
        <h4 className="loading">Loading...</h4>
      ) : (
        <div>
          {error ? (
            <h4 className="loading">{error}</h4>
          ) : (
            <div>
              <div className="searchGroup">
                <button
                  className="addTask"
                  onClick={(event) => addTaskBtn(event)}>
                  Add Task
                </button>
                <input
                  type="text"
                  placeholder="search task"
                  onChange={searchTaskTitle}
                  className="search"
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="titleTable">Title</th>
                    <th className="categoryTable">Category</th>
                    <th className="actionTitle">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.map((task, i) => {
                    return (
                      <tr key={i}>
                        <td>{task.title}</td>
                        <td>{task.category}</td>
                        <td className="buttonTable">
                          <button
                            onClick={(event) => detailBtn(event, task.id)}>
                            Detail
                          </button>
                          <button onClick={(event) => editBtn(event, task.id)}>
                            Edit
                          </button>
                          <button
                            onClick={(event) => deleteBtn(event, task.id)}>
                            Delete
                          </button>
                          <button
                            onClick={(event) => favoriteBtn(event, task.id, task.title, task.category)}>
                            Add to Favorite
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
