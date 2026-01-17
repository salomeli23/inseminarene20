import { GirolandoBullData } from "./GirolandoBullDetailPage"

// Standard ABCZ traits (same for all bulls)
const standardAbczTraits = [
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

// Empty PNMGL data for bulls in test
const emptyPnmglData = [
  { trait: "Leite", pta: "--", conf: "--" },
  { trait: "Idade ao Primeiro Parto", pta: "--", conf: "--" },
  { trait: "NF", pta: "--", conf: "--" },
  { trait: "NR", pta: "--", conf: "--" },
  { trait: "Gordura Kg", pta: "--", conf: "--" },
  { trait: "Gordura %", pta: "--", conf: "--" },
  { trait: "Proteína Kg", pta: "--", conf: "--" },
  { trait: "Proteína %", pta: "--", conf: "--" },
  { trait: "Sólidos Totais Kg", pta: "--", conf: "--" },
  { trait: "Sólidos Totais %", pta: "--", conf: "--" },
]

export const girolandoBullsData: Record<string, GirolandoBullData> = {
  nemoday: {
    id: "nemoday",
    code: "001GL00082",
    name: "NEMO DAY",
    fullName: "NEMO DAY",
    registro: "GL-34521",
    nasc: "15/03/2020",
    criador: "HACIENDA EL SOL",
    proprietario: "INSEMINAR DE COLOMBIA",
    lactacaoMae: "8,500 Kg em 305 dias",
    ptaLeite: "EM TESTE DE PROGÊNIE",
    betaCaseina: "A2A2",
    kappaCaseina: "AB",
    betaLacto: "AB",
    imageUrl: "/NEMO_DAY_PROFILE.png",
    hasGenChoice: true,
    hasToro2A2: true,
    pnmglData: emptyPnmglData,
    abczData: standardAbczTraits,
  },
}
