import { getProduct } from "@/services/productService";
import AddToCartButton from "@/components/AddToCartButton";
import PageWrapper from "@/components/pageWrapper";

export default async function ProductDetails({
  params,
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <PageWrapper>
      <div className="p-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 object-contain"
        />

        <h1 className="text-3xl font-bold mt-5">
          {product.title}
        </h1>

        <p className="mt-4">
          {product.description}
        </p>

        <h2 className="text-2xl font-bold text-green-600 mt-4">
          ${product.price}
        </h2>

        <AddToCartButton
          product={product}
        />
      </div>
    </PageWrapper>
  );
}