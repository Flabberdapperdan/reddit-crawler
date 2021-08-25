/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';


const Article = function({ title, author, upvotes, subreddit, thumbnail, articleURL }) {
  console.log(thumbnail);

  const handleClick = () => {
    console.log('I am handling the click')
    if(articleURL) {
      window.open(articleURL);
    }
  }

  return (
    <div className="article-container">
      <div className="article" onClick={handleClick}>
        <h3 >{title}</h3>
        <div className="image-information-holder">
          <img 
            className="preview-image"
            src={thumbnail}
            alt="Could not load thumbnail"
          />
          <div className="information-bar">
            <p>username: {author}</p>
            <p>subreddit: {subreddit}</p>
            <p>upvotes: {upvotes}</p>
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


<p></p>