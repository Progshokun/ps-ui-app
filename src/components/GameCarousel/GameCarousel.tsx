import { GAMES_DATA } from "../../data/games.data";
import GameItem from "../GameItem/GameItem";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/swiper.css";
import { useGameStore } from "../../store";
import { type RefObject } from "react";

interface IProps {
  swiperRef: RefObject<SwiperRef | null>;
}

const GameCarousel = ({ swiperRef }: IProps) => {
  const { setActiveGame } = useGameStore();

  return (
    <div className="flex items-center justify-end mt-80 ml-5">
      <Swiper
        ref={swiperRef}
        slidesPerView={8}
        spaceBetween={20}
        loop
        initialSlide={3}
        slideToClickedSlide
        onSlideChange={(e) => {
          const gameSlug = GAMES_DATA[e.realIndex].slug;
          setActiveGame(gameSlug);
          console.log(gameSlug);
        }}
      >
        {GAMES_DATA.map((game) => (
          <SwiperSlide key={game.slug}>
            <GameItem game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameCarousel;
