import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { commentSelector } from '../selectors'

const Comment = ({comment}) => {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  comment: commentSelector(state, ownProps)
})

export default connect(mapStateToProps)(Comment)