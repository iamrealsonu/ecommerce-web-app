import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Here We calling a function named `showProductContainer` that takes an array of products as parameter.
showProductContainer(products);

