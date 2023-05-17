console.log("products website");

// GET Men's category
// fetch("https://fakestoreapi.com/products/category/women's clothing")
//   .then((res) => res.json())
//   .then((products) => console.log(products));

// products -> [{},{},{}]
//sectionID -> #woman, #man, #electronics, etc...
function paintProducts(products, sectionID) {
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    let image = products[i].image;
    let title = products[i].title;
    let price = products[i].price;

    let rating = products[i].rating.rate;

    const product = { title, price, image, rating };

    let card = `
          <article class="card">
             
              <h2>${title}</h2>
             
              <p>Price: ${price}</p>
              <p>Description:</p>
              <p>Weight: 1 lb</p>
              <p>Rating: ${rating}</p>
              <button onclick="printMessage('${title}',${price});"> Buy now</button>
              <img src="${image}" alt="">
              </article>
           
              
          `;
    document.querySelector(sectionID).innerHTML += card;
  }
}

function printMessage(title, price) {
  console.log(title);
  console.log(price);

  // alert(title + " " + price + "€");
  Swal.fire(title + " " + price + "€", "question");
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

// array of object with extra info
//pending: fill with the right info
let sport_products = [
  {
    title: "Bike",
    price: 119.99,
    image: "./assets/bike.jpg",
    rating: 1,
  },
  {
    title: "Bike",
    price: 119.99,
    image: "./assets/bike.jpg",
    rating: 1,
  },
  {
    title: "Bike",
    price: 119.99,
    image: "./assets/bike.jpg",
    rating: 1,
  },
  {
    title: "Bike",
    price: 119.99,
    image: "./assets/bike.jpg",
    rating: 1,
  },
];

paintProducts(sport_products, "#sport");

// PENDING: fill with info kids
//let kids_products = [{},{},{}]
//paintProducts(kids_products, "#kids");

/* 


<article class="card">
  <h2>Boxing Gloves</h2>
  <p style="color: brown">Amazing Discount</p>
  <p>Price: $12</p>
  <p>#TopMarca Product</p>
  <button> Buy now</button>
  <img src="./assets/boxing.jpg" alt="Boxing Gloves" />
</article>

<article class="card">
  <h2>Dombbles</h2>
  <p style="color: brown">Amazing Discount</p>
  <p>Price: $15.99</p>
  <p>#TopMarca Product</p>
  <button> Buy now</button>
  <img src="./assets/dumbblles.jpg" alt="dumbblles" />
</article>

<article class="card">
  <h2>Basketball Net</h2>
  <p style="color: brown">Amazing Discount</p>
  <p>Price: $9</p>
  <p>#TopMarca Product</p>
  <button> Buy now</button>
  <img src="./assets/net.jpg" alt="Basketball Net" />
</article>

<article class="card">
  <h2>Ball</h2>
  <p style="color: brown">Amazing Discount</p>
  <p>Price: $13.99</p>
  <p>#TopMarca Product</p>
  <button> Buy now</button>
  <img src="./assets/ball.jpg" alt="ball" />
</article>

<article class="card">
  <h2>Jogging Clothes</h2>
  <p style="color: brown">Amazing Discount</p>
  <p>Price: $38.99</p>
  <p>#TopMarca Product</p>
  <button> Buy now</button>
  <img src="./assets/jogging.jpg" alt=" jogging Clothes" />
</article>
 */

document
  .getElementById("search_form2")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //stop the submitting event
    console.log("hola");
    alert("hola");
    const product = event.target.product_name.value;
    alert(product);
    console.log(product);

    // Code here to find the exact product
    // Look for ID product or Title --> DOM manipulation
  });
