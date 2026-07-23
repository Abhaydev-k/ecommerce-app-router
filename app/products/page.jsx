import { getProducts } from "@/services/productService";
import ProductList from "@/components/productList";
import PageWrapper from "@/components/pageWrapper";

export default async function Products() {
  const products = await getProducts();

  console.log(
    "PAGE RECEIVED:",
    products?.length
  );

  return (
    <div>
      <h1>Products</h1>
      <p>{products?.length}</p>
    </div>
  );
}