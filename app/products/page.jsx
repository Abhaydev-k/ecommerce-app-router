import { getProducts } from "@/services/productService";
import ProductList from "@/components/ProductList";
import PageWrapper from "@/components/PageWrapper";

export default async function Products() {
  const products = await getProducts();

  return (
    <PageWrapper>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Products
        </h1>

        <p className="mb-4">
          Products Found: {products?.length}
        </p>

        <ProductList products={products} />
      </div>
    </PageWrapper>
  );
}