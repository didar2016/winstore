'use client'

import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Shop Computer & Experience",
      subtitle: "You Cannot Expect Quality Into The Product, It's Already Part Of You From The Product Of My Colleagues, I Am A Product Of My Decision.",
      buttonText: "View More",
      bgColor: "bg-gradient-to-r from-blue-100 to-blue-200",
      image: "https://via.placeholder.com/500x300/007bff/ffffff?text=Computer+Setup",
      badge: "40% Off"
    },
    {
      id: 2, 
      title: "Latest Electronics Collection",
      subtitle: "Discover the newest gadgets and electronics with unbeatable prices and quality assurance.",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
      image: "https://via.placeholder.com/500x300/28a745/ffffff?text=Electronics",
      badge: "New Arrival"
    },
    {
      id: 3,
      title: "Home Appliances Sale", 
      subtitle: "Transform your home with our premium appliances collection. Quality meets affordability.",
      buttonText: "Explore",
      bgColor: "bg-gradient-to-r from-purple-100 to-purple-200",
      image: "https://via.placeholder.com/500x300/6f42c1/ffffff?text=Home+Appliances",
      badge: "Best Deal"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className={`min-w-full ${slide.bgColor} relative`}>
            <div className="container mx-auto px-4 py-12 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    {slide.buttonText}
                  </button>
                </div>
                
                {/* Image */}
                <div className="relative">
                  {slide.badge && (
                    <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg z-10">
                      {slide.badge}
                    </div>
                  )}
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-blue-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider