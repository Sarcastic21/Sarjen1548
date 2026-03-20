import React, { Component } from 'react'

export default class EventExample extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleClick = () => {
    alert("Button clicked!")
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div style={{
        width: "300px",
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        textAlign: "center"
      }}>
        
        <h3>Event Demo</h3>

        <input 
          type="text" 
          placeholder="Enter text..."
          value={this.state.text}
          onChange={this.handleChange}
          style={{ padding: "5px", marginBottom: "10px", width: "90%" }}
        />

        <br />

        <button 
          onClick={this.handleClick}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          Click Me
        </button>

        <p style={{ marginTop: "10px" }}>
          You typed: <strong>{this.state.text}</strong>
        </p>

      </div>
    )
  }
}