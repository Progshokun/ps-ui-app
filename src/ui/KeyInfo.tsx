import type { THotkeyKey } from "../data/hotkeys.data";

interface IProps {
  keyInfo: THotkeyKey;
}

const KeyInfo = ({ keyInfo }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-full size-4 text-[#353841] shadow-gray-700 flex items-center justify-center p-0.5">
        {keyInfo.icon}
      </div>
      <div>{keyInfo.label}</div>
    </div>
  );
};

export default KeyInfo;
