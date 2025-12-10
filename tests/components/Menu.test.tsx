import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../../src/components/Menu/Menu";
import { CATEGORIES } from "../../src/data/categories.data";

describe("Menu component", () => {
  it("renders all categories", () => {
    const mockFn = vi.fn();

    render(
      <Menu
        activeCategory={undefined}
        setActiveCategory={mockFn}
        levelFocus="top-menu"
      />
    );

    CATEGORIES.forEach((cat) => {
      expect(
        screen.getByRole("button", { name: cat.title })
      ).toBeInTheDocument();
    });
  });

  it("highlights active category", () => {
    const mockFn = vi.fn();
    const active = CATEGORIES[1].slug;

    render(
      <Menu
        activeCategory={active}
        setActiveCategory={mockFn}
        levelFocus="top-menu"
      />
    );

    const activeButton = screen.getByRole("button", {
      name: CATEGORIES[1].title,
    });

    expect(activeButton).toHaveClass("border-[#1d6ab2]");
  });

  it("does not highlight inactive categories", () => {
    const mockFn = vi.fn();
    const active = CATEGORIES[0].slug;

    render(
      <Menu
        activeCategory={active}
        setActiveCategory={mockFn}
        levelFocus="top-menu"
      />
    );

    CATEGORIES.slice(1).forEach((cat) => {
      const btn = screen.getByRole("button", { name: cat.title });
      expect(btn).toHaveClass("border-transparent");
    });
  });

  it("calls setActiveCategory with correct slug on click", () => {
    const mockFn = vi.fn();

    render(
      <Menu
        activeCategory={undefined}
        setActiveCategory={mockFn}
        levelFocus="top-menu"
      />
    );

    const target = CATEGORIES[2];
    const btn = screen.getByRole("button", { name: target.title });

    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(target.slug);
  });

  it("applies correct text color when levelFocus='top-menu'", () => {
    const mockFn = vi.fn();

    render(
      <Menu
        activeCategory={undefined}
        setActiveCategory={mockFn}
        levelFocus="top-menu"
      />
    );

    const list = screen.getByRole("list");
    expect(list).toHaveClass("text-white");
  });

  it("applies gray text when levelFocus is not 'top-menu'", () => {
    const mockFn = vi.fn();

    render(
      <Menu
        activeCategory={undefined}
        setActiveCategory={mockFn}
        levelFocus="other"
      />
    );

    const list = screen.getByRole("list");
    expect(list).toHaveClass("text-gray-500");
  });
});
