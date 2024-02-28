import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import CallToAction from "./components/CallToAction/CallToAction";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="appContainer">
      <section className="sub-container">
        <Header />
        <Banner />
      </section>
      <GameCarousel />
      <CallToAction />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
