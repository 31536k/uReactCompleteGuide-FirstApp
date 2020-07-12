import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // can fire Http request
    // setTimeout(() => {
    //   console.log('Fake Http rquest')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect') // Cockpit component 가 parent 에서 unmount 될 때 호출된다.
    };
  }, [props.persons]); // props.persons 에 변화가 있을 때만 첫번째 매개변수로 전달한 함수가 실행된다. 빈 array 로 [] 를 주면 최초에 한 번만 실행된다.

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  }); // 2nd argument가 없으면 useEffect에 전달한 함수가 매번 실행된다.

  const assignedClasses = [];
  let buttonClass = '';

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);  // ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);  // ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button ref={toggleBtnRef} className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(cockpit)