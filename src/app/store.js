/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../components/searchBar/searchBarSlice';

const store = () => {
  const store = configureStore({
    reducer: {
      searchBar: searchBarSlice.reducer,
    },
  });

  return store;
}

export default store;