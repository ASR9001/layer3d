import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    // Fullscreen hero section with gradient background
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* 🔹 Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right blob */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px]
                     bg-gradient-to-br from-orange-500/60 to-transparent
                     rounded-full blur-[200px] animate-floatSlow"
        ></div>

        {/* Bottom-left blob */}
        <div
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px]
                     bg-gradient-to-tr from-yellow-500/50 to-transparent
                     rounded-full blur-[200px] animate-floatFast"
        ></div>
      </div>

      {/* 🔹 Main content wrapper */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Heading + Subtext */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Precision 3D Printing <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  for Every Vision
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Layer X delivers cutting-edge 3D printing solutions across automotive,
                healthcare, education, jewelry, architecture, prototyping, home decor,
                and custom art pieces with unmatched precision and quality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Button */}
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                           bg-gradient-to-r from-orange-500 to-yellow-400 
                           text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,165,0,0.4)]"
              >
                View Our Work <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary Button */}
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                           border border-gray-600 hover:bg-gray-800 text-white 
                           transition-all duration-300"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "8", label: "Industries Served" },
                { num: "99.8%", label: "Precision Rate" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 
                             rounded-2xl p-6 text-center shadow-lg hover:scale-105 
                             transition-transform"
                >
                  <div className="text-3xl font-bold text-orange-400">{stat.num}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="relative">
            {/* Image box */}
            <div className="aspect-square bg-white/5 backdrop-blur-xl border border-white/10 
                            rounded-2xl p-4 shadow-2xl overflow-hidden">
              <img
                src="https://layerx3d.in/images/bambu-lab-workshop.png"
                alt="3D Printer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black/70 backdrop-blur-lg 
                            border border-white/10 rounded-xl p-4 text-sm shadow-xl">
              <p className="font-semibold text-white">Latest Project</p>
              <p className="text-gray-400">Custom Art Piece</p>
              <p className="text-orange-400 font-medium">99.9% Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
