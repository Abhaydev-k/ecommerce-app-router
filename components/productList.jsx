"use client";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "2px solid red",
            padding: "20px",
            margin: "10px",
          }}
        >
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}