<<<<<<< HEAD
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="appContainer">
      <div className="sub-container">
        <Header />
        <Banner />
      </div>
      <GameCarousel />
      <Filters />
      <Footer />
    </div>
  );
=======
import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Filters from './components/Filters/Filters';
import CallToAction from './components/CallToAction/CallToAction';

function App() {
	return (
		<div className='appContainer'>
			<section className='sub-container'>
				<Header />
				<Banner />
			</section>
			<CallToAction />
			<Filters />
		</div>
	);
>>>>>>> 954fa4e4392d091f0f9c7716838f052cc7311d32
}

export default App;
