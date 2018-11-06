import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component{

  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor' , props);
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount');
    if (this.props.postion === 0){
      this.inputElement.current.focus();
    }
  }

  focus(){
      this.inputElement.current.focus();
  }

  render(){
    console.log('[Persons.js] Inside render');
    return (
      <Aux>
         <p onClick={this.props.click}>Hi This is {this.props.name}  and I am {this.props.age} years old! </p>
         <p>{this.props.children}</p>
         <input
          ref={this.inputElement}
           type="text"
           onChange={this.props.changed}
           value={this.props.name}
            />
      </Aux>
    );
  }
}



Person.propTypes = {
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};

export default withClass(Person, classes.Person);
