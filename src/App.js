import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reactor from './components/Reactor';
import Notify from './components/Notify';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Reactor/>
      <Notify/>
    </div>  
  );
}

export default App;
