"use client"

import { useState } from "react"
import { Menu, X, ArrowLeft } from "lucide-react"

interface HeaderProps {
  onBack: () => void
  showBackButton?: boolean
}

export default function Header({ onBack, showBackButton = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-4">
          <div className="flex items-center space-x-4 md:space-x-8">
            {showBackButton && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium hidden sm:inline">Volver</span>
              </button>
            )}
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            <img src="/logoinseminar.png" alt="Inseminar Logo" className="h-14 md:h-20 w-auto object-contain" />
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <img src="/partner-logos.png" alt="Partner Logos" className="h-10 md:h-16 w-auto object-contain hidden md:block" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onBack}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={onBack}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Categorías
            </button>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573001234567'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Contáctanos
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBack()
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBack()
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Categorías
            </button>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573001234567'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
