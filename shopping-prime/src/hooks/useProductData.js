import { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";

export const useProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  return { products };
};
