import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {

  constructor(props) {
    super(props)
    console.log("1. constructor")

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("3. componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleUpdate = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log("2. render")

    return (
      <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        width: "300px",
        margin: "20px auto",
        textAlign: "center",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}>
        
        <h2>Lifecycle Demo</h2>

        <p style={{ fontSize: "18px" }}>
          Count: <strong>{this.state.count}</strong>
        </p>

        <button 
          onClick={this.handleUpdate}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff"
          }}
        >
          Increase
        </button>

      </div>
    )
  }
}