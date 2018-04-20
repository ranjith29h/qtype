import React,{Component} from 'react';
import './hover.css';

export default class HoverCard extends Component{
    render(){
        return(
            <div className="hover_container">
                <div className="hover_sub">
                <img src="http://via.placeholder.com/400x590" alt="place holder"/>
                <div className="head_line">
                    <p>Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'</p>
                    <p className="auth">Jonnathan Doe</p>
                </div>
                </div>
            </div>
        )
    }
}