import {
  FETCH_TASK_LIST,
  ADD_TASK,
  TASK_DETAIL,
  UPDATE_TASK,
  DELETE_TASK,
} from '../actions';

const initialState = {
  taskList: [],
  error: '',
  loading: '',
  taskDetail: {},
};

const taskListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TASK_LIST:
      return {
        ...state,
        loading: payload.loading,
        taskList: payload.data,
        error: payload.error,
      };
    case ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat(payload.data),
      };
    case TASK_DETAIL:
      return {
        ...state,
        loading: payload.loading,
        taskDetail: payload.data,
        error: payload.error,
      };
    case DELETE_TASK:
      return {
        ...state,
        // taskList: state.taskList.filter((element) => {
        //   return element.id !== payload.data.id;
        // }),
      };
    case UPDATE_TASK:
      const updateTaskList = state.taskList.filter((element) => {
        return element !== payload.data.id;
      });
      return{
        ...state,
        taskList: updateTaskList.concat(payload.data)
      }
    default:
      return state;
  }
};

export default taskListReducer;
