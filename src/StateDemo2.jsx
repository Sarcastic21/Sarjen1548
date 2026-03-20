import React, { Component } from 'react'

export default class UserInfoDemo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userInfo: { 
        name: "Ayush", 
        position: "Software Developer", 
        company: "Sarjen"
      }
    }
  }

  handleUpdate = () => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        name: "Ayush Maurya"
      }
    })
  }

  render() {
    return (
      <div style={{
        width: "300px",
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}>

        <h3>User Info</h3>

        <p><strong>Name:</strong> {this.state.userInfo.name}</p>
        <p><strong>Position:</strong> {this.state.userInfo.position}</p>
        <p><strong>Company:</strong> {this.state.userInfo.company}</p>

        <button 
          onClick={this.handleUpdate}
          style={{ marginTop: "10px", padding: "5px 10px" }}
        >
          Update Name
        </button>

      </div>
    )
  }
}