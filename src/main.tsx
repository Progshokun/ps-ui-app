import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import "./index.css";
import { HotkeysProvider } from "react-hotkeys-hook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HotkeysProvider>
      <Layout>
        <App />
      </Layout>
    </HotkeysProvider>
  </StrictMode>
);
