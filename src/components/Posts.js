/**
 * Created by Linwei on 2017/2/21.
 */
import React, {Component} from 'react';
export default class Posts extends Component {

    render() {
        let list = (post, i) => {
            return (
                <li key={i}>
                    {post.title}
                </li>
            )
        };
        return (
            <ul>
                {this.props.posts.map(list)}
            </ul>
        )
    }
}