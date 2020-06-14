import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        data: [],
        error: false,
      },
    });
    axios
      .post('http://localhost:3000/tasks', data)
      .then((response) => {
        dispatch({
          type: ADD_TASK,
          payload: {
            data: response.data,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TASK,
          payload: {
            data: [],
            error: error.message,
          },
        });
      });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    axios.delete('http://localhost:3000/tasks/' + id).then((response) => {
      dispatch({
        type: DELETE_TASK,
        payload: {
          data: response.data,
          error: false,
        },
      });
    });
  };
};
