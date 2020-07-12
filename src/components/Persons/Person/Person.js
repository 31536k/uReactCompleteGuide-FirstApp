import React, { Component } from 'react';
import classes from "./Person.css";
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement2 = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElement2.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
                <p key="e1" onClick={this.props.click} > I'm {this.props.name}! I'm {this.props.age} years old</p >
                <p key="e2">{this.props.children}</p>
                <input 
                    key="e3" 
                    ref={this.inputElement2}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        );
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);