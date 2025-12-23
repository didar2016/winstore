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
  const { id, title, price, image, rating } = product

  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-200">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gray-50 aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount badge */}
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Save 10%
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              ❤️
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              👁️
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating.rate) ? "text-yellow-400" : "text-gray-300"}>
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">({rating.count})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-blue-600">Rs.{price.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through ml-2">Rs.{(price * 1.1).toFixed(2)}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors font-medium"
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