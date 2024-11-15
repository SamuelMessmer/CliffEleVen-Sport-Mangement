import { create } from "zustand";

interface showContactState {
  showContactForm: boolean;
  setShowContactForm: (showContact: boolean) => void;
}

export const useContactFormState = create<showContactState>()((set) => ({
  showContactForm: false,
  setShowContactForm: (showContactForm: boolean) => set({ showContactForm }),
}));