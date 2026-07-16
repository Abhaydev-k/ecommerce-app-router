"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded flex gap-5 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-bold">
                  {item.title}
                </h2>

                <p>
                  Unit Price: $
                  {item.price.toFixed(2)}
                </p>

                <p>
                  Total: $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>

                <span className="font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-black text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-8 border-t pt-4">
            <h2 className="text-3xl font-bold">
              Grand Total: $
              {totalPrice.toFixed(2)}
            </h2>

            <h3 className="text-xl mt-2">
              Total Items:
              {" "}
              {cartItems.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}