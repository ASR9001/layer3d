import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "INFRASTRUCTURE", path: "/infra" },
    { name: "RESOURCES", path: "/resources" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <nav className="top-0 left-0 w-full z-50 bg-white py-6 px-10 flex justify-between items-center">
        <Link to="/" className="text-[2.7rem] font-bold tracking-tight">
          Cubein
        </Link>

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
        className={`
          fixed right-0 top-0 h-full w-[60%] md:w-[60%]
          bg-white z-[80] p-[80px]
          transition-transform duration-500
          overflow-y-scroll
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute right-10 top-10"
          onClick={() => setMenuOpen(false)}
        >
          <X size={40} className="text-black" />
        </button>

        {/* CONTENT WRAPPER */}
        <div className="mt-24 pr-4">

          {/* SOCIAL ICONS */}
          <div className="flex space-x-8 mb-16 text-[30px]">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>

          {/* CONTACT (BIG LIKE CUBEIN) */}
          <p className="text-[54px] font-light leading-[1.1]">
            +91-884-955-4035
          </p>

          <p className="text-[48px] font-light leading-[1.1] mt-10">
            proto@cubein.io
          </p>

          {/* MENU LINKS BIG + TALL LIKE CUBEIN */}
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
        className={`
          fixed left-0 top-0 h-full w-[40%] object-cover grayscale
          z-[75] transition-transform duration-500 hidden md:block
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      />
    </>
  );
}
