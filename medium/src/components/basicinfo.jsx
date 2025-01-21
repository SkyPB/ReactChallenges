import React from 'react';

class BasicInfo extends React.Component {
  render() {
  const { name, phone, dob} = this.props.person;
  return (
  <div>
    <h1>Basic Info</h1>
    <p>Name: {name}</p> 
    <p>Phone: {phone}</p>
    <p>DoB: {dob}</p> 
  </div> 
  )
  }
 }
  
  export default BasicInfo