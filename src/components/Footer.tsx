'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-xl">
                WIN
              </div>
              <span className="text-sm">store</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Got questions? Call us 24/7!
            </p>
            <div className="text-lg font-bold mb-2">
              📞 +91 111 656 7894
            </div>
            <div className="text-sm text-gray-300">
              Contact Info: 1234 5678
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">📘</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">🐦</a>  
              <a href="#" className="text-blue-400 hover:text-blue-300">📎</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">📷</a>
            </div>
          </div>

          {/* Trending */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Trending</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Headphones</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Electronics</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Grocery</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Health & Beauty</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Sports</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Home Appliances</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Mobile Accessories</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ's</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account" className="text-gray-300 hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/orders" className="text-gray-300 hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/recently-viewed" className="text-gray-300 hover:text-white transition-colors">Recently Viewed</Link></li>
              <li><Link href="/wishlist" className="text-gray-300 hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link href="/compare" className="text-gray-300 hover:text-white transition-colors">Compare</Link></li>
              <li><Link href="/vendor" className="text-gray-300 hover:text-white transition-colors">Become A Vendor</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                © 2024 WinStore, All Rights Reserved.
              </p>
            </div>
            
            {/* Payment icons */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">VISA</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">MC</div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">CASH</div>
                <div className="bg-blue-800 text-white px-3 py-1 rounded text-xs font-bold">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer