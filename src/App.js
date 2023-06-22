import React from 'react';
import Caroussel from './Caroussel';
import Navbar from './Navbar';



const App = () => {
  const flashcards2 = [
    {question: 'China', answer: 'Beijing'},
    {question: 'Japan', answer: 'Tokyo'},
    {question: 'Germany', answer: 'Berlin'},
    {question: 'France', answer: 'Paris'},
    {question: 'Italy', answer: 'Rome'},
    {question: 'South Korea', answer: 'Seoul'},
    {question: 'Australia', answer: 'Canberra'},
    {question: 'Russia', answer: 'Moscow'},
    {question: 'Spain', answer: 'Madrid'},
    {question: 'Mexico', answer: 'Mexico City'},
    {question: 'Indonesia', answer: 'Jakarta'},
    {question: 'Netherlands', answer: 'Amsterdam'},
    {question: 'Saudi Arabia', answer: 'Riyadh'},
    {question: 'Sweden', answer: 'Stockholm'},
    {question: 'Belgium', answer: 'Brussels'},
    {question: 'Thailand', answer: 'Bangkok'},
    {question: 'Austria', answer: 'Vienna'},
    {question: 'Norway', answer: 'Oslo'},
    {question: 'Denmark', answer: 'Copenhagen'},
    {question: 'Philippines', answer: 'Manila'},
    {question: 'Finland', answer: 'Helsinki'},
    {question: 'Ireland', answer: 'Dublin'},
  ];
    return (
    <>
      <Navbar />
      <div className="app">
        <h1> &nbsp; </h1>
        <Caroussel flashcards={flashcards2}/>
      </div>
    </>
  );
};

export default App;