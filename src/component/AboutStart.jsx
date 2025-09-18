import React, { useState, useEffect, useRef } from 'react'

const NumberCounter = ({ endValue, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  const startCounting = React.useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)
    let start = 0
    const increment = endValue / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= endValue) {
        setCount(endValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
  }, [endValue, duration, hasStarted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting()
        }
      },
      { threshold: 0.5 }
    )

    const currentRef = countRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [startCounting])

  return (
    <span ref={countRef}>{count}{suffix}</span>
  )
}

const AboutStart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <img 
            src="src/assets/all-images/About/about-img9.png" 
            alt="Doctor caring for patient" 
            className="w-[550px] rounded-lg shadow-lg h-[450px] ml-10"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 h-[550px]">
          {/* Badge */}
          <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-indigo-600">Medicax</span>
            <span className="mx-2 text-gray-400">·</span>
            <span className="text-sm text-indigo-600">About Us →</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[#000066] mb-6">
            Your health and happiness are our top priorities.
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">
            At Medicax, we go beyond just treating symptoms – we focus on addressing the underlying causes of illness and promoting holistic well-being. Whether you're seeking preventive care, managing a chronic condition, or in need of specialized treatment, you can trust that you're in good hands with our team.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-4xl font-bold text-[#000066]">
                <NumberCounter endValue={500} suffix="+" />
              </h3>
              <p className="text-gray-600">Serving patients weekly</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-4xl font-bold text-[#000066]">
                <NumberCounter endValue={95} suffix="%" />
              </h3>
              <p className="text-gray-600">Patient satisfaction rate</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-4xl font-bold text-[#000066]">
                <NumberCounter endValue={10} suffix="+" />
              </h3>
              <p className="text-gray-600">Years serving the community</p>
            </div>
            <div className="transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-4xl font-bold text-[#000066]">24/7</h3>
              <p className="text-gray-600">Urgent care available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStart;