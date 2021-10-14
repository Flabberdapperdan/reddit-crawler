
export const processSearchTerm = (searchTerm) => {
  const wordsArray = searchTerm.split(' ');

  const searchString = wordsArray.join('%20');
  const fullString = `https://www.reddit.com/search.json?q=${searchString}`;

  return fullString;
}
  
  
export const fetchArticles = async (searchTerm) => {
  console.log('fetching from reddit')
  const fetchString = await processSearchTerm(searchTerm);
  const response = await fetch(fetchString);

  console.log(`the response status is: ${response.status}`)
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  
  if (jsonResponse.data.children.length > 0) {
    console.log('this is the response: ', jsonResponse);
    const finalResponse = jsonResponse.data
    return finalResponse;          
  } else {
    return response;
  }

}