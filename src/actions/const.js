/* Populated by react-webpack-redux:action */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  };
};
export const complteTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  };
};
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};



