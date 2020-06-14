import axios from 'axios';

export const TASK_DETAIL = 'TASK_DETAIL';

export const fetchTaskDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: TASK_DETAIL,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    });
    axios
      .get('http://localhost:3000/tasks/' + id)
      .then(({ data }) => {
        dispatch({
          type: TASK_DETAIL,
          payload: {
            data,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: TASK_DETAIL,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
  };
};
