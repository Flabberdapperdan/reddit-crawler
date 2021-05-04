import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchBar = action.payload.searchBar
    }
  }
})

export default searchBarSlice;