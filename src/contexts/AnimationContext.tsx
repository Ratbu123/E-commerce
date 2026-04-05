import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "standard" | "premium";

const AnimationContext = createContext<{
  mode: Mode;
  setMode: (m: Mode) => void;
  isPremium: boolean;
}>({ mode: "standard", setMode: () => {}, isPremium: false });

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("standard");
  return (
    <AnimationContext.Provider value={{ mode, setMode, isPremium: mode === "premium" }}>
      {children}
    </AnimationContext.Provider>
  );
};
