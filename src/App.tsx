import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import CallToAction from "./components/CallToAction/CallToAction";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

// Functional component representing the main structure of the app
function App() {
  return (
    <>
      {/* Main container for the entire app */}
      <main className="appContainer">
        {/* Sub-container for header and banner */}
        <section className="sub-container">
          {/* Rendering Header component */}
          <Header />
          <Banner />
        </section>
        <CallToAction />
        <Filters />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
