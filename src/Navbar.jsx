import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/lifecycle">LifeCycle</Link>
        <Link to="/state1">State1</Link>
        <Link to="/state2">State2</Link>
        <Link to="/statelocal">StateLocal</Link>
        <Link to="/Event">Event</Link>

        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/forgot">Forgot</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todo">To do</Link>

      </div>
    )
  }
}