/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { searchTermSelector } from '../searchBar/searchBarSlice';
import reddit from '../../util/reddit';


const SearchResultsContainer = function() {
const searchTerm = useSelector(searchTermSelector);

useEffect(() => {
  const resultsArray  = reddit.fetchSearchResults(searchTerm);
}, [searchTerm])

  return (
    <>
      
    </>
  )
}

export default SearchResultsContainer