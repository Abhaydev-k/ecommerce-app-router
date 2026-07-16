"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function AddToCartButton({
  product,
}) {
  const { addToCart } = useCart();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => addToCart(product)}
      className="bg-green-600 text-white px-4 py-2 rounded mt-4"
    >
      Add To Cart
    </motion.button>
  );
}