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

export interface GuzeraBullData {
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
  hasGenChoice?: boolean
  hasToro2A2?: boolean
  hasEmTeste?: boolean
  hasGenomico?: boolean
  pedigree?: PedigreeData
  pedigreeImage?: string
}

interface GuzeraBullDetailPageProps {
  bull: GuzeraBullData
  onBack: () => void
}

export default function GuzeraBullDetailPage({ bull, onBack }: GuzeraBullDetailPageProps) {
  const thumbnails = bull.thumbnails || [bull.imageUrl]
  const [selectedImage, setSelectedImage] = useState(bull.imageUrl)

  const hasValue = (val: string) => val && val !== "--" && val !== ""

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          data-testid={`back-from-${bull.id}-btn`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Volver a GUZERA</span>
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
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600">
                <Download className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Image and General Info */}
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
              <div className="mb-4 relative">
                <img
                  src={selectedImage}
                  alt={`${bull.name} - Toro GUZERA`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded">
                  <span className="text-sm font-bold text-gray-800">GENEX</span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {thumbnails.length > 1 && (
                <div className="flex gap-2 mb-4">
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

              {/* Badges */}
              <div className="flex items-center gap-3 mb-6">
                {bull.hasToro2A2 && (
                  <div className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    A2A2
                  </div>
                )}
              </div>

              {/* General Information */}
              <div className="border-t pt-4">
                <h2 className="text-base font-semibold text-gray-900 mb-4 italic">
                  Informaciones generales
                </h2>
                <div className="space-y-2 text-sm">
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
                  {hasValue(bull.lactacaoMae) && (
                    <div>
                      <span className="font-semibold text-gray-700">Lactação da Mãe</span>
                      <p className="text-gray-600">{bull.lactacaoMae}</p>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-gray-700">PTAL</span>
                    <p className="text-gray-600">{bull.ptaLeite}</p>
                  </div>
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

            {/* Right Column - Pedigree */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900 mb-4 italic">Pedigree</h3>
              
              {bull.pedigree && (
                <div className="relative">
                  <p className="text-sm text-teal-600 font-semibold mb-4 border-b border-teal-400 pb-2">
                    {bull.pedigree.title}
                  </p>
                  
                  {/* Pedigree Tree Structure */}
                  <div className="space-y-4">
                    {/* Sire Side */}
                    <div className="flex items-start">
                      <div className="bg-teal-500 text-white px-3 py-2 rounded text-xs font-medium min-w-[140px]">
                        {bull.pedigree.sire.name}
                      </div>
                      <div className="flex flex-col ml-2 space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-px bg-teal-400"></div>
                          <div className="bg-orange-400 text-white px-2 py-1 rounded text-[10px] font-medium">
                            {bull.pedigree.sire.siresSire}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-px bg-teal-400"></div>
                          <div className="bg-orange-400 text-white px-2 py-1 rounded text-[10px] font-medium">
                            {bull.pedigree.sire.siresDam}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection line */}
                    <div className="h-6 border-l-2 border-teal-400 ml-4"></div>

                    {/* Dam Side */}
                    <div className="flex items-start">
                      <div className="bg-teal-500 text-white px-3 py-2 rounded text-xs font-medium min-w-[140px]">
                        {bull.pedigree.dam.name}
                      </div>
                      <div className="flex flex-col ml-2 space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-px bg-teal-400"></div>
                          <div className="bg-orange-400 text-white px-2 py-1 rounded text-[10px] font-medium">
                            {bull.pedigree.dam.damsSire}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-px bg-teal-400"></div>
                          <div className="bg-orange-400 text-white px-2 py-1 rounded text-[10px] font-medium">
                            {bull.pedigree.dam.damsDam}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
