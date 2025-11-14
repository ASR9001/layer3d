"use client";

import {
  Car,
  Heart,
  GraduationCap,
  Gem,
  Building,
  Cog,
  ArrowRight,
  CheckCircle,
  Home,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Industry data
const industries = [
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    description:
      "High-performance automotive components and prototypes with exceptional durability and precision.",
    image: "https://layerx3d.in/automotive-3d-printed-parts.jpg",
    capabilities: ["Engine Components", "Custom Brackets", "Prototype Parts", "Tooling & Fixtures"],
    materials: ["ABS", "PETG", "Carbon Fiber", "Metal Alloys"],
    applications: [
      "Rapid prototyping for new vehicle designs",
      "Custom tooling and manufacturing aids",
      "Low-volume production parts",
      "Functional testing components",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    description:
      "Medical-grade 3D printing solutions for surgical planning, prosthetics, and medical devices.",
    image: "https://layerx3d.in/medical-3d-printed-prosthetic.jpg",
    capabilities: ["Surgical Guides", "Prosthetics", "Medical Models", "Custom Implants"],
    materials: ["Biocompatible Resins", "Medical Grade TPU", "Titanium", "PEEK"],
    applications: [
      "Patient-specific surgical planning models",
      "Custom prosthetic devices",
      "Anatomical models for education",
      "Medical device prototypes",
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    description:
      "Educational models and teaching aids that bring complex concepts to life.",
    image: "https://layerx3d.in/educational-3d-printed-models.jpg",
    capabilities: ["Teaching Models", "Scientific Replicas", "Interactive Tools", "Custom Displays"],
    materials: ["PLA", "ABS", "Multi-Color Filaments", "Flexible Materials"],
    applications: [
      "Molecular and atomic models",
      "Historical artifact replicas",
      "Engineering demonstration tools",
      "Interactive learning aids",
    ],
  },
  {
    id: "jewelry",
    title: "Jewelry",
    icon: Gem,
    description: "Intricate jewelry designs with fine details and premium finishing.",
    image: "https://layerx3d.in/luxury-3d-printed-jewelry.jpg",
    capabilities: ["Custom Rings", "Pendants", "Earrings", "Casting Masters"],
    materials: ["Castable Resins", "Precious Metals", "Wax Filaments", "High-Detail Resins"],
    applications: [
      "Custom engagement rings",
      "Prototype jewelry designs",
      "Investment casting masters",
      "Personalized accessories",
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: Building,
    description:
      "Architectural models and building components for visualization and construction.",
    image: "https://layerx3d.in/architectural-3d-printed-model.jpg",
    capabilities: ["Scale Models", "Building Components", "Landscape Models", "Concept Visualization"],
    materials: ["Architectural Resins", "Multi-Material", "Transparent Materials", "Concrete Filaments"],
    applications: [
      "Client presentation models",
      "Urban planning visualizations",
      "Building component prototypes",
      "Construction planning aids",
    ],
  },
  {
    id: "prototyping",
    title: "Prototyping",
    icon: Cog,
    description:
      "Rapid prototyping services for product development and innovation.",
    image: "https://layerx3d.in/product-prototype-3d-printed.jpg",
    capabilities: ["Functional Prototypes", "Concept Models", "Testing Parts", "Design Validation"],
    materials: ["Engineering Plastics", "Flexible Materials", "Composite Materials", "Metal Powders"],
    applications: [
      "Product development cycles",
      "Design iteration and testing",
      "Market validation models",
      "Manufacturing process validation",
    ],
  },
  {
    id: "home-decor",
    title: "Home Decor",
    icon: Home,
    description:
      "Custom home decor items and functional household accessories with personalized designs.",
    image: "https://layerx3d.in/modern-3d-printed-home-decor-vase.jpg",
    capabilities: ["Decorative Vases", "Custom Lighting", "Wall Art", "Functional Accessories"],
    materials: ["PLA", "Wood-filled Filaments", "Marble-effect Resins", "Flexible TPU"],
    applications: [
      "Personalized home accessories",
      "Custom lighting fixtures",
      "Decorative wall elements",
      "Functional storage solutions",
    ],
  },
  {
    id: "art-pieces",
    title: "Art Pieces",
    icon: Palette,
    description:
      "Unique artistic creations and sculptures with intricate details and creative expression.",
    image: "https://layerx3d.in/artistic-3d-printed-sculpture.jpg",
    capabilities: ["Custom Sculptures", "Art Installations", "Miniature Art", "Abstract Designs"],
    materials: ["Multi-Color Filaments", "Translucent Resins", "Metal-filled Materials", "Ceramic-like Filaments"],
    applications: [
      "Gallery exhibition pieces",
      "Commissioned artwork",
      "Collectible figurines",
      "Interactive art installations",
    ],
  },
];

export default function IndustryShowcase() {
  return (
    <section id="industries" className="relative py-20 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* 🔹 Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`blob-${i}`}
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

      {/* 🔹 Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From automotive precision to artistic expression, we deliver specialized 3D printing solutions tailored to your industry’s unique needs.
          </p>
        </div>

        {/* 🔹 Animated Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
              >
                {/* Image + Icon */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full p-2 shadow-md">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{industry.description}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm">Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2 py-1 text-xs bg-white/10 text-white rounded-lg border border-white/10"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm">Materials</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.materials.map((mat) => (
                        <span
                          key={mat}
                          className="px-2 py-1 text-xs text-gray-300 border border-white/20 rounded-lg"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm">Applications</h4>
                    <ul className="space-y-1">
                      {industry.applications.slice(0, 3).map((app) => (
                        <li key={app} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-white/20 text-white bg-white/10 hover:bg-orange-500/20 transition-all duration-300">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
