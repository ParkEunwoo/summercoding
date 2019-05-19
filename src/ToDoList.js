import React, { Component } from 'react';
import ToDo from './ToDo';

export default class ToDoList extends Component {
  render() {
    return (
      <div>
      <ToDo title="제목" content="내용" dead="기한"></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
      </div>
    )
  }
}
