/**
 * Created by Linwei on 2017/2/21.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import {selectSubreddit,fetchPostsIfNeeded,invalidateSubreddit} from '../actions/actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class AsyncApp extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.selectedSubreddit);
        this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedSubreddit !== this.props.selectedSubreddit){
            nextProps.dispatch(fetchPostsIfNeeded(nextProps.selectedSubreddit));
        }
    }
    handleChange(nextSubreddit){
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }
    handleRefreshClick(e){
        e.preventDefault();

        this.props.dispatch(invalidateSubreddit(this.props.selectedSubreddit));
        this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));

    }

    render(){
        return(
            <div>
                <Picker value = {this.props.selectedSubreddit}
                        onChange = {e => this.handleChange}
                        options={['reactjs','frontend']}
                />
                <p>
                    {
                        this.props.lastUpdated &&
                            <span>
                                Last updated at {new Date(this.props.lastUpdated).toLocaleTimeString()}.
                                {' '}
                            </span>
                    }
                    {
                        !this.props.isFetching &&
                        <a href='#'
                           onClick={ e =>this.handleRefreshClick(e)}>
                            Refresh
                        </a>
                    }
                </p>
                {
                    this.props.isFetching && this.props.posts.length ===0 &&
                        <h2>Loading...</h2>
                }
                {
                    !this.props.isFetching && this.props.posts.length ===0 &&
                        <h2>Empty</h2>
                }
                {
                    this.props.posts.length >0&&
                        <div style={{opacity:this.props.Fetching?0.5:1}}>
                            <Posts posts={this.props.posts}/>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps =(state)=> {
    console.log(state);
    const {selectedSubreddit,postsBySubreddit} = state;
    const{
        isFetching,
        lastUpdated,
        items :posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching:true,
        items:[]
    };
    return{
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps)(AsyncApp);