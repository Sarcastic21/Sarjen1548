import React, { Component } from 'react'

export default class Forgot extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      msg: ""
    }
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value })
  }

  reset = () => {
    let user = JSON.parse(localStorage.getItem("user"))

    if (user && user.email === this.state.email) {
      this.setState({ msg: "Password is: " + user.password })
    } else {
      this.setState({ msg: "Email not found" })
    }
  }

  render() {
    return (
     <div className="container">
  <h2>Forgot Password</h2>
  <input type="text" placeholder="Enter email" onChange={this.handleChange} />
  <button onClick={this.reset}>Get Password</button>
  <p>{this.state.msg}</p>
</div>
    )
  }
}