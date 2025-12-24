'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchCategories = async () => {
      try {
        setLoading(true)
        const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
        if (!cancelled) {
          setCategories(res.data)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) setError('Failed to load categories')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCategories()
    return () => { cancelled = true }
  }, [])

  const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase())
  const imageUrl = (c: string) => `https://source.unsplash.com/800x600/?${encodeURIComponent(c)}`

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-lg bg-gray-100 h-48 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
            <button
              onClick={async () => {
                setError(null)
                setLoading(true)
                try {
                  const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
                  setCategories(res.data)
                } catch (e) {
                  setError('Retry failed')
                } finally {
                  setLoading(false)
                }
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category)}`}
                className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
              <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={category == "jewelery" ? "https://mjjewels.com/blog/wp-content/uploads/2023/03/gold-jewellery-secrets.jpg" : (
                      category == "electronics" ? "https://res.cloudinary.com/jerrick/image/upload/v1740658144/67c055e09f7d7d001d9227bf.jpg" : ( category == "men's clothing" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoE1jtNnKIiYXXNa_vYrdtufR1kx1HUXqAQ&s" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxLl137hJOBSPnD4_NkpjaDI-F5Q6rQh77Q&s"
                      )
                    )}
                    alt={category}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Floating info box - bottom-left */}
                <div className="absolute bottom-4 bg-[#f5f0f0] shadow-lg px-3 py-3 w-11/12 lg:w-13/12 flex items-center justify-between">
                  <h3 className="text-gray-900 text-xl font-semibold">{titleCase(category)}</h3>
                  <span className="text-sky-500 text-lg font-medium group-hover:underline">Shop</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Categories