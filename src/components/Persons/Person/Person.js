import React, { Component } from 'react';
import classes from "./Person.css";
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="e1" onClick={this.props.click} > I'm {this.props.name}! I'm {this.props.age} years old</p >
                <p key="e2">{this.props.children}</p>
                <input key="e3" type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);