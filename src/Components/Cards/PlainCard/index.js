import React,{Component} from 'react';
import './plain.css';

var isto = {
    "first_avatar":require('../../../images/first_avatar.png'),
    "second_avatar":require('../../../images/second_avatar.png'),
    "third_avatar":require('../../../images/third_avatar.png')
}

export default class PlainCard extends Component{
    render(){
        return(
            <div className="plain_card_container">
               <div className="plain_card_sub">
               <div className="plain_card_image">
                   <img src={isto[`${this.props.image}`]} alt="img"/>
               </div>
                <div className="plain_card_content">
                    <div className="cat">
                        <p><span>HEALTH & FITNESS</span></p>
                    </div>
                    <div className="article_headline">
                        <h3>
                            {this.props.desc}
                        </h3>
                    </div>
                    <div className="article_written">
                        <p>Alex Parkinson</p>
                    </div>
                    <div className="article_time">
                        <p>Posted 15 min ago</p>
                    </div>
                </div>
               </div>
            </div>
        )
    }
}