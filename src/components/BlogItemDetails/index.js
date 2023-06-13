import Loader from 'react-loader-spinner'

import {Component} from 'react'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogDetails

    return (
      <div className="blog-container">
        <h1 className="title">{title}</h1>
        <div className="img-author">
          <img src={avatarUrl} alt={author} className="author-img" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image-url" />
        <p className="description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00Bfff" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
