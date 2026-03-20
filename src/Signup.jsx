import React, { Component } from 'react'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      gender: "",
      city: "",
      error: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validate = () => {
    let { name, email, mobile, password } = this.state

    if (name === "") return "Name required"
    if (!email.includes("@")) return "Invalid email"
    if (mobile.length !== 10) return "Mobile must be 10 digits"
    if (password.length < 6) return "Password too short"

    return ""
  }

 handleSubmit = (e) => {
  e.preventDefault()

  let err = this.validate()

  if (err !== "") {
    this.setState({ error: err })
  } else {

    let users = JSON.parse(localStorage.getItem("users")) || []

    let exists = users.find(u => u.email === this.state.email)
    if (exists) {
      this.setState({ error: "Email already registered" })
      return
    }

    users.push(this.state)

    localStorage.setItem("users", JSON.stringify(users))

    alert("Signup successful")

    window.location.href = "/login"
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Signup</h2>

        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
        <input type="text" name="mobile" placeholder="Mobile" onChange={this.handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />

        <div>
          Gender:
          <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
        </div>

        <select name="city" onChange={this.handleChange}>
          <option value="">Select City</option>
          <option>Ahmedabad</option>
          <option>Surat</option>
          <option>Delhi</option>
        </select>

        <button type="submit">Signup</button>

        <p style={{color:"red"}}>{this.state.error}</p>
      </form>
    )
  }
}