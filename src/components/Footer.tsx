'use client'

import Link from 'next/link'
import footer from '../images/footer.png'
import rights from '../images/rights.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white bg-[#383838]">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <Image src={footer} alt="Footer Image" className="w-full h-auto object-cover mb-8" />
      </div>

      {/* Payment methods */}
      <div className="border-t border-gray-800 py-6 bg-black">
        <Image src={rights} alt="Payment Methods" className="mx-auto object-contain" />
      </div>
    </footer>
  )
}

export default Footer