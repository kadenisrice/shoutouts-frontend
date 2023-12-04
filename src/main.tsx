import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FavoritesContextProvider from "./Context/FavoritesContext/FavoritesContextProvider.tsx";
import ShoutoutsContextProvider from "./Context/ShoutoutsContext/ShoutoutsContextProvider.tsx";
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShoutoutsContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </ShoutoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
