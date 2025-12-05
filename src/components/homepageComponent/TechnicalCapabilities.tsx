"use client"

import { Target, Layers, Gauge, Shield, Clock, Printer, Sparkles, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ShopBanner from "../ShopBanner"

const capabilities = [
  {
    icon: Printer,
    title: "Advanced Equipment",
    description: "State-of-the-art 3D printers with precision engineering",
    specs: ["FDM & SLA Technology", "Large Format Printing", "Multi-Material Support", "Industrial Grade"],
  },
  {
    icon: Target,
    title: "Precision Accuracy",
    description: "Exceptional dimensional accuracy and surface finish",
    specs: ["±0.1mm Tolerance", "Layer Heights to 0.05mm", "Fine Detail Resolution", "Quality Assurance"],
  },
  {
    icon: Layers,
    title: "Material Expertise",
    description: "Comprehensive range of professional-grade materials",
    specs: ["Engineering Plastics", "Metal Powders", "Biocompatible Resins", "Composite Materials"],
  },
  {
    icon: Gauge,
    title: "Quality Control",
    description: "Rigorous testing and validation processes",
    specs: ["Dimensional Inspection", "Material Testing", "Surface Analysis", "Performance Validation"],
  },
  {
    icon: Shield,
    title: "Certifications",
    description: "Industry-standard certifications and compliance",
    specs: ["ISO 9001:2015", "Medical Device Standards", "Automotive Compliance", "Safety Protocols"],
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Rapid production with maintained quality standards",
    specs: ["24-48 Hour Prototypes", "Rush Orders Available", "Batch Production", "Express Delivery"],
  },
]

const equipment = [
  {
    name: "Industrial FDM Printers",
    description: "High-temperature, large-format printing capabilities",
    image: "/industrial-fdm-3d-printer-large-format-professiona.jpg",
  },
  {
    name: "SLA Resin Printers",
    description: "Ultra-high resolution for detailed components",
    image: "/sla-resin-3d-printer-high-resolution-professional.jpg",
  },
  {
    name: "Metal 3D Printers",
    description: "Direct metal laser sintering technology",
    image: "/metal-3d-printer-dmls-industrial-manufacturing.jpg",
  },
  {
    name: "Post-Processing Equipment",
    description: "Professional finishing and quality control",
    image: "/3d-printing-post-processing-equipment-professional.jpg",
  },
]

export default function TechnicalCapabilities() {
  return (
    <section id="capabilities" className="relative py-20 bg-white overflow-hidden">
      {/* 🔹 Animated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 150}px`,
              height: `${60 + Math.random() * 150}px`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 8,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 🔹 Floating orange dots */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -80, -160],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 4,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* 🔹 Pulse effects */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-500 rounded-full"
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: i * 0.7,
              ease: "easeOut",
            }}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              width: "120px",
              height: "120px",
            }}
          />
        ))}
      </div>

      {/* 🔹 Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-50 rounded-full border border-orange-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Zap className="h-4 w-4 text-orange-600" />
            <span className="text-orange-600 font-bold text-sm">ADVANCED TECHNOLOGY • PROFESSIONAL GRADE</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-black text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical{" "}
            <span className="text-orange-600 relative">
              Capabilities
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our advanced equipment and expertise ensure the{" "}
            <span className="text-orange-600 font-bold">highest quality results</span> for even the most demanding applications.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-black text-black flex-1">
                    {capability.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <ul className="space-y-3">
                  {capability.specs.map((spec, specIndex) => (
                    <motion.li
                      key={spec}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (specIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-800 font-medium text-lg"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {spec}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Equipment Section */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl lg:text-5xl font-black text-black mb-6">
              Our <span className="text-orange-600">Equipment</span>
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              State-of-the-art 3D printing technology for professional-grade results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Printer className="h-16 w-16 text-orange-500 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-orange-500/10 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-black text-black mb-3 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ShopBanner></ShopBanner>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-orange-600 text-white rounded-3xl p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
              Get instant quotes and professional 3D printing services with our advanced capabilities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Started Today
              <Sparkles className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}