import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef} 
      className="relative  bg-white overflow-hidden "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        style={{ 
          y,
          opacity,
          scale
        }}
        className="h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 gap-8 lg:gap-16 relative z-10"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-black"
            >
              Accelerate{" "}
              <span className="text-orange-600 relative inline-block">
                Innovation
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-orange-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </span>{" "}
              <br />
              <span>with End-to-End </span>
              <br className="hidden lg:block" />
              Manufacturing Excellence
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-orange-600 font-bold">Layer X</span> is India's premier integrated manufacturing partner,
            delivering world-class industrial design, ultra-fast prototyping,
            low-volume production, and full-scale contract manufacturing.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-2xl hover:bg-orange-700 transition-all shadow-lg  flex items-center gap-3 group"
            >
              Explore Our Technologies
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black text-lg font-bold rounded-2xl border-2 border-gray-300 hover:border-orange-600 hover:text-orange-600 transition-all shadow-sm"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Stats Badges */}
          {/* <motion.div 
            className="flex flex-wrap gap-6 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {["ISO 9001 Certified", "100+ Projects", "24/7 Support", "Fast Delivery"].map((badge, index) => (
              <div key={badge} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <motion.div 
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                />
                <span className="text-gray-700 font-semibold text-sm">{badge}</span>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Right Video Section */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end relative max-w-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-3xl blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative">
            <motion.div 
              className="absolute -inset-1 rounded-2xl blur-lg opacity-50"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <video
              src="/ball.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-w-md rounded-xl lg:rounded-2xl object-cover relative z-10 "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-orange-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}