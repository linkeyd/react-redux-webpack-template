/**
 * Created by john_ on 2017/2/8.
 */
import {SET_VISIBILITY_FILTER} from '../actions/const';

const visibilityFilter = (state = "SHOW_ALL",action)=>{
  switch (action.type){
    case  SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
export default visibilityFilter;
