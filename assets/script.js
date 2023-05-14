console.log("products website");

// GET Men's category
// fetch("https://fakestoreapi.com/products/category/women's clothing")
//   .then((res) => res.json())
//   .then((products) => console.log(products));

// products -> [{},{},{}]
//sectionID -> #woman, #man, #electronics, etc...
function paintProducts(products, sectionID) {
  for (let i = 0; i < products.length; i++) {
    let image = products[i].image;
    let title = products[i].title;
    let price = products[i].price;

    let rating = products[i].rating.rate;

    const product = { title, price, image, rating };

    let card = `
          <article class="card">
             
              <h2>Card ${i + 1}</h2>
              <p>Title: ${title}</p>
              <p>Price: ${price}</p>
              <p>Description:</p>
              <p>Rating: ${rating}</p>
              <img src="${image}" alt="">
              <p>Weight: 1 lb</p>
              <button onclick="printMessage(${price});"> Buy now</button>
          `;
    document.querySelector(sectionID).innerHTML += card;
  }
}

function printMessage(message) {
  console.log(message);
  alert(message);
}

fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then((res) => res.json())
  .then((products) => paintProducts(products, "#woman")); // [{},{},{},{}]

// GET Men's category
fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then((res) => res.json())
  .then((products) => paintProducts(products, "#man"));

// GET Electronic category
fetch("https://fakestoreapi.com/products/category/electronics")
  .then((res) => res.json())
  .then((products) => paintProducts(products, "#electronic"));

// GET All categories
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));
