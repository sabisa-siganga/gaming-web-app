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
}

export default App;
