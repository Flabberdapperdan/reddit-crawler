
export const processSearchTerm = (searchTerm) => {
  const wordsArray = searchTerm.split(' ');

  const searchString = wordsArray.join('%20');
  const fullString = `http://www.reddit.com/search.json?q=${searchString}`;

  return fullString;
}
  
  
export const fetchArticles = async (searchTerm, searchLimit) => {
  console.log('fetching from reddit')
  const fetchString = await this.processSearchTerm(searchTerm);
  const response = await fetch(fetchString, {
    method: 'GET',
    mode: 'cors',
    headers: {
      limit: searchLimit
    }
  });
  
  const jsonResponse = await response.json();
  
  if (jsonResponse.data.children.length > 0) {
    console.log('this is the response: ', jsonResponse);
    const finalResponse = jsonResponse.data
    return finalResponse;          
  } else {
    return response;
  }

}