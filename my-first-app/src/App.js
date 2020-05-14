import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'kec.', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }


  togglePerson = () => {
    const a = this.state.isShowPerson;
    this.setState({ isShowPerson : !a});
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons : persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);
    const person = this.state.persons[personIndex];

    const personTmp = { ...person };
    personTmp.name = event.target.value;

    const persontsTmp = [...this.state.persons];
    persontsTmp[personIndex] = personTmp;

    this.setState({ persons : persontsTmp });

  }

  render () {

    let person = null;
    if( this.state.isShowPerson ) {
      person = (
        <div>
          {
            this.state.persons.map( (person, index) => { 
              return (
                <Person 
                name={person.name} 
                age={person.age} 
                key={person.id}
                click={ () => this.deletePerson(index)} 
                changed={ (event) => this.nameChangedHandler(event, person.id)}
                /> );
            })
          }
   
      </div> 
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePerson}>Switch Name</button>
        {person}
    
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;