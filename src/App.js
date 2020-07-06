import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

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

  nameChangedHandler = (event) => {
    console.log("Was clicked")
    // DON'T DO THIS
    // this.state.persons[0].name = "UpdatedName"
    // DO THIS
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephane', age: 27 }
      ]
    })
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;