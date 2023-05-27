import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Recommend from './components/recommend';
import Testimonials from './components/testimonals';
import Footer from './components/footer';
import ScrollToTop from './components/scrolltotop';

function App() {
  return(
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
      <ScrollToTop />
 </div>
 )
}

export default App;
