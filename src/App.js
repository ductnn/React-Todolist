import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(){
    super();
    this.todoItem = [
      { title: 'Dev', isComplete: true }, 
      { title: 'Dev1' }, 
      { title: 'Dev2' }
    ];
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          this.todoItem.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
