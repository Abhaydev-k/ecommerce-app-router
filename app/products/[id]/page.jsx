import { getProduct } from "@/services/productService";
import AddToCartButton from "@/components/AddToCartButton";
import PageWrapper from "@/components/pageWrapper";

export default async function ProductDetails({
  params,
}) {
  const product = await getProduct(
    params.id
  );

  if (!product) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-green-600 mt-6">
            ${product.price}
          </p>

          <p className="mt-4">
            Category: {product.category}
          </p>

          <p className="mt-2">
            Rating: {product.rating}
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}