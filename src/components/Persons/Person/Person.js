import React, { Component } from 'react';
import classes from "./Person.css";

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            [
                <p key="e1" onClick={this.props.click} > I'm {this.props.name}! I'm {this.props.age} years old</p >,
                <p key="e2">{this.props.children}</p>,
                <input key="e3" type="text" onChange={this.props.changed} value={this.props.name} />
            ]
        )
    }
}

export default Person;