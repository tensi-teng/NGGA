import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MakeGuiding from './components/MakeGuiding'
import Pillars from './components/Pillars'
import LearnLeadConnect from './components/LearnLeadConnect'
import Badges from './components/Badges'
import Gallery from './components/Gallery'
import Marquee from './components/Marquee'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'

function Landing({ mobileMenuOpen, setMobileMenuOpen, scrolled }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <MakeGuiding />
      <Pillars />
      <LearnLeadConnect />
      <Badges />
      <Gallery />
      <Marquee />
      <CTASection />
      <Footer />
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Always dark — black background site
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              scrolled={scrolled}
            />
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
