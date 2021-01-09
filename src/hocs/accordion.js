import React, { Component } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (OriginalComponent) =>
  class DecoratedComponent extends Component {

  state = {
    openItemId: null
  }

  toggleOpenItem = (openItemId) => this.setState({
    openItemId: openItemId === this.state.openItemId ? null : openItemId
  })

  render() {
    return <OriginalComponent
      {...this.props}
      {...this.state}
      toggleOpenItem={this.toggleOpenItem}
      />
  }
}