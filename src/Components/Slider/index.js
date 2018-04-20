import React, { Component } from 'react';

import './slide.css';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides active">
                        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt="slider" />
                        <div className="heading">
                            <h2>Must Reads</h2>
                        </div>
                        <div className="text"> Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'</div>
                        <div className="button">
                            <button>Read Story</button>
                        </div>
                    </div>

                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
                </div>
            </div>
        )
    }
}