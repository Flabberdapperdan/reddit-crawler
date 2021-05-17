

const reddit = {
  processSearchTerm(searchTerm) {
    const wordsArray = searchTerm.split(' ');

    const searchString = wordsArray.join('%20');
    const fullString = `www.reddit.com/search.json?q=${searchString}`;

    return fullString;
  },
  fetchArticles(searchTerm) {
    console.log('fetching from reddit')
    const fetchString = this.processSearchTerm(searchTerm);
    const response = fetch(fetchString)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.data.children.length > 0) {
          return jsonResponse.data.children;
        }
      })
    return response;
  }
}

export default reddit;