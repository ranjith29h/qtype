import React,{Component} from 'react';
import './footer.css';
import logo from '../../images/quintype.png';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer_container">
                <div className="logo_container">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="link_container">
                   <div className="link_sub">
                   <a href="/">About Us</a>  |
                    <a href="/">Privacy Policy</a>  |
                    <a href="/">Terms & Conditions</a>
                   </div>
                   <p>Copyright 2016 &copy;</p>
                   <p>Powered by Quintype</p>
                </div>
            </div>
        )
    }
}