import React, {Component} from 'react'
import Select from 'react-select'

import ArticleList from './components/article-list'
import articles from './fixtures'

class App extends Component {

  state = {
    openItem: null
  }

  render() {
    return (
      <div>
        <Select options={this.options} value={this.state.openItem} onChange={this.handleSelect} />
        <ArticleList articles={articles} />
      </div>
    )
  }

  handleSelect = (openItem) => this.setState({openItem})

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default App