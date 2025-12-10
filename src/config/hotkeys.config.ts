export const KeyNum = {
  ArrowDown: "ArrowDown",
  ArrowRight: "ArrowRight",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
} as const;

export class HotKeysConfig {
  static readonly TOP_MENU = KeyNum.ArrowUp;
  static readonly CAROUSEL = "2";
  static readonly DETAILS = KeyNum.ArrowDown;
  static readonly NEXT = KeyNum.ArrowRight;
  static readonly PREV = KeyNum.ArrowLeft;
}
