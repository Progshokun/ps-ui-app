import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useGameStore } from "./store";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode; // Это стандартный тип для любых React-элементов
}

const Layout = ({ children }: IProps) => {
  const { getActiveGame } = useGameStore();

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${getActiveGame()?.bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
      <div className="relative h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
