import { motion } from "framer-motion";

const industries = [
  "Aerospace",
  "Automotive",
  "Consumer Electronics",
  "Medical Devices",
  "Robotics",
  "Industrial Machinery",
  "Defense",
  "Energy",
  "Wearables",
  "Smart Home",
  "EV Mobility",
  "Space Tech",
];

export default function TrustedIndustries() {
  const duplicated = [...industries, ...industries]; // Infinite loop

  return (
    <section className="bg-black text-white py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">

      {/* TOP CENTER HEADING */}
      <p className="text-center text-sm tracking-[0.2em] text-gray-400 mb-6">
        INDUSTRIES WE EMPOWER
      </p>

      <h2 className="text-center text-4xl md:text-6xl font-light mb-12 leading-tight max-w-4xl">
        Trusted by global <span className="font-semibold">innovators</span>
      </h2>

      {/* BIG BUTTON LIKE ATLANTISER */}
      <button
        className="mb-16 bg-white text-black rounded-full px-12 py-12 text-5xl font-light hover:brightness-90 transition-all max-w-[500px] w-full text-center"
        aria-label="Let's work together"
      >
        Let’s work together
      </button>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden max-w-6xl">
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicated.map((item, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-light opacity-60 hover:opacity-100 transition-all"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM SMALL CAPTION */}
      <p className="text-center mt-24 max-w-3xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
        We collaborate with forward-thinking companies across advanced
        technology, engineering, and next-gen product categories to build
        the future of global manufacturing.
      </p>
    </section>
  );
}
