import React from 'react';
import AnkiCarousel from './AnkiCarousel';
import Navbar from './Navbar';

const App = () => {
    return (
    <>
      <Navbar />
      <div className="app">
        <h1>Flashcards</h1>
        <AnkiCarousel />
      </div>
    </>
  );
};

export default App;
