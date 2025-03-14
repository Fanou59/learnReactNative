import { create } from "zustand";

export interface AccountStateLens {
  marque: string;
  setMarque: (marque: string) => void;
  diametre: string;
  setDiametre: (diametre: string) => void;
  rayon: string;
  setRayon: (rayon: string) => void;
  puissanceOG: string;
  setPuissanceOG: (puissanceOG: string) => void;
  cylindreOG: string;
  setCylindreOG: (cylindreOG: string) => void;
  axeOG: string;
  setAxeOG: (axeOG: string) => void;
  puissanceOD: string;
  setPuissanceOD: (puissanceOD: string) => void;
  cylindreOD: string;
  setCylindreOD: (cylindreOD: string) => void;
  axeOD: string;
  setAxeOD: (axeOD: string) => void;
}

const useAccountStore = create<AccountStateLens>((set) => ({
  marque: "",
  setMarque: (marque) => set({ marque }),
  diametre: "",
  setDiametre: (diametre) => set({ diametre }),
  rayon: "",
  setRayon: (rayon) => set({ rayon }),
  puissanceOG: "",
  setPuissanceOG: (puissanceOG) => set({ puissanceOG }),
  cylindreOG: "",
  setCylindreOG: (cylindreOG) => set({ cylindreOG }),
  axeOG: "",
  setAxeOG: (axeOG) => set({ axeOG }),
  puissanceOD: "",
  setPuissanceOD: (puissanceOD) => set({ puissanceOD }),
  cylindreOD: "",
  setCylindreOD: (cylindreOD) => set({ cylindreOD }),
  axeOD: "",
  setAxeOD: (axeOD) => set({ axeOD }),
}));

export default useAccountStore;
