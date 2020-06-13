// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header(dateData, titleData, tempData) {


    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    let headerDate = document.createElement('span');
    headerDate.classList.add('date');
    headerDate.textContent = dateData;
    headreDiv.appendChild(headerDate);
      
    let headerTitle = document.createElement('h1');
    headerTitle.textContent = titleData;
    headerDiv.appendChild(headerTitle);

    let headerTemp = document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.textContent = tempData;
    headerDiv.appendChild(headerTemp);

   
   
    return headerDiv;
  }
  
  
  
  let headerContainer = document.querySelector('.header-container');
//   data.forEach( header => {
//     let newH = Header(header);
    headerContainter.appendChild(Header('JUNE 12, 2020', 'Lambda Times', '98'));;
//   });
  
  