/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../../util/reddit';

export const updateArticles = createAsyncThunk(
  'searchResults/updateArticles',
  async ({ searchTerm, searchLimit }, { getState, requestId }) => {
    const response = await fetchArticles(searchTerm, searchLimit);
    return response.children;
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
    [updateArticles.pending]: (state, action) => {
      if (state.articles.loading === 'idle') {
        state.articles.loading = 'pending';
        state.articles.currentRequestId = action.meta.requestId;
      }
    },
    [updateArticles.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.articles.loading === 'pending' && state.articles.currentRequestId === requestId) {
        state.articles.loading = 'idle';
        state.articles.children = action.payload;
        state.articles.currentRequestId = undefined;
      }
    },
    [updateArticles.rejected]: (state, action) => {
      console.log('async thunk rejected');
      const { requestId } = action.meta;
      if (state.articles.loading === 'pending' && tate.currentRequestId === requestId) {
        state.articles.loading === 'idle';
        state.articles.error = action.error;
        state.articles.currentRequestId = undefined;
      }
    }
  } 
})

export const articleArraySelector = state => state.searchResults.articles.children;
export const articleErrorSelector = state => state.searchResults.articles.error;

export default searchResultsSlice;