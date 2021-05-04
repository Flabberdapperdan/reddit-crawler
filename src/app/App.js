/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import SearchBar from '../components/searchBar/SearchBar';

function App() {
  return (
    <>
      <header>
        <span className="material-icons logo">explore</span>
        <h1>Reddit Crawler</h1>
      </header>
      <main>
        <SearchBar />
      </main>
    </>
  );
}

export default App;
