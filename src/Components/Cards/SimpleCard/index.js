import React,{Component} from 'react';
import './simple_card.css';

export default class SimpleCard extends Component{
    render(){
        return(
            <div className="simple_card_with_d simple_card">
                {this.props.title &&
                <p className="category_title">
                    <span style={{'borderBottom':`2px solid ${this.props.color}`}}>{this.props.title}</span>
                </p> 
                }
                <h3>{this.props.description}</h3>
                <p className="auth">{this.props.auth}</p>
               
                {this.props.hr === 'true' && <hr /> }

            </div>
        );
    }
}