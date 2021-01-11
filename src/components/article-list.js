import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './article'
import accordion from '../hocs/accordion'
import { filtratedArticles } from '../selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const {articles, toggleOpenItem, openItemId} = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const {fetchData} = this.props

    fetchData && fetchData()
  }
}

const mapStateToProps = (state) => {
  return {
    articles: filtratedArticles(state)
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))