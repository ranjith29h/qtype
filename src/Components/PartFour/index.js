import React, { Component } from 'react';
import SmartCard from '../Cards/SmartCard';
import SimpleCard from '../Cards/SimpleCard';
import DescCard from '../Cards/DescCard';
import './part_four.css';

import HoverCard from './../Cards/HoverCard';

export default class PartFour extends Component {
    render() {
        return (
            <div className="part_four_container">
                <div className="four_one">
                    <HoverCard />
                </div>
                <div className="four_two">
                    <SmartCard />
                    <div className="desc_card_holder">
                    <DescCard
                        desc="Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service"
                        auth="Alice Doe"
                    />
                    </div>
                </div>
                <div className="four_three">
                    <SimpleCard
                        description="Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service"
                        auth="Alex parkinson"
                        hr="true"
                    />

                    <SimpleCard
                        description="Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low"
                        auth="Alice Doe"
                        hr="true"
                    />
                    <SimpleCard
                        description="Sundar Pichai Launches 'Digital Unlocked' Programme"
                        auth="Jonnathan Doe"
                        hr="false"
                    />
                    <SimpleCard
                        description="Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low"
                        auth="Alice Doe"
                        hr="false"
                    />
                </div>
            </div>
        )
    }
}