'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Tax Consultancy', href: '/services/tax-consultancy' },
        { name: 'Financial Auditing', href: '/services/financial-auditing' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Artificial Intelligence', href: '/services/ai-solutions' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary-600">SAM INC</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Professional Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="block py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-lg p-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
