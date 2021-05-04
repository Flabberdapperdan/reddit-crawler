import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  searchTerm: ''
}

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchBar = action.payload.searchBar
    }
  }
})

export const { updateSearchTerm } = searchBarSlice.actions;

const reducer = searchBarSlice.reducer
export default reducer;