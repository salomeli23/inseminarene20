"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Award, TrendingUp, Heart, Sparkles, ChevronRight, Star, MessageCircle } from "lucide-react"
import GyrBullDetailPage from "./GyrBullDetailPage"
import { gyrBullsData } from "./gyrBullsData"

interface FeaturedBull {
  id: string
  name: string
  registration: string
  imageUrl: string
  summary: string
  highlights: string[]
}

interface GyrPageProps {
  onBack: () => void
}

function GyrPage({ onBack }: GyrPageProps) {
  const [selectedBull, setSelectedBull] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredBulls: FeaturedBull[] = [
    {
      id: "edank",
      name: "EDANK",
      registration: "EVPF444",
      imageUrl: "/EDANK_PROFILE.jpg",
      summary: "Toro GYR con PTA Leite +888 (87% conf) y producción materna de 20,018 Kg",
      highlights: ["PTA Leite: +888", "A1A2 BB AB", "Producción: 20,018 Kg"],
    },
    {
      id: "trovao",
      name: "TROVÃO 2B",
      registration: "ZAB1044",
      imageUrl: "/GYR_TROVAO.jpg",
      summary: "Toro GYR probado con PTA Leite +721 y excelente producción materna",
      highlights: ["PTA Leite: +721", "A2A2 AA AB", "Producción: 11,764 Kg"],
    },
    {
      id: "beneton",
      name: "BENETON",
      registration: "ZAB 1762",
      imageUrl: "/GYR_BENETON.jpg",
      summary: "Toro GYR joven en test de progenie con genética A2A2",
      highlights: ["En Test: 2027", "A2A2 AA BB", "Producción: 10,409 Kg"],
    },
    {
      id: "elvis",
      name: "ELVIS",
      registration: "BRAN327",
      imageUrl: "/GYR_ELVIS.jpg",
      summary: "Toro GYR de la Estancia K con excelente lactación materna",
      highlights: ["En Test: 2030", "A2A2 AA AB", "Producción: 10,401 Kg"],
    },
    {
      id: "uno",
      name: "UNO 2B",
      registration: "ZAB1140",
      imageUrl: "/GYR_UNO.jpg",
      summary: "Toro GYR probado con PTA Leite +857 y alto rendimiento",
      highlights: ["PTA Leite: +857", "A2A2 AA AA", "Producción: 9,355 Kg"],
    },
    {
      id: "eden",
      name: "ÉDEN",
      registration: "ZAB2466",
      imageUrl: "/GYR_EDEN.jpg",
      summary: "Toro GYR joven con excepcional lactación materna de 13,068 Kg",
      highlights: ["En Test: 2030", "A2A2 AA AB", "Producción: 13,068 Kg"],
    },
  ]

  if (selectedBull && gyrBullsData[selectedBull]) {
    return <GyrBullDetailPage bull={gyrBullsData[selectedBull]} onBack={() => setSelectedBull(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a Categorías</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Raza Lechera Tropical de Elite</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Raza GYR Lechero</h1>
              <p className="text-xl md:text-2xl text-sky-50 max-w-3xl mx-auto leading-relaxed">
                Genética GYR de excelencia reconocida por su rusticidad, adaptación tropical y alta producción lechera
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Genética</span>
                  </div>
                  <p className="text-2xl font-bold">A2A2</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Adaptación</span>
                  </div>
                  <p className="text-2xl font-bold">Tropical</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Rusticidad</span>
                  </div>
                  <p className="text-2xl font-bold">Superior</p>
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
                Nuestra selección de toros GYR con genética probada brasileña y transmisión excepcional
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {featuredBulls.length > 0 ? (
                featuredBulls.map((bull) => (
                  <div
                    key={bull.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer border border-gray-100"
                    onClick={() => setSelectedBull(bull.id)}
                  >
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                      <img
                        src={bull.imageUrl}
                        alt={bull.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Premium</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                        {bull.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 font-mono">{bull.registration}</p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bull.summary}</p>

                      <div className="space-y-2 mb-4">
                        {bull.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-sky-600 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                        <span>Ver Detalles Completos</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                    <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-12 h-12 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximamente</h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                      Estamos preparando nuestra selección de toros GYR elite. Pronto tendrás acceso a genética GYR de la más alta calidad.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all space-x-2"
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

        <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir GYR Lechero?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptación Tropical</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Máxima tolerancia al calor y resistencia a parásitos, ideal para clima tropical
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Alta Producción</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Producción lechera superior adaptada al trópico con alto contenido de sólidos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Genética A2A2</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Todos nuestros toros son A2A2, produciendo leche más saludable y de mayor valor comercial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-600 to-blue-600 p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">¿Interesado en nuestra genética GYR?</h3>
                  <p className="text-xl text-sky-50 mb-8 leading-relaxed">
                    Contáctanos para recibir asesoría personalizada y conocer disponibilidad de semen de nuestros toros GYR elite
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl space-x-2"
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

export default GyrPage
