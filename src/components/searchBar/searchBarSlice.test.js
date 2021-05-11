/* eslint-disable no-undef */
import searchBarSlice from './searchBarSlice';

const { actions } = searchBarSlice;

describe('actions', () => {
  it('should create an action to update the search term', () => {
    const inputObject = { searchTerm: 'Animals in the zoo', }
    const expectedAction = {
      type: 'searchBar/updateSearchTerm',
      payload: inputObject
    }
    expect(actions.updateSearchTerm(inputObject)).toEqual(expectedAction)
  })
})