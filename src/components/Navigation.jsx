import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import cielLogo from '../assets/CielElectricLogo.jpg'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={cielLogo} alt="Ciel Electric" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                    isActive('/about') 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  About Us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/about#company-profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      Company Profile
                    </Link>
                    <Link 
                      to="/about#management-profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      Management Profile
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/projects" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/projects') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Our Projects
              </Link>
              <Link 
                to="/quotation" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/quotation') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Get a Quotation
              </Link>
              <Link 
                to="/career" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/career') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Career
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about#company-profile" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Profile
              </Link>
              <Link 
                to="/about#management-profile" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Management Profile
              </Link>
              <Link 
                to="/projects" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Projects
              </Link>
              <Link 
                to="/quotation" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quotation
              </Link>
              <Link 
                to="/career" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

