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


//   axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response.data.articles);


//      response.data.articles.javascript.forEach(element => {
//         cardMaker(element)
//     });
//     response.data.articles.bootstrap.forEach(element => {
//         cardMaker(element)
//     });
//     response.data.articles.technology.forEach(element => {
//         cardMaker(element)
//     });
//     response.data.articles.jquery.forEach(element => {
//         cardMaker(element)
//     });
//     response.data.articles.node.forEach(element => {
//         cardMaker(element)
//     });
//     })

//     .catch(error => {
//         console.log("为什么", error)
//     })


// console.log("After .get")



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
        console.log("whyyyyyyy?!!!", error)
    })



    const cardsContainer = document.querySelector('.cards-container');

// const cards = document.querySelector('.cards-container');
// const card = function(res.data);
// cards.appendChild(card);

function Article(data) {

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');



    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    authorsName.textContent = data.authorName;
    img.src = data.authorPhoto;


    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(authorsName);
    imgContainer.append(img);

    return card;
}   

