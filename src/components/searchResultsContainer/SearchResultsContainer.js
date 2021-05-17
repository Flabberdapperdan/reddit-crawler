/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchTermSelector } from '../searchBar/searchBarSlice';
import { updateArticles, articleArraySelector } from './searchResultsSlice';
import { unwrapResult } from "@reduxjs/toolkit";

import Article from'./article/Article';

const SearchResultsContainer = function() {
  const [errorState, setErrorState] = useState(undefined); //I'm trying to let the app show error messages

  const searchTerm = useSelector(searchTermSelector);
  const children = useSelector(articleArraySelector);
  console.log(children);
  console.log(searchTerm);

  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const resultAction = await dispatch(updateArticles(searchTerm));
      const childrenArray = unwrapResult(resultAction);
      console.log(childrenArray);
    } catch (err) {
      setErrorState(err.message);
      console.log(err.message);
    }
  }, [searchTerm])

  
  const handleClick = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <div className="searchResults">
      {(() => {
        if (children) {
          return children.map((child, index) => {
            const { title, author, ups, subreddit_name_prefixed, url, preview } = child.data;
            return ( 
            <Article 
              className="article"
              key={index}
              title={title}
              author={author}
              upvotes={ups}
              subreddit={subreddit_name_prefixed}
              url={url}
              images={preview.images}
              onClick={handleClick(url)}
            /> 
          )})
        } else if (errorState) {
          return <p className="errorMessage">Error: {errorState}</p>
        }
      })()}
    </div>
  )
}

export default SearchResultsContainer