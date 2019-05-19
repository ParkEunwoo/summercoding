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
  componentDidMount = () => {
    this._loadToDo();
  }
  render() {
    const { newToDo, todoList } = this.state;
    const TodoList = todoList.map((value, index)=>{
      return <ToDo key={index} index={index} title={value.title} content={value.content} date={value.date} _deleteToDo={this._deleteToDo} _editToDo={this._editToDo}/>;
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
    });
    this._saveToDo();
  }
  _loadToDo = () => {
    const ToDoList = localStorage.getItem("todolist");
    if(ToDoList !== null){
      const todoList = JSON.parse(ToDoList);
      this.setState({
        todoList
      })
    }
  }
  _saveToDo = () => {
    const { todoList } = this.state;

    const todolist = JSON.stringify(todoList);
    localStorage.setItem("todolist", todolist);
  }
  _deleteToDo = (index) => {
    const { todoList } = this.state;
    
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        ...todoList.slice(index+1)
      ]
    })
    this._saveToDo();
  }
  _editToDo = (index, editedToDo) => {
    const { todoList } = this.state;
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        editedToDo,
        ...todoList.slice(index+1)
      ]
    })
    this._saveToDo();
  }

}
