import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GameCarousel from './components/GameCarousel/GameCarousel';
import Filters from './components/Filters/Filters';
import CallToAction from './components/CallToAction/CallToAction';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<main className='appContainer'>
				<section className='sub-container'>
					<Header />
					<Banner />
				</section>
				<GameCarousel />
				<CallToAction />
				<Filters />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
}

export default App;
