"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Award, TrendingUp, Heart, Sparkles, ChevronRight, Star, MessageCircle } from "lucide-react"
import Girolando58BullDetailPage from "./Girolando58BullDetailPage"
import { girolando58BullsData } from "./girolando58BullsData"

interface FeaturedBull {
  id: string
  name: string
  registration: string
  imageUrl: string
  summary: string
  highlights: string[]
}

interface Girolando58PageProps {
  onBack: () => void
}

function Girolando58Page({ onBack }: Girolando58PageProps) {
  const [selectedBull, setSelectedBull] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredBulls: FeaturedBull[] = [
    {
      id: "comandante",
      name: "COMANDANTE",
      registration: "9701-BV",
      imageUrl: "/COMANDANTE_PHOTO.jpg",
      summary: "Toro GIROLANDO 5/8 con PTA Leite Genômico 1.008 y genética A2A2",
      highlights: ["PTA Genômico: 1.008", "A2A2", "Lac. Mãe: 8.631 kg"],
    },
  ]

  if (selectedBull && girolando58BullsData[selectedBull]) {
    return <Girolando58BullDetailPage bull={girolando58BullsData[selectedBull]} onBack={() => setSelectedBull(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a Categorías</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Cruce Lechero Equilibrado</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Raza GIROLANDO 5/8</h1>
              <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
                El equilibrio perfecto entre GYR y Holstein, combinando rusticidad tropical con buena producción lechera
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Genética</span>
                  </div>
                  <p className="text-2xl font-bold">5/8 Holstein</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Producción</span>
                  </div>
                  <p className="text-2xl font-bold">Equilibrada</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Adaptación</span>
                  </div>
                  <p className="text-2xl font-bold">Tropical</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Toros Destacados</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nuestra selección de toros GIROLANDO 5/8 con genética probada y excelente transmisión
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBulls.length > 0 ? (
                featuredBulls.map((bull) => (
                  <div
                    key={bull.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer border border-gray-100"
                    onClick={() => setSelectedBull(bull.id)}
                    data-testid={`bull-card-${bull.id}`}
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                      <img
                        src={bull.imageUrl}
                        alt={bull.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <div className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>Premium</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                        {bull.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2 font-mono">{bull.registration}</p>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{bull.summary}</p>

                      <div className="space-y-1 mb-4">
                        {bull.highlights.slice(0, 3).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-1 text-xs">
                            <ChevronRight className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm">
                        <span>Ver Detalles</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximamente</h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                      Estamos preparando nuestra selección de toros GIROLANDO 5/8 elite.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Contactar para más información</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir GIROLANDO 5/8?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Balance Perfecto</h3>
                        <p className="text-gray-600 leading-relaxed">
                          62.5% Holstein y 37.5% GYR ofrece el equilibrio ideal entre producción y adaptación
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Rusticidad Mejorada</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Mayor adaptación al clima tropical que razas puras europeas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Producción Competitiva</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Excelente producción lechera con menores costos de mantenimiento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">¿Interesado en nuestra genética GIROLANDO 5/8?</h3>
                  <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                    Contáctanos para recibir asesoría personalizada y conocer disponibilidad de semen de nuestros toros GIROLANDO 5/8 elite
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
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

export default Girolando58Page
