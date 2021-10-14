
export const processSearchTerm = (searchTerm) => {
  const wordsArray = searchTerm.split(' ');

  const searchString = wordsArray.join('%20');
  const fullString = `https://www.reddit.com/search.json?q=${searchString}`;

  return fullString;
}
  
  
export const fetchArticles = async (searchTerm) => {
  const fetchString = await processSearchTerm(searchTerm);
  const response = await fetch(fetchString);

  const jsonResponse = await response.json();
  
  if (jsonResponse.data.children.length > 0) {
    console.log('this is the response: ', jsonResponse);
    const finalResponse = jsonResponse.data
    return finalResponse;          
  } else {
    return response;
  }

}