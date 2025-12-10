import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import GameCarousel from "../../src/components/GameCarousel/GameCarousel";
import type { SwiperRef } from "swiper/react";
import { GAMES_DATA } from "../../src/data/games.data";
import React from "react";

// --- Мокируем Swiper ---
vi.mock("swiper/react", () => {
  interface SwiperProps {
    children: React.ReactNode;
    onSlideChange?: (swiper: { realIndex: number }) => void;
  }

  const Swiper = ({ children, onSlideChange }: SwiperProps) => (
    <div data-testid="swiper" onClick={() => onSlideChange?.({ realIndex: 0 })}>
      {children}
    </div>
  );

  const SwiperSlide = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  );

  return { Swiper, SwiperSlide };
});

// --- Мокируем zustand store ---
const setActiveGameMock = vi.fn();
vi.mock("../../store", () => ({
  useGameStore: () => ({
    setActiveGame: setActiveGameMock,
  }),
}));

describe("GameCarousel", () => {
  beforeEach(() => {
    setActiveGameMock.mockReset();
  });

  it("renders Swiper and all slides", () => {
    const ref = React.createRef<SwiperRef>();
    render(<GameCarousel swiperRef={ref} />);

    expect(screen.getByTestId("swiper")).toBeInTheDocument();
    expect(screen.getAllByTestId("swiper-slide")).toHaveLength(
      GAMES_DATA.length
    );
  });

  it("renders GameItem components inside slides", () => {
    const ref = React.createRef<SwiperRef>();
    render(<GameCarousel swiperRef={ref} />);

    GAMES_DATA.forEach((game) => {
      expect(screen.getByAltText(game.title)).toBeInTheDocument();
    });
  });

  it("accepts and forwards the swiperRef prop", () => {
    const ref = React.createRef<SwiperRef>();
    render(<GameCarousel swiperRef={ref} />);

    expect(ref.current).toBeNull();
    expect(screen.getByTestId("swiper")).toBeInTheDocument();
  });
});
