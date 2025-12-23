"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { SlEarphones } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { LuUser } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="text-white shadow-lg sticky top-0 bg-[#0c474a]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between  p-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-white rounded font-bold text-xl ">
                <Image src={logo} alt="Logo" className=" h-[55px] w-[130px]" />
              </div>
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <select className="px-3 py-2 border-t border-b border-gray-300 text-gray-900 focus:outline-none rounded-l-lg">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Appliances</option>
                  <option>Fashion</option>
                  <option>Babies Store</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none text-gray-900"
                />
                <button className="bg-white text-white px-6 py-2 rounded-r-lg transition-colors">
                  <CiSearch style={{ color: "grey", fontSize: "20px" }} />
                </button>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2">
                <div>
                  <div className="text-xs">Call Us Now</div>
                  <div className="flex items-center">
                    <SlEarphones
                      style={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    <>+1800 123 4567</>
                  </div>
                  <div className="font-bold">Sign In</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-5">
               
                <span>
                  <LuUser style={{fontSize:"30px", color:"white"}}/>
                </span>
                 <span>
                  <FcLike style={{fontSize:"30px"}}/>
                  
                </span>
                <span>
                  <GrCart style={{fontSize:"30px", color:"white"}}/>
                </span>
                <span className="text-sm">CART</span>
                
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-white"></div>
                  <div className="w-full h-0.5 bg-white"></div>
                  <div className="w-full h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <header className="text-white shadow-lg sticky bg-[#123a3d]">
        <div className="container mx-auto  ">
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block bg-[#123a3d]`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 md:space-x-8 h-[60px]">


              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Easy Monthly Instalments
                </Link>
                <Link
                  href="/brands"
                  className="hover:text-blue-400 transition-colors"
                >
                  Shop by Brands
                </Link>
                <Link
                  href="/vendor"
                  className="hover:text-blue-400 transition-colors"
                >
                  Become a Vendor
                </Link>
              </div>

              <div className="flex space-x-4 ml-auto">
                <a href="#" className="text-white text-[30px]">
                  <FaFacebookF />

                </a>
                <a href="#" className="text-white text-[30px]">
                  <FaLinkedinIn />

                </a>
                <a href="#" className="text-white text-[30px]">
                  <CiTwitter />

                </a>
                <a href="#" className="text-white text-[30px]">
                  <FaInstagram />

                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="md:hidden">
        <div className="flex w-full">
                
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none text-gray-900"
                />
                <button className="bg-white text-white px-5 py-2 rounded-r-lg transition-colors">
                  <CiSearch style={{ color: "grey", fontSize: "20px" }} />
                </button>
              </div>
      </div>
    </>
  );
};

export default Header;
