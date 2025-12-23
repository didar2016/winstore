'use client'

import Link from 'next/link'

const Categories = () => {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      image: 'https://via.placeholder.com/300x200/007bff/ffffff?text=Electronics',
      link: '/category/electronics'
    },
    {
      id: 'fashion',
      name: 'Fashion', 
      image: 'https://via.placeholder.com/300x200/28a745/ffffff?text=Fashion',
      link: '/category/fashion'
    },
    {
      id: 'appliances',
      name: 'Appliances',
      image: 'https://via.placeholder.com/300x200/17a2b8/ffffff?text=Appliances', 
      link: '/category/appliances'
    },
    {
      id: 'babies',
      name: 'Babies Store',
      image: 'https://via.placeholder.com/300x200/e83e8c/ffffff?text=Babies+Store',
      link: '/category/babies'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-xl font-bold text-center">
                    {category.name}
                  </h3>
                  <div className="mt-2 text-center">
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium group-hover:bg-blue-700 transition-colors">
                      Shop
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories