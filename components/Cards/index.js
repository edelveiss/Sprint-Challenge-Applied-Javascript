// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        //console.log(response.data.articles);
        const entries = Object.entries(response.data.articles);
        //console.log("this is array of entries: ", entries);
        entries.forEach(topic => {
            //console.log('this is a topic: ', topic[1]);

            topic[1].forEach(article => {
                //console.log('this is an article: ', article);
                cardsContainer.append(cardCreator(article));
            })
        })

    })
    .catch(error => {
        console.log("The data was not returned: ", error);
    })



// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(article) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImage = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = article.headline;
    authorImage.src = article.authorPhoto;
    authorImage.alt = `this is ${article.authorName}'s photo`;
    authorName.textContent = article.authorName;


    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImage);
    author.append(authorName);

    return card;
}
const cardsContainer = document.querySelector(".cards-container");