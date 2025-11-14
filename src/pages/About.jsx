"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Clock,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const resize = () => setHeaderHeight(header?.offsetHeight || 0);
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const milestones = [
    {
      year: "2020",
      title: "Layer X Founded",
      description:
        "Started with a vision to democratize 3D printing technology",
      icon: Lightbulb,
    },
    {
      year: "2021",
      title: "First Major Contract",
      description:
        "Secured automotive industry partnership, establishing our reputation",
      icon: Award,
    },
    {
      year: "2022",
      title: "Facility Expansion",
      description:
        "Expanded to 10,000 sq ft facility with advanced equipment",
      icon: Globe,
    },
    {
      year: "2023",
      title: "Healthcare Certification",
      description:
        "Achieved medical device manufacturing certifications",
      icon: Target,
    },
    {
      year: "2024",
      title: "1000+ Projects",
      description:
        "Completed over 1000 successful projects across 8 industries",
      icon: Users,
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We constantly push the boundaries of 3D printing technology.",
      icon: Lightbulb,
      color: "bg-blue-500",
    },
    {
      title: "Quality Excellence",
      description:
        "Every print meets the highest standards of precision and durability.",
      icon: Award,
      color: "bg-green-500",
    },
    {
      title: "Customer Focus",
      description:
        "Your success is our success. We're partners in your innovation journey.",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Speed & Reliability",
      description:
        "Fast turnaround times without compromising on quality or precision.",
      icon: Clock,
      color: "bg-orange-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Industries Served" },
    { number: "99.8%", label: "Quality Rate" },
    { number: "24/7", label: "Production Capability" },
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden text-white">

      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none fade-mask">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-500/60 to-orange-700/40 blur-[180px]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              width: `${220 + Math.random() * 250}px`,
              height: `${220 + Math.random() * 250}px`,
            }}
            animate={{ y: [0, -40, 0], x: [0, 25, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 12 + Math.random() * 6, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Sparks */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 1, 0], y: -220 }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: i * 0.2 }}
          style={{ left: `${Math.random() * 100}%`, bottom: 0 }}
        />
      ))}

      <main className="relative z-10">

        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: headerHeight + 40, paddingBottom: "6rem" }}
        >
          <motion.div
            className="absolute top-0 w-[200%] h-40 bg-gradient-to-r from-orange-600/40 via-orange-400/30 to-transparent blur-3xl"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Crafting the <span className="gradient-text">Future</span> Layer by Layer
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Since 2020, we've been transforming ideas into reality through cutting-edge 3D printing technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition">
                  Our Story
                </button>

                <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/20 transition">
                  Meet the Team
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/bambu-lab-workshop.png"
                alt="Layer X Workshop"
                className="rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">4+ Years</div>
                <div className="text-sm opacity-90">of Innovation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300">
                From startup to industry leader, here's how we've grown
              </p>
            </div>

            <div className="relative">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-16 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition-all">
                        <div className="text-orange-400 font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>

                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0.6, opacity: 0.5 }}
                      whileInView={{
                        scale: [0.6, 1.2, 1],
                        opacity: [0.5, 1, 1],
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: index * 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="pt-20 pb-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => {
                const IconComponent = value.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:shadow-orange-500/40"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-orange-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-[200%] h-40 bg-gradient-to-r from-white/20 via-orange-400/30 to-transparent blur-3xl"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-4xl font-bold mb-6"
            >
              Ready to Build the Future Together?
            </motion.h2>

            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust Layer X for their 3D printing needs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg shadow-lg hover:bg-white/90 transition">
                Start Your Project
              </button>

              <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition">
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
