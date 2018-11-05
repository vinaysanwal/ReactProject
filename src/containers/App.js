import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/cockpit';



class App extends Component {
    state = {
      persons: [
        {id: '1',name: 'vinay' , age:23 },
        {id: '2',name: 'Himani' , age:23},
        {id: '3',name: 'Sanjay' , age:25}
      ],
      otherState: 'some other value',
      showPersons: false
    }


    nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person ={
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      })

    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    togglePersonHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow});
    }

  render() {

    //use of es6

    let persons = null;
    if(this.state.showPersons){
      persons =
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }
    return (
      <div className={classes.App}>
        <Cockpit
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );

    //normal coding

    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'I am vinay sanwal'))
  }
}

export default App;
