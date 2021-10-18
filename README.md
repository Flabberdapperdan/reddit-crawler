# Reddit-Crawler
## Summary
A basic SPA that allows users to search reddit. The user can enter a term in the searchbar and the site will give the first 25 search results. 
These results are presented in the form of tiles, which give the title, a thumnbail and some additional information about the post. Additionally, these tiles are clickable and redirect the user to the corresponding reddit post.
Practically speaking, it serves almost no purpose since the reddit search engine works just fine. 
(And this site ultimately uses the exact same engine.) Therefore, this project is simply a way for me to practice my programming skills and try out new ideas.

## Technology
The PSA was created using React. Redux was used to for state management and for handling asynchronous API requests. For testing I used react-testing-library. I mostly relied on component testing.
The simple version of the Reddit-API was used, rather than the more extensive - yet also more complicated - version. This version simply transfers reddit URL's into JSON objects.

## Future Features
 - Allow users to enter specific sub-reddits to limit the scope of the search.
 - Create seperate sections in the website that allow users to search for particular types of posts, such as images or comments.
 - Allow users to set the number of search results they want to have displayed on the page. I.e., let users set the number of tiles.

## Future Improvements
 - Create a way for thumbnails to always be displayed porperly.
 - Implement e2e testing.
 - Improve color scheme.
