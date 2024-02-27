import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="appContainer">
      <div className="sub-container">
        <Header />
        <Banner />
      </div>
      <GameCarousel />
    </div>
  );
}

export default App;
