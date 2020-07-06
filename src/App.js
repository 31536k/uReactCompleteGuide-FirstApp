import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephane', age: 26 }
    ]
  });

  const switchNameHandler = (newName) => {
    console.log("Was clicked")
    // DON'T DO THIS
    // this.state.persons[0].name = "UpdatedName"
    // DO THIS
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephane', age: 27 }
      ]
    })
  }

  const nameChangedHandler = (event) => {
    console.log("Was clicked")
    // DON'T DO THIS
    // this.state.persons[0].name = "UpdatedName"
    // DO THIS
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephane', age: 27 }
      ]
    })
  }

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => switchNameHandler("Maxilian")}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, "Max")}
          changed={nameChangedHandler}/>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>
      </div>
    );
}

export default app;