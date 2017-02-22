/**
 * Created by john_ on 2017/2/11.
 */
import React,{Component,PropTypes} from "react";
export default class LinkFilter extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var link = (text)=>{
      if(text === this.props.filter){
        return(
          <span>
            {text}
          </span>
        )
      }
      return(
        <a href="#" onClick={e=>this.props.linkOnclick(text)}>
          {text}
        </a>
      )
    };
    return(
      <p>
        Show {" "}
        {link("SHOW_ALL")}
        Show {" "}
        {link("SHOW_COMPLETED")}
        Show {" "}
        {link("SHOW_ACTIVE")}
      </p>
    )
  }
}

LinkFilter.propTypes = {
  linkOnclick : PropTypes.func.isRequired
};
