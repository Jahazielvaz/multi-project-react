import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//APPS
import PracticingBasics from './Projects/PracticingBasics';
import Sample from './Projects/TestComponents/Sample';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">WELCOME TO OUR BASICS PROJECT</h1>
        <Sample />
        <PracticingBasics />
      </div>
    );
  }
}

export default App;
