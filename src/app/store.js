/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../components/searchBar/searchBarSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarSlice.reducer,
  },
});

export default store;