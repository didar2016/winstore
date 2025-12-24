import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import Categories from '@/components/Categories'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'
import CategoryWiseProduct from '@/components/CategoryWiseProduct'

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
           <CategoryWiseProduct />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}