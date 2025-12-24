'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export default function CategoryPage() {
  const params = useParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchProducts = async () => {
      if (!params.category) return
      try {
        setLoading(true)
        const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(params.category as string)}`
        const res = await axios.get<Product[]>(url)
        if (!cancelled) {
          setProducts(res.data)
          setError(null)
          setLoading(false)
        }
      } catch (err) {
        console.error('Error fetching products:', err)
        if (!cancelled) {
          setError('Failed to load products for this category')
          setLoading(false)
        }
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [params.category])

  const categoryName = typeof params.category === 'string' 
    ? params.category.charAt(0).toUpperCase() + params.category.slice(1)
    : 'Category'

  const retryFetch = async () => {
    if (!params.category) return
    try {
      setError(null)
      setLoading(true)
      const res = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(params.category as string)}`)
      setProducts(res.data)
    } catch (err) {
      console.error('Retry failed:', err)
      setError('Retry failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {error ? <span className="text-red-600">{error}</span> : (loading ? 'Loading products...' : `${products.length} products found`)}
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-600 mb-6">{error}</p>
            <button onClick={retryFetch} className="bg-blue-600 text-white px-4 py-2 rounded">Retry</button>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">Try browsing other categories or check back later.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}