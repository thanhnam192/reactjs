import React, { Component } from 'react';
import './App.css';
import Validate from './ValidationComponent/validate';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    message : ''
  }

  messageChangeHandler = (event) => {
      this.setState({message : event.target.value});
  }

  deleteCharacterHandler = (event,index) => {
   let characters = this.state.message.split('');
   characters.splice(index,1);
   let message = characters.join('');
   this.setState({message : message});

  }


  render() {

    const chars = (
    <div>
      {
        this.state.message.split('').map( (character,index) => {
          return (
              <Char character={character} key={index} click={ (event) => this.deleteCharacterHandler(event,index) }></Char>
          );
        
        })
      }
    </div>
    );
   

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input value = {this.state.message} onChange={(event) => this.messageChangeHandler(event)} />
        <p>Length : {this.state.message.length}</p>
        <Validate message={this.state.message}></Validate>
        {chars}
      </div>
    );
  }
}

export default App;
