import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

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
  comment: state.comments.find((comment) => comment.id === ownProps.id)
})

export default connect(mapStateToProps)(Comment)