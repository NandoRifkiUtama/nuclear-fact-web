import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reactor from './components/Reactor';
import Notify from './components/Notify';
import Price from './components/Price';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Reactor/>
      <Notify/>
      <Price/>
      <Footer/>
    </div>  
  );
}

export default App;
