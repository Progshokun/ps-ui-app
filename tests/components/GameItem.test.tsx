import { render, screen } from "@testing-library/react";
import GameItem from "../../src/components/GameItem/GameItem";

const mockGame = {
  title: "God of War",
  slug: "god-of-war-2018",
  coverImage: "/images/covers/God of War _ cover.webp",
  bgImage: "/images/bg-covers/God_of_War_-bg.jpg",
  platform: "PS4",
};

describe("GameItem", () => {
  it("renders button element", () => {
    render(<GameItem game={mockGame} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders game cover image with correct src and alt", () => {
    render(<GameItem game={mockGame} />);

    const cover = screen.getByAltText(mockGame.title);
    expect(cover).toBeInTheDocument();
    expect(cover).toHaveAttribute("src", mockGame.coverImage);
  });

  it("renders platform image with correct alt attribute", () => {
    render(<GameItem game={mockGame} />);

    const platform = screen.getByAltText(mockGame.platform);
    expect(platform).toBeInTheDocument();
    expect(platform).toHaveAttribute("src", "/images/ps4.png");
  });
});
