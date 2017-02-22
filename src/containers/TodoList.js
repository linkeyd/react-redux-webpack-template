/**
 * Created by john_ on 2017/2/11.
 */
import TodoList from "../components/TodoList";
import {complteTodo} from "../actions/const";
import {connect} from "react-redux"
var getVisibleTodo = (todos,filter)=>{
    switch (filter){
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter( stateData => stateData.completed);
      case "SHOW_ACTIVE":
        return todos.filter(stateDate => !stateDate.completed);
    }
};

const mapStateToProps = (state)=>{
  return{
      todos : getVisibleTodo(state.todos,state.visibilityFilter)
  }
};
const mapDispatchToProps = (dispatch)=>{
  return{
    updateTodo : (id)=>{
      dispatch(complteTodo(id));
    }
  }
};
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;



