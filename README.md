# Momajik E-commerce Website

A modern, responsive e-commerce website built with Next.js, featuring a complete product catalog, category filtering, and individual product pages.

## 🚀 Features

- **Responsive Design**: 100% mobile-responsive with Tailwind CSS
- **Modern UI/UX**: Clean, professional design based on provided Figma mockups
- **Product Catalog**: Complete product listing with images, prices, and ratings
- **Category Filtering**: Browse products by categories (Electronics, Appliances, Fashion, Babies Store)
- **Product Details**: Individual product pages with detailed information
- **API Integration**: Custom Next.js API routes for product data
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript Support**: Full TypeScript integration for better development experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Font**: Google Fonts (Roboto)
- **API**: Next.js API Routes
- **Deployment**: Vercel-ready configuration

## 📦 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API Routes
│   │   └── products/      # Product APIs
│   ├── category/          # Category pages
│   ├── products/          # Product detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSlider.tsx     # Hero image slider
│   ├── Categories.tsx     # Category grid
│   ├── ProductCard.tsx    # Product card component
│   └── ProductGrid.tsx    # Product grid layout
└── ...
```

## 🚦 API Endpoints

The project includes the following API endpoints:

- `GET /api/products` - Get all products
- `GET /api/products/categories` - Get all categories  
- `GET /api/products/category/[category]` - Get products by category
- `GET /api/products/[id]` - Get single product by ID

## 🎨 Design Features

- **Header**: Navigation with search, cart, and mobile-responsive menu
- **Hero Slider**: Rotating banner with product promotions
- **Category Grid**: Visual category navigation
- **Product Grid**: Responsive product card layout
- **Product Details**: Comprehensive product information pages
- **Footer**: Complete site navigation and company information

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🎯 Features Implemented

### ✅ Core Requirements
- [x] Clean HTML/CSS code with responsive design
- [x] 100% responsive layout
- [x] Dynamic React.js with Next.js
- [x] Roboto font family implementation
- [x] Product API integration
- [x] Category-based product filtering
- [x] Product detail pages
- [x] Header and footer components
- [x] Hero slider with static content

### ✅ API Endpoints
- [x] All products API (`/api/products`)
- [x] Categories API (`/api/products/categories`)
- [x] Products by category API (`/api/products/category/[category]`)
- [x] Single product API (`/api/products/[id]`)

### ✅ UI Components
- [x] Responsive header with navigation
- [x] Hero slider with auto-rotation
- [x] Category grid with hover effects
- [x] Product cards with ratings and pricing
- [x] Product detail page with image gallery
- [x] Footer with comprehensive links

## 🎨 Color Scheme

- **Primary Blue**: #3b82f6 (Blue-600)
- **Secondary Green**: #10b981 (Emerald-500)
- **Background**: #f9fafb (Gray-50)
- **Text**: #111827 (Gray-900)
- **Accent**: #ef4444 (Red-500) for offers

## 📸 Screenshots

The website closely follows the provided Figma design with:
- Modern hero section with product showcase
- Category-based navigation
- Product grid with hover effects
- Detailed product pages
- Mobile-responsive design

## 🔧 Development Notes

- Uses Next.js 14 App Router for optimal performance
- Implements TypeScript for type safety
- Tailwind CSS for utility-first styling
- Custom API routes for data management
- Responsive design principles throughout
- SEO-friendly structure with proper meta tags

## 📞 Support

For any questions or issues, please refer to the project documentation or contact the development team.

---

**Built with ❤️ using Next.js and Tailwind CSS**