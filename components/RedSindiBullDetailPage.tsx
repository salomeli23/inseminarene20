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

export interface RedSindiBullData {
  id: string
  code: string
  name: string
  fullName: string
  serieRgd: string
  nasc: string
  proprietario: string
  imageUrl: string
  thumbnails?: string[]
  progenieData: { filhos: string; rebanhos: string }
  indiceData: { iabcz: { dep: string; deca: string } }
  producaoData: Array<{ trait: string; deca: string; dep: string; ac: string }>
  maternalData: Array<{ trait: string; deca: string; dep: string; ac: string }>
  morfologicasData: Array<{ trait: string; deca: string; dep: string; ac: string }>
  pedigree?: PedigreeData
}

interface RedSindiBullDetailPageProps {
  bull: RedSindiBullData
  onBack: () => void
}

export default function RedSindiBullDetailPage({ bull, onBack }: RedSindiBullDetailPageProps) {
  const thumbnails = bull.thumbnails || [bull.imageUrl]
  const [selectedImage, setSelectedImage] = useState(bull.imageUrl)

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
          <span>Volver a RED SINDI</span>
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
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Evaluaciones</span>
                <select className="border rounded-lg px-3 py-1.5 text-sm bg-white">
                  <option>PMGZ</option>
                </select>
              </div>
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
                  alt={`${bull.name} - Toro RED SINDI`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded">
                  <span className="text-sm font-bold text-gray-800">GENEX -</span>
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

              {/* General Information */}
              <div className="border-t pt-4">
                <h2 className="text-base font-semibold text-gray-900 mb-4 italic border-b-2 border-teal-400 pb-2">
                  Informacionaes generales
                </h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Nome</span>
                    <p className="text-gray-600">{bull.fullName}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Série/RGD</span>
                    <p className="text-gray-600">{bull.serieRgd}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Nasc</span>
                    <p className="text-gray-600">{bull.nasc}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">PROP</span>
                    <p className="text-gray-600">{bull.proprietario}</p>
                  </div>
                </div>
              </div>

              {/* Pedigree Section */}
              {bull.pedigree && (
                <div className="border-t pt-4 mt-4">
                  <h2 className="text-base font-semibold text-gray-900 mb-4 italic border-b-2 border-teal-400 pb-2">
                    Pedigree
                  </h2>
                  
                  <div className="relative">
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
                </div>
              )}
            </div>

            {/* Right Column - Evaluaciones */}
            <div className="p-6 bg-gray-50 overflow-y-auto max-h-[900px]">
              {/* PROGÊNIE */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">PROGÊNIE</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600">FILHOS</span>
                    <span className="text-gray-900 font-medium">{bull.progenieData.filhos}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600">REBANHOS</span>
                    <span className="text-gray-900 font-medium">{bull.progenieData.rebanhos}</span>
                  </div>
                </div>
              </div>

              {/* ÍNDICE */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">ÍNDICE</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs">
                      <th className="text-left py-1"></th>
                      <th className="text-right py-1"></th>
                      <th className="text-right py-1 font-medium">DEP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 text-gray-700">IABCZ</td>
                      <td className="py-1.5 text-right">
                        <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-[10px]">{bull.indiceData.iabcz.deca}</span>
                      </td>
                      <td className="py-1.5 text-right font-medium text-gray-900">{bull.indiceData.iabcz.dep}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* PRODUÇÃO */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">PRODUÇÃO</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs">
                      <th className="text-left py-1"></th>
                      <th className="text-right py-1"></th>
                      <th className="text-right py-1 font-medium">DEP</th>
                      <th className="text-right py-1 font-medium">AC (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bull.producaoData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-1.5 text-gray-700">{row.trait}</td>
                        <td className="py-1.5 text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] text-white ${row.deca === 'DECA 10' ? 'bg-orange-500' : 'bg-teal-500'}`}>
                            {row.deca}
                          </span>
                        </td>
                        <td className="py-1.5 text-right font-medium text-gray-900">{row.dep}</td>
                        <td className="py-1.5 text-right text-gray-600">{row.ac}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MATERNAL */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">MATERNAL</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs">
                      <th className="text-left py-1"></th>
                      <th className="text-right py-1"></th>
                      <th className="text-right py-1 font-medium">DEP</th>
                      <th className="text-right py-1 font-medium">AC (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bull.maternalData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-1.5 text-gray-700">{row.trait}</td>
                        <td className="py-1.5 text-right">
                          {row.deca !== '--' && (
                            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-[10px]">{row.deca}</span>
                          )}
                        </td>
                        <td className="py-1.5 text-right font-medium text-gray-900">{row.dep}</td>
                        <td className="py-1.5 text-right text-gray-600">{row.ac}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MORFOLÓGICAS */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">MORFOLÓGICAS</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs">
                      <th className="text-left py-1"></th>
                      <th className="text-right py-1"></th>
                      <th className="text-right py-1 font-medium">DEP</th>
                      <th className="text-right py-1 font-medium">AC (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bull.morfologicasData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-1.5 text-gray-700">{row.trait}</td>
                        <td className="py-1.5 text-right">
                          <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-[10px]">{row.deca}</span>
                        </td>
                        <td className="py-1.5 text-right font-medium text-gray-900">{row.dep}</td>
                        <td className="py-1.5 text-right text-gray-600">{row.ac}</td>
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
