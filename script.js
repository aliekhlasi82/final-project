console.log("products website");

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
             
              <h2>${title.slice(0, 80)}</h2>
              <p>Price: ${price}</p>
              <p>Description:</p>
              <p>Weight: 1 lb</p>
              <p>Rating: ${rating}</p>
              <img src="${image}" alt="">
              <button class="buy" onclick="printMessage('${title}','${price}','${image}');"> Buy now</button>
            
            </article>
           
              
          `;
    document.querySelector(sectionID).innerHTML += card;
  }
}

function printMessage(title, price, image) {
  console.log(title);
  console.log(price);

  // alert(title + " " + price + "€");
  Swal.fire(title + " " + price + "€", "First you should pay");
  Swal.fire({
    title: title,
    text: title + " " + price + "€. First you should pay",
    imageUrl: image,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
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
    rating: 3,
  },
  {
    title: "Boxing Gloves",
    price: 12,
    image: "./assets/boxing.jpg",
    rating: 3,
  },
  {
    title: "Dombbles",
    price: 15.99,
    image: "./assets/dumbblles.jpg",
    rating: 4,
  },
  {
    title: "Basketball Net",
    price: 9,
    image: "./assets/net.jpg",
    rating: 4,
  },
  {
    title: "Ball",
    price: 13.99,
    image: "./assets/ball.jpg",
    rating: 3,
  },
  {
    title: "Jogging Clothes",
    price: 38.99,
    image: "./assets/jogging.jpg",
    rating: 5,
  },
];

paintProducts(sport_products, "#sport");

let kids_products = [
  {
    title: "Sweet Socks",
    price: 9.99,
    image: "./assets/socks.jpg",
    rating: 3,
  },
  {
    title: "winter Jacket",
    price: 19.99,
    image: "./assets/jacket.jpg",
    rating: 4,
  },
  {
    title: "Shoes",
    price: 28.99,
    image: "./assets/shoes.jpg",
    rating: 5,
  },
  {
    title: "Bear Toy",
    price: 18.99,
    image: "./assets/Toy.jpg",
    rating: 4,
  },
  {
    title: "Puppy Toy",
    price: 36.99,
    image: "./assets/dog toy.jpg",
    rating: 5,
  },
  {
    title: "Baby suummer clothes package",
    price: 33,
    image: "./assets/baby cloth.jpg",
    rating: 3,
  },
];

paintProducts(kids_products, "#kids");

document
  .getElementById("search_form2")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //stop the submitting event
    const product = event.target.product_name.value; // text of the input
    console.log(product);

    const productList = document.querySelectorAll("article h2"); // all the elements in DOM
    console.log(productList);
    for (let i = 0; i < productList.length; i++) {
      const title = productList[i].innerText;
      if (title.includes(product)) {
        // alert(title + " " + price + "€");
        Swal.fire("I've found a:" + title);
      }
    }

    // Code here to find the exact product
    // Look for ID product or Title --> DOM manipulation
  });
