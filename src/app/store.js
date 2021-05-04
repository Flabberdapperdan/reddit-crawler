/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../components/searchBar/searchBarSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});

export default store;