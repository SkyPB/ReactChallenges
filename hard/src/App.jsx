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
      people: [
        {
          name: 'Sky Patterson-Baker',
          phone: '123-456-7890',
          dob: 'August 7, 2001',
        },
        {
          name: 'Chaunie Banks',
          phone: '678-999-8218',
          dob: 'July 3, 2001',
        },
        {
          name: 'Jaelyn Norman',
          phone: '323-319-6060',
          dob: 'January 15, 2002',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}




export default App
