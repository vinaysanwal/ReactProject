
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor' , props);
    this.lastPersonRef= React.createRef();
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount');
    this.lastPersonRef.current.focus();
  }


  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside component componentWillReceiveProps' ,nextProps);
  }

  // shouldComponentUpdate(nextProps , nextState){
  //    console.log('[UPDATE Persons.js] Inside component shouldComponentUpdate' ,nextProps , nextState);
  //    return nextProps.persons !== this.props.persons ||
  //    nextProps.changed !== this.props.changed ||
  //    nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] Inside component componentWillUpdate' ,nextProps , nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside component componentDidUpdate');
  }


  render(){
    console.log('[Persons.js] Inside render');
    return  this.props.persons.map( (person, index) => {
        return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        postion={index}
        age={person.age}
        ref={this.lastPersonRef}
        changed={( event ) => this.props.changed(event, person.id)}/>
      });
  }
}

export default Persons;
