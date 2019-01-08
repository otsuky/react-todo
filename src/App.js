import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "やること1",
          desc: "やることやることやること",
          done: false
        },
        {
          id: 2,
          title: "やること2",
          desc: "やることやることやることやること",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todoリスト</h1>
        <TodoList
          todos = {this.state.todos}
          />
      </div>
    );
  }
}

export default App;
