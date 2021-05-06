import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: ''
}

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm
    }
  }
})

export const { updateSearchTerm } = searchBarSlice.actions;
export const searchTermSelecter = (state) => state.searchBar.searchTerm;

export default searchBarSlice;