/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from './searchBarSlice';

const SearchBar = function() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSearchTerm({
      searchTerm: searchTerm
    }));

    setSearchTerm('');
  }

  return (
    <>
      <form className="searchBar" onSubmit={handleSubmit}>

        <input 
          id="searchTerm" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder=" Search Reddit" 
        />
        <button type="submit">
          <span className="material-icons searchLogo">search</span>
        </button>

      </form>
    </>
  )
}

export default SearchBar;