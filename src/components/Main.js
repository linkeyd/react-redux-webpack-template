import React, {
  Component,
  PropTypes
} from 'react';
import AddTodo from "../containers/AddTodo";
import LinkFilterContainer from "../containers/LinkFilter";
import TodoListContainer from "../containers/TodoList";

export default class AppComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <AddTodo/>
        <TodoListContainer/>
        <LinkFilterContainer/>
      </div>
    )
  }
}
