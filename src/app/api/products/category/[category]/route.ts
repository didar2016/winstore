import { NextResponse } from 'next/server'

// Same mock products as before
const mockProducts = [
  {
    id: 1,
    title: "Samsung 49N2300 Smart Full HD TV",
    price: 599.99,
    description: "49-inch Full HD Smart TV with built-in Wi-Fi and streaming apps. Perfect for your living room entertainment.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Samsung+TV",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Samsung Automatic Washing Machine",
    price: 449.99,
    description: "11kg capacity automatic washing machine with multiple wash programs and energy efficiency.",
    category: "appliances", 
    image: "https://via.placeholder.com/300x300/28a745/ffffff?text=Washing+Machine",
    rating: { rate: 4.2, count: 95 }
  },
  {
    id: 3,
    title: "Haier HSL-12FH/AC Refrigerator",
    price: 699.99,
    description: "Double door refrigerator with frost-free technology and spacious storage compartments.",
    category: "appliances",
    image: "https://via.placeholder.com/300x300/17a2b8/ffffff?text=Refrigerator", 
    rating: { rate: 4.7, count: 200 }
  },
  {
    id: 4,
    title: "Antex Bolt Maker Electric Kettle",
    price: 29.99,
    description: "1.5L electric kettle with automatic shut-off and stainless steel construction.",
    category: "appliances",
    image: "https://via.placeholder.com/300x300/fd7e14/ffffff?text=Electric+Kettle",
    rating: { rate: 4.0, count: 75 }
  },
  {
    id: 5,
    title: "Gree GS-12FTH Inverter AC",
    price: 899.99,
    description: "1.5 Ton inverter air conditioner with energy saving technology and remote control.",
    category: "appliances",
    image: "https://via.placeholder.com/300x300/6f42c1/ffffff?text=Air+Conditioner",
    rating: { rate: 4.3, count: 150 }
  },
  {
    id: 6,
    title: "Gree Air Conditioner Remote Control",
    price: 19.99,
    description: "Universal remote control compatible with all Gree air conditioner models.",
    category: "electronics", 
    image: "https://via.placeholder.com/300x300/6c757d/ffffff?text=AC+Remote",
    rating: { rate: 4.1, count: 45 }
  },
  {
    id: 7,
    title: "Nintendo Switch Console",
    price: 299.99,
    description: "Gaming console with detachable Joy-Con controllers for home and portable gaming.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300/e83e8c/ffffff?text=Nintendo+Switch",
    rating: { rate: 4.8, count: 320 }
  },
  {
    id: 8,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "Over-ear wireless headphones with noise cancellation and 30-hour battery life.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300/20c997/ffffff?text=Headphones",
    rating: { rate: 4.4, count: 180 }
  }
]

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const category = params.category.toLowerCase()
    const products = mockProducts.filter(p => p.category === category)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400))
    
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products by category' },
      { status: 500 }
    )
  }
}