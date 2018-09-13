import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }
  render() {
    return (
      
      <div className="App">
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I'm just a basicboy!</Person>
      </div>
    );
  }
}

export default App;
