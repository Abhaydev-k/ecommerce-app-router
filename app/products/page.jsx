import { getProducts } from "@/services/productService";
import ProductList from "@/components/productList";
import PageWrapper from "@/components/pageWrapper";

export default async function Products() {
  const products = await getProducts();

  console.log("Products Length:", products?.length);

  return (
    <PageWrapper>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Products
        </h1>

        <p>Products Count: {products?.length}</p>

        <ProductList products={products} />
      </div>
    </PageWrapper>
  );
}