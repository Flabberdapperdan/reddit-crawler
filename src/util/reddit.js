

const reddit = {
  processSearchTerm(searchTerm) {
    const wordsArray = searchTerm.split(' ');

    const searchString = wordsArray.join('%20');
    const fullString = `http://www.reddit.com/search.json?q=${searchString}`;

    return fullString;
  },
  // eslint-disable-next-line no-unused-vars
  async fetchArticles(searchTerm, searchLimit) {
    console.log('fetching from reddit')
    const fetchString = await this.processSearchTerm(searchTerm);
    const response = await fetch(fetchString /*, {
      method: 'GET',
      mode: 'cors',
      headers: {
        limit: searchLimit
      }
    } */)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.data.children.length > 0) {
          console.log('this is the response: ', jsonResponse);
          const finalResponse = jsonResponse.data
          return finalResponse;          
        }
      })
    return response;
  }
}

export default reddit;