"use client"

import { useState, useEffect } from "react"
import { Menu, X, Milk, Beef, Phone, Mail, MapPin, ChevronDown, MessageCircle } from "lucide-react"
import HolsteinPage from "../components/HolsteinPage"
import JerseyPage from "../components/JerseyPage"
import PardoSuizoPage from "../components/PardoSuizoPage"
import AyrshirePage from "../components/AyrshirePage"

interface Breed {
  name: string
  count: number
}

interface Category {
  title: string
  subtitle: string
  breeds: Breed[]
  icon: typeof Milk
  color: string
  bgGradient: string
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<"home" | "holstein" | "jersey" | "pardo-suizo" | "ayrshire">("home")
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/hero-dairy-cattle-1.jpg",
    "/hero-dairy-cattle-2.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const categories: Category[] = [
    {
      title: "Razas de Leche Taurinas",
      subtitle: "Razas europeas especializadas en producción lechera",
      icon: Milk,
      color: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      breeds: [
        { name: "HOLSTEIN", count: 25 },
        { name: "JERSEY", count: 6 },
        { name: "PARDO SUIZO", count: 4 },
        { name: "AYRSHIRE", count: 2 },
        { name: "GUERNSEY", count: 1 },
        { name: "NORMANDO", count: 3 },
        { name: "SIMMENTAL", count: 2 },
      ],
    },
    {
      title: "Razas de Leche Cebuinas",
      subtitle: "Razas adaptadas al trópico con excelente producción",
      icon: Milk,
      color: "from-sky-600 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
      breeds: [
        { name: "GYR", count: 16 },
        { name: "GIROLANDO 5/8", count: 3 },
        { name: "GIROLANDO 3/4", count: 2 },
        { name: "GUZERA", count: 4 },
        { name: "RED SINDI", count: 3 },
      ],
    },
    {
      title: "Razas Carnicas",
      subtitle: "Razas especializadas en producción de carne de calidad",
      icon: Beef,
      color: "from-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      breeds: [
        { name: "ANGUS", count: 6 },
        { name: "BRAHMAN", count: 3 },
        { name: "NELORE", count: 8 },
        { name: "MONTBELIARDE", count: 4 },
        { name: "BRANGUS", count: 4 },
        { name: "CHAROLAIS", count: 1 },
        { name: "SENEPOL", count: 1 },
        { name: "LIMOUSINE", count: 3 },
      ],
    },
  ]

  if (currentPage === "holstein") {
    return <HolsteinPage onBack={() => setCurrentPage("home")} />
  }

  if (currentPage === "jersey") {
    return <JerseyPage onBack={() => setCurrentPage("home")} />
  }

  if (currentPage === "pardo-suizo") {
    return <PardoSuizoPage onBack={() => setCurrentPage("home")} />
  }

  if (currentPage === "ayrshire") {
    return <AyrshirePage onBack={() => setCurrentPage("home")} />
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-36 py-6">
            <div className="flex items-center space-x-6">
              <img src="/logoinseminar.png" alt="Inseminar Logo" className="h-28 w-auto object-contain" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Inseminar de Colombia</h1>
                <p className="text-base text-gray-600 font-medium mt-1">Genética Bovina de Excelencia</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Inicio
              </a>
              <a href="#categorias" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Categorías
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contacto
              </a>
              <a
                href="#contacto"
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
              <a
                href="#inicio"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#categorias"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categorías
              </a>
              <a
                href="#contacto"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-36">
        <section
          id="inicio"
          className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Genética Bovina de Clase Mundial</h2>
                <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
                  Líderes en Colombia con la mejor selección de razas especializadas en leche y carne para potenciar tu
                  producción ganadera.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#categorias"
                    className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    Ver Catálogo
                    <ChevronDown className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center bg-blue-800/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800/50 transition-all border-2 border-white/20"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <img
                    src="/logoinseminar.png"
                    alt="Inseminar Logo"
                    className="w-full max-w-md h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestras Categorías</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ofrecemos una amplia selección de razas especializadas para cada necesidad de producción
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const Icon = category.icon
                const isExpanded = selectedCategory === category.title

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <Icon className="w-12 h-12 mb-4 relative z-10" />
                      <h3 className="text-2xl font-bold mb-2 relative z-10">{category.title}</h3>
                      <p className="text-white/90 text-sm relative z-10 leading-relaxed">{category.subtitle}</p>
                    </div>

                    <div className="p-6">
                      <button
                        onClick={() => setSelectedCategory(isExpanded ? null : category.title)}
                        className="w-full mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors flex items-center justify-between"
                      >
                        <span>{isExpanded ? "Ocultar razas" : "Ver todas las razas"}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <div
                        className={`space-y-2 overflow-hidden transition-all ${isExpanded ? "max-h-[500px]" : "max-h-[180px]"}`}
                      >
                        {category.breeds.map((breed, breedIndex) => (
                          <div
                            key={breedIndex}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => {
                              if (breed.name === "HOLSTEIN") {
                                setCurrentPage("holstein")
                              } else if (breed.name === "JERSEY") {
                                setCurrentPage("jersey")
                              } else if (breed.name === "PARDO SUIZO") {
                                setCurrentPage("pardo-suizo")
                              } else if (breed.name === "AYRSHIRE") {
                                setCurrentPage("ayrshire")
                              }
                            }}
                          >
                            <span className="font-medium text-gray-800">{breed.name}</span>
                            <span
                              className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                            >
                              {breed.count} {breed.count === 1 ? "tipo" : "tipos"}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-medium">Total de tipos:</span>
                          <span className="text-2xl font-bold text-gray-900">
                            {category.breeds.reduce((sum, breed) => sum + breed.count, 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Milk className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Calidad Garantizada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Genética superior seleccionada con los más altos estándares internacionales
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Beef className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Amplio Portafolio</h3>
                <p className="text-gray-600 leading-relaxed">
                  Más de 100 tipos disponibles en razas lecheras y de carne
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Asesoría Experta</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acompañamiento profesional para maximizar los resultados de tu ganadería
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Hablemos de tu Proyecto</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Estamos listos para asesorarte y ofrecerte las mejores soluciones en genética bovina.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                      <p className="text-gray-300">+57 (300) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-300">info@inseminarcolombia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                      <p className="text-gray-300">Colombia - Cobertura Nacional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-sky-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/logoinseminar.png" alt="Inseminar Logo" className="h-10 w-auto object-contain" />
              <span className="font-semibold text-white">Inseminar de Colombia</span>
            </div>
            <p className="text-sm">© 2025 Inseminar de Colombia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></span>
      </a>
    </div>
  )
}
