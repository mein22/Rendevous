// The createEventCard function with parameters passed
function createEventCard(imageSrc, alt, title, date, description, linkHref) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden w-82";
    
// created image tag
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = alt;
  image.className = "w-full h-48 object-cover";
  card.appendChild(image);

//create card content div and append to card
  const cardContent = document.createElement("div");
  cardContent.className = "p-4";
  card.appendChild(cardContent);

  //create h3 tag: which is the title
  const titleElement = document.createElement("h3");
  titleElement.className = "font-semibold text-lg text-[#000000]";
  titleElement.textContent = title;
  cardContent.appendChild(titleElement);

  //create a p tag and append to card content
  const dateElement = document.createElement("p");
  dateElement.className = "text-sm text-gray-500";
  dateElement.textContent = date;
  cardContent.appendChild(dateElement);

  //create a p tag and append to card content
  const descriptionElement = document.createElement("p");
  descriptionElement.className = "text-gray-600 text-sm mt-2";
  descriptionElement.textContent = description;
  cardContent.appendChild(descriptionElement);

  //create an anchor tag and append to cardcontent
  const link = document.createElement("a");
  link.href = linkHref;
  link.className =
    "mt-3 inline-block text-purple-600 hover:underline text-sm font-medium";
  link.textContent = "View details →";
  cardContent.appendChild(link);

  return card;
}

const container = document.getElementById("container");

//Responsive flexbox: stack on small, spread on medium+
container.className =
  "flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6 max-w-6xl mx-auto";

// Create three cards
//car 1
const card1 = createEventCard(
  "images/Trending1.png",
  "Trending 1",
  "ISWIS Live show",
  "Sun, Oct 3rd • 6pm",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "./read.html"
);

//card 2
const card2 = createEventCard(
  "images/Trending2.png",
  "Trending 2",
  "NATIV5 Festival",
  "Sun, Oct 10th • 6pm",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "./read.html"
);

//card 1
const card3 = createEventCard(
  "images/Trending3.png",
  "Trending 3",
  "Basketmouth Tour",
  "Sun, Oct 17th • 6pm",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "./read.html"
);

// Append all cards to container
container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card3);


// class Product {
//   constructor({ id, title, price, category, description }) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.category = category;
//     this.description = description;
//   }
// }

// class ProductService {
//   #handlePromise = async ({ url = '', method = "GET", body = null }) => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${url}`, {
//         method,
//         body: body ? JSON.stringify(body) : null,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };

//   getProductsById = async (id) => {
//     const response = await this.#handlePromise({ url: id });
//     return response;
//   };

//   getProducts = async () => {
//     const response = await this.#handlePromise({});
//     return response;
//   };

//   addProduct = async (product) => {
//     const response = await this.#handlePromise({
//       url: "",
//       method: "POST",
//       body: product,
//     });
//     console.log(response);
//     return response;
//   };

//   deleteProduct = async (id) => {
//     const response = await this.#handlePromise({
//       url: id,
//       method: "DELETE",
//     });
//     console.log(response);
//     return response;
//   };
// }

// // Example usage
// const productService = new ProductService();
// productService.getProducts().then(products => console.log(products));

// const product = {
//   title: "New Product",
//   price: 13.5,
//   description: "lorem ipsum",
//   image: "https://i.avatar.com",
//   category: "electronics",
// };
// productService.addProduct(product).then(response => console.log(response));


  // getProducts = async () => {
  //   return await this.#handlePromise({});
  // };



  
// //ProductService class
// export class ProductService {
//   #handlePromise = async ({ url = '', method = "GET", body = null }) => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${url}`, {
//         method,
//         body: body ? JSON.stringify(body) : null,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };

//   getProducts = async () => {
//     return await this.#handlePromise({});
//   };

//   getProductsById = async (id) => {
//   return await this.#handlePromise({ url: id });
// };

// }

// // Create Card function
// function createEventCard(imageSrc, alt, title, price, description, linkHref) {
//   const card = document.createElement("div");
//   card.className =
//     "bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden w-82";

//   const image = document.createElement("img");
//   image.src = imageSrc;
//   image.alt = alt;
//   image.className = "w-full h-48 object-cover";
//   card.appendChild(image);

//   const cardContent = document.createElement("div");
//   cardContent.className = "p-4";
//   card.appendChild(cardContent);

//   const titleElement = document.createElement("h3");
//   titleElement.className = "font-semibold text-lg text-[#000000]";
//   titleElement.textContent = title;
//   cardContent.appendChild(titleElement);

//   const priceElement = document.createElement("p");
//   priceElement.className = "text-sm text-gray-500";
//   priceElement.textContent = `$${price}`;
//   cardContent.appendChild(priceElement);

//   const descriptionElement = document.createElement("p");
//   descriptionElement.className = "text-gray-600 text-sm mt-2";
//   descriptionElement.textContent = description;
//   cardContent.appendChild(descriptionElement);

//   const link = document.createElement("a");
//   link.addEventListener("click", () => {
//     window.location.href = `./event.html?productId=${product.id}`;

//   })

//   link.href = linkHref;
//   link.className =
//     "mt-3 inline-block text-purple-600 hover:underline text-sm font-medium";
//   link.textContent = "View details →";
//   cardContent.appendChild(link);

//   return card;
// }

// //Use the ProductService to fetch & render products
// const container = document.getElementById("container");
// container.className =
//   "flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6 max-w-6xl mx-auto";

// const productService = new ProductService();

// async function displayProducts() {
//   const products = await productService.getProducts();

//   if (!products) return;

//   // Only show first 3 products
//   products.slice(0, 6).forEach(product => {
//     const card = createEventCard(
//       product.image,        // product image
//       product.title,        // alt
//       product.title,        // title
//       product.price,        // price
//       product.description,  // description
//       `./event.html?id=${product.id}` // link
//     );
//     container.appendChild(card);
//   });
// }

// displayProducts();



// export class CartService {
//   constructor({ id, title, price, category, description }) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.category = category;
//     this.description = description;
//   }

//   addToCart() {}; 

//   clearCart() {};

//   getTotal() {};

//   getCart() {};
// }



// export class PaymentService {
//   async processPayment(amount, method = "card") {
//     try {
//       if (this.amount <= 0) {
//         console("Invalid payment amount");
//       }

//       //payment
//       return {
//         success: true,
//         method,
//         amount,
//         transactionId: " " + Date.now(),
//         message: "Payment processed successfully"
//       };
//     } catch (error) {
//       return {
//         success: false,
//         message: error.message
//       };
//     }
//   }
// }


// import { ProductService } from "./randevous.js";
// import { CartService } from "./cart.js";
// import { PaymentService } from "./payment.js";

// const productService = new ProductService();
// const cartService = new CartService();
// const paymentService = new PaymentService();

// async function shopFlow() {
//   const products = await productService.getProducts();
//   console.log("Available products:", products.slice(0, 3));

  
//   cartService.addToCart(products[0], 2);
//   console.log("Cart after adding:", cartService.getCart());


//   console.log("Cart total:", cartService.getTotal());
//   const paymentResult = await paymentService.processPayment(cartService.getTotal(), "card");
//   console.log("Payment result:", paymentResult);
// }

// shopFlow();


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Product Details</title>

//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       padding: 20px;
//     }
//     .product-details {
//       max-width: 600px;
//       margin: auto;
//       border: 1px solid #ddd;
//       border-radius: 8px;
//       padding: 20px;
//       box-shadow: 0 2px 6px rgba(0,0,0,0.1);
//     }
//     .product-details img {
//       max-width: 100%;
//       height: auto;
//       border-radius: 8px;
//     }
//     .product-details h2 {
//       margin-top: 15px;
//       font-size: 1.5rem;
//     }
//     .product-details p {
//       margin: 10px 0;
//     }
//     .price {
//       font-weight: bold;
//       color: green;
//       font-size: 1.2rem;
//     }
//   </style>

// </head>
// <body>
//   <h1>Product Details</h1>
//   <div id="product-container" class="product-details"></div>

//   <script type="module" src="./event.js"></script>
// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Event Page</title>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>

// <body class="bg-white text-gray-800">

//   <!-- Header and Navbar -->
//   <header class="flex items-center justify-between px-6 py-4 border-b">
//     <div class="text-2xl font-bold text-purple-700">rendezvous</div>
//     <nav class="space-x-6 hidden md:flex">
//       <a href="#" class="text-[#432361] hover:text-gray-600 font-semibold">Discover</a>
//       <a href="#" class="text-[#432361] hover:text-gray-600 font-semibold">About us</a>
//       <a href="#" class="text-[#432361] hover:text-gray-600 font-semibold">FAQs</a>
//       <a href="#" class="text-[#432361] hover:text-gray-600 font-semibold">Contact us</a>
//     </nav>
//     <div class="space-x-4">
//       <button class="text-[#432361] font-semibold hover:text-gray-600">Log in</button>
//       <button class="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">Sign up</button>
//     </div>
//   </header>

//   <!-- Product Image -->
//   <section class="max-w-6xl mx-auto px-6 mt-6">
//     <img src="images/twopersons.png" alt="Hero" class="w-full rounded-lg object-cover">
//   </section>

//   <!-- Main Content -->
//   <main class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

//     <!-- Left Column: Event Info -->
//     <div class="md:col-span-2 space-y-6">
//       <h2 class="text-2xl font-bold">I said what I said Live Show</h2>

//       <!-- Event Meta -->
//       <div class="space-y-2 text-gray-600">
//         <p class="flex items-center gap-2">
//           <span><img src="images/Calendar.svg" alt="Calendar"></span> Sunday, October 3rd, 2023 - 6PM
//         </p>
//         <p class="flex items-center gap-2">
//           <span><img src="images/Location.svg" alt="Location"></span> Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos
//         </p>
//         <p class="flex items-center gap-2">
//           <span><img src="images/User.svg" alt=""></span> FK, Jollz
//         </p>
//       </div>

//       <!-- Event Description -->
//       <div>
//         <h3 class="font-semibold mb-2">Event description</h3>
//         <p class="text-sm leading-relaxed text-gray-700">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//           est laborum.
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//           est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
//           eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//           mollit anim id est laborum.

//         </p>
//       </div>

//       <!-- Ticket Pricing -->
//       <div>
//         <h3 class="font-semibold mb-2">Tickets Pricing</h3>
//         <div class="flex items-center gap-6">
//           <div>
//             <p class="font-medium">Single</p>
//             <p class="text-purple-700 font-semibold">NGN 5,000</p>
//           </div>
//           <div>
//             <p class="font-medium">Pair</p>
//             <p class="text-purple-700 font-semibold">NGN 9,000</p>
//           </div>
//         </div>
//       </div>

//       <!-- Buy Button -->
//       <button class="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800">
//         Buy now
//       </button>
//     </div>

//     <!-- Right Column: Map + Contact -->
//     <aside class="space-y-6">
//       <!-- Contact Organizers -->
//       <div>
//         <h3 class="font-semibold mb-2">Contact Organizers</h3>
//         <div class="flex gap-4 text-purple-700 text-xl">
//           <a href="#"><i class="fa-solid fa-envelope"></i><img src="images/🦆 icon _circle email_.svg" alt="email"></a>
//           <a href="#"><i class="fa-solid fa-phone"></i><img src="images/Twitter.png" alt="twitter"></a>
//           <a href="#"><i class="fa-brands fa-instagram"></i><img src="images/Vector.svg" alt="intagram"></a>
//         </div>
//       </div>

//       <!-- Map Image -->
//       <div class="py-16">
//         <h3 class="font-semibold mb-2">Directions</h3>
//         <img src="images/map.png" alt="Map" class="w-full rounded-lg shadow">
//       </div>
//     </aside>
//   </main>

//   <!-- Footer --> 
//   <footer class="bg-purple-800 text-white py-12">
//     <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

//       <!-- Brand name -->
//       <div>
//         <h2 class="text-xl font-bold mb-2">rendezvous</h2>
//         <p class="text-sm text-gray-200 leading-relaxed">
//           Your Personal Event Sherpa: Curating <br>
//           Awesome, One Click at a Time.
//         </p>
//       </div>

//       <!-- Features -->
//       <div>
//         <h3 class="text-white font-semibold mb-3">Feature</h3>
//         <ul class="space-y-2 text-sm">
//           <li><a href="#" class="hover:underline">Events discovery</a></li>
//           <li><a href="#" class="hover:underline">Ticketing</a></li>
//         </ul>
//       </div>

//       <!-- Company f resp. remove pl -->
//       <div>
//         <h3 class="text-white font-semibold mb-3">Company</h3>
//         <ul class="space-y-2 text-sm">
//           <li><a href="#" class="hover:underline">About us</a></li>
//           <li><a href="#" class="hover:underline">FAQs</a></li>
//           <li><a href="#" class="hover:underline">Careers</a></li>
//           <li><a href="#" class="hover:underline">Support</a></li>
//         </ul>
//       </div>

//       <!-- Contact us -->
//       <div>
//         <h3 class="text-white font-semibold mb-3">Contact us</h3>
//         <ul class="space-y-2 text-sm">
//           <li>info@events.com</li>
//           <li>+234 701 345 6789</li>
//           <li>
//             Race Course, 8/9 Marina, Onikan, Lagos, <br>
//             4aa Force Rd, Lagos Island 102273, Lagos
//           </li>
//         </ul>
//       </div>

//     </div>
//   </footer>

// </body>

// </html>

// import { ProductService } from "./productService.js";

// const productService = new ProductService();
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");

// async function showProductDetails() {
//   if (!productId) return;
//   const product = await productService.getProductsById(productId);
//   console.log("Product details:", product);
// }

// showProductDetails();


//vue js examples

{/* <script>
export default {
dat: () = > ({
  msg: "david",
  user: {firstName: "david", lastName: Jessica, Age: "70"},
  error: "",
  }),
  method: {
    changeName(){
      this.user.lastName = "Franklin"
      this.user.lastName = "Jessica"
    }
  }
}
</script>

<template>
   <h1>{{ msg }}</h1>
   <div>{{ msg }}</div>
   <div>Name: {{user?.name}}</h1>
</template>


<style>

</style>



<script>
export default {
  data: () => ({
    buttonMessage: 'Login User',
    isLoggedIn: false,
    user: null,
    students: [
      {name: 'Franklin', age: 40},
      {name: 'David', age: 20},
      {name: 'Jessica', age: 12},
      {name: 'Yahaya', age: 14},
      {name: 'Stella', age: 18},
      {name: 'Samuel', age: 19},
      {name: 'Adamu', age: 21},
    ]
  }),
  methods: {
    loginUser(){
     // Login Yourself
     this.user = {firstName: 'Funmilayo',lastName: 'Oba'}
     this.isLoggedIn = true;
    },
    logout(){
     // Login Yourself
     this.user = null
    },
  },
  computed: {
    getFullName(){
      return this.user ?  `${this.user.firstName} ${this.user.lastName}` : 'No User Logged In'
    },
    getAdultStudents(){
      return this.students.filter(s => s.age >= 18)
    },
    getLoggedInProperties(){
      return {...this.user, isLoggedIn: this.isLoggedIn}
    }
  }
}
</script>
 
<template>
  <button @click = "loginUser"> {{ buttonMessage }}</button>
  <button @click = "logout"> Logout</button>
  <div>Welcome: {{getFullName}}</div>
  <div>{{getAdultStudents}}</div>
</template>
 
<style>
 
</style> */}
 
 
 