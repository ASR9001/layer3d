"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, FileText, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    project: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", industry: "", project: "" });
      } else setSubmitStatus("error");
    } catch (err) {
      console.log(err);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* BG Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-500/60 to-orange-600/40 blur-[180px]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              width: `${200 + Math.random() * 250}px`,
              height: `${200 + Math.random() * 250}px`,
            }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <main className="relative z-10 pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you need a quote or want to discuss a project, we’re here to help.
            </p>
          </motion.div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl p-6 shadow-xl">
                <h3 className="text-white text-lg font-semibold flex items-center gap-2 mb-6">
                  <MessageSquare className="h-5 w-5 text-orange-400" />
                  Get a Quote
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success */}
                  {submitStatus === "success" && (
                    <div className="bg-green-600/20 border border-green-500/40 text-green-100 p-4 rounded-lg">
                      Message received! We'll respond within 24 hours.
                    </div>
                  )}

                  {/* Error */}
                  {submitStatus === "error" && (
                    <div className="bg-red-600/20 border border-red-500/40 text-red-100 p-4 rounded-lg">
                      Something went wrong. Try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-gray-200 text-sm mb-1 block">Full Name</label>
                      <input
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-gray-200 text-sm mb-1 block">Email</label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  {/* Company + Industry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-200 text-sm mb-1 block">Company</label>
                      <input
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="text-gray-200 text-sm mb-1 block">Industry</label>
                      <select
                        id="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
                      >
                        <option value="" className="bg-gray-800">Select Industry</option>
                        <option value="automotive" className="bg-gray-800">Automotive</option>
                        <option value="healthcare" className="bg-gray-800">Healthcare</option>
                        <option value="education" className="bg-gray-800">Education</option>
                        <option value="jewelry" className="bg-gray-800">Jewelry</option>
                        <option value="architecture" className="bg-gray-800">Architecture</option>
                        <option value="prototyping" className="bg-gray-800">Prototyping</option>
                        <option value="other" className="bg-gray-800">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project */}
                  <div>
                    <label className="text-gray-200 text-sm mb-1 block">Project Description</label>
                    <textarea
                      id="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
                      placeholder="Describe your project..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Info */}
              <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-xl">
                <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300 text-sm">info@layerx3d.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-orange-400" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange-400" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300 text-sm">
                        123 Innovation Drive<br />Tech City, TC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="text-orange-400" />
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-300 text-sm">
                        Mon–Fri: 8AM–6PM<br />Sat: 9AM–4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-xl">
                <h3 className="text-white text-lg font-semibold mb-4">Quick Actions</h3>

                <div className="space-y-3">
                  <button className="w-full bg-white/5 border border-white/20 hover:bg-orange-500/20 flex items-center gap-2 text-white px-4 py-3 rounded-lg">
                    <FileText className="text-orange-400" /> Download Brochure
                  </button>

                  <button className="w-full bg-white/5 border border-white/20 hover:bg-orange-500/20 flex items-center gap-2 text-white px-4 py-3 rounded-lg">
                    <Calculator className="text-orange-400" /> Pricing Calculator
                  </button>

                  <button className="w-full bg-white/5 border border-white/20 hover:bg-orange-500/20 flex items-center gap-2 text-white px-4 py-3 rounded-lg">
                    <MessageSquare className="text-orange-400" /> Live Chat Support
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
