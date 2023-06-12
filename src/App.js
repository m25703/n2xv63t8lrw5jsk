import React from 'react';
import AnkiCarousel from './AnkiCarousel';
import Navbar from './Navbar';

const App = () => {
    return (
    <>
      <Navbar />
      <div className="app">
        <h1>Ch. 6: Combustion and Flame</h1>
        <AnkiCarousel />
      </div>
    </>
  );
};

export default App;
