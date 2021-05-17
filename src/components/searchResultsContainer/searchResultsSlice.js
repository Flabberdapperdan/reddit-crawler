/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reddit from '../../util/reddit';


export const updateArticles = createAsyncThunk(
  'searchResults/updateArticles',
  async (searchTerm, { getState, requestId }) => {
    const { loading } = getState().searchResults.articles;
    console.log(loading);
    if (loading !== 'pending' || requestId !== currentRequestId) {
      console.log('exit the async thunk'); ///WHY IS DOES THE USEEFFECT END UP HERE? CHECK REDUX TOOLKIT DOCUMENTATION
      return
    }
    console.log('request data from reddit.js');
    const response = await reddit.fetchArticles(searchTerm);
    return response;
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
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [updateArticles.fulfilled]: (state, action) => {
      console.log('async thunk fulfilled');
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.children = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [updateArticles.rejected]: (state, action) => {
      console.log('async thunk rejected');
      const { requestId } = action.meta;
      if (state.loading === 'pending' && tate.currentRequestId === requestId) {
        state.loading === 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    }
  } 
})

export const articleArraySelector = state => state.searchResults.articles.children;
export const articleErrorSelector = state => state.searchResults.articles.error;

export default searchResultsSlice;