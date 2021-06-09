/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';


const Article = function({ title, author, upvotes, subreddit, thumbnail, handleClick }) {
  console.log(thumbnail);
  
  return (
    <div className="article" onClick={handleClick}>
      <h3 >{title}</h3>
      <img 
        className="preview-image"
        src={thumbnail}
        alt="Could not load thumbnail"
      />
      <p>{thumbnail}</p>
      <div className="information-bar">
        <p>{author}</p>
        <p>upvotes: {upvotes}</p>
        <p>subreddit: {subreddit}</p>
      </div>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Article;