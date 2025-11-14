"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const industries = ["Automotive", "Healthcare", "Education", "Jewelry", "Architecture", "Prototyping"]
  const services = [
    "Rapid Prototyping",
    "Production Parts",
    "Custom Design",
    "Material Consulting",
    "Quality Testing",
    "Post-Processing",
  ]

  return (
    <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/10 text-white">
      {/* Glowing top border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Layer X</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Leading provider of professional 3D printing solutions across multiple industries. Precision, quality, and
              innovation in every layer.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-orange-400"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href={`#${industry.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-orange-400 transition-colors"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-white/70 hover:text-orange-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-white/70">info@layerx3d.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5" />
                <span className="text-sm text-white/70">
                  123 Innovation Drive
                  <br /> Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Layer X. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/privacy" className="text-sm text-white/60 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-white/60 hover:text-orange-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="/refund" className="text-sm text-white/60 hover:text-orange-400 transition-colors">
                Refund Policy
              </a>
              <a href="/return" className="text-sm text-white/60 hover:text-orange-400 transition-colors">
                Return Policy
              </a>
              <a href="/shipping" className="text-sm text-white/60 hover:text-orange-400 transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
