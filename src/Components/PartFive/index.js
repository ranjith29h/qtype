import React,{Component} from 'react';
import SideCard from '../Cards/SideCard';
import SmartCard from '../Cards/SmartCard';
import './part_five.css';

export default class PartFive extends Component{
    render(){
        return(
            <div className="part_five">
                 <div className="new_category">
                    <h2><span>Food & Health</span></h2>
                </div>
                <div className="content_holder">
                <div className="content_one">
                    <SideCard 
                        img_name="one"
                        desc="This Is What 300 Calories Look Like, Think Twice Before You Eat!"
                        auth="Jonnathan Doe"
                    />
                    <SideCard 
                        img_name="two"
                        desc="Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'"
                        auth="Alex parkinson"
                    />
                    <SideCard 
                        img_name="three"
                        desc="Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service"
                        auth="Matt Wilson"
                    />
                </div>
                <div className="content_two">
                <SmartCard 
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled."
            />
                </div>
                </div>
            </div>
        );
    }
}