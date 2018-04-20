import React, {Component} from 'react';
import './qtype.css';
import publish from '../../images/publish.png';

export default class Qtype extends Component{
    render(){
        return(
            <div className="qtype_container">
               <h1 className="head">Publish With Quintype</h1>
               <p className="small">Mobile first, social first, data first.</p>
               <img src={publish} alt="publish with" />
               <p className="web">www.quintype.com</p>
            </div>
        );
    }
}