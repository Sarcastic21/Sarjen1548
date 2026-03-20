import React, { Component } from 'react'

export default class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      task: "",
      list: [],
      editIndex: -1
    }
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value })
  }

  addTask = () => {
    if (this.state.task.trim() === "") return

    let arr = [...this.state.list]

    if (this.state.editIndex === -1) {
      arr.push(this.state.task)
    } else {
      arr[this.state.editIndex] = this.state.task
    }

    this.setState({
      list: arr,
      task: "",
      editIndex: -1
    })
  }

  deleteTask = (index) => {
    let arr = [...this.state.list]
    arr.splice(index, 1)

    this.setState({ list: arr })
  }

  editTask = (index) => {
    this.setState({
      task: this.state.list[index],
      editIndex: index
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Todo App</h2>

        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button onClick={this.addTask}>
          {this.state.editIndex === -1 ? "Add" : "Update"}
        </button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              <span>{item}</span>

              <div className="btn-group">
                <button onClick={() => this.editTask(index)}>Edit</button>
                <button onClick={() => this.deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}