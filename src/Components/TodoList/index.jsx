import React, { Component } from 'react';
import TodoItem from '../TodoItem/'
import './Todo.css'

class TodoList extends Component {
  render() {
    const { todos, handleCheckbox } = this.props

    let todosJSX = todos.map((todo, i) => {
      return (
        <TodoItem key={i} todo={todo} handleCheckbox={handleCheckbox}/>
      )
    })
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">To Do</h1>
          </div>
        </div>
        {todosJSX}
      </div>
    )
  }
}

export default TodoList