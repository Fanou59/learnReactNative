import { create } from "zustand";

export interface AccountState {
  prenom: string;
  setPrenom: (prenom: string) => void;
}

const useAccountStore = create<AccountState>((set) => ({
  prenom: "",
  setPrenom: (prenom) => set({ prenom }),
}));

export default useAccountStore;
