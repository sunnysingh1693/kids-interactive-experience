import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityBackground from "./components/CityBackground/CityBackground";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import "./index.css";
import PostGame from "./pages/PostGame/PostGame";
import Tutorial from "./pages/Tutorial/Tutorial";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CityBackground />
    <div className="pageWrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/post-game" element={<PostGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
