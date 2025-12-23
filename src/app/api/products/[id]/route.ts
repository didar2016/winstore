import { NextResponse } from 'next/server'

// Mock products data (same as above)
const mockProducts = [
  {
    id: 1,
    title: "Samsung 49N2300 Smart Full HD TV",
    price: 599.99,
    description: "49-inch Full HD Smart TV with built-in Wi-Fi and streaming apps. Perfect for your living room entertainment. Features include: Multiple HDMI ports, USB connectivity, Built-in streaming apps like Netflix and YouTube, Energy efficient LED display, Full HD 1920x1080 resolution.",
    category: "electronics",
    image: "https://via.placeholder.com/600x600/007bff/ffffff?text=Samsung+TV",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Samsung Automatic Washing Machine",
    price: 449.99,
    description: "11kg capacity automatic washing machine with multiple wash programs and energy efficiency. Advanced features include: Diamond Drum technology, VRT Plus technology for reduced noise, Smart Check for easy troubleshooting, Multiple wash programs for different fabric types.",
    category: "appliances", 
    image: "https://via.placeholder.com/600x600/28a745/ffffff?text=Washing+Machine",
    rating: { rate: 4.2, count: 95 }
  },
  {
    id: 3,
    title: "Haier HSL-12FH/AC Refrigerator",
    price: 699.99,
    description: "Double door refrigerator with frost-free technology and spacious storage compartments. Key features: 345L total capacity, Frost-free technology, Separate freezer compartment, Energy efficient compressor, Adjustable shelves and door bins.",
    category: "appliances",
    image: "https://via.placeholder.com/600x600/17a2b8/ffffff?text=Refrigerator", 
    rating: { rate: 4.7, count: 200 }
  },
  {
    id: 4,
    title: "Antex Bolt Maker Electric Kettle",
    price: 29.99,
    description: "1.5L electric kettle with automatic shut-off and stainless steel construction. Features: Rapid boiling technology, Automatic shut-off when water boils, Dry boil protection, 360-degree cordless design, Easy-pour spout with drip-free pouring.",
    category: "appliances",
    image: "https://via.placeholder.com/600x600/fd7e14/ffffff?text=Electric+Kettle",
    rating: { rate: 4.0, count: 75 }
  },
  {
    id: 5,
    title: "Gree GS-12FTH Inverter AC",
    price: 899.99,
    description: "1.5 Ton inverter air conditioner with energy saving technology and remote control. Advanced cooling: Inverter technology for energy efficiency, Copper condenser coil, Anti-bacterial filter, Remote control with timer function, Low noise operation.",
    category: "appliances",
    image: "https://via.placeholder.com/600x600/6f42c1/ffffff?text=Air+Conditioner",
    rating: { rate: 4.3, count: 150 }
  },
  {
    id: 6,
    title: "Gree Air Conditioner Remote Control",
    price: 19.99,
    description: "Universal remote control compatible with all Gree air conditioner models. Features: Universal compatibility, Easy setup and programming, Battery included, Compact design, All essential AC functions including timer and mode selection.",
    category: "electronics", 
    image: "https://via.placeholder.com/600x600/6c757d/ffffff?text=AC+Remote",
    rating: { rate: 4.1, count: 45 }
  },
  {
    id: 7,
    title: "Nintendo Switch Console",
    price: 299.99,
    description: "Gaming console with detachable Joy-Con controllers for home and portable gaming. Complete package: Nintendo Switch console, Joy-Con controllers, Dock for TV connection, Pro Controller compatibility, Access to Nintendo eShop, Portable and home gaming in one device.",
    category: "electronics",
    image: "https://via.placeholder.com/600x600/e83e8c/ffffff?text=Nintendo+Switch",
    rating: { rate: 4.8, count: 320 }
  },
  {
    id: 8,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "Over-ear wireless headphones with noise cancellation and 30-hour battery life. Premium audio: Active noise cancellation, 30-hour battery life, Bluetooth 5.0 connectivity, Quick charge feature, Comfortable over-ear design, Built-in microphone for calls.",
    category: "electronics",
    image: "https://via.placeholder.com/600x600/20c997/ffffff?text=Headphones",
    rating: { rate: 4.4, count: 180 }
  }
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const product = mockProducts.find(p => p.id === id)
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}