/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import SearchBar from '../components/searchBar/SearchBar';

function App() {
  return (
    <>
      <header>
        <h1>Reddit Crawler</h1>
        <i className="compass"></i>
      </header>
      <main>
        <SearchBar />
      </main>
    </>
  );
}

export default App;
