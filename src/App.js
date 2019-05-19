import React, { Component } from 'react';
import styled from 'styled-components';
import ToDo from './ToDo';

const Add = styled.button`
  width: 2rem;
  height: 2rem;
  background: white;
  border: 1.5px solid #2c3e50;
  border-radius: 50%;
  font-size: 1.4em;
  font-weight: 100;
  outline: none;
  :hover {
    background: #2c3e50;
    color: white;
  }
`
const Input = styled.input`
  outline: none;
  border: none;
`
const TextInput = styled.div`
  display: inline-block;
  border: 1px solid #2c3e50;
  border-radius: 2em;
  padding: .4em .8em;
  margin: 0 .4em;
`

export default class App extends Component {
  state = {
    newToDo: {
      title: '',
      content: '',
      date: ''
    },
    todoList: []
  }
  render() {
    const { newToDo, todoList } = this.state;
    const TodoList = todoList.map((value, index)=>{
      return <ToDo key={index} title={value.title} content={value.content} dead={value.date} />;
    })
    return (
      <div>
        <h1>ToDoList</h1>
        <TextInput><Input type="text" name="title" placeholder="제목" value={newToDo.title} onChange={this._handleChange}/></TextInput>
        <TextInput><Input type="text" name="content" placeholder="내용" value={newToDo.content} onChange={this._handleChange}/></TextInput>
        <TextInput><Input type="date" name="date" value={newToDo.date} onChange={this._handleChange}/></TextInput>
        <Add onClick={this._addToDo}>+</Add>
        {TodoList}
      </div>
    )
  }
  _handleChange = (e) => {
    this.setState({
      newToDo: {
        ...this.state.newToDo,
        [e.target.name]: e.target.value
      }
    });
  }
  _addToDo = () => {
    const { todoList, newToDo } = this.state;
    this.setState({
      todoList: [
        ...todoList,
        newToDo
      ]
    })
  }
  _loadToDo = () => {

  }
  _deleteToDo = () => {
    
  }
}
