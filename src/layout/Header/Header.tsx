import { Bell, Gamepad2, ShoppingBag, Trophy, Users, Wifi } from "lucide-react";

const currentTime = new Date().toLocaleString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const Header = () => {
  return (
    <header className="p-8 grid grid-cols-[1fr_6fr_auto] items-center">
      <div className="flex items-center gap-18 font-semibold">
        <div className="flex items-center gap-3 ">
          <time>{currentTime}</time>
          <Wifi className="size-4" />
        </div>

        <div className="text-sm flex items-center gap-3">
          <span className="flex items-center gap-1">
            <ShoppingBag className="size-5" />
            <span>3</span>
          </span>
          <span>|</span>
          <span>$39,97</span>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center text-center">
        <div className="text-xs font-medium flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">1</div>
        </div>
        <div className="text-xs font-medium flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">2</div>
        </div>
      </div>

      <div className="text-sm flex items-center gap-6 justify-end font-semibold">
        <div className="flex items-center gap-1.5">
          <Bell fill="white" />
          <span>13</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Users />
          <span>5</span>
        </div>

        <div>
          <img src="images/ps-plus.svg" alt="PS Plus" width={24} height={24} />
        </div>

        <div className="flex items-center gap-1.5">
          <img
            className=""
            src="images/avatar.jpg"
            alt="avatar"
            width={45}
            height={45}
            style={{ borderRadius: "50%" }}
          />
          <div>
            FallingStickman
            <span className="flex items-center gap-1">
              <Trophy size={15} />
              <span>14</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
