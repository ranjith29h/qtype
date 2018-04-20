import React, {Component} from 'react';
import mail from '../../images/mail.png';
import './subscribe.css';
export default class Subscribe extends Component{
    render(){
        return(
            <div className="subscribe_container">
                <img src={mail} alt="mail"/>
                <h2 className="subscribe_text">Subscribe to Newsletter</h2>
                <input type="mail" className="subscribe_textbox" placeholder="Your Email"/>
                <button className="subscribe_button">Subscribe</button>
            </div>
        );
    }
}