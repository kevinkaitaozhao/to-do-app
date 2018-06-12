import React, { Component } from 'react';
import './NewTodo.css'

export default class NewTodo extends Component {
	handleDropdownValue = () => {
		const value = this.refs.dropdownValue.value
		this.props.handleDropdown(Number(value))
	}

	render() {
		const {
			inputTerm,
			handleInput,
			handleSubmit,
			handleClearButton
		} = this.props
		return (
			<div>
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-12">
							<input value={inputTerm} onChange={handleInput} type="text" placeholder="Enter New Task..." className="form-control" />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button className="btn btn-primary btn-block" type="submit">Submit</button>
						</div>
					</div>
				</form>
				<button className="btn btn-primary btn-block" onClick={handleClearButton}>Clear</button>
				<div className="form-group dropdown">
					<select onChange={this.handleDropdownValue} ref="dropdownValue" className="form-control">
						<option value="1">All</option>
						<option value="2">Active</option>
						<option value="3">Completed</option>
					</select>
				</div>
			</div>
		)
	}
}