/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider, useSelector } from 'react-redux';
import { fireEvent, screen, render, queryByText } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { searchTermSelector, updateSearchTerm } from './searchBarSlice'
import SearchBar from './SearchBar';
import store from '../../app/store';
import searchBarSlice from './searchBarSlice';

const renderComponent = () => render(
  <Provider store={store()}>
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

  it('when submit button is pressed, updates the store and clears the searchbar', () => {
    const { queryByText, getByRole, getByPlaceholderText } = renderComponent();
    const inputElement = getByPlaceholderText('Search Reddit');
    const input = 'Zoo Animals';

    userEvent.type(inputElement, input);
    userEvent.click(getByRole('button'));

    expect(input).toBeInTheDocument;
    expect(inputElement).toHaveValue('');
  })
})

describe('test the reducer and actions', () => {
  it('start with the right initial state', () => {
    expect(reducer(undefined, {})).toEqual({ searchTerm: '' });
  })
})



