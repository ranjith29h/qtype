import React,{Component} from 'react';


import './side_card.css';

var data = {
    "one":require('../../../images/one.png'),
    "two":require('../../../images/two.png'),
    "three":require('../../../images/three.png')
}

export default class SideCard extends Component{  
    render(){
        return(
                <div className="side__card">
                <div className="row">
                    <div className="col-img">
                        <img src={data[this.props.img_name]} alt={`${data[this.props.img_name].substring(1, 5)}`} />
                    </div>
                    <div className="col-content">
                        <p className="side_desc">{this.props.desc}</p>
                        <p className="side_author">{this.props.auth}</p>
                    </div>
                </div>
                </div>
        );
    }
}