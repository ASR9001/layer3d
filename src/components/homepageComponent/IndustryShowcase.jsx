"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Zap,
  ArrowUp,
} from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);

  const changeSlide = useCallback((newIndex) => {
    if (newIndex === currentIndex || newIndex < 0 || newIndex >= industries.length) return;

    setIsLocked(true);
    setCurrentIndex(newIndex);

    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsLocked(false), 1000);
  }, [currentIndex]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && index !== currentIndex) {
              changeSlide(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [currentIndex, changeSlide]);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, industries.length);
  }, []);

  const current = industries[currentIndex];
  const Icon = current.icon;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white text-black overflow-visible"
      style={{
        height: `${industries.length * 100}vh`,
        minHeight: `${industries.length * 100}vh`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 6,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Orange Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -60, -120],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 4,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Fixed Display Panel */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-40 bg-white">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="relative w-full max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image Section */}
              <motion.div
                className="flex-1 flex items-center justify-center relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-xl" />

                  <img
                    src={current.image}
                    alt={current.title}
                    className="relative rounded-2xl shadow-2xl w-full max-w-2xl object-cover aspect-square border-2 border-gray-200"
                  />

                  {/* Industry Badge */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {currentIndex + 1} / {industries.length}
                  </motion.div>
                </div>
              </motion.div>

              {/* Info Section */}
              <motion.div
                className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black text-black">
                      {current.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-xl leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-6">
                  {/* Capabilities */}
                  <div>
                    <h3 className="text-black font-black text-2xl mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      Capabilities
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {current.capabilities.map((cap, index) => (
                        <motion.span
                          key={cap}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-orange-100 text-orange-700 rounded-xl px-4 py-2 font-semibold text-lg border border-orange-200 hover:bg-orange-200 transition-all cursor-pointer"
                        >
                          {cap}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <h3 className="text-black font-black text-2xl mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-600" />
                      Materials
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {current.materials.map((mat, index) => (
                        <motion.span
                          key={mat}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                          className="bg-gray-100 text-gray-700 rounded-xl px-4 py-2 font-semibold text-lg border border-gray-200 hover:bg-gray-200 transition-all cursor-pointer"
                        >
                          {mat}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                 {/* Applications */}
<div>
  <h3 className="text-black font-black text-2xl mb-4">Applications</h3>

  <div className="flex items-start justify-between gap-4">
    {/* Applications List */}
    <ul className="space-y-3 max-h-40 overflow-y-auto pr-4 custom-scrollbar flex-1">
      {current.applications.map((app, index) => (
        <motion.li
          key={app}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
          className="flex items-start gap-3 text-gray-700 text-lg"
        >
          <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="font-medium">{app}</span>
        </motion.li>
      ))}
    </ul>

    {/* Circular Button */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center
                 bg-orange-600 text-white
                 w-16 h-16 rounded-full
                 shadow-lg hover:bg-orange-700 transition-all duration-300"
    >
      <ArrowRight className="w-6 h-6" />
    </motion.button>
  </div>
</div>

                </div>

                {/* CTA Button */}

              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
          {industries.map((industry, idx) => (
            <motion.button
              key={industry.id}
              onClick={() => {
                changeSlide(idx);
                sectionRefs.current[idx]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className={`flex items-center gap-3 transition-all duration-300 ${idx === currentIndex
                  ? "text-orange-600 scale-110"
                  : "text-gray-400 hover:text-gray-600"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-orange-600 scale-125" : "bg-gray-300"
                }`} />
              <span className={`text-sm font-bold transition-all ${idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}>
                {industry.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-64 bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-orange-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / industries.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Scroll Sections (for intersection detection) */}
      {industries.map((industry, index) => (
        <div
          key={industry.id}
          ref={el => sectionRefs.current[index] = el}
          className="w-full"
          style={{
            height: "85vh",
            minHeight: "85vh",
          }}
        />
      ))}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.3); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.5); }
      `}</style>
    </section>
  );
}