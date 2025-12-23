import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import Categories from '@/components/Categories'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <Categories />
        
        {/* New Arrivals Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  <span className="text-blue-600">New</span> Arrivals
                </h2>
                <p className="text-gray-600 mt-2">Check out our latest products</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                <span>View All</span>
                <span>→</span>
              </button>
            </div>
            <ProductGrid />
          </div>
        </section>

        {/* Best Deals Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">Best</span> Deals
            </h2>
            <p className="text-gray-600 mb-8">Limited time offers on top products</p>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['KITCHEN APPLIANCES', 'CONSOLES', 'TV & VIDEOS', 'CELL PHONES', 'GROCERY'].map((category) => (
                <button 
                  key={category}
                  className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Special offers grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Nintendo Switch Special Offer */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Nintendo Switch Console</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">Rs.65,208</span>
                      <span className="text-sm text-gray-500 line-through">Rs.66,000</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save 10%
                  </div>
                </div>
                <img 
                  src="https://via.placeholder.com/200x150/e83e8c/ffffff?text=Nintendo+Switch" 
                  alt="Nintendo Switch"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <div className="text-sm text-gray-600 mb-4">Already Sold: 6 | Available: 30</div>
              </div>

              {/* Other special offers can be added similarly */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Smart TV 49"</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">Rs.58,000</span>
                      <span className="text-sm text-gray-500 line-through">Rs.70,000</span>
                    </div>
                  </div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save 17%
                  </div>
                </div>
                <img 
                  src="https://via.placeholder.com/200x150/007bff/ffffff?text=Smart+TV" 
                  alt="Smart TV"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <div className="text-sm text-gray-600 mb-4">Already Sold: 15 | Available: 25</div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Wireless Headphones</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">Rs.171,000</span>
                      <span className="text-sm text-gray-500 line-through">Rs.190,000</span>
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save 10%
                  </div>
                </div>
                <img 
                  src="https://via.placeholder.com/200x150/20c997/ffffff?text=Headphones" 
                  alt="Headphones"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <div className="text-sm text-gray-600 mb-4">Already Sold: 8 | Available: 12</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}