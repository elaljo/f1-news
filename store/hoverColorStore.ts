"use client";

import { create } from "zustand";

type HoverColorState = {
  hoverColor: string | null;
  setHoverColor: (color: string | null) => void;
};

export const useHoverColorStore = create<HoverColorState>((set) => ({
  hoverColor: null,
  setHoverColor: (color) => set({ hoverColor: color }),
}));
