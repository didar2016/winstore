'use client'

import Link from 'next/link'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, image, category } = product

  const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase())
  const oldPrice = Math.round(price * 1.08)
  const discounted = Math.round(price * 0.92)

  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-200">
        {/* Vendor */}
        <div className="px-4 pt-3">
          <p className="text-xs text-gray-500">{titleCase(category)}</p>
        </div>

        {/* Product Image - centered with whitespace */}
        <div className="flex items-center justify-center p-4 h-48 bg-white">
          <img
            src={image}
            alt={title}
            className="max-h-36 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 pt-2">
          <h3 className="font-medium text-teal-700 text-base leading-tight line-clamp-2 mb-3 text-left">{title}</h3>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 line-through">Rs.{oldPrice.toLocaleString()}</span>
            <span className="text-lg font-bold text-teal-500">Rs.{discounted.toLocaleString()}</span>
          </div>

          <button
            className="w-full mt-2 bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic here
              console.log('Added to cart:', product)
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard