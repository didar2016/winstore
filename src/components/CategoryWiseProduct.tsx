'use client'

import { useEffect, useState } from 'react'
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

export default function CategoryWiseProduct() {
  const [categories, setCategories] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loadingCats, setLoadingCats] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [errorCats, setErrorCats] = useState<string | null>(null)
  const [errorProducts, setErrorProducts] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const fetchCategories = async () => {
      try {
        setLoadingCats(true)
        const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
        if (!cancelled) {
          setCategories(res.data)
          // Prefer 'jewelery' if available
          const pref = res.data.includes('jewelery') ? 'jewelery' : res.data[0]
          setSelected(pref || null)
          setErrorCats(null)
        }
      } catch (err) {
        console.error(err)
        if (!cancelled) setErrorCats('Failed to load categories')
      } finally {
        if (!cancelled) setLoadingCats(false)
      }
    }

    fetchCategories()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (!selected) return
    let cancelled = false
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true)
        const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(selected)}`
        const res = await axios.get<Product[]>(url)
        if (!cancelled) {
          setProducts(res.data)
          setErrorProducts(null)
        }
      } catch (err) {
        console.error(err)
        if (!cancelled) setErrorProducts('Failed to load products for this category')
      } finally {
        if (!cancelled) setLoadingProducts(false)
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [selected])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">Shop by Category</h3>
            <p className="text-sm text-gray-500">Choose a category to view products</p>
          </div>
        </div>

        {/* Category selector */}
        <div className="mb-6">
          {loadingCats ? (
            <div className="flex gap-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
              ))}
            </div>
          ) : errorCats ? (
            <div className="flex items-center gap-3">
              <span className="text-red-600">{errorCats}</span>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={async () => {
                  setErrorCats(null)
                  setLoadingCats(true)
                  try {
                    const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
                    setCategories(res.data)
                    const pref = res.data.includes('jewelery') ? 'jewelery' : res.data[0]
                    setSelected(pref || null)
                  } catch (e) {
                    setErrorCats('Retry failed')
                  } finally {
                    setLoadingCats(false)
                  }
                }}
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-4 py-2 rounded-full transition-colors border ${selected === cat ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-gray-700 border-gray-200'}`}
                  aria-pressed={selected === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products */}
        <div>
          {loadingProducts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
              ))}
            </div>
          ) : errorProducts ? (
            <div className="text-center py-8">
              <p className="text-red-600 mb-4">{errorProducts}</p>
              <button
                onClick={async () => {
                  if (!selected) return
                  setErrorProducts(null)
                  setLoadingProducts(true)
                  try {
                    const res = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(selected)}`)
                    setProducts(res.data)
                  } catch (e) {
                    setErrorProducts('Retry failed')
                  } finally {
                    setLoadingProducts(false)
                  }
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Retry
              </button>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No products in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}