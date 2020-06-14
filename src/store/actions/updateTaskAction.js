import axios from 'axios';

export const UPDATE_TASK = 'UPDATE_TASK';

export const updateTask = (data, id) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TASK,
      payload: {
        data: [],
        error: false,
      },
    });
    axios
      .put('http://localhost:3000/tasks/' + id, data)
      .then((response) => {
        dispatch({
          type: UPDATE_TASK,
          payload: {
            data: response.data,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TASK,
          payload: {
            data: [],
            error: error.message,
          },
        });
      });
  };
};
