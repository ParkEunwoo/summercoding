import React, { Component } from 'react';
import styled from 'styled-components';
import ToDoList from './ToDoList';

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
  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <TextInput><Input type="text" placeholder="제목" /></TextInput>
        <TextInput><Input type="text" placeholder="내용" /></TextInput>
        <TextInput><Input type="date" /></TextInput>
        <Add>+</Add>
        <ToDoList></ToDoList>
      </div>
    )
  }
}
