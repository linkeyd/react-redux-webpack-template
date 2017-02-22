/**
 * Created by john_ on 2017/2/11.
 */
import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions/const";
class AddTodo extends Component{
  constructor(props){
    super(props);
  }
  handleOnclick(e){
    var input = this.refs.input;
    this.props.dispatch(addTodo(input.value.trim()));
    input.value = ' ';
    e.preventDefault();
  }
  render(){
    return(
      <div>
        {console.log(this.props)}
        <input type="text" ref="input"/>
        <button onClick={e=>this.handleOnclick(e)}>add</button>
      </div>
    )
  }
}

export default AddTodo = connect()(AddTodo);
