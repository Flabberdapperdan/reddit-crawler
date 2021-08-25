/* eslint-disable no-undef */
import reddit from './reddit';
    
describe('test reddit api ojbect', () => {

  describe('processSearchTerm', () => {
    it('returns the right string with one word', () => {
      const input = 'cookie';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'http://www.reddit.com/search.json?q=cookie';
      
      expect(realOutput).toBe(expectedOutput);
    })
    it('returns the right string with two words', () => {
      const input = 'cookie cutter';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'http://www.reddit.com/search.json?q=cookie%20cutter';
      
      expect(realOutput).toBe(expectedOutput);
    })
    it('returns the right string with six words', () => {
      const input = 'cookie cutter crumble castle dragon slayer';
      const realOutput = reddit.processSearchTerm(input);
      const expectedOutput = 'http://www.reddit.com/search.json?q=cookie%20cutter%20crumble%20castle%20dragon%20slayer';
      
      expect(realOutput).toBe(expectedOutput);
    })
  })

  describe('fetchSearchResults', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('returns an array when called with a search term', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: {children: [1, 2, 3, 4]} }));

      const result = await reddit.fetchArticles('cookie cutter');

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({children: [1, 2, 3, 4]});
      expect(fetch.mock.calls[0][0]).toEqual('http://www.reddit.com/search.json?q=cookie%20cutter');
    })

  })
})