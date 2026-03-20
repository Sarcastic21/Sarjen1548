import React, { Component } from 'react'

export default class CounterDemo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      msg: ""
    }
  }

  handleIncrease() {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1,
        msg: ""
      })
    } else {
      this.setState({
        msg: "Cannot increase more than 10"
      })
    }
  }

  handleDecrease() {
    if (this.state.counter <= 0) {
      this.setState({
        msg: "Cannot go below 0"
      })
    } else {
      this.setState({
        counter: this.state.counter - 1,
        msg: ""
      })
    }
  }

  render() {
    return (
      <div style={{
        width: "250px",
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#f4f4f4"
      }}>

        <h3>Counter Demo</h3>

        <p style={{ fontSize: "20px" }}>
          {this.state.counter}
        </p>

        <button 
          onClick={this.handleIncrease.bind(this)}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Increase
        </button>

        <button 
          onClick={this.handleDecrease.bind(this)}
          style={{ padding: "5px 10px" }}
        >
          Decrease
        </button>

        <p style={{ color: "red", marginTop: "10px" }}>
          {this.state.msg}
        </p>

      </div>
    )
  }
}