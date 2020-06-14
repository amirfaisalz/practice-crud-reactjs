import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';

const initialState = {
  favoriteTask: [],
};

const favoriteTaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVORITE:
      return {
        favoriteTask: state.favoriteTask.concat(payload),
      };
    case REMOVE_FAVORITE:
      return {
        favoriteTask: state.favoriteTask.filter((element) => {
          return element !== payload;
        }),
      };
    default:
      return state;
  }
};

export default favoriteTaskReducer;
