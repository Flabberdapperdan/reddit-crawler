/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../../util/reddit';


export const updateArticles = createAsyncThunk(
  'searchResults/updateArticles',
  async ({ searchTerm, searchLimit }, { getState, requestId }) => {
    console.log('request data from reddit.js');
    const response = await fetchArticles(searchTerm, searchLimit);
    console.log('this is the response: ', response);
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
      console.log('async thunk pending');
      console.log(action.payload);
      console.log('this is the pending state: ', state.articles)
      if (state.articles.loading === 'idle') {
        console.log('ready to change the pending state.articles')
        state.articles.loading = 'pending';
        state.articles.currentRequestId = action.meta.requestId;
      }
    },
    [updateArticles.fulfilled]: (state, action) => {
      console.log('async thunk fulfilled', action);
      console.log('this is the fulfilled state: ', state.articles)
      const { requestId } = action.meta;
      console.log('this is the requestId: ', requestId);
      if (state.articles.loading === 'pending' && state.articles.currentRequestId === requestId) {
        console.log('ready to adjust payload');
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