import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // can initialize sate like below
    // state = {...} // don't need to setState
  }

  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Manu', age: 29 },
      { id: 'id3', name: 'Stephane', age: 26 }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true
  }

  static getDrivedStateFromProps(props, state) {
    console.log('[App.js] getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    // place jobs like http request here
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');

    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonsHandler}
        changed={this.nameChangedHandler} />;
    }

    // <StyleRoot> Person.js 에서 '@media (min-width: 500px)'을 적용하려면 StyleRoot 로 감싸야 한다. 
    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false }) // cockpit 이 사라지면 Cockpit 의 'cleanup work in useEffect' 부분이 호출된다.
        }}>Remove cockpit</button>

        {this.state.showCockpit ? <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} /> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);