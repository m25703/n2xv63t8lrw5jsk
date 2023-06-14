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
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    const newArray = [...array];
    setSelectedIndex(currentIndex+1);
    setTimeout(() => {
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex +1 , 0, currentData);
      setArray(newArray);
    }, 5000);
  };

  
  const handleAddAfterCurrent2 = () => {
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    const newArray = [...array];
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
    const newArray = [...array];
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
      <button onClick={handleAddAfterCurrent1}>Easy</button> &nbsp;
      <button onClick={handleAddAfterCurrent2}>Needs Practice</button> &nbsp;
      <button onClick={handleAddAfterCurrent3}>Difficult</button>
    </div>
  </>
  );
};

export default Caroussel;
