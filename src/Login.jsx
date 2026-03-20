import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      msg: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
login = (e) => {
  e.preventDefault()

  let users = JSON.parse(localStorage.getItem("users")) || []

  let found = users.find(
    (u) => u.email === this.state.email && u.password === this.state.password
  )

  if (found) {
    localStorage.setItem("isLoggedIn", true)
    localStorage.setItem("currentUser", JSON.stringify(found))

    this.setState({ msg: "Login success" })

    window.location.href = "/profile"
  } else {
    this.setState({ msg: "Invalid credentials" })
  }
}

  render() {
    return (
      <form onSubmit={this.login}>
        <h2>Login</h2>

        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />

        <button>Login</button>

        <p>{this.state.msg}</p>
      </form>
    )
  }
}