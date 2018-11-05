import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{

  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor' , props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount');
  }
  
  render(){
    console.log('[Persons.js] Inside render');
    return (
      <div className={classes.Person}>
         <p onClick={this.props.click}>Hi This is {this.props.name}  and I am {this.props.age} years old! </p>
         <p>{this.props.children}</p>
         <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}


export default Person;
