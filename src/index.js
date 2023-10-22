// Code here
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/beers/1")
    .then((response) => response.json())
    .then((data) => {
      let beer1 = document.querySelector("#beer-name");
      beer1.innerText = `${data.name}`;

      let beer1Img = document.querySelector("img#beer-image");
      // console.log(beer1Img);
      beer1Img.setAttribute("alt", `${data.name}`);

      let beer1ImgSrc = document.querySelector("img#beer-image");
      // console.log(beer1ImgSrc);
      beer1ImgSrc.setAttribute("src", `${data.image_url}`);

      let beer1Desc = document.querySelector("#beer-description");
      beer1Desc.innerText = `${data.description}`;
      // console.log(beer1Desc);
    });
  fetch(`http://localhost:3000/beers`)
    .then((response) => response.json())
    .then((data) => {
      const beerFromJs = data;
      const navBeer = document.getElementsByTagName("nav");
      beerFromJs.forEach((element) => {
        console.log(element.name);
        let beerList = document.querySelector("#beer-list");
        // console.log(beerList);
        let newBeerName = document.createElement("li");
        newBeerName.textContent = element.name;
        beerList.appendChild(newBeerName);
        // beerList.appendChild('li');
        // beerList.firstChild.innerText = (`${element.name}`)

        newBeerName.addEventListener("click", () => {
          let div = document.createElement("div");
          div.className = "beer-details";
          div.innerHTML = `
          <h2 id="beer-name">${element.name}</h2>
          <img
            id="beer-image"
            alt="${element.name}"
            src="${element.image_url}"
          />
          <p>
            <em id="beer-description">${element.description}</em>
          </p>
  
          <form id="description-form">
            <label for="description">Edited Description:</label>
            <textarea id="description"></textarea>
            <button type="submit">Update Beer</button>
          </form>
  
          <h3>Customer Reviews</h3>
          <ul id="review-list">
            <li>Replace with actual reviews</li>
            <li>From the server</li>
          </ul>
          <form id="review-form">
            <label for="review">Your Review:</label>
            <textarea id="review"></textarea>
            <button type="submit">Add review</button>
          </form>`;
          console.log("changed");
        });
      });
      let listed = document.querySelectorAll("ul#beer-list li");
      console.log(listed);
      // listed.addEventListener("click", () => {
      //   console.log("clicked");
      // });
    });
});

// ====== a list of beer names in the nav bar at the left =======//
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
