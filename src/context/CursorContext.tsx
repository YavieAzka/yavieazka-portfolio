"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CursorContextType {
  hoveredElement: HTMLElement | null;
  setHoveredElement: Dispatch<SetStateAction<HTMLElement | null>>;
  introPhase: number; // Ganti boolean menjadi number
  setIntroPhase: Dispatch<SetStateAction<number>>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
    null
  );
  const [introPhase, setIntroPhase] = useState(1); // Fase awal adalah 0

  return (
    <CursorContext.Provider
      value={{ hoveredElement, setHoveredElement, introPhase, setIntroPhase }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorContext() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
}
