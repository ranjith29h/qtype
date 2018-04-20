import React,{Component} from 'react';
import './desc_card.css';

export default class DescCard extends Component{
    render(){
        return(
            <div className="container desc_card">
                <h1>{this.props.desc}</h1>
                <p>{this.props.auth}</p>
            </div>
        );
    }
}