import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { RickAndMortyProvider } from "./context/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RickAndMortyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RickAndMortyProvider>

);
