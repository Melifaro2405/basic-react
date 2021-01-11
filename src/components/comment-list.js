import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../hocs/toggle-open'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const {isOpen, toggleOpen} = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.body}
      </div>
    )
  }

  get body() {
    const {comments = [], isOpen} = this.props
    if (!isOpen) return null

    return (
      <div>
        {comments.length ? (this.comments) : (<h3>No comments yet</h3>)}
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id}>
            <Comment id={id}/>
          </li>
        ))}
      </ul>
    )
  }
}

export default toggleOpen(CommentList)
