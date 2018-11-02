import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



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
     const style = {
       backgroundColor: '#009435',
       font: 'inherit',
       border: '1px solid #009435',
       padding: '8px',
       cursor: 'pointer',
       color: '#000'
     };
    //use of es6

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>

         {this.state.persons.map((person, index) => {
           return <Person
           click={() => this.deletePersonHandler(index)}
           name={person.name}
           age={person.age}
           key={person.id}
           changed={(event) => this.nameChangedHandler(event, person.id)}
           />
         })}

        </div>
      );

      style.backgroundColor = '#ff0000';
      style.border = '1px solid #ff0000';
    }


   let classes = [];

   if(this.state.persons.length <= 2){
     classes.push('red');
   }

   if(this.state.persons.length <= 1){
     classes.push('bold');
   }

    return (
      <div className="App">
        <h1>This is really working</h1>
        <p className={classes.join(' ')}>My First React App</p>
        <button
        style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );

    //normal coding

    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'I am vinay sanwal'))
  }
}

export default App;
