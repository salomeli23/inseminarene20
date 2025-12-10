"use client"

import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"

interface BullData {
  id: string
  name: string
  registration: string
  naabCode?: string
  hdbNumber?: string
  dobDobDate?: string
  kappaCasein?: string
  betaCasein?: string
  haplotypes?: string
  geneticCodes?: string
  aaa?: string
  dms?: string
  efi?: string
  currentProof?: string
  dataPoweredBy?: string
  imageUrl: string
  origin: string
  birthDate: string
  lineage: string
  description: string
  conformation?: {
    ptat: { value: string; reliability: string }
    udc: { value: string; reliability: string }
    flc: { value: string; reliability: string }
    traits: Array<{
      name: string
      value: string
      interpretation: string
    }>
  }
  icc?: {
    score: string
    pref: { value: string; sust: string; fert: string }
    nm: { value: string; cm: string; tpi: string }
  }
  production?: {
    milk: { value: string; lbs: boolean; percent: string }
    protein: { value: string; lbs: boolean; percent: string }
    fat: { value: string; lbs: boolean; percent: string }
    feedSaved: { value: string; percent: string }
    rooota: string
  }
  healthTraits?: Array<{
    name: string
    value: string
    interpretation: string
  }>
  calvingTraits?: Array<{
    name: string
    value: string
    reliability: string
    observed: string
  }>
  sireFertility?: Array<{
    name: string
    value: string
    reliability: string
  }>
  pedigree?: {
    sire: string
    dam: string
    mgs: string
    mgd: string
    mgss: string
    mgsd: string
  }
}

interface BullDetailPageProps {
  bullId: string
  onBack: () => void
}

function BullDetailPage({ bullId, onBack }: BullDetailPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const bullsData: Record<string, BullData> = {
    "peak-haymaker-et": {
      id: "peak-haymaker-et",
      name: "HAYMAKER",
      registration: "PEAK HAYMAKER-ET",
      naabCode: "001HO16102",
      hdbNumber: "HOB40M003238532960",
      dobDobDate: "DOB 08/16/2021",
      kappaCasein: "BB",
      betaCasein: "A1A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "324",
      dms: "234,345",
      efi: "12.30%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/images/1ho16102-20haymaker.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "16 de Agosto, 2021",
      lineage: "Sire: PEAK WHEELHOUSE-ET | Dam: PEAK LOLA-ET",
      description:
        "Peak Haymaker ET es un toro élite de Genex que ofrece un equilibrio excepcional entre producción, salud y longevidad. Su genética está diseñada para producir hijas de alto rendimiento con excelente vida productiva.",
      conformation: {
        ptat: { value: "+0.27", reliability: "81%" },
        udc: { value: "+0.30", reliability: "Rel" },
        flc: { value: "+0.20", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.4", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.2", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.4", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "1.2", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "2.3", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "0.7", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "-0.2", interpretation: "Recto" },
          { name: "Piernas Post. - Vista Post.", value: "-0.2", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "0.0", interpretation: "Empinado" },
          { name: "Puntuación P&P", value: "-0.1", interpretation: "Bajo" },
          { name: "Inserción Ubre Ant.", value: "0.0", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "0.7", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "1.6", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "-0.2", interpretation: "Débil" },
          { name: "Profundidad de Ubre", value: "-0.5", interpretation: "Profunda" },
          { name: "Colocación Pezones Ant.", value: "0.4", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.3", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "-0.6", interpretation: "Cortos" },
        ],
      },
      icc: {
        score: "+715",
        pref: { value: "+647", sust: "+117", fert: "-49" },
        nm: { value: "+724", cm: "+741", tpi: "+3119" },
      },
      production: {
        milk: { value: "+1508", lbs: true, percent: "81%" },
        protein: { value: "+85", lbs: true, percent: "+0.02%" },
        fat: { value: "+78", lbs: true, percent: "+0.08%" },
        feedSaved: { value: "+182", percent: "48%" },
        rooota: "103",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+1.8", interpretation: "Tasa de Preñez de Hijas: -2.1" },
        { name: "Viabilidad", value: "+0.0", interpretation: "Tasa de Concepción de Vacas: -1.6" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.88",
          interpretation: "Tasa de Concepción de Vaquillas: -0.2",
        },
        { name: "Velocidad de Ordeño", value: "7.0", interpretation: "Metritis: 1.2%" },
        { name: "Mastitis", value: "1.4%", interpretation: "Desplazamiento de Abomaso: -0.1%" },
        { name: "Cetosis", value: "0.2%", interpretation: "Fiebre de Leche: -0.2%" },
        { name: "Retención Placentaria", value: "0.6%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.7%", reliability: "64% Conf", observed: "0 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "1.1%", reliability: "62% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "4.5%", reliability: "61% Conf", observed: "0 Observ" },
        { name: "Mortinatos de Hijas", value: "4.3%", reliability: "61% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "N/A", reliability: "N/A Conf" },
        { name: "PregCheck+™", value: "N/A", reliability: "N/A Conf" },
        { name: "Tasa de Concepción del Toro", value: "N/A", reliability: "N/A Conf" },
      ],
      pedigree: {
        sire: "PEAK WHEELHOUSE-ET",
        dam: "PEAK LOLA-ET",
        mgs: "PEAK ALTAZAZZLE-ET",
        mgd: "PEAK LULUAN-ET",
        mgss: "PROGENESIS POSITIVE",
        mgsd: "PEAK LAUREATE-ET",
      },
    },
    "peak-zimmer-et": {
      id: "peak-zimmer-et",
      name: "ZIMMER",
      registration: "PEAK ZIMMER-ET",
      naabCode: "001HO16646",
      hdbNumber: "HO840M003247843570",
      dobDobDate: "DOB 04/25/2022",
      kappaCasein: "BB",
      betaCasein: "A2A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "243",
      dms: "345,135",
      efi: "12.00%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/images/1ho16646-20zimmer.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "25 de Abril, 2022",
      lineage: "Sire: PROGENESIS JALAPENO | Dam: PEAK ZAIDA-ET",
      description:
        "Peak Zimmer ET es un toro premium de Genex con enfoque especial en componentes lácteos y conformación de ubre. Ideal para productores que buscan maximizar proteína y grasa con excelente funcionalidad.",
      conformation: {
        ptat: { value: "+0.77", reliability: "81%" },
        udc: { value: "+0.70", reliability: "" },
        flc: { value: "-0.67", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.9", interpretation: "Alto" },
          { name: "Fortaleza", value: "-0.3", interpretation: "Frágil" },
          { name: "Profundidad Corporal", value: "0.5", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "2.7", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "1.5", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "1.6", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.8", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "-1.0", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "-0.1", interpretation: "Bajo" },
          { name: "Puntuación P&P", value: "-0.3", interpretation: "Bajo" },
          { name: "Inserción Ubre Ant.", value: "0.5", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.2", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "2.0", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.6", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "-0.1", interpretation: "Profundo" },
          { name: "Colocación Pezones Ant.", value: "0.5", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.6", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "0.8", interpretation: "Largos" },
        ],
      },
      icc: {
        score: "+664",
        pref: { value: "+521", sust: "+157", fert: "-14" },
        nm: { value: "+697", cm: "+724", tpi: "+3080" },
      },
      production: {
        milk: { value: "+1109", lbs: true, percent: "81%" },
        protein: { value: "+49", lbs: true, percent: "+0.05%" },
        fat: { value: "+49", lbs: true, percent: "+0.01%" },
        feedSaved: { value: "+328", percent: "48%" },
        rooota: "102",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+3.0", interpretation: "Tasa de Preñez de Hijas: -1.5" },
        { name: "Viabilidad", value: "+0.1", interpretation: "Tasa de Concepción de Vacas: -0.8" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.74",
          interpretation: "Tasa de Concepción de Vaquillas: +1.7",
        },
        { name: "Velocidad de Ordeño", value: "6.6", interpretation: "Metritis: 1.3%" },
        { name: "Mastitis", value: "2.0%", interpretation: "Desplazamiento de Abomaso: 0.0%" },
        { name: "Cetosis", value: "0.2%", interpretation: "Fiebre de Leche: -0.1%" },
        { name: "Retención Placentaria", value: "0.0%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.1%", reliability: "90% Conf", observed: "434 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "0.7%", reliability: "70% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "3.2%", reliability: "83% Conf", observed: "422 Observ" },
        { name: "Mortinatos de Hijas", value: "2.2%", reliability: "65% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "101", reliability: "92% Conf" },
        { name: "PregCheck+™", value: "102", reliability: "98% Conf" },
        { name: "Tasa de Concepción del Toro", value: "-0.4", reliability: "88% Conf" },
      ],
      pedigree: {
        sire: "PROGENESIS JALAPENO",
        dam: "PEAK ZAIDA-ET",
        mgs: "PEAK INCREDIBLE-ET",
        mgd: "PEAK ZELDA-ET",
        mgss: "PINE-TREE-I PURSUIT",
        mgsd: "PEAK ZENITH-ET",
      },
    },
    "peak-longmire-et": {
      id: "peak-longmire-et",
      name: "LONGMIRE",
      registration: "PEAK LONGMIRE-ET",
      naabCode: "001HO17110",
      hdbNumber: "HO840M003251555893",
      dobDobDate: "DOB 03/07/2023",
      kappaCasein: "AB",
      betaCasein: "A1A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "342",
      dms: "135",
      efi: "11.50%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/images/1ho17110-longmire.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "7 de Marzo, 2023",
      lineage: "Sire: WET GAMEDAY MAVERICK-ET | Dam: PEAK OCTAVIA 15944-ET",
      description:
        "Peak Longmire ET combina alta producción de leche con sólidos excepcionales y excelente conformación de ubre. Un toro completo para operaciones lecheras modernas.",
      conformation: {
        ptat: { value: "+1.09", reliability: "78%" },
        udc: { value: "+0.90", reliability: "" },
        flc: { value: "+0.33", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.9", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.5", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.5", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "1.3", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "-0.2", interpretation: "Anca Alta" },
          { name: "Ancho de Anca", value: "1.8", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.8", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "0.5", interpretation: "Recto" },
          { name: "Ángulo de Pezuña", value: "0.0", interpretation: "Empinado" },
          { name: "Puntuación P&P", value: "0.5", interpretation: "Alto" },
          { name: "Inserción Ubre Ant.", value: "0.7", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.5", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "2.2", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.4", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "0.3", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "0.1", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.3", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "0.5", interpretation: "Largos" },
        ],
      },
      icc: {
        score: "+765",
        pref: { value: "+612", sust: "+130", fert: "+23" },
        nm: { value: "+704", cm: "+745", tpi: "+3271" },
      },
      production: {
        milk: { value: "+529", lbs: true, percent: "80%" },
        protein: { value: "+43", lbs: true, percent: "+0.10%" },
        fat: { value: "+98", lbs: true, percent: "+0.28%" },
        feedSaved: { value: "-52", percent: "46%" },
        rooota: "105",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+2.2", interpretation: "Tasa de Preñez de Hijas: -0.4" },
        { name: "Viabilidad", value: "-1.8", interpretation: "Tasa de Concepción de Vacas: +0.9" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.87",
          interpretation: "Tasa de Concepción de Vaquillas: +0.1",
        },
        { name: "Velocidad de Ordeño", value: "6.9", interpretation: "Metritis: 1.4%" },
        { name: "Mastitis", value: "1.8%", interpretation: "Desplazamiento de Abomaso: 0.2%" },
        { name: "Cetosis", value: "0.9%", interpretation: "Fiebre de Leche: 0.0%" },
        { name: "Retención Placentaria", value: "0.5%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.5%", reliability: "61% Conf", observed: "0 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "2.0%", reliability: "60% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "4.5%", reliability: "58% Conf", observed: "0 Observ" },
        { name: "Mortinatos de Hijas", value: "4.6%", reliability: "58% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "N/A", reliability: "N/A Conf" },
        { name: "PregCheck+™", value: "N/A", reliability: "N/A Conf" },
        { name: "Tasa de Concepción del Toro", value: "N/A", reliability: "N/A Conf" },
      ],
      pedigree: {
        sire: "WET GAMEDAY MAVERICK-ET",
        dam: "PEAK OCTAVIA 15944-ET",
        mgs: "PEAK WHEELHOUSE-ET",
        mgd: "PEAK OLINKA-ET",
        mgss: "PROGENESIS MARIUS",
        mgsd: "PEAK ORCHID-ET",
      },
    },
    "peak-streetmagician-et": {
      id: "peak-streetmagician-et",
      name: "STREETMAGICIAN",
      registration: "PEAK STREETMAGICIAN-ET",
      naabCode: "001HO16057",
      hdbNumber: "HO840M003229908053",
      dobDobDate: "DOB 03/19/2021",
      kappaCasein: "AB",
      betaCasein: "A2A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "345",
      dms: "561,456",
      efi: "12.20%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/peak-streetmagician-et.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "19 de Marzo, 2021",
      lineage: "Sire: MATCREST HAILED-ET | Dam: PEAK ZELDA-ET",
      description:
        "Peak Streetmagician ET ofrece alto TPI y excelente conformación de ubre con la versatilidad que buscan los productores modernos.",
      conformation: {
        ptat: { value: "+0.91", reliability: "81%" },
        udc: { value: "+1.03", reliability: "" },
        flc: { value: "+0.11", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.7", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.2", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.2", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "0.8", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "-0.3", interpretation: "Anca Alta" },
          { name: "Ancho de Anca", value: "1.2", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.9", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "-0.3", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "0.1", interpretation: "Empinado" },
          { name: "Puntuación P&P", value: "0.4", interpretation: "Alto" },
          { name: "Inserción Ubre Ant.", value: "1.1", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.1", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "1.6", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "1.2", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "0.7", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "0.6", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "1.0", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "0.2", interpretation: "Largos" },
        ],
      },
      icc: {
        score: "+587",
        pref: { value: "+507", sust: "+112", fert: "-32" },
        nm: { value: "+607", cm: "+609", tpi: "+3081" },
      },
      production: {
        milk: { value: "+1214", lbs: true, percent: "82%" },
        protein: { value: "+37", lbs: true, percent: "-0.01%" },
        fat: { value: "+70", lbs: true, percent: "+0.07%" },
        feedSaved: { value: "+97", percent: "49%" },
        rooota: "104",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+1.8", interpretation: "Tasa de Preñez de Hijas: -1.2" },
        { name: "Viabilidad", value: "-1.5", interpretation: "Tasa de Concepción de Vacas: -1.5" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.96",
          interpretation: "Tasa de Concepción de Vaquillas: +1.6",
        },
        { name: "Velocidad de Ordeño", value: "7.4", interpretation: "Metritis: 0.7%" },
        { name: "Mastitis", value: "2.8%", interpretation: "Desplazamiento de Abomaso: -0.1%" },
        { name: "Cetosis", value: "0.8%", interpretation: "Fiebre de Leche: -0.1%" },
        { name: "Retención Placentaria", value: "0.1%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.2%", reliability: "85% Conf", observed: "1398 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "1.1%", reliability: "70% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "3.9%", reliability: "73% Conf", observed: "1398 Observ" },
        { name: "Mortinatos de Hijas", value: "3.0%", reliability: "65% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "100", reliability: "82% Conf" },
        { name: "PregCheck+™", value: "103", reliability: "73% Conf" },
        { name: "Tasa de Concepción del Toro", value: "N/A", reliability: "N/A Conf" },
      ],
      pedigree: {
        sire: "MATCREST HAILED-ET",
        dam: "PEAK ZELDA-ET",
        mgs: "PINE-TREE-I PURSUIT",
        mgd: "PEAK ZENITH-ET",
        mgss: "BOMAZ ALTATOPSHOT-ET",
        mgsd: "BRU-DALE ZERONICA-ET",
      },
    },
    "peak-kazaam-et": {
      id: "peak-kazaam-et",
      name: "KAZAAM",
      registration: "PEAK KAZAAM-ET",
      naabCode: "001HO15986",
      hdbNumber: "HO840M003215425982",
      dobDobDate: "DOB 11/18/2020",
      kappaCasein: "AB",
      betaCasein: "A2A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "243",
      dms: "456,345",
      efi: "12.60%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/peak-kazaam-et.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "18 de Noviembre, 2020",
      lineage: "Sire: PEAK NO EXCUSE-ET | Dam: REGAN-DANHOF R CARA-ET",
      description:
        "Peak Kazaam ET destaca por su excepcional vida productiva y salud de ubre, ideal para hatos enfocados en longevidad y calidad de componentes.",
      conformation: {
        ptat: { value: "+0.58", reliability: "80%" },
        udc: { value: "+1.08", reliability: "" },
        flc: { value: "-0.53", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.3", interpretation: "Alto" },
          { name: "Fortaleza", value: "-0.1", interpretation: "Frágil" },
          { name: "Profundidad Corporal", value: "-0.4", interpretation: "Bajo" },
          { name: "Forma Lechera", value: "0.3", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "0.4", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "0.8", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.3", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "-0.6", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "-0.2", interpretation: "Bajo" },
          { name: "Puntuación P&P", value: "-0.4", interpretation: "Bajo" },
          { name: "Inserción Ubre Ant.", value: "1.4", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.6", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "1.2", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "-0.3", interpretation: "Débil" },
          { name: "Profundidad de Ubre", value: "1.3", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "-0.1", interpretation: "Abiertos" },
          { name: "Colocación Pezones Post.", value: "-0.2", interpretation: "Abiertos" },
          { name: "Longitud de Pezones", value: "-0.7", interpretation: "Cortos" },
        ],
      },
      icc: {
        score: "+708",
        pref: { value: "+378", sust: "+268", fert: "+62" },
        nm: { value: "+623", cm: "+644", tpi: "+3074" },
      },
      production: {
        milk: { value: "+793", lbs: true, percent: "83%" },
        protein: { value: "+36", lbs: true, percent: "+0.04%" },
        fat: { value: "+39", lbs: true, percent: "+0.02%" },
        feedSaved: { value: "+159", percent: "49%" },
        rooota: "104",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+3.7", interpretation: "Tasa de Preñez de Hijas: +0.4" },
        { name: "Viabilidad", value: "+2.8", interpretation: "Tasa de Concepción de Vacas: +1.7" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.82",
          interpretation: "Tasa de Concepción de Vaquillas: +2.5",
        },
        { name: "Velocidad de Ordeño", value: "6.9", interpretation: "Metritis: 1.0%" },
        { name: "Mastitis", value: "2.1%", interpretation: "Desplazamiento de Abomaso: 0.8%" },
        { name: "Cetosis", value: "2.1%", interpretation: "Fiebre de Leche: 0.0%" },
        { name: "Retención Placentaria", value: "-0.3%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.6%", reliability: "92% Conf", observed: "661 Observ" },
        {
          name: "Facilidad de Parto de Hijas",
          value: "2.1%",
          reliability: "71% Conf",
          observed: "15 Observ | 15 hijas",
        },
        { name: "Mortinatos del Toro", value: "3.9%", reliability: "83% Conf", observed: "611 Observ" },
        { name: "Mortinatos de Hijas", value: "3.2%", reliability: "65% Conf", observed: "15 Observ | 15 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "98", reliability: "73% Conf" },
        { name: "PregCheck+™", value: "95", reliability: "74% Conf" },
        { name: "Tasa de Concepción del Toro", value: "-0.4", reliability: "81% Conf" },
      ],
      pedigree: {
        sire: "PEAK NO EXCUSE-ET",
        dam: "REGAN-DANHOF R CARA-ET",
        mgs: "S-S-I BG FRZZLD RIVETING-ET",
        mgd: "REGAN-DANHOF G CAMILLA-ET",
        mgss: "WESTCOAST GUARANTEE",
        mgsd: "REGAN-DANHOF JEDI CASHMERE",
      },
    },
    "peak-dancendash-et": {
      id: "peak-dancendash-et",
      name: "DANCENDASH",
      registration: "PEAK DANCENDASH-ET",
      naabCode: "001HO16120",
      hdbNumber: "HO840M003224928428",
      dobDobDate: "DOB 04/27/2021",
      kappaCasein: "BB",
      betaCasein: "A1A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW1",
      geneticCodes: "MW TC TD TL TP TR TV TY",
      aaa: "324",
      dms: "126,246",
      efi: "12.70%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/peak-dancendash-et.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "27 de Abril, 2021",
      lineage: "Sire: PEAK WHEELHOUSE-ET | Dam: PEAK HYPNOTIC-ET",
      description:
        "Peak Dancendash ET es un toro con alta producción de leche y proteína, enfocado en eficiencia de alimentación y rendimiento económico.",
      conformation: {
        ptat: { value: "+0.17", reliability: "81%" },
        udc: { value: "+0.17", reliability: "" },
        flc: { value: "-0.61", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.9", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.3", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.6", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "1.4", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "2.1", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "1.5", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.1", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "-0.4", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "-0.3", interpretation: "Bajo" },
          { name: "Puntuación P&P", value: "-0.4", interpretation: "Bajo" },
          { name: "Inserción Ubre Ant.", value: "-0.1", interpretation: "Floja" },
          { name: "Altura Ubre Post.", value: "0.5", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "1.3", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.1", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "-0.3", interpretation: "Profundo" },
          { name: "Colocación Pezones Ant.", value: "0.7", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.9", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "-0.5", interpretation: "Cortos" },
        ],
      },
      icc: {
        score: "+676",
        pref: { value: "+599", sust: "+80", fert: "-3" },
        nm: { value: "+703", cm: "+714", tpi: "+3075" },
      },
      production: {
        milk: { value: "+1049", lbs: true, percent: "82%" },
        protein: { value: "+40", lbs: true, percent: "+0.02%" },
        fat: { value: "+85", lbs: true, percent: "+0.15%" },
        feedSaved: { value: "+177", percent: "48%" },
        rooota: "103",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+1.4", interpretation: "Tasa de Preñez de Hijas: -1.2" },
        { name: "Viabilidad", value: "-0.3", interpretation: "Tasa de Concepción de Vacas: -0.2" },
        {
          name: "Puntuación Células Somáticas",
          value: "3.04",
          interpretation: "Tasa de Concepción de Vaquillas: +0.9",
        },
        { name: "Velocidad de Ordeño", value: "7.2", interpretation: "Metritis: 1.5%" },
        { name: "Mastitis", value: "1.1%", interpretation: "Desplazamiento de Abomaso: 0.1%" },
        { name: "Cetosis", value: "0.5%", interpretation: "Fiebre de Leche: 0.0%" },
        { name: "Retención Placentaria", value: "0.5%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.4%", reliability: "94% Conf", observed: "743 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "1.3%", reliability: "70% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "3.7%", reliability: "88% Conf", observed: "722 Observ" },
        { name: "Mortinatos de Hijas", value: "3.2%", reliability: "65% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "103", reliability: "93% Conf" },
        { name: "PregCheck+™", value: "104", reliability: "97% Conf" },
        { name: "Tasa de Concepción del Toro", value: "+1.6", reliability: "92% Conf" },
      ],
      pedigree: {
        sire: "PEAK WHEELHOUSE-ET",
        dam: "PEAK HYPNOTIC-ET",
        mgs: "PEAK ALTAZAZZLE-ET",
        mgd: "PEAK HONEYDEW-ET",
        mgss: "PEAK ALTAEXPLOSION-ET",
        mgsd: "PEAK HOLA-ET",
      },
    },
    "peak-fortnite-et": {
      id: "peak-fortnite-et",
      name: "FORTNITE",
      registration: "PEAK FORTNITE-ET",
      naabCode: "001HO15055",
      hdbNumber: "HO840M003200824963",
      dobDobDate: "DOB 11/02/2018",
      kappaCasein: "AB",
      betaCasein: "A2A2",
      haplotypes: "HH1F HH2F HH3F HH4F HH5F HCDF HH6F HMW0",
      geneticCodes: "TC TD TE TL TP TR TV TY",
      aaa: "432",
      dms: "135,123",
      efi: "12.50%",
      currentProof: "USA-202508",
      dataPoweredBy: "CDCB | HA-USA | GENEX",
      imageUrl: "/peak-fortnite-et.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "2 de Noviembre, 2018",
      lineage: "Sire: PROGENESIS POSITIVE | Dam: T-SPRUCE CROWN-ET",
      description:
        "Peak Fortnite ET es un probado toro con miles de hijas, ofreciendo consistencia en producción de leche, componentes y longevidad comprobada.",
      conformation: {
        ptat: { value: "+0.14", reliability: "99%" },
        udc: { value: "+0.50", reliability: "" },
        flc: { value: "-0.41", reliability: "" },
        traits: [
          { name: "Estatura", value: "-0.1", interpretation: "Bajo" },
          { name: "Fortaleza", value: "-0.3", interpretation: "Frágil" },
          { name: "Profundidad Corporal", value: "-0.5", interpretation: "Bajo" },
          { name: "Forma Lechera", value: "0.5", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "2.5", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "1.1", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.6", interpretation: "Corvejón Cerrado" },
          { name: "Piernas Post. - Vista Post.", value: "-0.8", interpretation: "Corvejones Cerrados" },
          { name: "Ángulo de Pezuña", value: "-0.1", interpretation: "Bajo" },
          { name: "Puntuación P&P", value: "-0.3", interpretation: "Bajo" },
          { name: "Inserción Ubre Ant.", value: "0.9", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "-0.3", interpretation: "Bajo" },
          { name: "Ancho Ubre Post.", value: "0.7", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.7", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "0.9", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "0.9", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "1.1", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "-1.8", interpretation: "Cortos" },
        ],
      },
      icc: {
        score: "+408",
        pref: { value: "+309", sust: "+143", fert: "-44" },
        nm: { value: "+443", cm: "+469", tpi: "+2848" },
      },
      production: {
        milk: { value: "+471", lbs: true, percent: "99%" },
        protein: { value: "+27", lbs: true, percent: "+0.04%" },
        fat: { value: "+37", lbs: true, percent: "+0.07%" },
        feedSaved: { value: "+93", percent: "68%" },
        rooota: "89",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+2.3", interpretation: "Tasa de Preñez de Hijas: -0.9" },
        { name: "Viabilidad", value: "-0.2", interpretation: "Tasa de Concepción de Vacas: -1.2" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.61",
          interpretation: "Tasa de Concepción de Vaquillas: -1.6",
        },
        { name: "Velocidad de Ordeño", value: "6.6", interpretation: "Metritis: -0.4%" },
        { name: "Mastitis", value: "1.5%", interpretation: "Desplazamiento de Abomaso: 0.2%" },
        { name: "Cetosis", value: "1.2%", interpretation: "Fiebre de Leche: -0.1%" },
        { name: "Retención Placentaria", value: "0.9%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.1%", reliability: "99% Conf", observed: "7416 Observ" },
        {
          name: "Facilidad de Parto de Hijas",
          value: "1.2%",
          reliability: "97% Conf",
          observed: "2447 Observ | 2978 hijas",
        },
        { name: "Mortinatos del Toro", value: "2.8%", reliability: "97% Conf", observed: "7525 Observ" },
        { name: "Mortinatos de Hijas", value: "2.4%", reliability: "97% Conf", observed: "2228 Observ | 3004 hijas" },
      ],
      sireFertility: [
        { name: "PregCheck™", value: "101", reliability: "93% Conf" },
        { name: "PregCheck+™", value: "100", reliability: "99% Conf" },
        { name: "Tasa de Concepción del Toro", value: "-1.4", reliability: "91% Conf" },
      ],
      pedigree: {
        sire: "PROGENESIS POSITIVE",
        dam: "T-SPRUCE CROWN-ET",
        mgs: "MELARRY JOSUPER FRAZZLED-ET",
        mgd: "MS JACK MON 32328-ET",
        mgss: "BACON-HILL MONTROSS-ET",
        mgsd: "MS DELICIOUS JACKMAN-ET",
      },
    },
    "peak-comet-et": {
      id: "peak-comet-et",
      name: "PEAK COMET-ET",
      registration: "001HO16959",
      naabCode: "001HO16959",
      hdbNumber: "HOB40M003263337326",
      dobDobDate: "DOB 03/06/2023",
      kappaCasein: "AB",
      betaCasein: "A1A2",
      haplotypes: "HH1F HH2F HH4F HH5F HH6F HCDF HMW0",
      geneticCodes: "TC TD TE TL TP TK TV TY",
      aaa: "261",
      dms: "135,340",
      efi: "12.60%",
      currentProof: "USA-202508",
      dataPoweredBy: "Data Powered by CDCB | HA-USA | GENEX",
      imageUrl: "/1HO16959-COMET.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "03/06/2023",
      lineage: "Sire: WET GAMEDAY MAVERICK-ET | Dam: PEAK ASTRA-ET",
      description:
        "PEAK COMET-ET es un toro excepcional de Genex con un ICC de +733 y excelentes índices de producción y conformación. Destaca por su alta producción de leche (+857 lbs) y su excepcional índice TPI de +3222.",
      conformation: {
        ptat: { value: "+1.41", reliability: "79%" },
        udc: { value: "+1.37", reliability: "Conf" },
        flc: { value: "+0.40", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.7", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.4", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.4", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "1.3", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "0.8", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "1.4", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.7", interpretation: "Angulado" },
          { name: "Piernas Post. - Vista Post.", value: "0.5", interpretation: "Fuerte" },
          { name: "Ángulo de Pezuña", value: "0.1", interpretation: "Empinado" },
          { name: "Puntuación P&P", value: "0.6", interpretation: "Alto" },
          { name: "Inserción Ubre Ant.", value: "1.2", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.8", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "2.3", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.3", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "0.9", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "0.6", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.7", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "0.2", interpretation: "Largos" },
        ],
      },
      icc: {
        score: "+733",
        pref: { value: "+526", sust: "+184", fert: "+23" },
        nm: { value: "+688", cm: "+704", tpi: "+3222" },
      },
      production: {
        milk: { value: "+857", lbs: true, percent: "79%" },
        protein: { value: "+36", lbs: true, percent: "+0.03%" },
        fat: { value: "+80", lbs: true, percent: "+0.18%" },
        feedSaved: { value: "+32", percent: "47%" },
        rooota: "106",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+1.0", interpretation: "Tasa de Preñez de Hijas: -0.4" },
        { name: "Viabilidad", value: "-0.2", interpretation: "Tasa de Concepción de Vacas: +0.2" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.91",
          interpretation: "Tasa de Concepción de Vaquillas: +0.3",
        },
        { name: "Velocidad de Ordeño", value: "7.4", interpretation: "Metritis: 1.8%" },
        { name: "Mastitis", value: "0.8%", interpretation: "Desplazamiento de Abomaso: 0.4%" },
        { name: "Cetosis", value: "0.7%", interpretation: "Fiebre de Leche: 0.1%" },
        { name: "Retención Placentaria", value: "0.5%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.8%", reliability: "67% Conf", observed: "0 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "2.1%", reliability: "60% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "4.0%", reliability: "68% Conf", observed: "0 Observ" },
        { name: "Mortinatos de Hijas", value: "3.7%", reliability: "59% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "ProgCheck™", value: "101", reliability: "79% Conf" },
        { name: "ProgCheck+™", value: "N/A", reliability: "N/A Conf" },
        { name: "Tasa de Concepción del Toro", value: "-0.4", reliability: "65% Conf" },
      ],
      pedigree: {
        sire: "WET GAMEDAY MAVERICK-ET",
        dam: "PEAK ASTRA-ET",
        mgs: "PEAK WHEELHOUSE-ET",
        mgd: "WINSTAR ASTRID-ET",
        mgss: "MR T-SPRUCE FRAZZ LIONEL-ET",
        mgsd: "WINSTAR ACHIEVER 4832-ET",
      },
    },
    "peak-luckycharm-et": {
      id: "peak-luckycharm-et",
      name: "PEAK LUCKYCHARM ET",
      registration: "HO-USA-7HO15312",
      imageUrl: "/images/1ho16863-luckycharm.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "15 de Julio, 2021",
      lineage: "Sire: Peak Wheelhouse | Dam: Lucky Charm EX-92",
      description:
        "Peak Luckycharm ET es conocido por su excepcional genética de longevidad y calidad de ubre. Un toro que combina producción sostenible con características funcionales superiores.",
    },
    "peak-longmire-et": {
      id: "peak-longmire-et",
      name: "PEAK LONGMIRE ET",
      registration: "HO-USA-7HO15428",
      imageUrl: "/1HO17110-LONGMIRE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "22 de Junio, 2020",
      lineage: "Sire: Peak AltaRockstar | Dam: Longmire EX-90",
      description:
        "Peak Longmire ET es un toro destacado con excelente longevidad y vida productiva extendida, perfecto para producir hijas duraderas y rentables.",
    },
    "peak-empowered-et": {
      id: "peak-empowered-et",
      name: "PEAK EMPOWERED ET",
      registration: "HO-USA-7HO15534",
      imageUrl: "/001HO15701_EMPOWERED.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "8 de Agosto, 2021",
      lineage: "Sire: Peak AltaMaximus | Dam: Empower VG-86",
      description:
        "Peak Empowered ET ofrece genética de alto rendimiento con foco en producción y eficiencia, maximizando los componentes lácteos y la rentabilidad.",
    },
    "peak-streetmagician-et": {
      id: "peak-streetmagician-et",
      name: "PEAK STREETMAGICIAN ET",
      registration: "HO-USA-7HO15621",
      imageUrl: "/1HO16057-STREET MAGICIAN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "12 de Septiembre, 2020",
      lineage: "Sire: Peak AltaMagic | Dam: Street VG-89",
      description:
        "Peak Streetmagician ET es un toro élite con genética excepcional en conformación de ubre, produciendo hijas con sistemas mamarios altamente funcionales.",
    },
    "peak-break-even-et": {
      id: "peak-break-even-et",
      name: "PEAK BREAK EVEN ET",
      registration: "HO-USA-7HO15745",
      imageUrl: "/001HO15461_BREAK_EVEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "25 de Octubre, 2021",
      lineage: "Sire: Peak AltaProfit | Dam: Breaker EX-91",
      description:
        "Peak Break Even ET ofrece genética económicamente rentable con excelente retorno de inversión, optimizando la relación costo-beneficio en la producción.",
    },
    "peak-misbehavin-et": {
      id: "peak-misbehavin-et",
      name: "PEAK MISBEHAVIN ET",
      registration: "HO-USA-7HO15832",
      imageUrl: "/1HO17045-MISBEHAVIN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "3 de Noviembre, 2020",
      lineage: "Sire: Peak AltaRebel | Dam: Missy VG-88",
      description:
        "Peak Misbehavin ET es un toro innovador con genética diferenciadora y alta transmisión, ofreciendo características únicas para la mejora genética.",
    },
    "pine-tree-zenyatta-et": {
      id: "pine-tree-zenyatta-et",
      name: "PINE TREE ZENYATTA ET",
      registration: "HO-USA-7HO15923",
      imageUrl: "/1HO16035-Pine-Tree-ZENYATTA.jpg",
      origin: "Estados Unidos - Pine Tree",
      birthDate: "17 de Diciembre, 2020",
      lineage: "Sire: Pine Tree Champion | Dam: Zenyatta EX-92",
      description:
        "Pine Tree Zenyatta ET ofrece genética premium con enfoque en tipo y conformación funcional, produciendo animales de excelente apariencia y funcionalidad.",
    },
    "peak-comingup-et": {
      id: "peak-comingup-et",
      name: "PEAK COMINGUP ET",
      registration: "HO-USA-7HO16014",
      imageUrl: "/1HO16032-COMINGUP.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "5 de Enero, 2022",
      lineage: "Sire: Peak AltaFuture | Dam: Coming VG-87",
      description:
        "Peak Comingup ET es un toro joven con evaluación genómica sobresaliente y alto potencial, representando el futuro de la genética Holstein.",
    },
    "peak-wildone-et": {
      id: "peak-wildone-et",
      name: "PEAK WILDONE ET",
      registration: "HO-USA-7HO16125",
      imageUrl: "/1HO17331-WILDONE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "14 de Febrero, 2021",
      lineage: "Sire: Peak AltaWild | Dam: Wildheart VG-89",
      description:
        "Peak Wildone ET presenta genética audaz con características excepcionales de producción, ideal para productores que buscan maximizar el rendimiento.",
    },
    "peak-kazaam-et": {
      id: "peak-kazaam-et",
      name: "PEAK KAZAAM ET",
      registration: "HO-USA-7HO16231",
      imageUrl: "/1HO15986_KAZAAM.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "20 de Marzo, 2021",
      lineage: "Sire: Peak AltaBlast | Dam: Kaza EX-90",
      description:
        "Peak Kazaam ET es un toro con impacto genético sobresaliente y alta confiabilidad, garantizando transmisión consistente de características deseables.",
    },
    "peak-dancendash-et": {
      id: "peak-dancendash-et",
      name: "PEAK DANCENDASH ET",
      registration: "HO-USA-7HO16342",
      imageUrl: "/1HO16120-DanceNDash.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "28 de Abril, 2021",
      lineage: "Sire: Peak AltaDancer | Dam: Dash VG-88",
      description:
        "Peak Dancendash ET ofrece genética ágil con excelente movilidad y patas perfectas, produciendo animales con aplomos superiores y longevidad.",
    },
    "peak-opticalillusion-et": {
      id: "peak-opticalillusion-et",
      name: "PEAK OPTICALILLUSION ET",
      registration: "HO-USA-7HO16453",
      imageUrl: "/images/1ho16311-20opticalillusion.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "7 de Mayo, 2020",
      lineage: "Sire: Peak AltaVision | Dam: Optical EX-91",
      description:
        "Peak Opticalillusion ET es un toro impresionante con genética visual y conformación extraordinaria, destacando en exhibiciones y producción.",
    },
    "peak-candyman-et": {
      id: "peak-candyman-et",
      name: "PEAK CANDYMAN ET",
      registration: "HO-USA-7HO16564",
      imageUrl: "/1HO16701-CANDYMAN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "16 de Junio, 2021",
      lineage: "Sire: Peak AltaSweet | Dam: Candy VG-87",
      description:
        "Peak Candyman ET ofrece genética dulce con componentes lácteos excepcionales, maximizando proteína y grasa para mayor valor agregado.",
    },
    "peak-toretto-et": {
      id: "peak-toretto-et",
      name: "PEAK TORETTO ET",
      registration: "HO-USA-7HO16675",
      imageUrl: "/001HO15405_TORETTO.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "24 de Julio, 2021",
      lineage: "Sire: Peak AltaTurbo | Dam: Toretto VG-89",
      description:
        "Peak Toretto ET es un toro potente con genética de alto rendimiento y velocidad de transmisión, acelerando el progreso genético del hato.",
    },
    "peak-maracay-et": {
      id: "peak-maracay-et",
      name: "PEAK MARACAY ET",
      registration: "HO-USA-7HO16786",
      imageUrl: "/001HO15410_MARACAY.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "2 de Agosto, 2020",
      lineage: "Sire: Peak AltaTropical | Dam: Maracay EX-90",
      description:
        "Peak Maracay ET presenta genética tropical adaptada con excelente resistencia al calor, ideal para sistemas de producción en climas cálidos.",
    },
    "peak-moneytalks-et": {
      id: "peak-moneytalks-et",
      name: "PEAK MONEYTALKS ET",
      registration: "HO-USA-7HO16897",
      imageUrl: "/1HO16488-MONEYTALKS.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "11 de Septiembre, 2021",
      lineage: "Sire: Peak AltaCash | Dam: Talks VG-88",
      description:
        "Peak Moneytalks ET es un toro económicamente superior con alto valor neto y rentabilidad garantizada, maximizando el retorno económico.",
    },
    "peak-zooty-et": {
      id: "peak-zooty-et",
      name: "PEAK ZOOTY ET",
      registration: "HO-USA-7HO16908",
      imageUrl: "/001HO15618_ZOOTY.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "19 de Octubre, 2020",
      lineage: "Sire: Peak AltaZoom | Dam: Zooty VG-87",
      description:
        "Peak Zooty ET ofrece genética dinámica con excelente balance entre producción y tipo, optimizando ambas características simultáneamente.",
    },
    "peak-wallen-et": {
      id: "peak-wallen-et",
      name: "PEAK WALLEN ET",
      registration: "HO-USA-7HO17019",
      imageUrl: "/001HO15229_WALLEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "27 de Noviembre, 2021",
      lineage: "Sire: Peak AltaWall | Dam: Wallen EX-91",
      description:
        "Peak Wallen ET es un toro robusto con estructura sólida y fortaleza excepcional, produciendo animales resistentes y duraderos.",
    },
    "peak-fortnite-et": {
      id: "peak-fortnite-et",
      name: "PEAK FORTNITE ET",
      registration: "HO-USA-7HO17120",
      imageUrl: "/001HO15055_FORTNITE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "4 de Diciembre, 2021",
      lineage: "Sire: Peak AltaGameChanger | Dam: Fortitude VG-89",
      description:
        "Peak Fortnite ET representa genética de nueva generación con evaluación genómica de vanguardia, liderando el futuro genético.",
    },
    "peak-tarren-et": {
      id: "peak-tarren-et",
      name: "PEAK TARREN ET",
      registration: "HO-USA-7HO17231",
      imageUrl: "/001HO15377_TARREN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "13 de Enero, 2021",
      lineage: "Sire: Peak AltaBalance | Dam: Tarren VG-88",
      description:
        "Peak Tarren ET es un toro equilibrado con excelente funcionalidad y vida productiva, ofreciendo un paquete completo de características.",
    },
    "peak-rayshen-et": {
      id: "peak-rayshen-et",
      name: "PEAK RAYSHEN ET",
      registration: "HO-USA-7HO17342",
      imageUrl: "/001HO15274_RAYSHEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "21 de Febrero, 2021",
      lineage: "Sire: Peak AltaBright | Dam: Rayshen EX-90",
      description:
        "Peak Rayshen ET presenta genética brillante con transmisión consistente y alta heredabilidad, asegurando progreso genético predecible.",
    },
    "aprilday-mariano-red-et": {
      id: "aprilday-mariano-red-et",
      name: "APRILDAY MARIANO RED ET",
      registration: "HO-USA-7HO17453",
      imageUrl: "/1HO16698-MARIANO-RED.jpg",
      origin: "Estados Unidos - Aprilday",
      birthDate: "1 de Abril, 2020",
      lineage: "Sire: Aprilday RedStar | Dam: Mariano RED EX-92",
      description:
        "Aprilday Mariano RED ET es un Holstein Rojo con genética diferenciada y alta producción, ofreciendo diversidad genética y color distintivo.",
    },
    "PEAK COMET-ET": {
      id: "peak-comet-et",
      name: "PEAK COMET-ET",
      registration: "001HO16959",
      naabCode: "001HO16959",
      hdbNumber: "HOB40M003263337326",
      dobDobDate: "DOB 03/06/2023",
      kappaCasein: "AB",
      betaCasein: "A1A2",
      haplotypes: "HH1F HH2F HH4F HH5F HH6F HCDF HMW0",
      geneticCodes: "TC TD TE TL TP TK TV TY",
      aaa: "261",
      dms: "135,340",
      efi: "12.60%",
      currentProof: "USA-202508",
      dataPoweredBy: "Data Powered by CDCB | HA-USA | GENEX",
      imageUrl: "/1HO16959-COMET.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "03/06/2023",
      lineage: "Sire: WET GAMEDAY MAVERICK-ET | Dam: PEAK ASTRA-ET",
      description:
        "PEAK COMET-ET es un toro excepcional de Genex con un ICC de +733 y excelentes índices de producción y conformación. Destaca por su alta producción de leche (+857 lbs) y su excepcional índice TPI de +3222.",
      conformation: {
        ptat: { value: "+1.41", reliability: "79%" },
        udc: { value: "+1.37", reliability: "Conf" },
        flc: { value: "+0.40", reliability: "" },
        traits: [
          { name: "Estatura", value: "0.7", interpretation: "Alto" },
          { name: "Fortaleza", value: "0.4", interpretation: "Fuerte" },
          { name: "Profundidad Corporal", value: "0.4", interpretation: "Profundo" },
          { name: "Forma Lechera", value: "1.3", interpretation: "Abierta" },
          { name: "Ángulo de Anca", value: "0.8", interpretation: "Inclinado" },
          { name: "Ancho de Anca", value: "1.4", interpretation: "Ancho" },
          { name: "Piernas Post. - Vista Lat.", value: "0.7", interpretation: "Angulado" },
          { name: "Piernas Post. - Vista Post.", value: "0.5", interpretation: "Fuerte" },
          { name: "Ángulo de Pezuña", value: "0.1", interpretation: "Empinado" },
          { name: "Puntuación P&P", value: "0.6", interpretation: "Alto" },
          { name: "Inserción Ubre Ant.", value: "1.2", interpretation: "Fuerte" },
          { name: "Altura Ubre Post.", value: "1.8", interpretation: "Alto" },
          { name: "Ancho Ubre Post.", value: "2.3", interpretation: "Ancho" },
          { name: "Surco de Ubre", value: "0.3", interpretation: "Fuerte" },
          { name: "Profundidad de Ubre", value: "0.9", interpretation: "Superficial" },
          { name: "Colocación Pezones Ant.", value: "0.6", interpretation: "Cerrados" },
          { name: "Colocación Pezones Post.", value: "0.7", interpretation: "Cerrados" },
          { name: "Longitud de Pezones", value: "0.2", interpretation: "Largos" },
        ],
      },
      icc: {
        score: "+733",
        pref: { value: "+526", sust: "+184", fert: "+23" },
        nm: { value: "+688", cm: "+704", tpi: "+3222" },
      },
      production: {
        milk: { value: "+857", lbs: true, percent: "79%" },
        protein: { value: "+36", lbs: true, percent: "+0.03%" },
        fat: { value: "+80", lbs: true, percent: "+0.18%" },
        feedSaved: { value: "+32", percent: "47%" },
        rooota: "106",
      },
      healthTraits: [
        { name: "Vida Productiva", value: "+1.0", interpretation: "Tasa de Preñez de Hijas: -0.4" },
        { name: "Viabilidad", value: "-0.2", interpretation: "Tasa de Concepción de Vacas: +0.2" },
        {
          name: "Puntuación Células Somáticas",
          value: "2.91",
          interpretation: "Tasa de Concepción de Vaquillas: +0.3",
        },
        { name: "Velocidad de Ordeño", value: "7.4", interpretation: "Metritis: 1.8%" },
        { name: "Mastitis", value: "0.8%", interpretation: "Desplazamiento de Abomaso: 0.4%" },
        { name: "Cetosis", value: "0.7%", interpretation: "Fiebre de Leche: 0.1%" },
        { name: "Retención Placentaria", value: "0.5%", interpretation: "" },
      ],
      calvingTraits: [
        { name: "Facilidad de Parto del Toro", value: "1.8%", reliability: "67% Conf", observed: "0 Observ" },
        { name: "Facilidad de Parto de Hijas", value: "2.1%", reliability: "60% Conf", observed: "0 Observ | 0 hijas" },
        { name: "Mortinatos del Toro", value: "4.0%", reliability: "68% Conf", observed: "0 Observ" },
        { name: "Mortinatos de Hijas", value: "3.7%", reliability: "59% Conf", observed: "0 Observ | 0 hijas" },
      ],
      sireFertility: [
        { name: "ProgCheck™", value: "101", reliability: "79% Conf" },
        { name: "ProgCheck+™", value: "N/A", reliability: "N/A Conf" },
        { name: "Tasa de Concepción del Toro", value: "-0.4", reliability: "65% Conf" },
      ],
      pedigree: {
        sire: "WET GAMEDAY MAVERICK-ET",
        dam: "PEAK ASTRA-ET",
        mgs: "PEAK WHEELHOUSE-ET",
        mgd: "WINSTAR ASTRID-ET",
        mgss: "MR T-SPRUCE FRAZZ LIONEL-ET",
        mgsd: "WINSTAR ACHIEVER 4832-ET",
      },
    },
    "peak-luckycharm-et": {
      id: "peak-luckycharm-et",
      name: "PEAK LUCKYCHARM ET",
      registration: "HO-USA-7HO15312",
      imageUrl: "/images/1ho16863-luckycharm.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "15 de Julio, 2021",
      lineage: "Sire: Peak Wheelhouse | Dam: Lucky Charm EX-92",
      description:
        "Peak Luckycharm ET es conocido por su excepcional genética de longevidad y calidad de ubre. Un toro que combina producción sostenible con características funcionales superiores.",
    },
    "peak-longmire-et": {
      id: "peak-longmire-et",
      name: "PEAK LONGMIRE ET",
      registration: "HO-USA-7HO15428",
      imageUrl: "/1HO17110-LONGMIRE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "22 de Junio, 2020",
      lineage: "Sire: Peak AltaRockstar | Dam: Longmire EX-90",
      description:
        "Peak Longmire ET es un toro destacado con excelente longevidad y vida productiva extendida, perfecto para producir hijas duraderas y rentables.",
    },
    "peak-empowered-et": {
      id: "peak-empowered-et",
      name: "PEAK EMPOWERED ET",
      registration: "HO-USA-7HO15534",
      imageUrl: "/001HO15701_EMPOWERED.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "8 de Agosto, 2021",
      lineage: "Sire: Peak AltaMaximus | Dam: Empower VG-86",
      description:
        "Peak Empowered ET ofrece genética de alto rendimiento con foco en producción y eficiencia, maximizando los componentes lácteos y la rentabilidad.",
    },
    "peak-streetmagician-et": {
      id: "peak-streetmagician-et",
      name: "PEAK STREETMAGICIAN ET",
      registration: "HO-USA-7HO15621",
      imageUrl: "/1HO16057-STREET MAGICIAN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "12 de Septiembre, 2020",
      lineage: "Sire: Peak AltaMagic | Dam: Street VG-89",
      description:
        "Peak Streetmagician ET es un toro élite con genética excepcional en conformación de ubre, produciendo hijas con sistemas mamarios altamente funcionales.",
    },
    "peak-break-even-et": {
      id: "peak-break-even-et",
      name: "PEAK BREAK EVEN ET",
      registration: "HO-USA-7HO15745",
      imageUrl: "/001HO15461_BREAK_EVEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "25 de Octubre, 2021",
      lineage: "Sire: Peak AltaProfit | Dam: Breaker EX-91",
      description:
        "Peak Break Even ET ofrece genética económicamente rentable con excelente retorno de inversión, optimizando la relación costo-beneficio en la producción.",
    },
    "peak-misbehavin-et": {
      id: "peak-misbehavin-et",
      name: "PEAK MISBEHAVIN ET",
      registration: "HO-USA-7HO15832",
      imageUrl: "/1HO17045-MISBEHAVIN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "3 de Noviembre, 2020",
      lineage: "Sire: Peak AltaRebel | Dam: Missy VG-88",
      description:
        "Peak Misbehavin ET es un toro innovador con genética diferenciadora y alta transmisión, ofreciendo características únicas para la mejora genética.",
    },
    "pine-tree-zenyatta-et": {
      id: "pine-tree-zenyatta-et",
      name: "PINE TREE ZENYATTA ET",
      registration: "HO-USA-7HO15923",
      imageUrl: "/1HO16035-Pine-Tree-ZENYATTA.jpg",
      origin: "Estados Unidos - Pine Tree",
      birthDate: "17 de Diciembre, 2020",
      lineage: "Sire: Pine Tree Champion | Dam: Zenyatta EX-92",
      description:
        "Pine Tree Zenyatta ET ofrece genética premium con enfoque en tipo y conformación funcional, produciendo animales de excelente apariencia y funcionalidad.",
    },
    "peak-comingup-et": {
      id: "peak-comingup-et",
      name: "PEAK COMINGUP ET",
      registration: "HO-USA-7HO16014",
      imageUrl: "/1HO16032-COMINGUP.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "5 de Enero, 2022",
      lineage: "Sire: Peak AltaFuture | Dam: Coming VG-87",
      description:
        "Peak Comingup ET es un toro joven con evaluación genómica sobresaliente y alto potencial, representando el futuro de la genética Holstein.",
    },
    "peak-wildone-et": {
      id: "peak-wildone-et",
      name: "PEAK WILDONE ET",
      registration: "HO-USA-7HO16125",
      imageUrl: "/1HO17331-WILDONE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "14 de Febrero, 2021",
      lineage: "Sire: Peak AltaWild | Dam: Wildheart VG-89",
      description:
        "Peak Wildone ET presenta genética audaz con características excepcionales de producción, ideal para productores que buscan maximizar el rendimiento.",
    },
    "peak-kazaam-et": {
      id: "peak-kazaam-et",
      name: "PEAK KAZAAM ET",
      registration: "HO-USA-7HO16231",
      imageUrl: "/1HO15986_KAZAAM.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "20 de Marzo, 2021",
      lineage: "Sire: Peak AltaBlast | Dam: Kaza EX-90",
      description:
        "Peak Kazaam ET es un toro con impacto genético sobresaliente y alta confiabilidad, garantizando transmisión consistente de características deseables.",
    },
    "peak-dancendash-et": {
      id: "peak-dancendash-et",
      name: "PEAK DANCENDASH ET",
      registration: "HO-USA-7HO16342",
      imageUrl: "/1HO16120-DanceNDash.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "28 de Abril, 2021",
      lineage: "Sire: Peak AltaDancer | Dam: Dash VG-88",
      description:
        "Peak Dancendash ET ofrece genética ágil con excelente movilidad y patas perfectas, produciendo animales con aplomos superiores y longevidad.",
    },
    "peak-opticalillusion-et": {
      id: "peak-opticalillusion-et",
      name: "PEAK OPTICALILLUSION ET",
      registration: "HO-USA-7HO16453",
      imageUrl: "/images/1ho16311-20opticalillusion.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "7 de Mayo, 2020",
      lineage: "Sire: Peak AltaVision | Dam: Optical EX-91",
      description:
        "Peak Opticalillusion ET es un toro impresionante con genética visual y conformación extraordinaria, destacando en exhibiciones y producción.",
    },
    "peak-candyman-et": {
      id: "peak-candyman-et",
      name: "PEAK CANDYMAN ET",
      registration: "HO-USA-7HO16564",
      imageUrl: "/1HO16701-CANDYMAN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "16 de Junio, 2021",
      lineage: "Sire: Peak AltaSweet | Dam: Candy VG-87",
      description:
        "Peak Candyman ET ofrece genética dulce con componentes lácteos excepcionales, maximizando proteína y grasa para mayor valor agregado.",
    },
    "peak-toretto-et": {
      id: "peak-toretto-et",
      name: "PEAK TORETTO ET",
      registration: "HO-USA-7HO16675",
      imageUrl: "/001HO15405_TORETTO.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "24 de Julio, 2021",
      lineage: "Sire: Peak AltaTurbo | Dam: Toretto VG-89",
      description:
        "Peak Toretto ET es un toro potente con genética de alto rendimiento y velocidad de transmisión, acelerando el progreso genético del hato.",
    },
    "peak-maracay-et": {
      id: "peak-maracay-et",
      name: "PEAK MARACAY ET",
      registration: "HO-USA-7HO16786",
      imageUrl: "/001HO15410_MARACAY.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "2 de Agosto, 2020",
      lineage: "Sire: Peak AltaTropical | Dam: Maracay EX-90",
      description:
        "Peak Maracay ET presenta genética tropical adaptada con excelente resistencia al calor, ideal para sistemas de producción en climas cálidos.",
    },
    "peak-moneytalks-et": {
      id: "peak-moneytalks-et",
      name: "PEAK MONEYTALKS ET",
      registration: "HO-USA-7HO16897",
      imageUrl: "/1HO16488-MONEYTALKS.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "11 de Septiembre, 2021",
      lineage: "Sire: Peak AltaCash | Dam: Talks VG-88",
      description:
        "Peak Moneytalks ET es un toro económicamente superior con alto valor neto y rentabilidad garantizada, maximizando el retorno económico.",
    },
    "peak-zooty-et": {
      id: "peak-zooty-et",
      name: "PEAK ZOOTY ET",
      registration: "HO-USA-7HO16908",
      imageUrl: "/001HO15618_ZOOTY.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "19 de Octubre, 2020",
      lineage: "Sire: Peak AltaZoom | Dam: Zooty VG-87",
      description:
        "Peak Zooty ET ofrece genética dinámica con excelente balance entre producción y tipo, optimizando ambas características simultáneamente.",
    },
    "peak-wallen-et": {
      id: "peak-wallen-et",
      name: "PEAK WALLEN ET",
      registration: "HO-USA-7HO17019",
      imageUrl: "/001HO15229_WALLEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "27 de Noviembre, 2021",
      lineage: "Sire: Peak AltaWall | Dam: Wallen EX-91",
      description:
        "Peak Wallen ET es un toro robusto con estructura sólida y fortaleza excepcional, produciendo animales resistentes y duraderos.",
    },
    "peak-fortnite-et": {
      id: "peak-fortnite-et",
      name: "PEAK FORTNITE ET",
      registration: "HO-USA-7HO17120",
      imageUrl: "/001HO15055_FORTNITE.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "4 de Diciembre, 2021",
      lineage: "Sire: Peak AltaGameChanger | Dam: Fortitude VG-89",
      description:
        "Peak Fortnite ET representa genética de nueva generación con evaluación genómica de vanguardia, liderando el futuro genético.",
    },
    "peak-tarren-et": {
      id: "peak-tarren-et",
      name: "PEAK TARREN ET",
      registration: "HO-USA-7HO17231",
      imageUrl: "/001HO15377_TARREN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "13 de Enero, 2021",
      lineage: "Sire: Peak AltaBalance | Dam: Tarren VG-88",
      description:
        "Peak Tarren ET es un toro equilibrado con excelente funcionalidad y vida productiva, ofreciendo un paquete completo de características.",
    },
    "peak-rayshen-et": {
      id: "peak-rayshen-et",
      name: "PEAK RAYSHEN ET",
      registration: "HO-USA-7HO17342",
      imageUrl: "/001HO15274_RAYSHEN.jpg",
      origin: "Estados Unidos - Genex",
      birthDate: "21 de Febrero, 2021",
      lineage: "Sire: Peak AltaBright | Dam: Rayshen EX-90",
      description:
        "Peak Rayshen ET presenta genética brillante con transmisión consistente y alta heredabilidad, asegurando progreso genético predecible.",
    },
    "aprilday-mariano-red-et": {
      id: "aprilday-mariano-red-et",
      name: "APRILDAY MARIANO RED ET",
      registration: "HO-USA-7HO17453",
      imageUrl: "/1HO16698-MARIANO-RED.jpg",
      origin: "Estados Unidos - Aprilday",
      birthDate: "1 de Abril, 2020",
      lineage: "Sire: Aprilday RedStar | Dam: Mariano RED EX-92",
      description:
        "Aprilday Mariano RED ET es un Holstein Rojo con genética diferenciada y alta producción, ofreciendo diversidad genética y color distintivo.",
    },
  }

  const bull = bullsData[bullId]

  if (!bull) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Toro no encontrado</h2>
          <button onClick={onBack} className="text-blue-600 hover:text-blue-700 font-medium">
            Volver
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group mb-4"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver a Holstein</span>
          </button>
          <img src="/logoinseminar.png" alt="Inseminar" className="h-16 object-contain" />
        </div>
      </div>
      <div className="border-b-8 border-[#00A0B0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bull Image */}
            <div className="relative">
              <img
                src={bull.imageUrl || "/placeholder.svg"}
                alt={bull.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Bull Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#00A0B0] mb-2">{bull.name}</h1>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold">{bull.naabCode}</p>
                  <p className="text-[#00A0B0] font-semibold">{bull.registration}</p>
                  <p>
                    {bull.hdbNumber} | {bull.dobDobDate}
                  </p>
                  <p>
                    <span className="font-semibold">Kappa Casein</span> {bull.kappaCasein} |{" "}
                    <span className="font-semibold">Beta Casein</span> {bull.betaCasein}
                  </p>
                  <p>
                    <span className="font-semibold">Haplotypes</span> {bull.haplotypes}
                  </p>
                  <p>
                    <span className="font-semibold">Genetic Codes</span> {bull.geneticCodes}
                  </p>
                  <p>
                    <span className="font-semibold">aAa</span> {bull.aaa} | <span className="font-semibold">DMS</span>{" "}
                    {bull.dms} | <span className="font-semibold">EFI</span> {bull.efi}
                  </p>
                  <p>
                    <span className="font-semibold">Current Proof</span> {bull.currentProof}
                  </p>
                  <p className="text-xs text-gray-600">Data Powered by CDCB | HA-USA | GENEX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Conformation, Calving Traits, Sire Fertility */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">CONFORMACIÓN</h2>
              <p className="text-sm text-gray-600 mb-4">
                Basado en <strong>Hijas en ~hatos (81% Conf)</strong>
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <p className="text-sm font-semibold mb-1">Índice Modificado de Ubre</p>
                  <p className="text-3xl font-bold text-[#00A0B0]">{bull.conformation?.ptat.value}</p>
                  <p className="text-xs text-gray-600">{bull.conformation?.ptat.reliability} Conf</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">PTAT</p>
                  <p className="text-3xl font-bold">{bull.conformation?.udc.value}</p>
                  <p className="text-xs text-gray-600">{bull.conformation?.udc.reliability}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">UDC</p>
                  <p className="text-3xl font-bold">{bull.conformation?.flc.value}</p>
                  <p className="text-xs text-gray-600">{bull.conformation?.flc.reliability}</p>
                </div>
              </div>

              {/* Trait bars */}
              <div className="space-y-2">
                {bull.conformation?.traits.map((trait, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2 items-center text-xs">
                    <div className="col-span-4 text-right font-medium">{trait.name}</div>
                    <div className="col-span-5 relative h-4 bg-gray-200 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-[#00A0B0] rounded"
                        style={{
                          width: `${Math.min(100, (Number.parseFloat(trait.value) + 3) * 16.67)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="col-span-1 text-center font-bold">{trait.value}</div>
                    <div className="col-span-2 text-gray-600">{trait.interpretation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calving Traits */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">CARACTERÍSTICAS DE PARTO</h2>
              <div className="space-y-2 text-sm">
                {bull.calvingTraits?.map((trait, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold">{trait.name}</span>
                    <div className="text-right">
                      <span className="font-bold text-[#00A0B0]">{trait.value}</span>
                      <span className="text-xs text-gray-600 ml-2">{trait.reliability}</span>
                      <span className="text-xs text-gray-600 ml-2">{trait.observed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sire Fertility */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">FERTILIDAD DEL TORO</h2>
              <div className="space-y-2 text-sm">
                {bull.sireFertility?.map((trait, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold">{trait.name}</span>
                    <div className="text-right">
                      <span className="font-bold">{trait.value}</span>
                      <span className="text-xs text-gray-600 ml-2">{trait.reliability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - ICC, Production, Health, Pedigree */}
          <div className="space-y-6">
            {/* ICC Score */}
            <div className="bg-[#00A0B0] text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold">ICC®</div>
                <div className="text-5xl font-bold">{bull.icc?.score}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <p className="text-sm mb-1">PREF</p>
                  <p className="text-2xl font-bold">{bull.icc?.pref.value}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">SUST</p>
                  <p className="text-2xl font-bold">{bull.icc?.pref.sust}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">FERT</p>
                  <p className="text-2xl font-bold">{bull.icc?.pref.fert}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm border-t border-white/30 pt-4">
                <div>
                  <p className="mb-1">NM$</p>
                  <p className="font-bold">{bull.icc?.nm.value}</p>
                </div>
                <div>
                  <p className="mb-1">CM$</p>
                  <p className="font-bold">{bull.icc?.nm.cm}</p>
                </div>
                <div>
                  <p className="mb-1">TPI®</p>
                  <p className="font-bold">{bull.icc?.nm.tpi}</p>
                </div>
              </div>
            </div>

            {/* Production */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">PRODUCCIÓN</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Leche</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{bull.production?.milk.value}</span>
                    <span className="text-sm text-gray-600 ml-2">{bull.production?.milk.lbs ? "Lbs" : ""}</span>
                    <span className="text-sm font-semibold text-[#00A0B0] ml-2">{bull.production?.milk.percent}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Proteína</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{bull.production?.protein.value}</span>
                    <span className="text-sm text-gray-600 ml-2">{bull.production?.protein.lbs ? "Lbs" : ""}</span>
                    <span className="text-sm font-semibold text-[#00A0B0] ml-2">
                      {bull.production?.protein.percent}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Grasa</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{bull.production?.fat.value}</span>
                    <span className="text-sm text-gray-600 ml-2">{bull.production?.fat.lbs ? "Lbs" : ""}</span>
                    <span className="text-sm font-semibold text-[#00A0B0] ml-2">{bull.production?.fat.percent}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Alimento Ahorrado</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{bull.production?.feedSaved.value}</span>
                    <span className="text-sm font-semibold text-[#00A0B0] ml-2">
                      {bull.production?.feedSaved.percent}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="font-semibold">ROOOTA™</span>
                  <span className="font-bold text-lg">{bull.production?.rooota}</span>
                </div>
              </div>
            </div>

            {/* Health Traits */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">CARACTERÍSTICAS DE SALUD</h2>
              <div className="space-y-2 text-sm">
                {bull.healthTraits?.map((trait, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-2">
                    <span className="font-semibold w-1/2">{trait.name}</span>
                    <div className="w-1/2 text-right">
                      <span className="font-bold text-[#00A0B0]">{trait.value}</span>
                      <p className="text-xs text-gray-600">{trait.interpretation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedigree */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">PEDIGRÍ</h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-semibold text-gray-600">Padre</p>
                    <p className="font-bold text-[#00A0B0]">{bull.pedigree?.sire}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Madre</p>
                    <p className="font-bold">{bull.pedigree?.dam}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Abuelo Materno</p>
                    <p className="font-bold">{bull.pedigree?.mgs}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Abuela Materna</p>
                    <p className="font-bold">{bull.pedigree?.mgd}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Bisabuelo Materno</p>
                    <p className="font-bold">{bull.pedigree?.mgss}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Bisabuela Materna</p>
                    <p className="font-bold">{bull.pedigree?.mgsd}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BullDetailPage
