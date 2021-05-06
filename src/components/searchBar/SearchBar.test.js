/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { updateSearchTerm } from './searchBarSlice'
import SearchBar from './SearchBar';
import store from '../../app/store';
import searchBarSlice from './searchBarSlice';

afterEach(cleanup);

const renderComponent = () => render(
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

const reducer = searchBarSlice.reducer;

describe('test the input field in SearchBar', () => {
  it('changes the local state when input is given', () => {
    const { getByText, getByPlaceholderText } = renderComponent();
    const inputElement = getByPlaceholderText('Search Reddit');
    const input = 'Zoo Animals';

    expect(inputElement).toHaveValue('');

    userEvent.type(inputElement, input);

    expect(inputElement).toHaveValue(input);
  })

  it('updates the store when submit button is pressed', () => {
    
  })
})

describe('test the reducer and actions', () => {
  it('start with the right initial state', () => {
    expect(reducer(undefined, {})).toEqual({ searchTerm: '' });
  })
})



