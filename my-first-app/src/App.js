import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

const App = props => {
  const [personState,setPersonState] = useState({
    persons: [
      {name: "Nam Nam", age: 30},
      {name: "Ba Ba", age: 50}
    ]
  });

  const hitMe = (name) => {
    // this.meo.persons[0].age++; -- won't work
    // console.log(this.state);
    setPersonState({
      persons: [
        {name: name, age: 11},
        {name: "Ba 1", age: 22}
      ]
    });
  
  }


  return (
    <div className="App">
      <button onClick={hitMe.bind(this,'caimeo')} >Hit Me!</button>
      <h1>Hi, I'm react app</h1>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} >I'm a child props</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} 
        click={hitMe.bind(this,'BABABA1234')}
      ></Person>
      <Animal name="kiki" />
    </div>
  );
}

export default App;





