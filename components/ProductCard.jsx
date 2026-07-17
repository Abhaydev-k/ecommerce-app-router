"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
    >
      <div className="h-60 flex justify-center items-center p-6">
        <img
  src={product.images?.[0]}
  alt={product.title}
  className="h-40 mx-auto object-contain"
/>
      </div>

      <div className="p-5">
        <h2 className="font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-green-600 text-xl font-bold mt-2">
          ${product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block text-center bg-black text-white py-3 rounded-xl"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}