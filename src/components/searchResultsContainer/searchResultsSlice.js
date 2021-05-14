/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reddit from '../../util/reddit';


export const fetchArticles = createAsyncThunk(
  'searchResults/fetchArticles',
  async (searchTerm, { getState, requestId }) => {
    const { loading } = getState().searchResults.articles;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await reddit.fetchArticles;
    return response.data.children;
  }
)

const initialState = {
  articles: {
    children: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null
  }
}

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchArticles.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.children.push(action.payload);
        state.currentRequestId = undefined;
      }
    },
    [fetchArticles.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && tate.currentRequestId === requestId) {
        state.loading === 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    }
  } 
})

export const articleSelector = state => state.searchResults.articles;

export default searchResultsSlice;