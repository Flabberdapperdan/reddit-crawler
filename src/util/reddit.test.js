/* eslint-disable no-undef */
import reddit from './reddit';

describe('test reddit api ojbect', () => {

  describe('processSearchTerm', () => {
    it('returns the right string with one word', () => {
      const input = 'cookie';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'www.reddit.com/search.json?q=cookie';
      
      expect(realOutput).toBe(expectedOutput);
    })
    it('returns the right string with two words', () => {
      const input = 'cookie cutter';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'www.reddit.com/search.json?q=cookie%20cutter';
      
      expect(realOutput).toBe(expectedOutput);
    })
    it('returns the right string with six words', () => {
      const input = 'cookie cutter crumble castle dragon slayer';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'www.reddit.com/search.json?q=cookie%20cutter%20crumble%20castle%20dragon%20slayer';
      
      expect(realOutput).toBe(expectedOutput);
    })
  })

  describe('fetchSearchResults', () => {
    const jsonObject = {
      title: 'apples',
      image:'apples.src',
      comments: 'hello world',
      kudos: 80
    }
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () => Promise.resolve(jsonObject)
      })
    });

    beforeEach(() => {
      fetch.mockClear();
    });

    it('returns a json object when called with a searchTerm', async () => {
       const result = await reddit.fetchSearchResults(apple);

       expect(result).toBe(jsonObject);
       expect(fetch).toHaveBeenCalledTimes(1);
    })
    it('returns an empty array when called with no searchTerm', () => {

    })

  })
})