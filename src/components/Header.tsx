'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0c474a] text-white shadow-lg sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
        <div className="text-white rounded font-bold text-xl ">
          <Image src={logo} alt="Logo" className=' h-[68px] w-[140px]'/>
        </div>
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
        <div className="flex w-full">
          <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <select className="px-3 py-2 border-t border-b border-gray-300 text-gray-900 focus:outline-none">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Appliances</option>
          <option>Fashion</option>
          <option>Babies Store</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
          🔍
          </button>
        </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-sm">📞 Free</span>
          <div>
          <div className="text-xs">Call Now</div>
          <div className="font-bold">1800 123 4567</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <span>🛒</span>
          <span className="text-sm">CART</span>
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          0
          </span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className="w-full h-0.5 bg-white"></div>
          <div className="w-full h-0.5 bg-white"></div>
          <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8">
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <span>☰</span>
          <span>Browse By Category</span>
        </button>
        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-400 transition-colors">Easy Monthly Instalments</Link>
          <Link href="/brands" className="hover:text-blue-400 transition-colors">Shop by Brands</Link>
          <Link href="/vendor" className="hover:text-blue-400 transition-colors">Become a Vendor</Link>
        </div>

        <div className="flex space-x-4 ml-auto">
          <a href="#" className="text-blue-400 hover:text-blue-300">📘</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">🐦</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">📎</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">📷</a>
        </div>
        </div>
      </nav>

      {/* Mobile search */}
      <div className="md:hidden mt-4">
        <div className="flex w-full">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
          🔍
        </button>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header