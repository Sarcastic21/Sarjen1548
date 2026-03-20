import React, { Component } from 'react'

export default class LocalStorageCounter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      msg: ""
    }
  }

  componentDidMount() {
    const savedValue = localStorage.getItem("counter")

    if (savedValue !== null) {
      this.setState({ counter: parseInt(savedValue) })
    }

    console.log("Data loaded from localStorage")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem("counter", this.state.counter)
      console.log("Data saved to localStorage")
    }
  }

  handleIncrease = () => {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1,
        msg: ""
      })
    } else {
      this.setState({
        msg: "Limit reached (max 10)"
      })
    }
  }

  handleDecrease = () => {
    if (this.state.counter <= 0) {
      this.setState({
        msg: "Value cannot be less than 0"
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
        width: "280px",
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#f8f8f8"
      }}>

        <h3>Local Storage Counter</h3>

        <p style={{ fontSize: "20px" }}>
          {this.state.counter}
        </p>

        <button 
          onClick={this.handleIncrease}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Increase
        </button>

        <button 
          onClick={this.handleDecrease}
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