import React, { Component } from 'react'

class UserForm extends Component {

  state = {
    username: ''
  }

  handleUserChange = (evt) => {
    if (evt.target.value.length > 10) return
    this.setState({
      username: evt.target.value
    })
  }

  render() {
    return (
      <div>
        Username:
        <input value={this.state.username} onChange={this.handleUserChange}/>
      </div>
    )
  }
}

export default UserForm