// Code here

fetch("http://localhost:3000/beers/1")
  .then((response) => response.json())
  .then((data) => {
    let beer1 = document.querySelector("#beer-name");
    beer1.innerText = `${data.name}`;

    let beer1Img = document.querySelector("img#beer-image");
    console.log(beer1Img);
    beer1Img.setAttribute("alt", `${data.name}`);

    let beer1ImgSrc = document.querySelector("img#beer-image");
    console.log(beer1ImgSrc);
    beer1ImgSrc.setAttribute("src",`${data.image_url}`);

    let beer1Desc = document.querySelector("#beer-description");
    beer1Desc.innerText = `${data.description}`;
    console.log(beer1Desc);

    let beerList = document.querySelector("#beer-list");

  })
;


// ====== a list of beer names in the nav bar at the left =======//

async function getBeers() {
  const beersResponse = await fetch("http://localhost:3000/beers");
  const beers = await beersResponse.json();
  let beerList = document.querySelector("#beer-list");
  beerList.appendChild("li").innerText(`${beers.name}`)
  return beers;
}

// fetch request for info from bd, record input value as ul
// const BASE_URL = "http://localhost:3000"
// console.log('here we are now');

function updateReview(){
  const newReview =  document.getElementById("review-form");
  newReview.addEventListener("submit", (event)=>{
    event.preventDefault();
    const newReviewBeer = document.getElementById("review"); 
    console.log(newReviewBeer);
  })
}

// function beerListInNav(beer) {
//   const beerList = document.querySelector("#beer-list");
//   beerList.appendChild("li");
//   return `<li>${beer.name}</li>`;
// }
// document.addEventListener("DOMContentLoaded", () => {
//   getBeers();
//   beerListInNav();
// });

// /*
//     to run the code after DOM has loaded, call functions in the below callbackfn
// */

// document.addEventListener("DOMContentLoaded", () => {
//   const headingList = document.getElementById("beer-list");
//   getBeers().then((beers) => {
//     console.log(beers);
//     let div1 = document.createElement("div");
//     div1.className = "beer1";
//     div1.innerHTML = `
//         <h2>${data.name}</h2>
//         <img src= "${data.image_url}"
//         <p>${data.description}</p>
//     `;
//     document.querySelector("#beer-list").appendChild(div1);
//   });
// });

// let beerImage = document.querySelector("div.beer-details img.src");
// let beerDescription = document.querySelector("#beer-description");
// beerName.innerText = beers.name;
// beerImage.innerText = beers.image_url;
// beerDescription.innerText = beers.description;

// async function getBeers() {
//   return fetch("http://localhost:3000/beers").then(() => {
//     let beerList = document.querySelector("#beer-list");
//     function beerNames() {
//       beerList.innerHTML(`<li>{beers.name}</li>`);
//     }
//     forEach((beers) => beerNames);
//   });
// }

// const reviewAdded = document.querySelector("#review-form");
// reviewAdded.addEventListener("submit", (e)=>{
//     Event.preventDefault();
//     const input = document.querySelector("#review");
// })

// console.log(fetch())
