/**
 * Created by john_ on 2017/2/11.
 */
import React, { Component, PropTypes } from 'react';
export default class TodoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var id = 0;
    var todoMap = (index) => {
      return(
        <li onClick={e=>this.props.updateTodo(id-1)}
            style={{
              textDecoration : index.completed ? 'line-through' : 'none'
            }}
            key = {id++}
        >
          {index.text}
        </li>
      )
    };
    return(
      <ul>
        {this.props.todos.map(todoMap)}
      </ul>
    )
  }
}

