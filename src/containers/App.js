import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/cockpit';



class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor' , props);
    this.state= {
      persons: [
        {id: '1',name: 'vinay' , age:23 },
        {id: '2',name: 'Himani' , age:23},
        {id: '3',name: 'Sanjay' , age:25}
      ],
      otherState: 'some other value',
      showPersons: false
    }

  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps , nextState){
  //    console.log('[UPDATE App.js] Inside component shouldComponentUpdate' ,nextProps , nextState);
  //    return nextState.persons !== this.state.persons ||
  //    nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside component componentWillUpdate' ,nextProps , nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside component componentDidUpdate');
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
    console.log('[Persons.js] Inside render');
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
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
         appTitle={this.props.title}
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
