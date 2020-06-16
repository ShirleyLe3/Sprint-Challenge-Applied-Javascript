// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.error(error)
//     }) 

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        response.data.topics.forEach(topic => {
            topicContainer.append(Topic(topic));
        })
    })
    .catch(error => {
        console.log("not found", error);
    })

    // const articlesObj = response.data.articles;
    // for(var prop in articlesObj) {
    //     if(articlesObj.hasOwnProperty(prop)) {
    //         articlesObj[prop].forEach(articleBlock => {
    //             cardsContainer.append(Article(articleBlock));


    const topicContainer = document.querySelector('.topics');


    // axios.get('https://lambda-times-backend.herokuapp.com/topics')
    // .then(response => {
    //     // console.log(response.data.topics);
    //     // response.data.topics.forEach(topic => {
    //     //     tabTopic.appendChild(Topic(topic));
    //     // })
    // const data = response.data.topics
    // data.forEach(response => topics.appendChild(tabbTopic(response)))   

    // })    
    // .catch(error => {
    //     console.log("Sigh, Why doesn't it work?!! 为什么", error);
    // })
// function with foreach append to element





    function Topic(topicData) {

        const topicTab = document.createElement('div');
        topicTab.classList.add('tab');
        topicTab.textContent = topicData;

        return topicTab;
    }





