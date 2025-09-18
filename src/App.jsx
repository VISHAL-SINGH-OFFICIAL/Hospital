import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import AboutStart from './component/AboutStart'

// Page Components
const Pages = () => (
  <div className="container mx-auto px-4 pt-24">
    <h1 className="text-3xl font-bold text-[#000066] mb-6">Pages</h1>
    <p className="text-gray-600">Our hospital pages and resources.</p>
  </div>
)

const Services = () => (
  <div className="container mx-auto px-4 pt-24">
    <h1 className="text-3xl font-bold text-[#000066] mb-6">Our Services</h1>
    <p className="text-gray-600">Comprehensive healthcare services for your needs.</p>
  </div>
)

const CaseStudies = () => (
  <div className="container mx-auto px-4 pt-24">
    <h1 className="text-3xl font-bold text-[#000066] mb-6">Case Studies</h1>
    <p className="text-gray-600">Real patient success stories and medical breakthroughs.</p>
  </div>
)

const Blogs = () => (
  <div className="container mx-auto px-4 pt-24">
    <h1 className="text-3xl font-bold text-[#000066] mb-6">Medical Blog</h1>
    <p className="text-gray-600">Latest healthcare insights and medical news.</p>
  </div>
)

const App = () => {
  return (
    <Router>
      <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-50'>
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <AboutStart />
            </main>
          } />
          <Route path="/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App