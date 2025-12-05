import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { Menu, X, Phone, Mail, Facebook, Linkedin, Instagram, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [newMenuOpen, isNewMenuOpen] = useState(false);
  const navItems = [
    // { name: "ABOUT", path: "/about" },
    // { name: "SERVICES", path: "/services" },
    { name: "SHOP", path: "/infra" },
    // { name: "RESOURCES", path: "/resources" },
    // { name: "BLOG", path: "/blog" },
  ];

  // Scroll effect: Detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true); // When scroll position is greater than 100px, menu floats
      } else {
        setScrolling(false); // Reset when scroll position is less than 100px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* TOP NAV */}
      <nav className="top-0 left-0 w-full z-50 bg-white py-6 px-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-[2.7rem] font-bold tracking-tight opacity-0 translate-y-3 
             animate-[logoEnter_0.6s_ease-out_forwards]"
        >
          <img src="/Layerx.svg" className="h-20 w-auto mx-auto" alt="logo" />
        </Link>
 <motion.div 
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
          </motion.div>

        <button onClick={() => setMenuOpen(true)}>
          <Menu size={40} className="text-black" />
        </button>
      </nav>

      {/* RIGHT HALF ONLY OVERLAY */}
      {menuOpen && (
        <div
          className="fixed right-0 top-0 w-[60%] md:w-[40%] h-full bg-black/30 backdrop-blur-sm z-[65]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* RIGHT MENU PANEL */}
      <div
        className={`fixed right-0 top-0 h-full w-[60%] md:w-[60%] bg-white z-[80] p-[80px] transition-transform duration-500 overflow-y-scroll ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute right-10 top-10"
          onClick={() => setMenuOpen(false)}
        >
          <X size={40} className="text-black" />
        </button>

        <div className="mt-24 pr-4">
          <div className="flex space-x-8 mb-16 text-[30px]">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>

          <p className="text-[54px] font-light leading-[1.1]">
            +91-884-955-4035
          </p>
          <p className="text-[48px] font-light leading-[1.1] mt-10">
            proto@cubein.io
          </p>

          <div className="mt-20 space-y-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-[32px] tracking-[0.2rem] font-medium hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* BIG EXTRA SPACE LIKE CUBEIN */}
          <div className="h-40"></div>
        </div>
      </div>

      {/* LEFT IMAGE — TOUCHING MENU (NO GAP) */}
      <img
        src="https://images.pexels.com/photos/5864273/pexels-photo-5864273.jpeg"
        alt="Side"
        className={`fixed left-0 top-0 h-full w-[40%] object-cover grayscale z-[75] transition-transform duration-500 hidden md:block ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      />

      {/* //abhishek */}
      {newMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white z-50 transition-transform duration-500 ease-out ${newMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* HEADER WITH CLOSE BUTTON */}
        <div className="p-8 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-black text-black">Menu</h2>
          <button
            onClick={() => isNewMenuOpen(false)}
            className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

        {/* CONTENT - SCROLLABLE */}
        <div className="h-[calc(100%-80px)] overflow-y-auto p-8">
          {/* CONTACT INFO */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-black text-xl font-bold">+91-884-955-4035</p>
                <p className="text-gray-600 text-sm">Call us anytime</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-black text-xl font-bold">proto@cubein.io</p>
                <p className="text-gray-600 text-sm">Email us for quotes</p>
              </div>
            </div>
          </div>

          {/* NAVIGATION LINKS - SMALL TEXT */}
          <div className="space-y-2 mb-10">
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">Navigation</h3>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-black font-medium text-base group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div className="mb-10">
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-gray-100 rounded-xl hover:bg-orange-100 transition-all group">
                <Facebook className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
              </a>
              <a href="#" className="p-4 bg-gray-100 rounded-xl hover:bg-orange-100 transition-all group">
                <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
              </a>
              <a href="#" className="p-4 bg-gray-100 rounded-xl hover:bg-orange-100 transition-all group">
                <Instagram className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
              </a>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
            <h4 className="text-black font-bold text-lg mb-2">Ready to Start?</h4>
            <p className="text-gray-700 text-sm mb-4">Get instant quotes for your project</p>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>



      {/* Floating Sidebar effect when scrolling */}
      {/* <div
        className={`z-50 bg-red-500 fixed top-[20%] left-0 transition-all duration-300 ease-in-out ${
          scrolling ? "transform translate-x-0" : "transform -translate-x-full"
        } ${menuOpen ? "opacity-100" : "opacity-100"}`}
      >
        <div className="bg-white p-8 shadow-md">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-xl font-medium text-black hover:text-gray-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}

      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-40 transition-all duration-500 ease-out ${scrolling ? "translate-x-0" : "translate-x-64"
          } ${menuOpen ? "opacity-0" : "opacity-100"}`}
      >
        <div className="bg-transparent   rounded-l-2xl shadow-xl p-6">
          <div className="space-y-6">
            {/* <div className="text-center mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <h4 className="text-black font-bold text-sm uppercase tracking-wider">Quick Nav</h4>
            </div> */}

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-orange-600 transition-colors text-xs font-medium mb-3 group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}

            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => isNewMenuOpen(true)}
                className="text-xs text-gray-500 hover:text-orange-600 transition-colors font-medium"
              >
                Full Menu →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
