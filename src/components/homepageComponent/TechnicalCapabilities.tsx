"use client"

import { Target, Layers, Gauge, Shield, Clock, Printer } from "lucide-react"
import { motion } from "framer-motion"

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
    <section id="capabilities" className="relative py-20 gradient-bgt overflow-hidden">
      {/* 🔹 Animated background blobs + sparks */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-500/50 to-orange-600/40 blur-[160px]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              width: `${200 + Math.random() * 250}px`,
              height: `${200 + Math.random() * 250}px`,
            }}
            animate={{ y: [0, -30, 0], x: [0, 25, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
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
      </div>

      {/* 🔹 Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technical Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced equipment and expertise ensure the highest quality results for even the most demanding applications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {capabilities.map((capability) => {
            const IconComponent = capability.icon
            return (
              <div
                key={capability.title}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <IconComponent className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                </div>

                <p className="text-gray-300 text-sm mb-4">{capability.description}</p>

                <ul className="space-y-2">
                  {capability.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-sm text-white/90">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Equipment</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              State-of-the-art 3D printing technology for professional-grade results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div
                key={item.name}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
