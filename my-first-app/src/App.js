import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-Color : ${props => props.alt ? 'red' : 'green'};
  padding: 8px;

  &:hover {
    background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
  }
`;

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
    const style = {
      backgroundColor : 'green',
      padding: '8px',
      ':hover' : {
        backgroundColor : 'lightgreen'
      }
    };
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    const classes = [];
    if( this.state.persons.length <= 2 ) {
      classes.push('red');
    }
    if( this.state.persons.length <= 1 ) {
      classes.push('bold');
    }


    return (

        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alt={this.state.isShowPerson}  onClick={this.togglePerson}>Switch Name</StyledButton>
          {person}
    
        </div>

      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;