import {normalizedComments } from '../fixtures'

const defaultComments = normalizedComments
  .reduce((acc, comment) => ({...acc, [comment.id]: comment}), {})

export default (commentsState = defaultComments, action) => {
  const {type, payload} = action

  switch (type) {

    default:
      return commentsState
  }
}