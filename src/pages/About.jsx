"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// --------------------------------------------------
// SCRAMBLE
// --------------------------------------------------
function useScramble(initialText, speed = 35) {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*@!";

  const scramble = (newText) => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(
        newText
          .split("")
          .map((char, idx) =>
            idx < i
              ? newText[idx]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("")
      );
      i++;
      if (i > newText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const cleanup = scramble(initialText);
    return cleanup;
  }, []);

  return { displayText, scramble };
}

// --------------------------------------------------
// CURSOR GLOW
// --------------------------------------------------
function useCursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return pos;
}

// --------------------------------------------------
// MAIN REDESIGNED COMPONENT
// --------------------------------------------------
export default function AboutSection() {
  const aboutHeadline = useScramble("Layer X", 30);
  const cursor = useCursorGlow();
  const sectionRef = useRef(null);

  // Track visibility
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0.2 1", "0.8 0"],
  });

  // Background transition: white → black → white
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2, 1],
    ["#ffffff", "#000000", "#000000", "#000000"]
  );

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0px", "260px"]);

  // Text color transitions
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#000000", "#ffffff", "#ffffff", "#ffffff"]
  );

  const subtitleColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#6b7280", "#d1d5db", "#d1d5db", "#6b7280"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative min-h-screen px-6 lg:px-24 py-20 transition-colors duration-700 overflow-hidden"
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
              width: `${80 + Math.random() * 200}px`,
              height: `${80 + Math.random() * 200}px`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 8,
              delay: i * 0.5,
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
              y: [0, -80, -160],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Pulse Rings */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-500 rounded-full"
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.7,
              ease: "easeOut",
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: "100px",
              height: "100px",
            }}
          />
        ))}
      </div>

      {/* Enhanced Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full 
        bg-gradient-to-r from-orange-600/30 to-yellow-500/20 blur-3xl opacity-40 z-0"
        animate={{ x: cursor.x - 200, y: cursor.y - 200 }}
        transition={{ type: "spring", stiffness: 50, damping: 25 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER ANIMATION */}
        <motion.div className="mb-12">
          <motion.h2
            className="text-6xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ color: textColor }}
          >
            {aboutHeadline.displayText}
          </motion.h2>

          {/* ANIMATED LINE */}
          <motion.div
            style={{ width: lineWidth }}
            className="h-[4px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/30"
          />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* PARAGRAPHS */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed"
              style={{ color: textColor }}
            >
              At <span className="text-orange-400 font-bold">Layer X</span>, we bridge the gap between bold ideas and tangible success. Founded on the principles of precision, speed, and reliability, we transform concepts into reality.
            </motion.p>

            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed"
              style={{ color: textColor }}
            >
              Whether you're a deep-tech startup validating a breakthrough concept or an established brand scaling production, we provide end-to-end manufacturing solutions.
            </motion.p>

            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed"
              style={{ color: textColor }}
            >
              Our state-of-the-art facility in Bengaluru, Pune, and Ahmedabad ensures quality and rapid turnaround times for all your manufacturing needs.
            </motion.p>
          </motion.div>

          {/* STATS & FEATURES */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "24/7", label: "Support" },
                { number: "99%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-black text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                "Precision Engineering",
                "Rapid Prototyping",
                "Quality Assurance",
                "Scalable Production"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-gray-300 font-medium text-lg">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA BUTTON */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-2xl hover:bg-orange-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-orange-500/30"
          >
            Learn More About Us
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
        </motion.div>
      </div>
    </motion.section>
  );
}