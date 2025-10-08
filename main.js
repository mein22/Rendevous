// 1. Default import 
import productA from "./products.js";

// 2. Named imports
import { productName, price, quantity } from "./products.js";

// 3. Named import 
import { productC, category } from "./products.js";

// 4. Renamed import
import { shoppingCart } from "./cart.js";

// 5. Default object import
import payment from "./payment.js";

// Console logs
console.log("Product A:", productA);
console.log("Product B:", { name: productName, price, quantity });
console.log("Product C:", productC, "Category:", category);
console.log("Cart:", shoppingCart);
console.log("Payment:", payment);

