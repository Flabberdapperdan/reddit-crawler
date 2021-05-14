/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';


const Article = function({ title, author, upvotes, subreddit, images }) {
  return (
    <>
      <h3 >{title}</h3>
      <img 
        className="preview-image"
        href={images.source.url}
        alt="Could not load image"
      />
      <div className="information-bar">
        <p>{author}</p>
        <p>upvotes: {upvotes}</p>
        <p>subreddit: {subreddit}</p>
      </div>
    </>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Article;