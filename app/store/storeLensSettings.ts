import { create } from "zustand";

export interface AccountStateLens {
  marque: string;
  setMarque: (marque: string) => void;
  diametre: number;
  setDiametre: (diametre: number) => void;
  rayon: number;
  setRayon: (rayon: number) => void;
  puissanceOG: number;
  setPuissanceOG: (puissanceOG: number) => void;
  cylindreOG: number;
  setCylindreOG: (cylindreOG: number) => void;
  axeOG: number;
  setAxeOG: (axeOG: number) => void;
  puissanceOD: number;
  setPuissanceOD: (puissanceOD: number) => void;
  cylindreOD: number;
  setCylindreOD: (cylindreOD: number) => void;
  axeOD: number;
  setAxeOD: (axeOD: number) => void;
}

const useAccountStore = create<AccountStateLens>((set) => ({
  marque: "",
  setMarque: (marque) => set({ marque }),
  diametre: 0,
  setDiametre: (diametre) => set({ diametre }),
  rayon: 0,
  setRayon: (rayon) => set({ rayon }),
  puissanceOG: 0,
  setPuissanceOG: (puissanceOG) => set({ puissanceOG }),
  cylindreOG: 0,
  setCylindreOG: (cylindreOG) => set({ cylindreOG }),
  axeOG: 0,
  setAxeOG: (axeOG) => set({ axeOG }),
  puissanceOD: 0,
  setPuissanceOD: (puissanceOD) => set({ puissanceOD }),
  cylindreOD: 0,
  setCylindreOD: (cylindreOD) => set({ cylindreOD }),
  axeOD: 0,
  setAxeOD: (axeOD) => set({ axeOD }),
}));

export default useAccountStore;
