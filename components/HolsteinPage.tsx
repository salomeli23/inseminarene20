"use client"

import { useState, useEffect } from "react"
import { Award, TrendingUp, Heart, Sparkles, ChevronRight, Star, MessageCircle } from "lucide-react"
import BullDetailPage from "./BullDetailPage"
import Header from "./Header"

interface Subcategory {
  id: string
  name: string
  description: string
  imageUrl: string
  features: string[]
}

interface FeaturedBull {
  id: string
  name: string
  registration: string
  imageUrl: string
  summary: string
  highlights: string[]
}

interface HolsteinPageProps {
  onBack: () => void
}

function HolsteinPage({ onBack }: HolsteinPageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [selectedBull, setSelectedBull] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredBulls: FeaturedBull[] = [
    {
      id: "peak-haymaker-et",
      name: "PEAK HAYMAKER ET",
      registration: "HO-USA-7HO14986",
      imageUrl: "/images/1ho16102-20haymaker.jpg",
      summary: "Toro élite de Genex con equilibrio excepcional entre producción, salud y longevidad",
      highlights: ["Balance superior producción-salud", "Excelente longevidad", "Alto TPI"],
    },
    {
      id: "peak-zimmer-et",
      name: "PEAK ZIMMER ET",
      registration: "HO-USA-7HO15124",
      imageUrl: "/images/1ho16646-20zimmer.jpg",
      summary: "Genética premium de Genex con enfoque en componentes lácteos y conformación",
      highlights: ["Componentes superiores", "Conformación de ubre excepcional", "Alta confiabilidad"],
    },
    {
      id: "peak-comet-et",
      name: "PEAK COMET ET",
      registration: "HO-USA-7HO15245",
      imageUrl: "/1HO16959-COMET.jpg",
      summary: "Toro sobresaliente de Genex con alto potencial genético y excelente transmisión",
      highlights: ["Alta producción de leche", "Excelente conformación", "Genética superior"],
    },
    {
      id: "peak-luckycharm-et",
      name: "PEAK LUCKYCHARM ET",
      registration: "HO-USA-7HO15312",
      imageUrl: "/1HO16863-LUCKYCHARM.jpg",
      summary: "Genética premium enfocada en fertilidad y salud reproductiva",
      highlights: ["Alta fertilidad", "Facilidad de parto", "Salud reproductiva"],
    },
    {
      id: "peak-longmire-et",
      name: "PEAK LONGMIRE ET",
      registration: "HO-USA-7HO15428",
      imageUrl: "/1HO17110-LONGMIRE.jpg",
      summary: "Toro destacado con excelente longevidad y vida productiva extendida",
      highlights: ["Longevidad excepcional", "Vida productiva", "Resistencia superior"],
    },
    {
      id: "peak-empowered-et",
      name: "PEAK EMPOWERED ET",
      registration: "HO-USA-7HO15534",
      imageUrl: "/001HO15701_EMPOWERED.jpg",
      summary: "Genética de alto rendimiento con foco en producción y eficiencia",
      highlights: ["Alto rendimiento", "Eficiencia productiva", "Componentes lácteos"],
    },
    {
      id: "peak-streetmagician-et",
      name: "PEAK STREETMAGICIAN ET",
      registration: "HO-USA-7HO15621",
      imageUrl: "/1HO16057-STREETMAGICIAN.jpg",
      summary: "Toro élite con genética excepcional en conformación de ubre",
      highlights: ["Conformación de ubre", "Tipo lechero", "Balance morfológico"],
    },
    {
      id: "peak-break-even-et",
      name: "PEAK BREAK EVEN ET",
      registration: "HO-USA-7HO15745",
      imageUrl: "/001HO15461_BREAK_EVEN.jpg",
      summary: "Genética económicamente rentable con excelente retorno de inversión",
      highlights: ["Rentabilidad económica", "Balance producción-costos", "Eficiencia"],
    },
    {
      id: "peak-misbehavin-et",
      name: "PEAK MISBEHAVIN ET",
      registration: "HO-USA-7HO15832",
      imageUrl: "/1HO17045-MISBEHAVIN.jpg",
      summary: "Toro innovador con genética diferenciadora y alta transmisión",
      highlights: ["Genética única", "Alta transmisión", "Características distintivas"],
    },
    {
      id: "pine-tree-zenyatta-et",
      name: "PINE TREE ZENYATTA ET",
      registration: "HO-USA-7HO15923",
      imageUrl: "/1HO16035-Pine-Tree-ZENYATTA.jpg",
      summary: "Genética premium con enfoque en tipo y conformación funcional",
      highlights: ["Tipo funcional", "Conformación superior", "Calidad genética"],
    },
    {
      id: "peak-comingup-et",
      name: "PEAK COMINGUP ET",
      registration: "HO-USA-7HO16014",
      imageUrl: "/1HO16032-COMINGUP.jpg",
      summary: "Toro joven con evaluación genómica sobresaliente y alto potencial",
      highlights: ["Potencial genómico", "Evaluación superior", "Futuro prometedor"],
    },
    {
      id: "peak-wildone-et",
      name: "PEAK WILDONE ET",
      registration: "HO-USA-7HO16125",
      imageUrl: "/1HO17331-WILDONE.jpg",
      summary: "Genética audaz con características excepcionales de producción",
      highlights: ["Producción destacada", "Genética audaz", "Rendimiento superior"],
    },
    {
      id: "peak-kazaam-et",
      name: "PEAK KAZAAM ET",
      registration: "HO-USA-7HO16231",
      imageUrl: "/1HO15986_KAZAAM.jpg",
      summary: "Toro con impacto genético sobresaliente y alta confiabilidad",
      highlights: ["Impacto genético", "Alta confiabilidad", "Transmisión consistente"],
    },
    {
      id: "peak-dancendash-et",
      name: "PEAK DANCENDASH ET",
      registration: "HO-USA-7HO16342",
      imageUrl: "/1HO16120-DanceNDash.jpg",
      summary: "Genética ágil con excelente movilidad y patas perfectas",
      highlights: ["Movilidad excelente", "Patas y pezuñas", "Aplomos perfectos"],
    },
    {
      id: "peak-opticalillusion-et",
      name: "PEAK OPTICALILLUSION ET",
      registration: "HO-USA-7HO16453",
      imageUrl: "/images/1ho16311-20opticalillusion.jpg",
      summary: "Toro impresionante con genética visual y conformación extraordinaria",
      highlights: ["Conformación extraordinaria", "Tipo visual", "Presencia superior"],
    },
    {
      id: "peak-candyman-et",
      name: "PEAK CANDYMAN ET",
      registration: "HO-USA-7HO16564",
      imageUrl: "/1HO16701-CANDYMAN.jpg",
      summary: "Genética dulce con componentes lácteos excepcionales",
      highlights: ["Componentes excepcionales", "Proteína superior", "Grasa de calidad"],
    },
    {
      id: "peak-toretto-et",
      name: "PEAK TORETTO ET",
      registration: "HO-USA-7HO16675",
      imageUrl: "/001HO15405_TORETTO.jpg",
      summary: "Toro potente con genética de alto rendimiento y velocidad de transmisión",
      highlights: ["Potencia genética", "Transmisión rápida", "Alto rendimiento"],
    },
    {
      id: "peak-maracay-et",
      name: "PEAK MARACAY ET",
      registration: "HO-USA-7HO16786",
      imageUrl: "/001HO15410_MARACAY.jpg",
      summary: "Genética tropical adaptada con excelente resistencia al calor",
      highlights: ["Adaptación tropical", "Resistencia al calor", "Versatilidad climática"],
    },
    {
      id: "peak-moneytalks-et",
      name: "PEAK MONEYTALKS ET",
      registration: "HO-USA-7HO16897",
      imageUrl: "/1HO16488-MONEYTALKS.jpg",
      summary: "Toro económicamente superior con alto valor neto y rentabilidad",
      highlights: ["Valor económico alto", "Rentabilidad garantizada", "NM$ superior"],
    },
    {
      id: "peak-zooty-et",
      name: "PEAK ZOOTY ET",
      registration: "HO-USA-7HO16908",
      imageUrl: "/001HO15618_ZOOTY.jpg",
      summary: "Genética dinámica con excelente balance entre producción y tipo",
      highlights: ["Balance perfecto", "Producción y tipo", "Genética dinámica"],
    },
    {
      id: "peak-wallen-et",
      name: "PEAK WALLEN ET",
      registration: "HO-USA-7HO17019",
      imageUrl: "/001HO15229_WALLEN.jpg",
      summary: "Toro robusto con estructura sólida y fortaleza excepcional",
      highlights: ["Estructura robusta", "Fortaleza superior", "Solidez corporal"],
    },
    {
      id: "peak-fortnite-et",
      name: "PEAK FORTNITE ET",
      registration: "HO-USA-7HO17120",
      imageUrl: "/001HO15055_FORTNITE.jpg",
      summary: "Genética de nueva generación con evaluación genómica de vanguardia",
      highlights: ["Nueva generación", "Genómica avanzada", "Futuro genético"],
    },
    {
      id: "peak-tarren-et",
      name: "PEAK TARREN ET",
      registration: "HO-USA-7HO17231",
      imageUrl: "/001HO15377_TARREN.jpg",
      summary: "Toro equilibrado con excelente funcionalidad y vida productiva",
      highlights: ["Equilibrio funcional", "Vida productiva", "Funcionalidad superior"],
    },
    {
      id: "peak-rayshen-et",
      name: "PEAK RAYSHEN ET",
      registration: "HO-USA-7HO17342",
      imageUrl: "/001HO15274_RAYSHEN.jpg",
      summary: "Genética brillante con transmisión consistente y alta heredabilidad",
      highlights: ["Transmisión brillante", "Alta heredabilidad", "Consistencia genética"],
    },
    {
      id: "aprilday-mariano-red-et",
      name: "APRILDAY MARIANO RED ET",
      registration: "HO-USA-7HO17453",
      imageUrl: "/1HO16698-MARIANO-RED.jpg",
      summary: "Holstein Rojo con genética diferenciada y alta producción",
      highlights: ["Holstein Rojo", "Producción destacada", "Genética diferenciada"],
    },
  ]

  const subcategories: Subcategory[] = [
    {
      id: "produccion-alta",
      name: "Alta Producción",
      description: "Toros seleccionados genéticamente para máxima producción de leche",
      imageUrl: "/hero-holstein.jpg",
      features: ["Producción superior a 12,000 kg/año", "Conformación de ubre excepcional", "Longevidad comprobada"],
    },
    {
      id: "conformacion",
      name: "Conformación",
      description: "Genética especializada en estructura corporal y tipo lechero ideal",
      imageUrl: "/hero-dairy-cattle-1.jpg",
      features: ["Estructura ósea sólida", "Aplomos perfectos", "Balance corporal óptimo"],
    },
    {
      id: "fertilidad",
      name: "Fertilidad y Salud",
      description: "Toros con índices superiores de fertilidad y resistencia a enfermedades",
      imageUrl: "/hero-dairy-cattle-2.jpg",
      features: ["Tasa de concepción elevada", "Facilidad de parto", "Resistencia a mastitis"],
    },
    {
      id: "componentes",
      name: "Componentes de Leche",
      description: "Genética enfocada en alto contenido de proteína y grasa",
      imageUrl: "/hero-guernsey.jpg",
      features: ["Alto contenido proteico", "Grasa butirométrica superior", "Sólidos totales optimizados"],
    },
    {
      id: "genomicos",
      name: "Genómicos Elite",
      description: "Toros jóvenes con evaluación genómica de última generación",
      imageUrl: "/hero-gyr.jpg",
      features: ["Evaluación genómica completa", "Predicción confiable", "Genética de vanguardia"],
    },
    {
      id: "comprobados",
      name: "Probados Internacionales",
      description: "Toros con evaluación probada y reconocimiento mundial",
      imageUrl: "/hero-trovao.jpg",
      features: ["Evaluación internacional", "Hijas comprobadas", "Prestigio garantizado"],
    },
  ]

  if (selectedBull) {
    return <BullDetailPage bullId={selectedBull} onBack={() => setSelectedBull(null)} onHome={onBack} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Header onBack={onBack} />

      <div className="pt-28 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Leche Taurina</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Raza Holstein</h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                La raza lechera más destacada del mundo. Reconocida por su excepcional producción de leche y
                adaptabilidad a diversos sistemas de manejo.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-3 mx-auto">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">25</div>
                    <div className="text-xs text-blue-200">Tipos Disponibles</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-3 mx-auto">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Elite</div>
                    <div className="text-xs text-blue-200">Genética Mundial</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-3 mx-auto">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">#1</div>
                    <div className="text-xs text-blue-200">En Colombia</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                  Alta Producción
                </span>
                <span className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                  Conformación Superior
                </span>
                <span className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                  Longevidad
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20 shadow-2xl">
                <img
                  src="/images/1ho16959-comet.jpg"
                  alt="PEAK COMET-ET Holstein Bull"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-bold text-amber-900">TOROS DESTACADOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Mejores Toros Holstein</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genética elite seleccionada con las más altas evaluaciones internacionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {featuredBulls.map((bull) => (
            <div
              key={bull.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedBull(bull.id)}
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900/60 z-10 group-hover:from-blue-900/40 group-hover:to-slate-900/40 transition-all duration-500"></div>
                <img
                  src={bull.imageUrl || "/placeholder.svg"}
                  alt={bull.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>ELITE</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-3xl font-bold text-white mb-1">{bull.name}</h3>
                  <p className="text-sm text-blue-200 font-medium">{bull.registration}</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-white to-blue-50 group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-500">
                <p className="text-gray-700 mb-4 leading-relaxed">{bull.summary}</p>

                <div className="space-y-2 mb-6">
                  {bull.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold group-hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <span>Ver Detalles Completos</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Por qué elegir Holstein?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">La raza más productiva y confiable del mundo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Producción Líder Mundial</h3>
                  <p className="text-gray-600">
                    La raza Holstein ostenta los récords de producción lechera más altos del mundo, con promedios
                    superiores a 10,000 kg por lactancia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Mejoramiento Genético Continuo</h3>
                  <p className="text-gray-600">
                    Décadas de selección genética rigurosa han perfeccionado características productivas y de
                    conformación en esta raza.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Adaptabilidad Comprobada</h3>
                  <p className="text-gray-600">
                    Excelente adaptabilidad a diversos climas y sistemas de producción, desde pastoreo hasta
                    confinamiento total.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                  <span className="text-lg text-gray-700">Producción Promedio</span>
                  <span className="text-2xl font-bold text-blue-600">12,000+ kg</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                  <span className="text-lg text-gray-700">Grasa Butírica</span>
                  <span className="text-2xl font-bold text-blue-600">3.5% - 4.0%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                  <span className="text-lg text-gray-700">Proteína</span>
                  <span className="text-2xl font-bold text-blue-600">3.0% - 3.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-700">Vida Productiva</span>
                  <span className="text-2xl font-bold text-blue-600">4-5 lactancias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Categorías Especializadas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra selección de genética Holstein clasificada por especialidad para encontrar exactamente lo
            que tu hato necesita
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory) => {
            const isSelected = selectedSubcategory === subcategory.id

            return (
              <div
                key={subcategory.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setSelectedSubcategory(subcategory.id)}
                onMouseLeave={() => setSelectedSubcategory(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80 z-10 transition-opacity duration-500 ${isSelected ? "opacity-70" : "opacity-50"}`}
                  ></div>
                  <img
                    src={subcategory.imageUrl || "/placeholder.svg"}
                    alt={subcategory.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? "scale-110" : "scale-100"}`}
                  />

                  <div className="absolute top-4 right-4 z-20">
                    <div
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isSelected ? "scale-110 rotate-45" : "scale-100 rotate-0"}`}
                    >
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{subcategory.name}</h3>
                  </div>
                </div>

                <div className={`p-6 transition-all duration-500 ${isSelected ? "bg-blue-50" : "bg-white"}`}>
                  <p className="text-gray-600 mb-4 leading-relaxed">{subcategory.description}</p>

                  <div className="space-y-2">
                    {subcategory.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-2 transition-all duration-500 delay-${index * 100}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2 transition-colors ${isSelected ? "bg-blue-600" : "bg-gray-400"}`}
                        ></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-500 ${isSelected ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg" : "bg-gray-100 text-gray-700"}`}
                  >
                    Ver Catálogo
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Impulsa tu Producción con Genética Holstein</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
            Nuestros especialistas están listos para ayudarte a seleccionar la genética Holstein perfecta para tu hato
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Contactar Asesor</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

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

export default HolsteinPage
