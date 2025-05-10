"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Professional Consultancy & Training Services Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-gray-700 hover:text-indigo-700 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-base font-medium text-gray-700 hover:text-indigo-700 transition-colors">
              About Us
            </Link>
            <Link href="#goals" className="text-base font-medium text-gray-700 hover:text-indigo-700 transition-colors">
              Goals
            </Link>
            <Link
              href="#services"
              className="text-base font-medium text-gray-700 hover:text-indigo-700 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium text-gray-700 hover:text-indigo-700 transition-colors"
            >
              Contact Us
            </Link>
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="#register">Register</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#goals"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Goals
            </Link>
            <Link
              href="#services"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="#register" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
