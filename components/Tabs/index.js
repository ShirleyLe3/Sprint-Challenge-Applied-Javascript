// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

    // const articlesObj = response.data.articles;
    // for(var prop in articlesObj) {
    //     if(articlesObj.hasOwnProperty(prop)) {
    //         articlesObj[prop].forEach(articleBlock => {
    //             cardsContainer.append(Article(articleBlock));



axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        response.data.topics.forEach(topic => {
            topicContainer.append(Topic(topic));
        })
    })
    .catch(error => {
        console.log("404 not found", error);
    })









function Topic(topicData) {

    let Tab = document.createElement('div');
    Tab.classList.add('tab');
        let tabTopic = document.querySelector('.topics')
        tabTopic.textContent = topicData;

        return tabTopic;



}
