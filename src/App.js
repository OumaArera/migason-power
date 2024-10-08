import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Join from './Join';


function App() {
  return (
    <div style={{ paddingTop: '110px' }} className="flex bg-gray-100  flex-col min-h-screen">
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='join' element={<Join />} />
          <Route path='contact1' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
