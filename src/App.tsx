import { useState } from "react";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import Menu from "./components/Menu/Menu";
import type { TCategorySlug } from "./types/category";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import type { SwiperRef } from "swiper/react";
import { KeyNum } from "./config/hotkeys.config";
import { CATEGORIES } from "./data/categories.data";
import GameDetails from "./components/GameDetails/GameDetails";

type TlevelFocus = "top-menu" | "game-carousel" | "details";

function App() {
  const [activeCategory, setActiveCategory] = useState<TCategorySlug>("all");
  const swiperRef = useRef<SwiperRef>(null);
  const [levelFocus, setLevelFocus] = useState<TlevelFocus>("game-carousel");

  useHotkeys(KeyNum.ArrowUp, () => {
    if (levelFocus === "game-carousel") {
      setLevelFocus("top-menu");
    } else if (levelFocus === "details") {
      setLevelFocus("game-carousel");
    }
  });

  useHotkeys(KeyNum.ArrowDown, () => {
    if (levelFocus === "top-menu") {
      setLevelFocus("game-carousel");
    } else if (levelFocus === "game-carousel") {
      setLevelFocus("details");
    }
  });

  useHotkeys(KeyNum.ArrowLeft, () => {
    if (levelFocus === "top-menu") {
      const prevCategory =
        CATEGORIES.findIndex((cat) => cat.slug === activeCategory) - 1;
      if (prevCategory < CATEGORIES.length) {
        setActiveCategory(CATEGORIES[prevCategory].slug);
      }
    } else swiperRef.current?.swiper.slidePrev();
  });

  useHotkeys(KeyNum.ArrowRight, () => {
    if (levelFocus === "top-menu") {
      const nextCategory =
        CATEGORIES.findIndex((cat) => cat.slug === activeCategory) + 1;
      if (nextCategory < CATEGORIES.length) {
        setActiveCategory(CATEGORIES[nextCategory].slug);
      }
    } else swiperRef.current?.swiper.slideNext();
  });

  return (
    <div className="flex flex-col justify-between">
      <Menu
        levelFocus={levelFocus}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarousel swiperRef={swiperRef} />
      <GameDetails />
    </div>
  );
}

export default App;
