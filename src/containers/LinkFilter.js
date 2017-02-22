/**
 * Created by john_ on 2017/2/11.
 */
import {setVisibilityFilter} from "../actions/const";
import {connect} from "react-redux";
import LinkFilter from "../components/LinkFilter";

var mapStateToProps = (state)=>{
  return{
    filter : state.visibilityFilter
  }
};

var mapDispatchToProps = (dispatch)=>{
  return{
    linkOnclick : (text)=>{
      dispatch(setVisibilityFilter(text))
    }
  }
};

const LinkFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkFilter);

export default LinkFilterContainer;
