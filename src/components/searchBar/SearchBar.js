/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react' ;


const SearchBar = function() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = () => {
    const searchTerm = searchTerm;
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <input 
        className="searchBar" 
        value={searchTerm} 
        onChange={handleChange}/>
    </>
  )
}

export default SearchBar;