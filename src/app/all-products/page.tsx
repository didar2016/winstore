"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
        if (!cancelled) {
          setProducts(res.data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (

     <div className="min-h-screen bg-gray-50">
      <Header />
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading products...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found.</p>
        </div>
      )}
    </section>
            <Footer/>

    </div>
  );
}
