

const reddit = {
  processSearchTerm(searchTerm) {
    const wordsArray = searchTerm.split(' ');

    const searchString = wordsArray.join('%20');
    const fullString = `www.reddit.com/search.json?q=${searchString}`;

    return fullString;
  },
  fetchSearchResults(searchTerm) {
    const fetchString = this.processSearchTerm(searchTerm);
    fetch(fetchString)
      .then(response => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.data.children) {
          const responseArray = jsonResponse.data.children
          return responseArray;
        }
      })
  }
}

export default reddit;