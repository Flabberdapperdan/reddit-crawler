/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { initialState } from './searchBarSlice';
import {describe, expect, test} from '@jest/globals';
import reducer from './searchBarSlice';

describe('search bar reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles input', () => {
    const searchTerm = 'Animals in the zoo.'
    const input = {
      type: 'updateSearchTerm',
      payload: {
        searchTerm: searchTerm
      }
    }

    const expectedOutput = {
      searchTerm: searchTerm
    }

    expect(reducer(input)).toEqual(expectedOutput);
  })
});