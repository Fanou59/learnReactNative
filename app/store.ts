// store.ts
import { create } from "zustand";

export interface AccountState {
  prenom: string;
  setPrenom: (prenom: string) => void;
  // ... autres propriétés et fonctions de votre store
}

const useAccountStore = create<AccountState>((set) => ({
  prenom: "",
  setPrenom: (prenom) => set({ prenom }),
}));

export default useAccountStore;
