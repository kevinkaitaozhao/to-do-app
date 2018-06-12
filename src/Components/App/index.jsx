import React, { Component } from 'react'
import NewTodo from '../NewTodo/'
import TodoList from '../TodoList/'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    const todos = [
      { todo: 'first todo', status: false, id: 1 },
      { todo: 'second todo', status: true, id: 2 },
      { todo: 'third todo', status: false, id: 3 }
    ]

    this.state = {
      inputTerm: '',
      todos: todos,
      todosCopy: todos
    }
  }

  handleInput = (event) => {
    this.setState({
      inputTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { todos, inputTerm } = this.state
    todos.push({
      todo: inputTerm,
      status: false,
      id: Math.floor(Math.random() * 1000000000)
    })

    this.setState({
      inputTerm: '',
      todos
    })
  }

  handleCheckbox = (id, status) => {
    const { todos } = this.state
    const todosCopy = todos.slice()
    
    let filteredTodo = todosCopy.filter(todo => {
      return id === todo.id 
    })[0]

    filteredTodo.status = status

    this.setState({
      todos: todosCopy
    })

  }

  handleClearButton = () => {
    const { todos } = this.state
    const todosCopy = todos.slice()

    let clearedTodos = todosCopy.filter(todo => {
      return !todo.status
    })

    this.setState({
      todos: clearedTodos,
      todosCopy: clearedTodos
    })
  }

  handleDropdown = (value) => {
    const { todosCopy } = this.state
    let filteredTodos = null
    if(value === 1){
      filteredTodos = todosCopy
    } else if(value === 2) {
      filteredTodos = todosCopy.filter(todo => {
        return !todo.status
      }) 
    } else {
      filteredTodos = todosCopy.filter(todo => {
        return todo.status
      })
    }

    this.setState({
      todos: filteredTodos
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 todoContainer">
            <NewTodo inputTerm={this.state.inputTerm} handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleClearButton={this.handleClearButton} handleDropdown={this.handleDropdown}/>
            <TodoList todos={todos} handleCheckbox={this.handleCheckbox} />
          </div>
        </div>
      </div>
    )
  }
}








