/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchTermSelector } from '../searchBar/searchBarSlice';
import { updateArticles, articleArraySelector } from './searchResultsSlice';
import { unwrapResult } from "@reduxjs/toolkit";

import Tile from'./tile/Tile';
import './searchResultsContainer.css'

const SearchResultsContainer = function() {
  const [errorState, setErrorState] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const [searchLimit, setSearchLimit] = useState(10); //use this state later to determine the amount articles that are fetched

  const searchTerm = useSelector(searchTermSelector);
  const children = useSelector(articleArraySelector);

  const dispatch = useDispatch();

  useEffect(async () => {
    if(searchTerm) {
      try {
        const resultAction = await dispatch(updateArticles({ searchTerm: searchTerm, searchLimit: searchLimit }));
        unwrapResult(resultAction);
      } catch (err) {
        setErrorState(err.message);
      }
    }
  }, [searchTerm])

  
  if (searchTerm) {
    return (
      <div className="search-results">
        {(() => {
          if (children) {
            return children.map((child, index) => {
              const { title, author, ups, subreddit_name_prefixed, url, thumbnail } = child.data;
              return ( 
              <Tile 
                className=""
                key={index}
                title={title}
                author={author}
                upvotes={ups}
                subreddit={subreddit_name_prefixed}
                articleURL={url}
                thumbnail={thumbnail}
              /> 
            )})
          } else if (errorState) {
            return <p className="errorMessage">Error: {errorState}</p>
          }
        })()}
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }

}

export default SearchResultsContainer