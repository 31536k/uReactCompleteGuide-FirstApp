import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Manu', age: 29 },
      { id: 'id3', name: 'Stephane', age: 26 }
    ],
    otherState: "Some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  deletePersonsHandler = (personsIndex) => {
    const oldPersons = [...this.state.persons]; //  ... operator deep copy original array to a new array.
    oldPersons.splice(personsIndex, 1);
    this.setState({ persons: oldPersons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    let persons = null
    let buttonClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );

      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);  // ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);  // ['red', 'bold']
    }

    // <StyleRoot> Person.js 에서 '@media (min-width: 500px)'을 적용하려면 StyleRoot 로 감싸야 한다. 
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;