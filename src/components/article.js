import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list'

class Article extends PureComponent {

  static propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    const {article, isOpen} = this.props

    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick={this.handleClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {this.body}
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const {article, isOpen} = this.props

    if (!isOpen) return null
      if (this.state.hasError) return <div>Some Error in this article</div>

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )

  }
}

export default Article