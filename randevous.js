import { ProductService } from "./productService.js";

// Create Card function
function createEventCard(imageSrc, alt, title, price, description, linkHref) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden w-82";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = alt;
  image.className = "w-full h-48 object-cover";
  card.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.className = "p-4";
  card.appendChild(cardContent);

  const titleElement = document.createElement("h3");
  titleElement.className = "font-semibold text-lg text-[#000000]";
  titleElement.textContent = title;
  cardContent.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-sm text-gray-500";
  priceElement.textContent = `$${price}`;
  cardContent.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "text-gray-600 text-sm mt-2";
  descriptionElement.textContent = description;
  cardContent.appendChild(descriptionElement);

  const link = document.createElement("a");
  link.addEventListener("click", () => {
    window.location.href = `./event.html?productId=${product.id}`;
  });

  link.href = linkHref;
  link.className =
    "mt-3 inline-block text-purple-600 hover:underline text-sm font-medium";
  link.textContent = "View details →";
  cardContent.appendChild(link);

  return card;
}

//Use the ProductService to fetch & render products
const container = document.getElementById("container");
container.className =
  "grid md:grid-cols-3 gap-6";

const productService = new ProductService();

async function displayProducts() {
  const products = await productService.getProducts();

  if (!products) return;

  products.slice(0, 6).forEach(product => {
    const card = createEventCard(
      product.image,
      product.title,
      product.title,
      product.price,
      product.description,
      `./event.html?id=${product.id}`
    );
    container.appendChild(card);
  });
}

displayProducts();

