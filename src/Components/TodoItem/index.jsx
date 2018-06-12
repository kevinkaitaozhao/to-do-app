import React, { Component } from 'react';

class TodoItem extends Component {
  changeStatus = () => {
    const { 
      todo, 
      handleCheckbox
    } = this.props

    todo.status = this.refs.checkbox.checked
    handleCheckbox(todo.id, todo.status)
  }

  render() {
    const { todo } = this.props

    return (
      <div className="row item-row">
        <div className="col-1">
          <div className="form-check">
            <input onClick={this.changeStatus} className="form-check-input" type="checkbox" ref="checkbox" checked={todo.status} />
          </div>
        </div>
        <div className="col-11">
          <p>{todo.todo}</p>
        </div>
      </div>
    )
  }
}

export default TodoItem