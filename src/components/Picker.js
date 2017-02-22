/**
 * Created by Linwei on 2017/2/21.
 */
import React,{Component} from 'react';

export default class Picker extends Component{
    render(){
        let list = (option) => {
          return(
              <option value={option} key={option}>
                  {option}
              </option>
          )
        };
        return(
            <span>
                <h1>{this.props.value}</h1>

                <select onChange={e => this.props.onChange(e.target.value)} value={this.props.value}>
                    {this.props.options.map(list)}
                </select>
            </span>
        )
    }
}