"use client";

import ProductCard from "./ProductCard";

export default function ProductList({ products }) {

  console.log("PRODUCTS FROM SERVER:", products);

  return (
    <>
      <h2>
        Received: {products?.length}
      </h2>

      {products?.map((product)=>(
        <ProductCard 
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}