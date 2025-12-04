import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutPage from "../../pages/About";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero text fade out
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Hero section scale down
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  // About page slide in from right
  const aboutSlide = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-white overflow-hidden">
      {/* =============== HERO SECTION =============== */}
      <motion.div
        style={{ 
          opacity: opacityText,
          scale: heroScale 
        }}
        className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 gap-8 lg:gap-16"
      >
        {/* Background Elements */}
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
        </div>

        {/* ---------- LEFT TEXT CONTENT ---------- */}
        <div className="flex-1 space-y-8 relative z-10">
          <motion.h1 
            className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Accelerate{" "}
            <span className="text-orange-600 relative">
              Innovation
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>{" "}
            with End-to-End Manufacturing Excellence
          </motion.h1>

          <motion.p 
            className="text-gray-700 max-w-3xl text-xl lg:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-orange-600 font-bold">Layer X</span> is India's premier integrated manufacturing partner,
            delivering world-class industrial design, ultra-fast prototyping,
            low-volume production, and full-scale contract manufacturing.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-2xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-3"
            >
              Explore Our Technologies
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black text-lg font-bold rounded-2xl border-2 border-gray-300 hover:border-orange-600 hover:text-orange-600 transition-all"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {["ISO 9001 Certified", "100+ Projects", "24/7 Support", "Fast Delivery"].map((badge, index) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-gray-600 font-semibold text-sm">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------- RIGHT VIDEO ---------- */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-xl" />
          
          <video
            src="https://www.cubein.io/ast/uploads/2023/11/WEBSITE_VIDEO_MAINPAGE_1.mp4"
            autoPlay
            loop
            muted
            className="w-full max-w-[500px] rounded-2xl object-cover shadow-2xl border-2 border-gray-200 relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* =============== ABOUT SECTION SLIDE IN =============== */}
      <motion.div
        style={{
          x: aboutSlide,
          opacity: aboutOpacity,
        }}
        className="sticky top-0 h-screen bg-white"
      >
        <AboutPage />
      </motion.div>
    </section>
  );
}