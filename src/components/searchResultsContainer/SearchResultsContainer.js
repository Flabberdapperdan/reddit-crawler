/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchTermSelector } from '../searchBar/searchBarSlice';
import { updateArticles, articleArraySelector } from './searchResultsSlice';
import { unwrapResult } from "@reduxjs/toolkit";

import Article from'./article/Article';

const SearchResultsContainer = function() {
  const [errorState, setErrorState] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const [searchLimit, setSearchLimit] = useState(10); //use this state later to determine the amount articles that are fetched

  const searchTerm = useSelector(searchTermSelector);
  const children = useSelector(articleArraySelector);
  console.log('these are the children: ', children);
  console.log('this is the searchTerm: ', searchTerm);

  const dispatch = useDispatch();

  useEffect(async () => {
    if(searchTerm) {
      try {
        const resultAction = await dispatch(updateArticles({ searchTerm: searchTerm, searchLimit: searchLimit }));
        unwrapResult(resultAction);
        console.log(children);
      } catch (err) {
        setErrorState(err.message);
        console.log(err.message);
      }
    }
  }, [searchTerm])

  
  /* const handleClick = (url) => {
    if(url) {
      window.open(url);
    }
  } */ //I want to use this to make each article click-able, directing the user the corresponding reddit article

  return (
    <div className="searchResults">
      {(() => {
        if (children) {
          return children.map((child, index) => {
            console.log('this is data of the child: ', child.data);
            const { title, author, ups, subreddit_name_prefixed, url } = child.data;
            return ( 
            <Article 
              className="article"
              key={index}
              title={title}
              author={author}
              upvotes={ups}
              subreddit={subreddit_name_prefixed}
              url={url}
              imagesUrl={(() => {
                if (child.data.preview) {
                  const imageUrl = child.data.preview.images[0].source.url;
                  return imageUrl;
                }
                
              })()
            }
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