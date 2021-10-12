/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import './Tile.css';

const Article = function({ title, author, upvotes, subreddit, thumbnail, articleURL }) {
  console.log(thumbnail);

  const handleClick = () => {
    console.log('I am handling the click')
    if(articleURL) {
      window.open(articleURL);
    }
  }

  const thumbnailChecker = (source) => {
    if (source) {
      return source
    } else {
      return '../../../../../public/outline_explore_black_24dp.png'
    }
  }

  return (
    <div className="tile-container">
      <div className="tile" onClick={handleClick}>
        <h3 className="tile-title">{title}</h3>
        <div className="image-information-holder">
          <img 
            className="preview-image"
            src={thumbnailChecker(thumbnail)}
            alt="Could not load thumbnail"
          />
          <div className="information-bar">
            <p className="username">username: {author}</p>
            <p className="subreddit">subreddit: {subreddit}</p>
            <p className="upvotes">upvotes: {upvotes}</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Article;