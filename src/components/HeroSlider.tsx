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
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      badge: "40% Off"
    },
    {
      id: 2, 
      title: "Latest Electronics Collection",
      subtitle: "Discover the newest gadgets and electronics with unbeatable prices and quality assurance.",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      badge: "New Arrival"
    },
    {
      id: 3,
      title: "Home Appliances Sale", 
      subtitle: "Transform your home with our premium appliances collection. Quality meets affordability.",
      buttonText: "Explore",
      bgColor: "bg-gradient-to-r from-purple-100 to-purple-200",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
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
          <div
            key={slide.id}
            className="min-w-full relative bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay is applied via backgroundImage; content is placed above */}
            <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  {slide.subtitle}
                </p>
                <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {slide.buttonText}
                </button>
              </div>

              {slide.badge && (
                <div className="absolute top-8 right-8 bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg z-20">
                  {slide.badge}
                </div>
              )}
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

      {/* Slide indicators - pill-style control */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={`Slide ${index + 1}`}
              className={`bg-white/80 dark:bg-gray-800/60 rounded-full px-3 py-1 shadow-lg backdrop-blur-sm ${
                currentSlide === index ? 'bg-teal-700 scale-110 shadow-md' : 'bg-[#f59e0b]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider