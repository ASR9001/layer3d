"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";

export default function OnDemandService() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [quote, setQuote] = useState(null);

  // 🔹 Drag and Drop Handling
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  // 🔹 Instant quote calculation
  const handleQuote = () => {
    if (!uploadedFile) {
      setQuote("⚠️ Please upload a file first!");
      return;
    }
    const basePrice = 20;
    const sizeFactor = uploadedFile.size / (1024 * 1024); // MB
    const estimated = basePrice + sizeFactor * 5;
    setQuote(`💰 Estimated Price: $${estimated.toFixed(2)} USD`);
  };

  return (
    <section
      id="on-demand"
      className="relative py-20 bg-black overflow-hidden min-h-screen"
    >
      {/* 🔹 Animated glowing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-500/40 to-orange-600/30 blur-[160px]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              width: `${200 + Math.random() * 250}px`,
              height: `${200 + Math.random() * 250}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 25, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🔹 Rising sparks */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 1, 0], y: -180 }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
            delay: i * 0.25,
          }}
          style={{ left: `${Math.random() * 100}%`, bottom: 0 }}
        />
      ))}

      {/* 🔹 Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            On-Demand 3D Printing Service
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Upload your design files and get professional 3D printing services
            with fast turnaround times and premium quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 🔹 Left Column — Upload Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Upload Your Design
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Supported: .STL, .OBJ, .3MF, .PLY, and more
              </p>

              {/* Upload Box */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive
                    ? "border-orange-400 bg-orange-500/10"
                    : uploadedFile
                    ? "border-green-400 bg-green-500/10"
                    : "border-white/30 hover:border-orange-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedFile ? (
                  <div className="space-y-2">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
                    <p className="text-white font-medium">{uploadedFile.name}</p>
                    <p className="text-gray-400 text-sm">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div>
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-white font-medium">
                      Drag & drop your 3D file here
                    </p>
                    <p className="text-sm text-gray-400 mt-1">or click to browse</p>
                  </div>
                )}

                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".stl,.obj,.3mf,.ply,.x3d,.dae,.fbx"
                />
              </div>

              {/* Input Fields */}
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Project Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                  <option>Select Material</option>
                  <option>PLA</option>
                  <option>ABS</option>
                  <option>PETG</option>
                  <option>Resin</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                  <option>Print Quality</option>
                  <option>Draft (0.3mm)</option>
                  <option>Standard (0.2mm)</option>
                  <option>High (0.1mm)</option>
                  <option>Ultra (0.05mm)</option>
                </select>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  placeholder="Quantity"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
                <textarea
                  rows="3"
                  placeholder="Special Requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                ></textarea>
              </div>

              {/* Quote Button */}
              <button
                onClick={handleQuote}
                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold py-3 rounded-xl hover:scale-105 transition-transform"
              >
                Get Instant Quote
              </button>

              {quote && (
                <p className="text-center text-lg font-semibold text-orange-400 mt-4">
                  {quote}
                </p>
              )}
            </div>
          </motion.div>

          {/* 🔹 Right Column — Service Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                content: [
                  "Same-day quotes",
                  "24-48 hour production",
                  "Express delivery",
                  "Real-time tracking",
                ],
              },
              {
                icon: FileText,
                title: "Supported File Formats",
                content: [".STL", ".OBJ", ".3MF", ".PLY", ".X3D", ".DAE"],
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                content: [
                  "No hidden fees",
                  "Volume discounts",
                  "Free consultation",
                  "Secure payments",
                ],
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all p-6"
              >
                <h3 className="text-white flex items-center gap-2 text-lg font-semibold mb-3">
                  <feature.icon className="h-5 w-5 text-orange-400" />
                  {feature.title}
                </h3>
                {feature.title === "Supported File Formats" ? (
                  <div className="grid grid-cols-3 gap-2 text-sm text-white/90">
                    {feature.content.map((f) => (
                      <span key={f} className="bg-white/10 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {feature.content.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
