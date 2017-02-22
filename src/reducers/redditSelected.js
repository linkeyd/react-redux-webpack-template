/**
 * Created by Linwei on 2017/2/21.
 */
import {SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS} from "../actions/actions";

const selectedSubreddit = (state = "reactjs",action)=>{
    switch (action.type){
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
};

export default selectedSubreddit;