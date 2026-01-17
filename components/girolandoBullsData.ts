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
    code: "001G000050",
    name: "NEMO DAY",
    fullName: "NEMO DAY",
    registro: "001G000050",
    nasc: "--",
    criador: "--",
    proprietario: "--",
    lactacaoMae: "--",
    ptaLeite: "EM TESTE - 2030",
    betaCaseina: "--",
    kappaCaseina: "--",
    betaLacto: "--",
    imageUrl: "/NEMO_DAY_PROFILE.png",
    hasGenChoice: true,
    hasToro2A2: true,
    pnmglData: emptyPnmglData,
    abczData: standardAbczTraits,
    pedigree: {
      title: "LLA NEMO 370 CAPELA DAY x CAPELA FIV CE BALS",
      sire: {
        name: "LLA NEMO 370 CAPELA DAY",
        registro: "0025-BT",
        siresSire: "MR EVERGREENVIEW ALTADAY-ET",
        siresDam: "AMMON-PEACHEY SHAUNA-ET",
      },
      dam: {
        name: "CAPELA FIV CE BALS",
        registro: "",
        damsSire: "REGANCREST-GV S BRADNICK-ET",
        damsDam: "HELOISA FIV KENYO",
      },
    },
  },
}
