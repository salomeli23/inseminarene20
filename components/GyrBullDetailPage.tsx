"use client"

import { ArrowLeft, Download, Heart, ShoppingCart } from "lucide-react"

export interface GyrBullData {
  id: string
  code: string
  name: string
  fullName: string
  registro: string
  nasc: string
  criador: string
  proprietario: string
  lactacaoMae: string
  ptaLeite: string
  betaCaseina: string
  kappaCaseina: string
  betaLacto: string
  imageUrl: string
  thumbnails?: string[]
  pnmglData: Array<{ trait: string; pta: string; conf: string }>
  abczData: Array<{ trait: string; pta: string; conf: string }>
  hasGenChoice?: boolean
  hasToro2A2?: boolean
}

interface GyrBullDetailPageProps {
  bull: GyrBullData
  onBack: () => void
}

export default function GyrBullDetailPage({ bull, onBack }: GyrBullDetailPageProps) {
  const thumbnails = bull.thumbnails || [bull.imageUrl, bull.imageUrl, bull.imageUrl, bull.imageUrl]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          data-testid={`back-from-${bull.id}-btn`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Volver a GYR</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{bull.name}</h1>
              <p className="text-sm text-gray-500">{bull.code}</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-gray-600">
                <Download className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <Heart className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Evaluaciones</span>
                <select className="border rounded-lg px-3 py-1.5 text-sm bg-white">
                  <option>PNMGL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="p-6 border-r">
              {/* Buy Button */}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00A0B0] hover:bg-[#008090] text-white px-6 py-3 rounded-lg font-semibold mb-6 transition-colors"
                data-testid={`buy-${bull.id}-btn`}
              >
                <ShoppingCart className="w-5 h-5" />
                ¡QUIERO COMPRAR!
              </a>

              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={bull.imageUrl}
                  alt={`${bull.name} - Toro GYR`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mb-6">
                {thumbnails.slice(0, 6).map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`${bull.name} vista ${index + 1}`}
                    className="w-12 h-12 object-cover rounded-lg border-2 border-gray-200 hover:border-[#00A0B0] cursor-pointer transition-colors"
                  />
                ))}
              </div>

              {/* Logos */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center bg-white">
                    <span className="text-[8px] font-bold text-blue-600 text-center leading-tight">TORO<br/>PROVADO</span>
                  </div>
                </div>
                {bull.hasGenChoice && (
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#00A0B0] font-bold italic">GenChoice</span>
                  </div>
                )}
                {bull.hasToro2A2 && (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-blue-800 flex items-center justify-center bg-blue-800">
                      <span className="text-[8px] font-bold text-white text-center leading-tight">TORO<br/>A2A2</span>
                    </div>
                  </div>
                )}
              </div>

              {/* General Information */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-400 italic">
                  Informacionaes generales
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Nome</span>
                    <p className="text-gray-600">{bull.fullName}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Registro</span>
                    <p className="text-gray-600">{bull.registro}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Nasc</span>
                    <p className="text-gray-600">{bull.nasc}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Criador</span>
                    <p className="text-gray-600">{bull.criador}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Proprietário</span>
                    <p className="text-gray-600">{bull.proprietario}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Lactação da Mãe</span>
                    <p className="text-gray-600">{bull.lactacaoMae}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">PTA Leite</span>
                    <p className="text-gray-600">{bull.ptaLeite}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Beta Caseína</span>
                    <p className="text-gray-600">{bull.betaCaseina}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Kappa Caseína</span>
                    <p className="text-gray-600">{bull.kappaCaseina}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Beta Lacto</span>
                    <p className="text-gray-600">{bull.betaLacto}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Evaluation Tables */}
            <div className="p-6 bg-gray-50 overflow-y-auto max-h-[900px]">
              {/* PNMGL 2025 Table */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">PNMGL 2025</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="text-left py-2"></th>
                      <th className="text-center py-2 font-medium">PTA</th>
                      <th className="text-center py-2 font-medium">CONF (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bull.pnmglData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 text-gray-700">{row.trait}</td>
                        <td className="py-2 text-center font-medium text-gray-900">{row.pta}</td>
                        <td className="py-2 text-center text-gray-600">{row.conf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ABCZ 2025 Table */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">ABCZ 2025</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="text-left py-2"></th>
                      <th className="text-center py-2 font-medium">PTA</th>
                      <th className="text-center py-2 font-medium">CONF (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bull.abczData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 text-gray-700">{row.trait}</td>
                        <td className="py-2 text-center font-medium text-gray-900">{row.pta}</td>
                        <td className="py-2 text-center text-gray-600">{row.conf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
