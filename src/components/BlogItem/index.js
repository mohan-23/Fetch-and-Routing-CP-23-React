import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, imageUrl, avatarUrl, title, topic} = blogDetails

  return (
    <Link className="link" to={`/blogs/${id}`}>
      <li className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="image" />
        <div className="details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="image-author">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
