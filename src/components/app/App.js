import React from 'react';
import NavBar from '../navBar/NavBar';
import Hero from '../hero/Hero';
import Features from '../features/Features';
import Whyus from '../whyus/Whyus';
import './App.css';

function App() {
return (
    <div className="App">
		<NavBar/>
		<Hero/>
		<Features/>
		<Whyus/>
    </div>
);
}

export default App;
