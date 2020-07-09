import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // can fire Http request
    setTimeout(() => {
      console.log('Fake Http rquest')
    })
  }, [props.persons]); // props.persons 에 변화가 있을 때만 첫번째 매개변수로 전달한 함수가 실행된다. 빈 array 로 [] 를 주면 최초에 한 번만 실행된다.

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