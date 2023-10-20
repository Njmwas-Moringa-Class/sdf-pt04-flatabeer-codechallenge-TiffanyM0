// Code here

// fetch request for info from bd, record input value as ul

// const BASE_URL = "http://localhost:3000"
// console.log('here we are now');

async function getBeers() {
  const beersResponse = await fetch("http://localhost:3000/beers");
  const beers = await beersResponse.json();
  console.log(beersResponse);
  console.log(beers);

}

function beerListInNav(beer) {
  const insertNames = document.createElement("li");
  console.log(insertNames);
  insertNames.innerText = beer.name;
  return insertNames;
}
// /*
//     to run the code after DOM has loaded, call functions in the below callbackfn
// */
document.addEventListener("DOMContentLoaded", () => {
  const headingList = document.getElementById("beer-list");
  getBeers()
});



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

fetch("http://localhost:3000/beers")
.then((Response) => Response.json())
.then (data => {
    let div1 = document.createElement("div");
    div1.className = "beer1"
    div1.innerHTML = `
        <h2>${data.name}</h2>
        <img src= "${data.image_url}"
        <p>${data.description}</p>
    `
    document.querySelector("#beer-list").appendChild(div1);
    
    // let beerImage = document.querySelector("div.beer-details img.src");
    // let beerDescription = document.querySelector("#beer-description");
    // beerName.innerText = beers.name;
    // beerImage.innerText = beers.image_url;
    // beerDescription.innerText = beers.description;
})
// console.log(fetch())

// fetch("http://localhost:3000/beers/1")
//   .then((response) => response.json())
//   .then((data) => {
//     let div1 = document.querySelector("#beer-details");
//     div1.innerHTML = "";
//     div1.innerHTML = `
//     <h2 id="beer-name">${data.name}</h2>
//     <img
//           id="beer-image"
//           alt="${data.name}"
//           src="${data.image_url}"
//     />`;
//   });
