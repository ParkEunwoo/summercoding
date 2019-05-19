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
        editMode: false
    }
  render() {
      const { editMode } = this.state;
      const { title, content, dead } = this.props;
    return (
      <Container>
        <CheckBox type="checkbox"></CheckBox>
        <Title>{editMode?<Input type="text" placeholder="제목"/>:title}</Title>
        <Content>{editMode?<Input type="text" placeholder="내용"/>:content}</Content>
        <Dead>{editMode?<Input type="date" placeholder="기한"/>:dead}</Dead>
        <Button>{editMode?"완료":"수정"}</Button>
        <Button>삭제</Button>
      </Container>
    )
  }
}
