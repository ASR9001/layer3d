"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp, Sparkles, Zap, Printer } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const industries = ["Automotive", "Healthcare", "Education", "Jewelry", "Architecture", "Prototyping"]
  const services = [
    "Rapid Prototyping",
    "Production Parts",
    "Custom Design",
    "Material Consulting",
    "Quality Testing",
    "Post-Processing",
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white border-t-2 border-gray-200 text-black overflow-hidden">
      {/* 🔹 Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/5 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 6,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 🔹 Floating orange dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -40, -80],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 3,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0%',
            }}
          />
        ))}
      </div>

      {/* 🔹 Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Printer className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-3xl font-black text-black">Layer X</h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Leading provider of professional 3D printing solutions across multiple industries.{" "}
              <span className="text-orange-600 font-semibold">Precision, quality, and innovation in every layer.</span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gray-100 hover:bg-orange-600 transition-all duration-300 text-gray-600 hover:text-white shadow-sm hover:shadow-orange-500/30"
                >
                  <Icon className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-2xl mb-6 text-black flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${industry.toLowerCase()}`}
                    className="text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                    {industry}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-2xl mb-6 text-black flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-600" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-lg text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-2xl mb-6 text-black">Contact</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group"
              >
                <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700 font-medium">info@layerx3d.com</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group"
              >
                <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700 font-medium">+1 (555) 123-4567</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group"
              >
                <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform mt-1">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700 font-medium leading-relaxed">
                  123 Innovation Drive
                  <br />Tech City, TC 12345
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t-2 border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-600 text-lg font-medium">
              © {new Date().getFullYear()} Layer X. All rights reserved.
            </p>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Return Policy", "Shipping Policy"].map((policy, index) => (
                <motion.a
                  key={policy}
                  href={`/${policy.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors font-medium text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {policy}
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="font-bold">Top</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t-2 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["ISO 9001 Certified", "Secure Payments", "24/7 Support", "Quality Guarantee"].map((badge, index) => (
            <motion.div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-gray-700 font-medium text-sm">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}