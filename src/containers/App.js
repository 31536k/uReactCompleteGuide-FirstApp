import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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

    if (this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonsHandler}
            changed = {this.nameChangedHandler} />;
    }

    // <StyleRoot> Person.js 에서 '@media (min-width: 500px)'을 적용하려면 StyleRoot 로 감싸야 한다. 
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;