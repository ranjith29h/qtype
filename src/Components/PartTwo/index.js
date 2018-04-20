import React, { Component } from 'react';
import './part_two.css';
import SmartCard from '../Cards/SmartCard';
import SimpleCard from '../Cards/SimpleCard';

import Qtype from '../Qtype';
import Subscribe from '../Subscribe';

class App extends Component {
  render() {
    return (
        <div className="part_two">
          <div className="smart_card">
            <SmartCard title="BUSINESS" 
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled."
            />
          </div>
          <div className="simple_card_container">
            <SimpleCard title="TRAVEL" 
            description="Airtel offers 3 GB Free Data A Month To Customer Who Switch To Its 4G Service"
            auth="Alex Prakinson"
            color="#60bcf2"
            hr="true"
            />
            <SimpleCard title="HEALTH & FITNESS" 
            description="Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low"
            auth="Alice Doe"
            color="#f260a4"
            hr="true"
            />
            <SimpleCard title="SCIENCE" 
            description="Sundar Pichai Launches 'Digital Unlocked' Programme"
            auth="Jonnathan Doe"
            color="#edd30d"
            hr="false"
            />
          </div>
          <div className="promotion">
            <div className="qtype_holder">
                <Qtype />
            </div>
            
            <Subscribe />
          </div>
        </div>
    );
  }
}

export default App;
