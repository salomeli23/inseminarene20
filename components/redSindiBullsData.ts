import { RedSindiBullData } from "./RedSindiBullDetailPage"

export const redSindiBullsData: Record<string, RedSindiBullData> = {
  hanoidon: {
    id: "hanoidon",
    code: "001SD00007",
    name: "HANOI DON",
    fullName: "HANOI DON",
    serieRgd: "VIB 302",
    nasc: "11/06/2021",
    proprietario: "EDUARDO BIAGI / TOBIAS FERREIRA PINHEIRO / NILSON ALVES DA COSTA",
    imageUrl: "/HANOI_DON_PHOTO.jpg",
    progenieData: {
      filhos: "0",
      rebanhos: "0",
    },
    indiceData: {
      iabcz: { dep: "27,99", deca: "DECA 1" },
    },
    producaoData: [
      { trait: "PN", deca: "DECA 10", dep: "1,18", ac: "18" },
      { trait: "PD", deca: "DECA 1", dep: "9,83", ac: "16" },
      { trait: "PA", deca: "DECA 1", dep: "12,01", ac: "14" },
      { trait: "PS", deca: "DECA 1", dep: "12,50", ac: "14" },
    ],
    maternalData: [
      { trait: "PM-EM", deca: "DECA 1", dep: "1,23", ac: "9" },
      { trait: "TMD", deca: "--", dep: "--", ac: "--" },
      { trait: "IPP", deca: "DECA 4", dep: "-4,30", ac: "8" },
      { trait: "PE365", deca: "DECA 1", dep: "0,82", ac: "19" },
    ],
    morfologicasData: [
      { trait: "ESOB", deca: "DECA 2", dep: "0,63", ac: "6" },
      { trait: "PSOB", deca: "DECA 2", dep: "0,58", ac: "6" },
      { trait: "MSOB", deca: "DECA 2", dep: "0,79", ac: "6" },
    ],
    pedigree: {
      title: "ESTOCOLMO x DIORAMA",
      sire: {
        name: "ESTOCOLMO FIV DON",
        registro: "",
        siresSire: "QUERENTE DA ESTIVA",
        siresDam: "FARABAD FIV DA 2L",
      },
      dam: {
        name: "DIORAMA FIV DON",
        registro: "",
        damsSire: "BARALHO",
        damsDam: "BRENDA PORANGABA",
      },
    },
  },
}
