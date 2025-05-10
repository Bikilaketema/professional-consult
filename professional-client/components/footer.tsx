import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Professional Consultancy & Training Services Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-indigo-200 mt-4">Professional Consultancy & Training Services - Center of Competency!</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-indigo-100">drgutuprofessional@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-indigo-100">0912 005948</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#goals" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Goals
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Registration
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Training Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  School Consultancy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Leadership Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-indigo-200 mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-indigo-800/50 border border-indigo-700 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
          <p className="text-indigo-300">
            &copy; {new Date().getFullYear()} Professional Consultancy & Training Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
