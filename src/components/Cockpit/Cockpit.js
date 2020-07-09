import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // can fire Http request
  });

  const assignedClasses = [];
  let buttonClass = '';

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);  // ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);  // ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}

export default cockpit