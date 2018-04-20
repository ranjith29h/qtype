import React, { Component } from 'react';
import './smart.css';
import business from '../../../images/business.png';

export default class CardFull extends Component {
    render() {
        return (
            <div className="container padding_card_container">
            <div className="card cardFull_container">
                <img className="card-img-top" src={business} alt="Business png" />
                <div className="card-body">
                    {this.props.title ? 
                    <h4 className="card-title title_underscore business"><span>{this.props.title}</span></h4>
                    : null }
                    <p className="card-text desc">
                       Jenny Lawson is Publishing a New Book and It's Sort of a Coloring book
                    </p>
                    {this.props.description &&
                    <p className="text-clr">
                        {this.props.description}
                    </p>
                    }
                   <p className="text-clr writer">
                       Jonnathan Doe
                   </p>
                </div>
            </div>
            </div>
        );
    }
}