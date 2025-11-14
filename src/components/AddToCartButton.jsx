"use client";

import { useCart } from "./CartContext";



export function AddToCartButton({ product, className = "" }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
      className={`w-full rounded-xl px-4 py-2 font-semibold bg-orange-500 text-white hover:bg-orange-600 transition ${className}`}
    >
      Add to Cart
    </button>
  );
}
