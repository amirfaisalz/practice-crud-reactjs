import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import favoriteReducer from './favoriteReducer';

const rootReducers = combineReducers({
  taskReducer,
  favoriteReducer,
});

export default rootReducers;
