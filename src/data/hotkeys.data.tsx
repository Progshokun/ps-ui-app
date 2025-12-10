import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export const hotkeysData = [
  {
    icon: <ArrowUp />,
    label: "UP",
  },
  {
    icon: (
      <>
        <ArrowDown />
      </>
    ),
    label: "DOWN",
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: "PREV GAME",
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: "NEXT GAME",
  },
];

export type THotkeyKey = (typeof hotkeysData)[number];
