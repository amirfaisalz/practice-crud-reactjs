import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { removeFavorite } from '../store/actions/index';

export default function WatchCountry() {
  const dispatch = useDispatch();
  //   let history = useHistory();

  const removeFavoriteBtn = (event, id, title, category) => {
    event.preventDefault();
    const data = {
      id,
      title,
      category,
    };
    dispatch(removeFavorite(data));
  };

  const favoriteTask = useSelector(
    (state) => state.favoriteReducer.favoriteTask
  );

  return (
    <div className="containerWorld">
      <h1>Favorite Task</h1>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Category</th>
            <th>Remove Task</th>
          </tr>
        </thead>
        <tbody>
          {favoriteTask.map((task, i) => {
            return (
              <tr key={i}>
                <td>{task.title}</td>
                <td>{task.category}</td>
                <td>
                  <button
                    onClick={(event) => {
                      removeFavoriteBtn(
                        event,
                        task.id,
                        task.title,
                        task.category
                      );
                    }}>
                    Remove Task
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
