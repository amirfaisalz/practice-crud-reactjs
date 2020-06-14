import axios from 'axios';

export const FETCH_TASK_LIST = 'FETCH_TASK_LIST';

export const fetchTaskList = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_TASK_LIST,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    });
    axios
      .get('http://localhost:3000/tasks')
      .then(({ data }) => {
        dispatch({
          type: FETCH_TASK_LIST,
          payload: {
            data,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_TASK_LIST,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
  };
};
