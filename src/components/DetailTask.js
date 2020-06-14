import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskDetail } from '../store/actions';
import { useHistory } from 'react-router-dom';

export default function DetailUser() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTaskDetail(id));
  }, [dispatch, id]);

  let history = useHistory();
  const backBtn = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const taskDetail = useSelector((state) => state.taskReducer.taskDetail);
  const error = useSelector((state) => state.taskReducer.error);
  const loading = useSelector((state) => state.taskReducer.loading);

  return (
    <div className="container">
      <h1>Detail Task</h1>
      {loading ? (
        <h4 className="loading">Loading...</h4>
      ) : (
        <div>
          {error ? (
            <h4 className="loading">{error}</h4>
          ) : (
            <div>
              <button onClick={(event) => backBtn(event)} className="backBtn">Back</button>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{taskDetail.title}</td>
                    <td>{taskDetail.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
