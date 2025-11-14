import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-b border-orange-500/20"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ===== Logo ===== */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src="https://layerx3d.in/layerx-logo.svg"
            alt="LayerX Logo"
            className="w-28 h-14 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          {/* <span className="hidden sm:inline-block text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,165,0,0.3)] transition-all duration-300 group-hover:brightness-125">
            Layer<span className="text-white drop-shadow-[0_0_8px_#ffa500]">X</span>
          </span> */}
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-orange-400 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ===== Right Side Controls ===== */}
        <div className="hidden md:flex items-center space-x-5">
          <Link
            to="/cart"
            className="relative hover:scale-110 transition-transform duration-300"
          >
            <ShoppingCart
              size={22}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs text-black font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
              2
            </span>
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 border border-gray-500/60 rounded-lg text-sm text-gray-200 hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-black shadow-[0_4px_20px_rgba(255,165,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,165,0,0.6)] transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-700 animate-fade-in">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="pt-3 border-t border-gray-700 w-3/4 text-center">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Sign In
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2 rounded-lg text-black font-medium shadow-md hover:shadow-lg transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
