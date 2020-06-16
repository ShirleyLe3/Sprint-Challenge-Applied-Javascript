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

  const header = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp =document.createElement('span');


  header.append(date);
  header.append(title);
  header.append(temp);

  
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');


  date.textContent = dateData;
  title.textContent = titleData;
  temp.textContent = tempData;


  return header;
}

  
const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header('June 12, 2020', 'Lambda Times', '97°'));

  
//   const headerContainer = document.querySelector('.header-container');

// //   data.forEach( header => {
// //     let newH = Header(header);
//     headerContainter.append(Header('JUNE 12, 2020', 'Lambda Times', '98'));
// //   });
  
  