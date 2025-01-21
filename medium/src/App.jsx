import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';
import BasicInfo from './components/basicinfo'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Sky Patterson-Baker',
        phone: '123-456-7890',
        dob: 'August 7, 2001',
      },
    };
  }

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

export default App
