import { hotkeysData } from "../../data/hotkeys.data";
import KeyInfo from "../../ui/keyInfo";

const Footer = () => {
  return (
    <footer className="flex items-center gap-5 absolute bottom-5 right-8 text-sm">
      {hotkeysData.map((hotKey) => (
        <KeyInfo key={hotKey.label} keyInfo={hotKey} />
      ))}
    </footer>
  );
};

export default Footer;
