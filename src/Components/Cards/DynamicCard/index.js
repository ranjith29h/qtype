import React,{Component} from 'react';
import './dynamic_card.css';
import teller from '../../../images/teller.png';

export default class DynamicCard extends Component {
    render(){
        return(
            <div className="dynamic_card">
                <div className="img_holder">
                </div>
                <div className="content">
                    <h3 className="category_head">
                        <span>SCIENCE</span>
                    </h3>
                    <h4>Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'</h4>
                    <p className="show_desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled.</p>
                    <div className="posted_by">
                        <div className="posted_by_avatar">
                            <img src={teller} alt="author"/>
                        </div>
                        <div className="posted_by_details">
                            <p>Alex Parkinson</p>
                            <p>Posted 15 min ago</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}