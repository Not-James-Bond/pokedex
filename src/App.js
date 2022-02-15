import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import PokeDex from './components/PokeDex';
import Legendaries from './components/Legendaries';
import Documentation from './components/Documentation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<PokeDex />} />
        <Route path="/legendaries" element={<Legendaries />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
