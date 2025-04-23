"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiStar } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useAppSelector } from '@/store';
import { selectCartCount } from '@/store/slices/cartSlice';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number | null>(null);
  const cartItemCount = useAppSelector(selectCartCount);

  useEffect(() => {
    setCartCount(cartItemCount);
  }, [cartItemCount]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full px-4 sm:px-10 py-4 sm:py-8 relative z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/"
          className="font-normal leading-none tracking-normal text-3xl sm:text-4xl md:text-[52px] text-[#484848]"
          style={{ fontFamily: "Volkhov" }}
        >
          FASCO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-5 lg:space-x-10 text-base lg:text-lg">
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors">Shop</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Action Icons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 cursor-pointer text-lg lg:text-xl">
          <IoSearchOutline className="hover:text-gray-600 transition-colors" />
          <IoPersonOutline className="hover:text-gray-600 transition-colors" />
          <CiStar className="hover:text-gray-600 transition-colors" />
          <div className="relative">
            <Link href="/cart" aria-label="Shopping Cart" title='Shopping Cart'>
              <HiOutlineShoppingBag className="hover:text-gray-600 transition-colors" />
              {cartCount !== null && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <div className="relative">
            <Link href="/cart">
              <HiOutlineShoppingBag className="text-xl" />
              {cartCount !== null && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-2xl"
          >
            {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 pb-6 px-6">
          <nav className="h-full flex flex-col">
            <ul className="space-y-6 text-xl font-medium">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/" 
                  className="block py-2 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/" 
                  className="block py-2 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
            </ul>

            <div className="mt-auto">
              <div className="flex items-center justify-around py-6 border-t border-gray-200 text-2xl">
                <IoSearchOutline />
                <IoPersonOutline />
                <CiStar />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
