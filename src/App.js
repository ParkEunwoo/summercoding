import React, { Component } from 'react';
import ToDoList from './ToDoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <input type="text"></input>
        <button>추가</button>
        <ToDoList></ToDoList>
      </div>
    )
  }
}
