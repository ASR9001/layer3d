"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles, Tag } from "lucide-react";

export default function ShopBanner() {
  const handleShopRedirect = () => {
    window.location.href = "/shop"; // Change this to your shop route
  };

  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Background Elements */}
     
      {/* Content Container */}
      <div className="relative  mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20"
        >
          {/* Inner Content */}
          <div className="relative p-8 lg:p-12">
            {/* Top Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Tag className="h-4 w-4" />
              <span className="text-white/90 text-sm font-bold">Limited Time Offer</span>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="h-10 w-10 text-white" />
                  <h2 className="text-4xl lg:text-5xl font-black text-white">
                    Visit Our <span className="text-yellow-300">Shop</span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/90 mb-6 max-w-2xl">
                  Discover premium 3D printing materials, accessories, and ready-made products. 
                  Everything you need for your next project in one place.
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {["High-Quality Materials", "Fast Shipping", "Best Prices", "Expert Support"].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl"
                    >
                      <Sparkles className="h-4 w-4 text-yellow-300" />
                      <span className="text-white font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleShopRedirect}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-orange-600 font-black text-xl px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 min-w-[220px] justify-center"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "500+", label: "Products" },
                  { value: "24/7", label: "Support" },
                  { value: "4.9★", label: "Rating" },
                  { value: "Free", label: "Shipping Over $50" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}