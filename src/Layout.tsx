import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useGameStore } from "./store";

const Layout = ({ children }) => {
  const { getActiveGame } = useGameStore();

  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen relative"
      style={{
        backgroundImage: `url(${getActiveGame()?.bgImage})`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)]" />
      <div className="relative h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
