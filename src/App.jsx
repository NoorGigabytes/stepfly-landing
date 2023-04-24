import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
      <div className="pt-20 bg-slate-800">
        <Navbar />
        <Routes>
          <Route path="/stepfly-landing/" element={<Home />}/>
        </Routes>
        <Footer />
      </div>
  )
}

export default App
