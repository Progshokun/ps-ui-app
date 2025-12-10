import { CATEGORIES } from "../../data/categories.data";
import cn from "clsx";
import type { TCategorySlug } from "../../types/category";

interface IProps {
  activeCategory?: string;
  setActiveCategory: (slug: TCategorySlug) => void;
  levelFocus: string;
}

const Menu = ({ activeCategory, setActiveCategory, levelFocus }: IProps) => {
  return (
    <nav className="mt-5 ml-28">
      <ul
        className={cn(
          "flex items-center transition-colors duration-300",
          levelFocus === "top-menu" ? "text-white" : "text-gray-500"
        )}
      >
        {CATEGORIES.map((category) => (
          <li key={category.slug}>
            <button
              className={cn(
                "px-5 py-0.5 border-2 rounded-full font-medium",
                activeCategory === category.slug
                  ? "border-[#1d6ab2]"
                  : " border-transparent"
              )}
              onClick={() => {
                console.log(category.slug);
                setActiveCategory(category.slug);
              }}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
