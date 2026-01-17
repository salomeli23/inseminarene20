"use client"

import { useState, useEffect } from "react"
import { Award, TrendingUp, Heart, Sparkles, ChevronRight, Star, MessageCircle } from "lucide-react"
import BullDetailPage from "./BullDetailPage"
import Header from "./Header"

interface FeaturedBull {
  id: string
  name: string
  registration: string
  imageUrl: string
  summary: string
  highlights: string[]
}

interface JerseyPageProps {
  onBack: () => void
}

function JerseyPage({ onBack }: JerseyPageProps) {
  const [selectedBull, setSelectedBull] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredBulls: FeaturedBull[] = [
    {
      id: "jx-peak-shoutout-et",
      name: "JX PEAK SHOUTOUT {5}-ET",
      registration: "001JE07402",
      imageUrl: "/001JE07402_SHOUTOUT.jpg",
      summary: "Toro Jersey élite con excepcional conformación de ubre y componentes lácteos superiores",
      highlights: ["ICC +246", "Componentes superiores", "Excelente conformación"],
    },
    {
      id: "jx-peak-palacemalice-et",
      name: "JX PEAK PALACEMALICE {5}-ET",
      registration: "001JE07457",
      imageUrl: "/001JE07457_PALACEMALICE.jpg",
      summary: "Genética premium con alto valor económico y excelente vida productiva",
      highlights: ["ICC +400", "Alta longevidad", "Rentabilidad superior"],
    },
    {
      id: "pvf-zon-et",
      name: "PVF ZON",
      registration: "001JE07314",
      imageUrl: "/001JE07314_ZON.jpg",
      summary: "Toro destacado con excelente producción de leche y conformación balanceada",
      highlights: ["Alta producción", "Conformación equilibrada", "Genética confiable"],
    },
    {
      id: "jx-vierra-hendrix-et",
      name: "JX VIERRA HENDRIX {4}-ET",
      registration: "001JE07343",
      imageUrl: "/001JE07343_HENDRIX.jpg",
      summary: "Jersey potente con alto volumen de leche y excelente salud de ubre",
      highlights: ["Alta producción +1193 Lbs", "Salud de ubre superior", "ICC +226"],
    },
  ]

  if (selectedBull) {
    return <BullDetailPage bullId={selectedBull} onBack={() => setSelectedBull(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a Categorías</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Raza de Leche Premium</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Raza Jersey</h1>
              <p className="text-xl md:text-2xl text-orange-50 max-w-3xl mx-auto leading-relaxed">
                Genética Jersey de clase mundial especializada en componentes lácteos superiores y eficiencia productiva
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Alta Calidad</span>
                  </div>
                  <p className="text-2xl font-bold">A2A2</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Componentes</span>
                  </div>
                  <p className="text-2xl font-bold">Superior</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Fertilidad</span>
                  </div>
                  <p className="text-2xl font-bold">Excelente</p>
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
                Nuestra selección premium de toros Jersey con genética probada y superior transmisión
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredBulls.map((bull) => (
                <div
                  key={bull.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer border border-gray-100"
                  onClick={() => setSelectedBull(bull.id)}
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                    <img
                      src={bull.imageUrl}
                      alt={bull.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Premium</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {bull.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-mono">{bull.registration}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bull.summary}</p>

                    <div className="space-y-2 mb-4">
                      {bull.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                      <span>Ver Detalles Completos</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir Jersey?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Componentes Superiores</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Mayor contenido de proteína y grasa en la leche, ideal para producción de quesos y productos lácteos premium
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Eficiencia Alimenticia</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Conversión alimenticia excepcional, menor consumo de alimento por kg de componentes producidos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Genética A2A2</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Todos nuestros toros son A2A2, produciendo leche más digerible y de mayor valor comercial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-600 to-amber-600 p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">¿Interesado en nuestra genética Jersey?</h3>
                  <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                    Contáctanos para recibir asesoría personalizada y conocer disponibilidad de semen de nuestros toros Jersey elite
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl space-x-2"
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

export default JerseyPage
