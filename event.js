import { ProductService } from "./productService.js";

const productService = new ProductService();
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

async function showProductDetails() {
  if (!productId) {
    document.getElementById("product-container").textContent =
      "No product selected.";
    return;
  }

  const product = await productService.getProductsById(productId);
  if (!product) {
    document.getElementById("product-container").textContent =
      "Product not found.";
    return;
  }

  const container = document.getElementById("product-container");
  container.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
  `;

  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = `
    <h2 class="text-2xl font-bold">${product.title}</h2>
    <div class="space-y-2 text-gray-600">
      <p class="flex items-center gap-2">
        <span><img src="images/Calendar.svg" alt="Calendar"></span>
      </p>
      <p class="flex items-center gap-2">
        <span><img src="images/Location.svg" alt="Location"></span> Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos
      </p>
      <p class="flex items-center gap-2">
        <span><img src="images/User.svg" alt=""></span>
      </p>
    </div>

    <div>
        <h3 class="font-semibold mb-2">Product Description</h3>
        <p class="text-sm leading-relaxed text-gray-700">${product.description}</p>
    </div>

    <div>
        <h3 class="font-semibold mb-2">Product Pricing</h3>
        <div class="flex items-center gap-6">
          <div>
            <p class="font-medium">price</p>
            <p class="text-purple-700 font-semibold">$${product.price}</p>
            <p class="text-sm text-gray-500 mb-4"><strong>Category:</strong> ${product.category}</p>
          </div>
        </div>
      </div>

      <button class="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800">
        Buy now
      </button>
  `;
}

showProductDetails();
