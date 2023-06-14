import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

const Caroussel = ({ flashcards }) => {
  const [array, setArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const shuffledItems = [...flashcards].sort(() => Math.random() - 0.5);
    const pickedItems = shuffledItems.slice(0, 15);
    setArray(pickedItems);
  }, [flashcards]);

  const handleAddAfterCurrent1 = () => {
    // const currentIndx = carouselRef.current.state.selectedItem;
    // const currentData = array[currentIndx];
    // const currentIndex = selectedIndex;
    // const newArray = [...array];
    // setSelectedIndex(currentIndex+1);
    // setTimeout(() => {
    //   const newCurrentIndex = carouselRef.current.state.selectedItem;
    //   newArray.splice(newCurrentIndex +1 , 0, currentData);
    //   setArray(newArray);
    // }, 5000);
    const currentIndex = selectedIndex;
    let newArray = [...array];

    if (newArray.length < 5) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
    }

    newArray.splice(currentIndex, 1);
    setArray(newArray);
    setSelectedIndex(currentIndex === newArray.length ? currentIndex - 1 : currentIndex);
  };

  const handleAddAfterCurrent2 = () => {
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    let newArray = [...array];

    if (newArray.length < 5) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
    }

    setSelectedIndex(currentIndex+1);
    setTimeout(() => {
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex +1 , 0, currentData);
      setArray(newArray);
    }, 120000);
  };

  
  const handleAddAfterCurrent3 = () => {
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    let newArray = [...array];

    if (newArray.length < 5) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
    }

    setSelectedIndex(currentIndex+1);
    setTimeout(() => {
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex +1 , 0, currentData);
      setArray(newArray);
    }, 45000);
  };

  return (
    <>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Carousel
          ref={carouselRef}
          selectedItem={selectedIndex}
          onChange={index => setSelectedIndex(index)}
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
        >
          {array.map((flashcard, index) => (
            <div
              key={index}
              className="card"
              style={{
                // borderRadius: '25px',
                height: '26vw',
                backgroundColor: 'deepskyblue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card question={flashcard.question} answer={flashcard.answer} />
            </div>
          ))}
        </Carousel>
      </div>
      <div align='center' >
      <button onClick={handleAddAfterCurrent1} style={{
          backgroundColor:'#62ddbd',
          borderRadius:'4px',
          borderStyle:'none',
          boxSizing:'border-box',
          color:'#fff',
          cursor:'pointer',
          display:'inline-block',
          fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
          fontSize:'16px',
          fontWeight:'700',
          lineHeight:'1.5',
          margin:'1vw',
          maxWidth:'none',
          minHeight:'44px',
          minWidth:'10px',
          outline:'none',
          overflow:'hidden',
          padding:'9px 20px 8px',
          position:'relative',
          textAlign:'center',
          textTransform:'none',
          touchAction:'manipulation'
      }}>Easy</button> 
      <button onClick={handleAddAfterCurrent2}
      style={{
        backgroundColor:'#a2aeb3',
        borderRadius:'4px',
        borderStyle:'none',
        boxSizing:'border-box',
        color:'#fff',
        cursor:'pointer',
        display:'inline-block',
        fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
        fontSize:'16px',
        fontWeight:'700',
        lineHeight:'1.5',
        margin:'1vw',
        maxWidth:'none',
        minHeight:'44px',
        minWidth:'10px',
        outline:'none',
        overflow:'hidden',
        padding:'9px 20px 8px',
        position:'relative',
        textAlign:'center',
        textTransform:'none',
        touchAction:'manipulation'
    }}>Needs Practice</button> 
      <button onClick={handleAddAfterCurrent3}
      style={{
        backgroundColor:'#ff7373',
        borderRadius:'4px',
        borderStyle:'none',
        // boxShadow:'0px 2px 0px 2px rgba(20,20,20,0.2)',
        boxSizing:'border-box',
        color:'#fff',
        cursor:'pointer',
        display:'inline-block',
        fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
        fontSize:'16px',
        fontWeight:'700',
        lineHeight:'1.5',
        margin:'1vw',
        maxWidth:'none',
        minHeight:'44px',
        minWidth:'10px',
        outline:'none',
        overflow:'hidden',
        padding:'9px 20px 8px',
        position:'relative',
        textAlign:'center',
        textTransform:'none',
        touchAction:'manipulation'
    }}>Difficult</button>
    </div>
  </>
  );
};

export default Caroussel;
