// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.








function cardMaker(data) {
    
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
   
    let cardTitle = document.createElement('h2');
    cardTitle.classList.add('headline');
    cardTitle.textContent = data.headline;
    cardDiv.appendChild(cardTitle);
   
    let cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');
    cardAuthor.textContent = data.author;
    cardDiv.appendChild(cardAuthor);
   
    let cardImgCon = document.createElement('div');
    cardAuthor.classList.add('img-container');
    cardAuthor.appendChild(cardImgCon);

    let cardImg = document.createElement('img');
    cardImg.textContent = data.URL;
    cardImgCon.appendChild(cardImg);
   
    let cardName = document.createElement('span');
    cardName.textContent = ("`By` + data.author");
    cardAuthor.appendChild(cardName);

   
    return cardDiv;
  }
  
  


  
  let cardsContainer = document.querySelector('.cards-container');
  data.forEach( card => {
    let newCard = cardMaker(card);
    cardsContainer.appendChild(newCard);
  });






















  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        const articlesObj = response.data.articles;
        for(var prop in articlesObj) {
            if(articlesObj.hasOwnProperty(prop)) {
                articlesObj[prop].forEach(articleBlock => {
                    cardsContainer.append(Article(articleBlock));
                })
            }
        }

    })
    .catch(error => {
        console.log("I need food", error)
    })