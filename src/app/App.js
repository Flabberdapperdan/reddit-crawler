/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import SearchBar from '../components/searchBar/SearchBar';
import SearchResultsContainer from '../components/searchResultsContainer/SearchResultsContainer';

function App() {
  return (
    <>
      <header>
        <span className="material-icons logo">explore</span>
        <h1 className="header">Reddit Crawler</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResultsContainer />
      </main>
    </>
  );
}

export default App;
