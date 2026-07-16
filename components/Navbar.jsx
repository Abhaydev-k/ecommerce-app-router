"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="font-bold text-2xl">
          E-Shop
        </h1>

        <div className="flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">
            Cart ({cartItems.length})
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}