"use client"

import { ArrowLeft, Download, Heart, ShoppingCart } from "lucide-react"

interface EdankDetailPageProps {
  onBack: () => void
}

export default function EdankDetailPage({ onBack }: EdankDetailPageProps) {
  const pnmglData = [
    { trait: "Leite", pta: "888", conf: "87" },
    { trait: "Idade ao Primeiro Parto", pta: "-56", conf: "82" },
    { trait: "NF", pta: "15", conf: "--" },
    { trait: "NR", pta: "8", conf: "--" },
    { trait: "Gordura Kg", pta: "--", conf: "--" },
    { trait: "Gordura %", pta: "--", conf: "--" },
    { trait: "Proteína Kg", pta: "--", conf: "--" },
    { trait: "Proteína %", pta: "--", conf: "--" },
    { trait: "Sólidos Totais Kg", pta: "--", conf: "--" },
    { trait: "Sólidos Totais %", pta: "--", conf: "--" },
  ]

  const abczData = [
    { trait: "ALTG", pta: "--", conf: "--" },
    { trait: "COMP", pta: "--", conf: "--" },
    { trait: "PERT", pta: "--", conf: "--" },
    { trait: "ANGG", pta: "--", conf: "--" },
    { trait: "COMG", pta: "--", conf: "--" },
    { trait: "LIL", pta: "--", conf: "--" },
    { trait: "LIS", pta: "--", conf: "--" },
    { trait: "POSL", pta: "--", conf: "--" },
    { trait: "POST", pta: "--", conf: "--" },
    { trait: "ANGC", pta: "--", conf: "--" },
    { trait: "PU", pta: "--", conf: "--" },
    { trait: "LUP", pta: "--", conf: "--" },
    { trait: "LA", pta: "--", conf: "--" },
    { trait: "COMPT", pta: "--", conf: "--" },
    { trait: "AUP", pta: "--", conf: "--" },
    { trait: "LC", pta: "--", conf: "--" },
    { trait: "DIATE", pta: "--", conf: "--" },
    { trait: "TEMP", pta: "--", conf: "--" },
    { trait: "FAC ORD", pta: "--", conf: "--" },
    { trait: "UMBIGO", pta: "--", conf: "--" },
    { trait: "PELE", pta: "--", conf: "--" },
  ]

  const thumbnails = [
    "/EDANK_PROFILE.jpg",
    "/EDANK_PROFILE.jpg",
    "/EDANK_PROFILE.jpg",
    "/EDANK_PROFILE.jpg",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          data-testid="back-to-gyr-btn"
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
              <h1 className="text-2xl font-bold text-gray-900">EDANK</h1>
              <p className="text-sm text-gray-500">001GL00051</p>
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
                data-testid="buy-edank-btn"
              >
                <ShoppingCart className="w-5 h-5" />
                ¡QUIERO COMPRAR!
              </a>

              {/* Main Image */}
              <div className="mb-4">
                <img
                  src="/EDANK_PROFILE.jpg"
                  alt="EDANK - Toro GYR"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mb-6">
                {thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`EDANK vista ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 hover:border-[#00A0B0] cursor-pointer transition-colors"
                  />
                ))}
              </div>

              {/* Logos */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center bg-white">
                    <span className="text-xs font-bold text-blue-600">TORO</span>
                  </div>
                  <span className="text-sm text-blue-600 font-medium">Toro Provado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#00A0B0] flex items-center justify-center bg-white">
                    <span className="text-xs font-bold text-[#00A0B0]">GC</span>
                  </div>
                  <span className="text-sm text-[#00A0B0] font-medium">GenChoice</span>
                </div>
              </div>

              {/* General Information */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-400">
                  Informaciones generales
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Nome</span>
                    <p className="text-gray-600">EDANK TE JABAQUARA</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Registro</span>
                    <p className="text-gray-600">EVPF444</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Nasc</span>
                    <p className="text-gray-600">09/08/2013</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Criador</span>
                    <p className="text-gray-600">ELIO VIRGINIO PIMENTEL - FAZENDA JABAQUARA</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Proprietário</span>
                    <p className="text-gray-600">AGROPECUÁRIA JABAQUARA LTDA, ESTÂNCIA QUALYTÃ E GENEX BRASIL</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Lactação da Mãe</span>
                    <p className="text-gray-600">20,018 Kg em 365 dias</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">PTA Leite</span>
                    <p className="text-gray-600">
                      <span className="text-xs text-gray-500">PROVADO PTAL:</span> 888
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Beta Caseína</span>
                    <p className="text-gray-600">A1A2</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Kappa Caseína</span>
                    <p className="text-gray-600">AB</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Beta Lacto</span>
                    <p className="text-gray-600">BB</p>
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
                    {pnmglData.map((row, index) => (
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
                    {abczData.map((row, index) => (
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
