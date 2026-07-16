"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/E banner.jpg"
        alt="Background Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Discover Amazing Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl"
          >
            Premium Quality • Fast Delivery • Secure Shopping
          </motion.p>

          <Link
            href="/products"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105"
          >
            Shop Now
          </Link>

        </div>
      </div>

    </section>
  );
}
