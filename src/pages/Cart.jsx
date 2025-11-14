"use client";

import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../components/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <a href="/shop" className="flex items-center text-white hover:text-orange-500">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </a>

            <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>
          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded-md"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
            <ShoppingBag className="h-16 w-16 text-neutral-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-neutral-400 mb-6">Add some amazing products to get started!</p>

            <a href="/shop">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold">
                Browse Products
              </button>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-neutral-800 rounded-lg overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-neutral-600 text-xs">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-xl font-bold text-orange-500 mb-4">₹{item.price.toFixed(2)}</p>

                      {/* Quantity */}
                      <div className="flex items-center gap-4">

                        {/* Quantity Buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/10"
                          >
                            <Minus className="h-4 w-4" />
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value) || 1)
                            }
                            className="w-16 h-8 text-center bg-white/5 border border-white/20 text-white rounded-md"
                          />

                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/10"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded-md flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-2" /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Subtotal */}
                    <div className="text-right">
                      <p className="text-sm text-neutral-400 mb-1">Subtotal</p>
                      <p className="text-xl font-bold text-white">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sticky top-24">

                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 text-neutral-300">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between text-2xl font-bold text-white">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Free Shipping Notice */}
                {subtotal < 2000 && (
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mb-6">
                    <p className="text-orange-400 text-sm text-center">
                      Add ₹{(2000 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <a href="/checkout">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 rounded-xl">
                    Proceed to Checkout
                  </button>
                </a>

                <a href="/shop">
                  <button className="w-full mt-3 border border-white/20 text-white hover:bg-white/10 bg-transparent py-3 rounded-xl">
                    Continue Shopping
                  </button>
                </a>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
