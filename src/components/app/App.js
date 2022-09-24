import React from 'react';
import NavBar from '../navBar/NavBar';
import Hero from '../hero/Hero';
import Features from '../features/Features';
import Whyus from '../whyus/Whyus';
import Pricing from '../pricing/Pricing';
import AboutUs from '../aboutUs/AboutUs';
import Questions from '../questions/Questions';
import './App.css';

function App() {
return (
    <div className="App">
		<NavBar/>
		<Hero/>
		<Features/>
		<Whyus/>
		<Pricing/>
		<AboutUs/>
		<Questions/>
    </div>
);
}

export default App;
