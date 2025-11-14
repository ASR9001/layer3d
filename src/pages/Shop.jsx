import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Filter, Search, Upload, FileText, Download } from "lucide-react";
import { AddToCartButton } from "../components/AddToCartButton";
import { useCart } from "../components/CartContext";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [customPrintData, setCustomPrintData] = useState({
    material: "PLA (Standard)",
    quantity: 1,
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmittingCustom, setIsSubmittingCustom] = useState(false);
  const [customSubmitStatus, setCustomSubmitStatus] = useState("idle"); // "idle" | "success" | "error"

  // optional cart context (if present)
  const { addToCart } = (useCart && useCart()) || { addToCart: () => {} };

  useEffect(() => {
    const fetchProducts = async () => {
      if (typeof window === "undefined") {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          setError("Error loading products. Please try again.");
          setLoading(false);
          return;
        }
        const data = await response.json();
        setProducts(data || []);
        if (!data || data.length === 0) {
          setError("No products available yet. Please check back soon!");
        } else {
          setError(null);
        }
      } catch (err) {
        setError("An unexpected error occurred. Please refresh the page.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // optional auth check (keeps behavior from original)
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/user");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.categories?.name).filter(Boolean)))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.categories?.name === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (id) => {
    // generic client-side navigation — works in CRA/Vite/public apps
    window.location.href = `/product/${id}`;
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSize) {
        alert("File size must be less than 50MB");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleCustomPrintSubmit = async (e) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert("Please upload a file");
      return;
    }

    setIsSubmittingCustom(true);
    setCustomSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("material", customPrintData.material);
      formData.append("quantity", customPrintData.quantity.toString());

      const response = await fetch("/api/custom-print-request", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setCustomSubmitStatus("success");
        setUploadedFile(null);
        setCustomPrintData({ material: "PLA (Standard)", quantity: 1 });
      } else {
        setCustomSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setCustomSubmitStatus("error");
    } finally {
      setIsSubmittingCustom(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-500/40 to-orange-700/30 blur-[140px]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              width: `${200 + Math.random() * 220}px`,
              height: `${200 + Math.random() * 220}px`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10 + Math.random() * 5, ease: "easeInOut" }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-24 pb-12">
        <section className="py-20 text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Shop <span className="text-orange-500">Layer X</span> Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover our curated collection of 3D printed products, or upload your own design for custom printing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                className="pl-10 pr-3 py-3 w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/50"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={() => {}}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-orange-500/20 hover:border-orange-400"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </section>

        <section className="py-8 border-t border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === selectedCategory
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-white/10 border border-white/20 text-white hover:bg-orange-500/20 hover:border-orange-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white/10 rounded-2xl h-96 animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                  <p className="text-xl text-orange-400 font-semibold mb-4">Unable to load products</p>
                  <p className="text-neutral-300 mb-6">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-neutral-400">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      onClick={() => handleProductClick(product.id)}
                      className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:shadow-orange-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={product.image_url || "/placeholder.svg?height=300&width=400"}
                          alt={product.name}
                          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.categories && (
                          <span className="absolute top-3 left-3 bg-orange-500/90 text-white px-2 py-1 rounded-full text-xs">
                            {product.categories.name}
                          </span>
                        )}
                        {product.is_featured && (
                          <span className="absolute top-3 right-3 bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg text-white mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{product.description}</p>

                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-orange-500">₹{product.price.toFixed(2)}</span>
                          {product.compare_at_price && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{product.compare_at_price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400 mt-2">
                          {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : "Out of stock"}
                        </p>
                      </div>

                      <div className="p-6 pt-0">
                        {AddToCartButton ? (
                          <AddToCartButton
                            product={{
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image_url || undefined,
                              stock_quantity: product.stock_quantity,
                            }}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                          />
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart &&
                                addToCart({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                });
                            }}
                            className="w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Something Custom?</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-10">
              Can't find what you're looking for? Upload your own 3D design and we'll bring it to life with professional-grade printing.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-bold">
                  Upload Your <span className="text-white/90">Custom Design</span>
                </h3>
                <p className="text-lg opacity-90">
                  Have your own 3D model? Upload your .STL, .OBJ, or other 3D files and we'll bring them to life.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-white" />
                    <span>Upload your 3D files (.STL, .OBJ, .3MF, .PLY)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-white" />
                    <span>Get instant quote and material options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-white" />
                    <span>Receive your custom print in 3–7 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-6 text-center">Upload Your Design</h4>

                <form onSubmit={handleCustomPrintSubmit}>
                  {customSubmitStatus === "success" && (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-lg mb-4">
                      <p className="font-semibold mb-1">Thank you for your custom print request!</p>
                      <p className="text-sm">We've received your design and will send you a detailed quote within 24 hours.</p>
                    </div>
                  )}
                  {customSubmitStatus === "error" && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-4 rounded-lg mb-4">
                      Something went wrong. Please try again or contact us at info@layerx3d.com
                    </div>
                  )}

                  <label
                    htmlFor="file-upload"
                    className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center mb-6 hover:border-orange-300 transition-colors cursor-pointer block"
                  >
                    <Upload className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">{uploadedFile ? uploadedFile.name : "Drop your files here"}</p>
                    <p className="text-sm opacity-75">or click to browse</p>
                    <p className="text-xs opacity-60 mt-2">Supports: STL, OBJ, 3MF, PLY (Max 50MB)</p>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".stl,.obj,.3mf,.ply"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Material Preference</label>
                      <select
                        value={customPrintData.material}
                        onChange={(e) => setCustomPrintData((prev) => ({ ...prev, material: e.target.value }))}
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                      >
                        <option>PLA (Standard)</option>
                        <option>ABS (Durable)</option>
                        <option>PETG (Chemical Resistant)</option>
                        <option>Resin (High Detail)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Quantity</label>
                      <input
                        type="number"
                        value={customPrintData.quantity}
                        onChange={(e) =>
                          setCustomPrintData((prev) => ({ ...prev, quantity: Number.parseInt(e.target.value) || 1 }))
                        }
                        min="1"
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingCustom || !uploadedFile}
                      className="w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
                    >
                      {isSubmittingCustom ? "Submitting..." : "Get Instant Quote"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
