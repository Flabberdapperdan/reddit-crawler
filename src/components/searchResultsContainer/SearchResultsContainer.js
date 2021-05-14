/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchTermSelector } from '../searchBar/searchBarSlice';
import { fetchArticles, articleSelector } from './searchResultsSlice';
import Article from'./article/Article';

const SearchResultsContainer = function() {
  const searchTerm = useSelector(searchTermSelector);
  const { children } = useSelector(articleSelector);
  console.log(children);
  console.log(searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(searchTerm))
      .then(() => {

      })
  }, [searchTerm])

  const handleClick = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <>
      {() => {
        if(children) {
          children.map(child => {
            const { title, author, ups, subreddit_name_prefixed, url, preview } = child.data;
            <Article 
              className="article"
              title={title}
              author={author}
              upvotes={ups}
              subreddit={subreddit_name_prefixed}
              url={url}
              images={preview.images}
              onClick={handleClick(url)}
            />
          })
        }
      }}
    </>
  )
}

export default SearchResultsContainer