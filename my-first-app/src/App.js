import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames:[
      {username : "Nam Nguyen"},
      {username : "Ba Ba"},
      {username : "Ma Ma"}
    ]
  };

  changeNameHandler = (event) => {
    this.setState({
      usernames:[
        {username : event.target.value},
        {username : "Ba Ba"},
        {username : "Ma Ma"}
      ]
    });
  }

  render () {
    return (
      <div className="App">
        <UserInput username={this.state.usernames[0].username} change={this.changeNameHandler} />
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  
  }
}

export default App;