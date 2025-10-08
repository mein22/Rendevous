// productService.js
export class ProductService {
  #handlePromise = async ({ url = '', method = "GET", body = null }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  getProducts = async () => {
    return await this.#handlePromise({});
  };

  getProductsById = async (id) => {
    return await this.#handlePromise({ url: id });
  };
}
