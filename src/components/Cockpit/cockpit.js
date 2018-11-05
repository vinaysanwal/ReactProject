import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

  const assignedclasses = [];
  let btnClass = '';


  if(props.showPersons){
    btnClass = classes.Red;
  }

  if(props.persons.length <= 2){
    assignedclasses.push(classes.red);
  }

  if(props.persons.length <= 1){
    assignedclasses.push(classes.bold);
  }


  return(
  <div className={classes.Cockpit}>
    <h1>This is really working</h1>
    <p className={assignedclasses.join(' ')}>My First React App</p>
    <button
    className={btnClass}
    onClick={props.clicked}>Switch Name</button>
   </div>
  );
};

export default cockpit;
