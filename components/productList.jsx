"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
}) {
  const [search, setSearch] = useState("");

  const filteredProducts =
    products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-2 mb-6 w-full"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-4 gap-5"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={item}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}