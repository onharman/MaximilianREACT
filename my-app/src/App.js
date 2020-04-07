import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import Person from './Person/Person'
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Max',     age: 23},
      {name: 'Moritz',  age: 26},
      {name: 'Pete',    age: 32}
    ]
  }

switchNameHandler = () => {
  this.setState({persons: [
    {name: 'Maxi',     age: 23},
    {name: 'Moritz',  age: 26},
    {name: 'Pete',    age: 32}
  ]})
}

  render() {
    return (
    <div className="App">
      <h1>Hi, I'm a React App!!</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>HEHE</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    )
/*     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'))
 */  }
}

export default App;
