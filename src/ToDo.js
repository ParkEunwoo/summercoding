import React, { Component } from 'react';
import styled from 'styled-components';  

const Container = styled.div`
    display: flex;
    color: #2c3e50;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    padding: .6em 0;
    border-bottom: 1px solid;
`

const CheckBox = styled.input`
    outline: none;
`

const Title = styled.div`
    padding-left: 1em;

`
const Content = styled.div`
    flex-grow: 1;
    text-align: center;
`

const Dead = styled.div`
    padding-right: 1em;
`

const Button = styled.button`
    background: white;
    outline: none;
    border: 1.4px solid #2c3e50;
    border-radius: 1em;
    padding: .2em .6em;
    margin: 0 .2em;
    :hover {
        color: white;
        background: #2c3e50;
    }
`

const Input = styled.input`
  outline: none;
  border: none;
`

export default class ToDo extends Component {
    state = {
        editMode: false,
        editedToDo: {
            title:'',
            content:'',
            date:''
        }
    }
    componentDidMount(){
        const { title, content, date } = this.props;
        const editedToDo = {
            title, content, date
        }
        this.setState({
            editedToDo
        })
    }
  render() {
      const { editMode, editedToDo } = this.state;
      const { index, title, content, date, _deleteToDo, _editToDo } = this.props;
    
    return (
      <Container>
        <CheckBox type="checkbox"></CheckBox>
        <Title>{editMode?<Input type="text" name="title" value={editedToDo.title} placeholder="제목" onChange={this.handleChange}/>:title}</Title>
        <Content>{editMode?<Input type="text" name="content" value={editedToDo.content} placeholder="내용" onChange={this.handleChange}/>:content}</Content>
        <Dead>{editMode?<Input type="date" name="date" value={editedToDo.date} placeholder="기한" onChange={this.handleChange}/>:date}</Dead>
        {editMode?<Button onClick={()=>{this.setState({editMode:false});_editToDo(index, editedToDo)}}>완료</Button>:<Button onClick={()=>{this.setState({editMode:true})}}>수정</Button>}
        <Button onClick={()=>{_deleteToDo(index)}}>삭제</Button>
      </Container>
    )
  }
  handleChange = (e) => {
    this.setState({
      editedToDo: {
        ...this.state.editedToDo,
        [e.target.name]: e.target.value
      }
    });
  }
}
