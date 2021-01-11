import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../comment-list'
import './styles.css'
import { deleteArticle } from '../../ac'

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
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test__article--btn">
            {isOpen ? 'close' : 'open'}
          </button>
          <button onClick={this.handleDelete}>
            delete me
          </button>
        </h3>
          {this.body}
      </div>
    )
  }

  handleClick = () => {
    const {article, toggleOpen} = this.props
    toggleOpen(article.id)
  }

  handleDelete = () => {
    const {article, deleteArticle} = this.props
    deleteArticle(article.id)
  } 

  get body() {
    const {article, isOpen} = this.props

    if (!isOpen) return null
      if (this.state.hasError) return <div>Some Error in this article</div>

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )

  }
}

const mapDispatchToProps = {deleteArticle}

export default connect(null, mapDispatchToProps)(Article)