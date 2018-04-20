import React,{Component} from 'react';
import './part_six.css';
import PlainCard from '../Cards/PlainCard';

export default class PartSix extends Component{
    render(){
        return(
            <div className="part_six_container">
                <div className="category_head">
                    <h1><span>Recent Stories</span></h1>
                </div>
                <PlainCard image="first_avatar"
                    desc="This Week in Fiction: Jonathan Lethem on the Poignance of Backgammon"
                />
                <PlainCard image="second_avatar"
                    desc="Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book"
                />
                <PlainCard image="third_avatar"
                    desc="This Week in Fiction: Jonathan Lethem on the Poignance of Backgammon"
                />
            </div>
        );
    }
}