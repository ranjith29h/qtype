import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import DynamicCard from './Components/Cards/DynamicCard';
import PartTwo from './Components/PartTwo';

import PartFour from './Components/PartFour';
import PartFive from './Components/PartFive';
import PartSix  from './Components/PartSix';
import Dot from './Components/Dots';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
       <Header />
       <div className="app_container">
        <DynamicCard />
        <PartTwo />
        <PartFour />
        <PartFive />
       </div>
      </div>
      <PartSix />
      <div className="dots_pos">
        <Dot />
        <Dot />
        <Dot />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
