"use client"

import { useState, useEffect } from "react"
import { Award, TrendingUp, Heart, Sparkles, ChevronRight, Star, MessageCircle } from "lucide-react"
import GuzeraBullDetailPage from "./GuzeraBullDetailPage"
import { guzeraBullsData } from "./guzeraBullsData"
import Header from "./Header"

interface FeaturedBull {
  id: string
  name: string
  registration: string
  imageUrl: string
  summary: string
  highlights: string[]
}

interface GuzeraPageProps {
  onBack: () => void
}

function GuzeraPage({ onBack }: GuzeraPageProps) {
  const [selectedBull, setSelectedBull] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredBulls: FeaturedBull[] = [
    {
      id: "preferido",
      name: "PREFERIDO",
      registration: "JUZZ 110",
      imageUrl: "/PREFERIDO_PHOTO.jpg",
      summary: "Toro GUZERA con genética A2A2 y excelente linaje RUSSO x HUMAITÁ",
      highlights: ["A2A2", "Em Teste", "Lac. Mãe: 3.659 kg"],
    },
    {
      id: "principe",
      name: "PRÍNCIPE",
      registration: "JFT 4419",
      imageUrl: "/PRINCIPE_PHOTO.jpg",
      summary: "Toro GUZERA joven con pedigree OPIO x OBRA de alta calidad",
      highlights: ["Em Teste", "Nasc: 2021", "Linaje Premium"],
    },
  ]

  if (selectedBull && guzeraBullsData[selectedBull]) {
    return <GuzeraBullDetailPage bull={guzeraBullsData[selectedBull]} onBack={() => setSelectedBull(null)} onHome={onBack} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header onBack={onBack} />

      <main className="pt-28">
        <section className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Raza Cebuina de Élite</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Raza GUZERA</h1>
              <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto leading-relaxed">
                La raza Guzerá, originaria de India, destaca por su rusticidad, adaptación al trópico y excelente producción lechera
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Origen</span>
                  </div>
                  <p className="text-2xl font-bold">India</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Aptitud</span>
                  </div>
                  <p className="text-2xl font-bold">Doble Propósito</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Característica</span>
                  </div>
                  <p className="text-2xl font-bold">Rusticidad</p>
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
                Nuestra selección de toros GUZERA con genética probada y excelente transmisión
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
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                      <img
                        src={bull.imageUrl}
                        alt={bull.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <div className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>Premium</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                        {bull.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2 font-mono">{bull.registration}</p>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{bull.summary}</p>

                      <div className="space-y-1 mb-4">
                        {bull.highlights.slice(0, 3).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-1 text-xs">
                            <ChevronRight className="w-3 h-3 text-amber-600 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm">
                        <span>Ver Detalles</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-12 h-12 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximamente</h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                      Estamos preparando nuestra selección de toros GUZERA elite.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all space-x-2"
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

        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir GUZERA?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Doble Propósito</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Excelente para producción de leche y carne, maximizando la rentabilidad del hato
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptación Tropical</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Alta resistencia al calor, parásitos y enfermedades tropicales
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Longevidad</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Animales de larga vida productiva con excelente fertilidad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">¿Interesado en nuestra genética GUZERA?</h3>
                  <p className="text-xl text-amber-50 mb-8 leading-relaxed">
                    Contáctanos para recibir asesoría personalizada y conocer disponibilidad de semen de nuestros toros GUZERA elite
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl space-x-2"
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

export default GuzeraPage
