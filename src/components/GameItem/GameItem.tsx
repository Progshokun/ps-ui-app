import type { TGame } from "../../data/games.data";
import cn from "clsx";

interface IProps {
  game: TGame;
}

const GameItem = ({ game }: IProps) => {
  return (
    <button>
      <div
        className={cn(
          "p-1 border-2 border-transparent rounded-2xl transition-colors duration-300 ease-in-out"
        )}
      >
        <img
          className="rounded-2xl w-44 h-44 object-cover transition-all duration-300 ease-in-out"
          src={game.coverImage}
          alt={game.title}
        />
      </div>

      <div>
        <img
          className="hidden opacity-70 brightness-0 invert filter fadeIn"
          src="/images/ps4.png"
          alt={game.platform}
          width={80}
        />
      </div>
    </button>
  );
};

export default GameItem;
