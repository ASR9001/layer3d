import React from 'react'
import HeroSection from '../components/homepageComponent/HeroSection'
import IndustryShowcase from '../components/homepageComponent/IndustryShowcase'
import OnDemandService from '../components/homepageComponent/OnDemandService'
import TechnicalCapabilities from '../components/homepageComponent/TechnicalCapabilities'
import TrustedIndustries from './TrustedIndustries'

function Home() {
 return (
    <div className="min-h-screen gradient-bg">
      <main>
        <HeroSection />
        <TrustedIndustries />
        <IndustryShowcase />
        <OnDemandService />
        <TechnicalCapabilities />
        <section className="relative py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white overflow-hidden">
          <h2 className="text-3xl font-bold">Get Started Today!</h2>
          <p className="mt-4 text-lg">Experience the power of LayerX 3D printing for your projects.</p>
        </section>
      </main>
    </div>
  );
}

export default Home