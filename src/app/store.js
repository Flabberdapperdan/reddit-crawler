import { configureStore } from '@reduxjs/toolkit';

import searchBarSlice from '../components/searchBar/searchBarSlice';
import searchResultsSlice from '../components/searchResultsContainer/searchResultsSlice';

const store = () => {
  const store = configureStore({
    reducer: {
      searchBar: searchBarSlice.reducer,
      searchResults: searchResultsSlice.reducer,
    },
  });
  return store;
}

export default store;