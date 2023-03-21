import { create } from "zustand"



interface ColorModeState {
  mode: "dark" | "bright";
  switchMode: () => void;
}


const useColorMode = create<ColorModeState>((set) => ({
  mode: "dark",
  switchMode: () => set((state) => state.mode === "dark" ? { mode: "bright" } : { mode: "dark" })
}))

export default useColorMode