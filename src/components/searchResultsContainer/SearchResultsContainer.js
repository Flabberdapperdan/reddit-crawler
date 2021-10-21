/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchTermSelector } from '../searchBar/searchBarSlice';
// eslint-disable-next-line no-unused-vars
import { updateArticles, articleArraySelector, updateArticlesStatus } from './searchResultsSlice';
import { unwrapResult } from "@reduxjs/toolkit";

import Tile from'./tile/Tile';
import './searchResultsContainer.css'

const SearchResultsContainer = function() {
  const [errorState, setErrorState] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const [searchLimit, setSearchLimit] = useState(10); //use this state later to determine the amount articles that are fetched

  var searchTerm = useSelector(searchTermSelector);
  var children = useSelector(articleArraySelector);
  var fetchArticlesStatus = useSelector(updateArticlesStatus);

  const dispatch = useDispatch();

  useEffect(async () => {
    if (searchTerm) {
      try {
        const resultAction = await dispatch(updateArticles({ searchTerm: searchTerm, searchLimit: searchLimit }));
        unwrapResult(resultAction);
      } catch (err) {
        setErrorState(err.message);
      }
    }
  }, [searchTerm]);

  let content;

  if (fetchArticlesStatus === 'pending') {
    content = (
      <span className="material-icons loadingLogo rotating">explore</span>
    )
  } else if (fetchArticlesStatus === 'idle') {
    if (children.length > 0) {
      content = (
        <div className="search-results">
          {children.map((child, index) => {
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
            );
          })}
        </div>
      )
    } else if (errorState) {
      content = <p className="errorMessage">Error: {errorState}</p>;
    } else if (children.length === 0) {
      content = <></>
    }
  }

  return (
    <>
      {content}
    </>
  )

}

export default SearchResultsContainer;