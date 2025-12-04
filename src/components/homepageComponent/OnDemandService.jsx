"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function OnDemandService() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [quote, setQuote] = useState(null);

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

  const handleQuote = () => {
    if (!uploadedFile) {
      setQuote("⚠️ Please upload a file first!");
      return;
    }
    const basePrice = 20;
    const sizeFactor = uploadedFile.size / (1024 * 1024);
    const estimated = basePrice + sizeFactor * 5;
    setQuote(`💰 Estimated Price: $${estimated.toFixed(2)} USD`);
  };

  return (
    <section
      id="on-demand"
      className="relative py-14 bg-white overflow-hidden min-h-screen flex flex-col justify-start"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-500/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 200}px`,
              height: `${80 + Math.random() * 200}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
            <Zap className="h-4 w-4 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm">
              INSTANT QUOTES • FAST TURNAROUND
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-black mb-6">
            On-Demand{" "}
            <span className="text-orange-600 relative">
              3D Printing
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
              />
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Upload your design files and get professional 3D printing services
            with <span className="text-orange-600 font-semibold">
              fast turnaround times
            </span>{" "}
            and{" "}
            <span className="text-orange-600 font-semibold">
              premium quality
            </span>.
          </p>
        </div>

        {/* FORM + CARDS */}
        <div className="flex flex-col gap-12 w-full">

          {/* FORM */}
          <motion.div className="relative">
            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-white border-2 border-gray-200 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Upload className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">
                    Upload Your Design
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Supported: .STL, .OBJ, .3MF, .PLY, and more
                  </p>
                </div>
              </div>

              {/* Upload Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  dragActive
                    ? "border-orange-500 bg-orange-50 scale-105"
                    : uploadedFile
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-orange-400 hover:bg-orange-50/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedFile ? (
                  <div className="space-y-3">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <p className="text-black font-bold text-lg">
                      {uploadedFile.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="relative inline-block">
                      <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                      <Sparkles className="h-6 w-6 text-orange-500 absolute -top-1 -right-1" />
                    </div>
                    <p className="text-black font-bold text-xl">
                      Drag & drop your 3D file here
                    </p>
                    <p className="text-gray-600">or click to browse</p>
                  </div>
                )}

                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </motion.div>

              {/* Horizontal Form */}
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { type: "text", placeholder: "Project Name" },
                  {
                    type: "select",
                    options: ["Select Material", "PLA", "ABS", "PETG", "Resin"],
                  },
                  {
                    type: "select",
                    options: [
                      "Print Quality",
                      "Draft (0.3mm)",
                      "Standard (0.2mm)",
                      "High (0.1mm)",
                      "Ultra (0.05mm)",
                    ],
                  },
                  { type: "number", placeholder: "Quantity", defaultValue: "1" },
                ].map((field, index) => (
                  <div key={index} className="flex-1 min-w-[220px]">
                    {field.type === "select" ? (
                      <select className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 text-black">
                        {field.options.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 text-black"
                      />
                    )}
                  </div>
                ))}

                <textarea
                  rows="3"
                  placeholder="Special Requirements..."
                  className="flex-1 min-w-[220px] px-6 py-4 rounded-xl bg-white border-2 border-gray-200 text-black"
                />
              </div>

              {/* Quote Button */}
              <button className="mt-8 w-full lg:w-auto px-10 bg-orange-600 text-white font-black text-lg py-5 rounded-2xl flex items-center gap-2">
                GET INSTANT QUOTE <ArrowRight className="h-5 w-5" />
              </button>

              {quote && (
                <p className="text-center text-xl font-black text-orange-600 mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                  {quote}
                </p>
              )}
            </div>
          </motion.div>

          {/* FEATURE CARDS BELOW FORM */}
         {/* 🔹 Right Column — Service Features */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
      color: "orange",
    },
    {
      icon: FileText,
      title: "Supported File Formats",
      content: [".STL", ".OBJ", ".3MF", ".PLY", ".X3D", ".DAE"],
      color: "blue",
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
      color: "green",
    },
  ].map((feature, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg 
                 flex flex-col items-center text-center p-8 
                 aspect-square transition-all duration-300"
    >
      <div className={`p-4 rounded-xl bg-${feature.color}-100 mb-4`}>
        <feature.icon className={`h-10 w-10 text-${feature.color}-600`} />
      </div>

      <h3 className="text-2xl font-black text-black mb-4">
        {feature.title}
      </h3>

      <ul className="space-y-2 text-gray-700 font-medium">
        {feature.content.map((c, idx) => (
          <motion.li
            key={c}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex items-center gap-2 justify-center"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            {c}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  ))}
</motion.div>

        </div>
      </div>
    </section>
  );
}
