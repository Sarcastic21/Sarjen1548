import React, { Component } from 'react'

export default class Profile extends Component {

  constructor(props) {
  super(props)

  let isLoggedIn = localStorage.getItem("isLoggedIn")

  if (!isLoggedIn) {
    window.location.href = "/login"
  }

let data = JSON.parse(localStorage.getItem("currentUser")) || {}
  this.state = {
    ...data
  }
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  update = () => {
    localStorage.setItem("user", JSON.stringify(this.state))
    alert("Profile updated")
  }

  render() {
    return (
      
      <div className="container">
  <h2>Edit Profile</h2>

  <input name="name" value={this.state.name || ""} onChange={this.handleChange} />
  <input name="email" value={this.state.email || ""} onChange={this.handleChange} />
  <input name="mobile" value={this.state.mobile || ""} onChange={this.handleChange} />
<button onClick={() => {
  localStorage.removeItem("isLoggedIn")
  window.location.href = "/login"
}}>
  Logout
</button>
  <button onClick={this.update}>Update</button>
</div>
    )
  }
}