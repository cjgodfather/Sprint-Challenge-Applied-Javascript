// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

const cardContainer = document.querySelector(".cards-container");

function cardCreate(obj) {
  const cardEl = document.createElement("div");
  const headlineEl = document.createElement("div");
  const authorEl = document.createElement("div");
  const imgContainerEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const authorNameEl = document.createElement("span");

  cardEl.classList.add("card");
  headlineEl.classList.add("headline");
  authorEl.classList.add("author");
  imgContainerEl.classList.add("img-container");
  imgEl.classList.add("img-container");

  headlineEl.textContent = obj.headline;
  imgEl.src = obj.authorPhoto;
  authorNameEl.textContent = `By: ${obj.authorName}`;

  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imgContainerEl);
  imgContainerEl.appendChild(imgEl);
  authorEl.appendChild(authorNameEl);

  return cardEl;
}

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => response.data.articles)
  .then(articles => Object.values(articles))
  .then(value => value.reduce((acc, cur) => acc.concat(cur), []))
  .then(cards =>
    cards.forEach(card => {
      const newCard = cardCreate(card);
      cardContainer.appendChild(newCard);
    })
  )
  .catch(error => console.log(`something is wrong`));
