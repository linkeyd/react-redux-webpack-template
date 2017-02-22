/**
 * Created by Linwei on 2017/2/21.
 */

import fetch from "isomorphic-fetch";

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export const selectSubreddit = (subreddit)=>{
    return{
        type:SELECT_SUBREDDIT,
        subreddit
    }
};
export const invalidateSubreddit = (subreddit)=>{
  return{
      type:REQUEST_POSTS,
      subreddit
  }
};
//subreddit 指的是路径
//开始请求
export const requestPosts=(subreddit)=>{
    return{
        type:REQUEST_POSTS,
        subreddit
    }
};
//请求完成
export const receivePosts = (subreddit,json)=>{
  return{
      type:RECEIVE_POSTS,
      subreddit,
      posts:json.data.children.map(child=>child.data),
      receivedAt:Date.now()
  }
};
export const fetchPosts= (subreddit)=>{
    return dispatch=>{
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response=>response.json())
            .then(json=>dispatch(receivePosts(subreddit,json)));
    }
};

const shouldFetchPosts = (state,subreddit)=>{
    const posts = state.postsBySubreddit[subreddit]
    console.log(state)
    if(!posts){
        return true
    }else if(posts.isFetching){
        return false
    }else {
        return posts.didInvalidate
    }
};

export const fetchPostsIfNeeded=(subreddit)=>{
    return(dispatch,getState)=>{
        if(shouldFetchPosts(getState(),subreddit)){
            return dispatch(fetchPosts(subreddit));
        }
    }
};