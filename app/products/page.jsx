import { getProducts } from "@/services/productService";
import ProductList from "@/components/productList";
import PageWrapper from "@/components/pageWrapper";

export default async function Products() {
  const products = await getProducts();

  return (
    <PageWrapper>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Products
        </h1>

        <p>Products found: {products?.length}</p>

    export default async function Products() {
  const products = await getProducts();

  console.log("PAGE PRODUCTS:", products);

  return (
    <PageWrapper>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Products
        </h1>

        <p>Products found: {products?.length}</p>

        <ProductList products={products} />
      </div>
    </PageWrapper>
  );
}    <ProductList products={products} />
      </div>
    </PageWrapper>
  );
}