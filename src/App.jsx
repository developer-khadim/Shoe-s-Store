import React from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-400 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] bg-black rounded-full"></div>
      <Nav/>
      <Hero/>
    </div>
  );
}

export default App