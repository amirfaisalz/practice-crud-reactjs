export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (data) => {
  return {
    type: ADD_FAVORITE,
    payload: data,
  };
};

export const removeFavorite = (data) => {
  return {
    type: REMOVE_FAVORITE,
    payload: data,
  };
};
