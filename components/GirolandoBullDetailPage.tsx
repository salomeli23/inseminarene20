"use client"

import { useState } from "react"
import { ArrowLeft, Download, Heart, ShoppingCart } from "lucide-react"

export interface PedigreeAnimal {
  name: string
  registro?: string
}

export interface PedigreeData {
  title: string
  sire: PedigreeAnimal & {
    siresSire: string
    siresDam: string
  }
  dam: PedigreeAnimal & {
    damsSire: string
    damsDam: string
  }
}

export interface GirolandoBullData {
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
  pedigree?: PedigreeData
  pedigreeImage?: string
}

interface GirolandoBullDetailPageProps {
  bull: GirolandoBullData
  onBack: () => void
}

export default function GirolandoBullDetailPage({ bull, onBack }: GirolandoBullDetailPageProps) {
  const thumbnails = bull.thumbnails || [bull.imageUrl]
  const [selectedImage, setSelectedImage] = useState(bull.imageUrl)

  // Helper to check if value is empty
  const hasValue = (val: string) => val && val !== "--" && val !== ""

  // Check if tables have any real data
  const hasTableData = (data: Array<{ pta: string; conf: string }>) => 
    data.some(row => row.pta !== "--" || row.conf !== "--")

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
          <span>Volver a GIROLANDO 3/4</span>
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
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="p-6 lg:border-r">
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
                  src={selectedImage}
                  alt={`${bull.name} - Toro GIROLANDO 3/4`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Thumbnail Gallery - only show if multiple images */}
              {thumbnails.length > 1 && (
                <div className="flex gap-2 mb-6">
                  {thumbnails.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`${bull.name} vista ${index + 1}`}
                      onClick={() => setSelectedImage(thumb)}
                      className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedImage === thumb ? 'border-[#00A0B0]' : 'border-gray-200 hover:border-[#00A0B0]'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Logos */}
              <div className="flex items-center gap-4 mb-6">
                {bull.hasGenChoice && (
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#00A0B0] font-bold italic">GenChoice</span>
                  </div>
                )}
                {bull.hasToro2A2 && (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-purple-800 flex items-center justify-center bg-purple-800">
                      <span className="text-[8px] font-bold text-white text-center leading-tight">TORO<br/>A2A2</span>
                    </div>
                  </div>
                )}
              </div>

              {/* General Information - only show fields with data */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-purple-400 italic">
                  Informaciones generales
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Nome</span>
                    <p className="text-gray-600">{bull.fullName}</p>
                  </div>
                  {hasValue(bull.registro) && (
                    <div>
                      <span className="font-semibold text-gray-700">Registro</span>
                      <p className="text-gray-600">{bull.registro}</p>
                    </div>
                  )}
                  {hasValue(bull.nasc) && (
                    <div>
                      <span className="font-semibold text-gray-700">Nasc</span>
                      <p className="text-gray-600">{bull.nasc}</p>
                    </div>
                  )}
                  {hasValue(bull.criador) && (
                    <div>
                      <span className="font-semibold text-gray-700">Criador</span>
                      <p className="text-gray-600">{bull.criador}</p>
                    </div>
                  )}
                  {hasValue(bull.proprietario) && (
                    <div>
                      <span className="font-semibold text-gray-700">Proprietário</span>
                      <p className="text-gray-600">{bull.proprietario}</p>
                    </div>
                  )}
                  {hasValue(bull.lactacaoMae) && (
                    <div>
                      <span className="font-semibold text-gray-700">Lactação da Mãe</span>
                      <p className="text-gray-600">{bull.lactacaoMae}</p>
                    </div>
                  )}
                  {hasValue(bull.ptaLeite) && (
                    <div>
                      <span className="font-semibold text-gray-700">PTA Leite</span>
                      <p className="text-gray-600">{bull.ptaLeite}</p>
                    </div>
                  )}
                  {hasValue(bull.betaCaseina) && (
                    <div>
                      <span className="font-semibold text-gray-700">Beta Caseína</span>
                      <p className="text-gray-600">{bull.betaCaseina}</p>
                    </div>
                  )}
                  {hasValue(bull.kappaCaseina) && (
                    <div>
                      <span className="font-semibold text-gray-700">Kappa Caseína</span>
                      <p className="text-gray-600">{bull.kappaCaseina}</p>
                    </div>
                  )}
                  {hasValue(bull.betaLacto) && (
                    <div>
                      <span className="font-semibold text-gray-700">Beta Lacto</span>
                      <p className="text-gray-600">{bull.betaLacto}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Pedigree Only (no empty tables) */}
            <div className="p-6 bg-gray-50">
              {/* Pedigree Image */}
              {bull.pedigreeImage && (
                <div className="mb-8">
                  <img
                    src={bull.pedigreeImage}
                    alt={`Pedigrí de ${bull.name}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              {/* Pedigree Section */}
              {bull.pedigree && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">PEDIGRÍ</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-4">{bull.pedigree.title}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Sire (Padre) */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">PADRE</p>
                      <p className="font-semibold text-gray-900 text-sm">{bull.pedigree.sire.name}</p>
                      {bull.pedigree.sire.registro && (
                        <p className="text-xs text-gray-500">{bull.pedigree.sire.registro}</p>
                      )}
                      <div className="mt-3 space-y-2 text-xs">
                        <div>
                          <span className="text-gray-500">Abuelo Pat.: </span>
                          <span className="text-gray-700 font-medium">{bull.pedigree.sire.siresSire}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Abuela Pat.: </span>
                          <span className="text-gray-700 font-medium">{bull.pedigree.sire.siresDam}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dam (Madre) */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">MADRE</p>
                      <p className="font-semibold text-gray-900 text-sm">{bull.pedigree.dam.name}</p>
                      {bull.pedigree.dam.registro && (
                        <p className="text-xs text-gray-500">{bull.pedigree.dam.registro}</p>
                      )}
                      <div className="mt-3 space-y-2 text-xs">
                        <div>
                          <span className="text-gray-500">Abuelo Mat.: </span>
                          <span className="text-gray-700 font-medium">{bull.pedigree.dam.damsSire}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Abuela Mat.: </span>
                          <span className="text-gray-700 font-medium">{bull.pedigree.dam.damsDam}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PNMGL Table - only show if has data */}
              {hasTableData(bull.pnmglData) && (
                <div className="mt-8">
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
                      {bull.pnmglData.filter(row => row.pta !== "--" || row.conf !== "--").map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2 text-gray-700">{row.trait}</td>
                          <td className="py-2 text-center font-medium text-gray-900">{row.pta}</td>
                          <td className="py-2 text-center text-gray-600">{row.conf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ABCZ Table - only show if has data */}
              {hasTableData(bull.abczData) && (
                <div className="mt-8">
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
                      {bull.abczData.filter(row => row.pta !== "--" || row.conf !== "--").map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2 text-gray-700">{row.trait}</td>
                          <td className="py-2 text-center font-medium text-gray-900">{row.pta}</td>
                          <td className="py-2 text-center text-gray-600">{row.conf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
