'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log(res.data)
        if (!cancelled) {
          setProducts(res.data.slice(0, 8)) // Show only first 8 products
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid