import { NextResponse } from 'next/server'

// Categories based on the products we have
const categories = [
  "electronics",
  "appliances",
  "fashion", 
  "babies"
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}