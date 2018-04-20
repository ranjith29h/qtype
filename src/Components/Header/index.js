import React,{Component} from 'react';
import menubar from './../../icons/bars.svg';
import search from './../../icons/search.svg';
import './header.css';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
               <div className="menu_icon">
                    <img src={menubar} className="icon_holder" alt="menu"/>
               </div>
               <div className="title">
                <p>Quintype</p>
               </div>
                <div className="search_icon">
                    <img src={search} className="icon_holder" alt="search"/>
                </div>
            </div>
        );
    }
}