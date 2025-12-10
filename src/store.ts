import { create } from "zustand";
import { GAMES_DATA, type TGame } from "./data/games.data";

interface GameStore {
  activeGame: string;
  setActiveGame: (slug: string) => void;
  getActiveGame: () => TGame | undefined;
}

export const useGameStore = create<GameStore>((set) => ({
  activeGame: "death-stranding",
  setActiveGame: (slug: string) => set({ activeGame: slug }),
  getActiveGame: (): TGame | undefined => {
    const state = useGameStore.getState();
    const game = GAMES_DATA.find((game) => game.slug === state.activeGame);
    return game;
  },
}));
