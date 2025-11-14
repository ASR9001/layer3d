import React from 'react'
import HeroSection from '../components/homepageComponent/HeroSection'
import IndustryShowcase from '../components/homepageComponent/IndustryShowcase'
import OnDemandService from '../components/homepageComponent/OnDemandService'
import TechnicalCapabilities from '../components/homepageComponent/TechnicalCapabilities'

function Home() {
  return (
    <>
     <div className="min-h-screen gradient-bg">
      <main>
        <HeroSection />
        <IndustryShowcase />
        <OnDemandService />
        <TechnicalCapabilities />

        {/* CTA Section */}
        <section className="relative py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white overflow-hidden">
          {/* Moving light streak effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 w-[200%] h-40 bg-gradient-to-r from-white/20 via-orange-400/30 to-transparent blur-3xl animate-[move_12s_linear_infinite]" />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let’s discuss how <span className="font-semibold">Layer X</span> can bring your ideas to life with cutting-edge 3D printing technology.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 text-lg font-semibold bg-white text-orange-600 rounded-xl shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default Home