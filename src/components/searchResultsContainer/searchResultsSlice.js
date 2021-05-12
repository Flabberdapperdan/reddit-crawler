/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchSearchResults = createAsyncThunk(
  'searchResults/fetchArticles',
  async (searchTerm, { getState, requestId }) => {
    const { loading } 
  }
)

const initialState = {
  searchResults: {
    children: [],
    loading: 'idle'
    error: null
  }
}

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: initialState,
  reducers: {},
  extraReducers: {

  } 
})

export default searchResultsSlice;