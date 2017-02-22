/**
 * Created by john_ on 2017/2/8.
 */
import {ADD_TODO, COMPLETE_TODO} from "../actions/const";
const todos = (state = [] , action) =>{
  switch (action.type) {
    case ADD_TODO:
      return[
        ...state,
        {
          text : action.text,
          completed:false
        }
      ];
    case COMPLETE_TODO:
      state[action.id].completed = !state[action.id].completed;
      return [...state];
    default:
      return state;
  }
};
export default todos;
