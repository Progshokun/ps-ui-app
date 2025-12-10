import { hotkeysData } from "../../data/hotkeys.data";
import KeyInfo from "../../ui/KeyInfo";

const Footer = () => {
  return (
    <footer className="right-8 bottom-5 absolute flex items-center gap-5 text-sm">
      {hotkeysData.map((hotKey) => (
        <KeyInfo key={hotKey.label} keyInfo={hotKey} />
      ))}
    </footer>
  );
};

export default Footer;
