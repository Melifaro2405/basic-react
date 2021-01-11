import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    increment: PropTypes.func
  }

  render() {
    const {number, handleIncrement} = this.props

    return (
      <div>
        <h3>{number}</h3>
        <button onClick={handleIncrement}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  number: store.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)