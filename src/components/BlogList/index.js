import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul className="blog-list-container" data-testid="loader">
        {isLoading ? (
          <Loader type="TailSpin" color="#00Bfff" height={50} width={50} />
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} blogDetails={eachItem} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
