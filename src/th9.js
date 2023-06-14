// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function ArrayCarousel() {
//   const [array, setArray] = useState([]);
//   const [showElement, setShowElement] = useState(false);

//   const handleClick = () => {
//     setTimeout(() => {
//       setArray(prevArray => [...prevArray, 'New Element']);
//       setShowElement(true);
//     }, 1000);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Element</button>
//       {showElement && (
//         <Carousel>
//           {array.map((element, index) => (
//             <div key={index}>
//               <p>{element}</p>
//             </div>
//           ))}
//         </Carousel>
//       )}
//     </div>
//   );
// }

// export default ArrayCarousel;

// import React, { useState } from 'react';

// function RandomItems() {
//   const items = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 5',
//     'Item 6',
//     'Item 7',
//     'Item 8',
//     'Item 9',
//     'Item 10'
//   ];

//   const [randomItems, setRandomItems] = useState([]);

//   const handlePickItems = () => {
//     const shuffledItems = [...items].sort(() => Math.random() - 0.5);
//     const pickedItems = shuffledItems.slice(0, 3);
//     setRandomItems(pickedItems);
//   };

//   return (
//     <div>
//       <button onClick={handlePickItems}>Pick Items</button>
//       {randomItems.length > 0 && (
//         <ul>
//           {randomItems.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default RandomItems;

// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function ArrayCarousel() {
//   const [array, setArray] = useState([]);
//   const [showElement, setShowElement] = useState(false);
//   const [disableButton, setDisableButton] = useState(false);

//   const handleClick = () => {
//     setDisableButton(true);
//     setTimeout(() => {
//       setArray(prevArray => [...prevArray, 'New Element']);
//       setShowElement(true);
//     }, 1000);
//   };

//   useEffect(() => {
//     setDisableButton(false);
//   }, [showElement]);

//   return (
//     <div>
//       <button onClick={handleClick} disabled={disableButton}>
//         Add Element
//       </button>
//       {showElement && (
//         <Carousel>
//           {array.map((element, index) => (
//             <div key={index}>
//               <p>{element}</p>
//             </div>
//           ))}
//         </Carousel>
//       )}
//     </div>
//   );
// }

// export default ArrayCarousel;


// // adds current carousel to end 
// import React, { useState, useEffect, useRef } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function ArrayCarousel() {
//   const [array, setArray] = useState([]);
//   const [showElement, setShowElement] = useState(false);
//   const [disableButton, setDisableButton] = useState(false);
//   const carouselRef = useRef(null);

//   const handleClickAddElement = () => {
//     if (carouselRef.current && carouselRef.current.state.selectedItem !== null) {
//       const currentItem = carouselRef.current.state.selectedItem;
//       const currentElement = array[currentItem];
//       setArray(prevArray => [...prevArray, currentElement]);
//     }
//   };

//   const handleClickAddNewElement = () => {
//     setDisableButton(true);
//     setTimeout(() => {
//       setArray(prevArray => [...prevArray, 'New Element']);
//       setShowElement(true);
//     }, 1000);
//   };

//   useEffect(() => {
//     setDisableButton(false);
//   }, [showElement]);

//   return (
//     <div>
//       <button onClick={handleClickAddElement} disabled={!showElement || disableButton}>
//         Add Current Carousel Element
//       </button>
//       <button onClick={handleClickAddNewElement} disabled={disableButton}>
//         Add New Element
//       </button>
//       {showElement && (
//         <Carousel ref={carouselRef}>
//           {array.map((element, index) => (
//             <div key={index}>
//               <p>{element}</p>
//             </div>
//           ))}
//         </Carousel>
//       )}
//     </div>
//   );
// }

// export default ArrayCarousel;

// import React, { useState, useRef } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function ArrayCarousel() {
//   const [array, setArray] = useState(['a','b','c']);
//   const [showElement, setShowElement] = useState(false);
//   const carouselRef = useRef(null);

//   const handleClick = () => {
//     setTimeout(() => {
//       setArray(prevArray => [...prevArray, 'New Element']);
//       setShowElement(true);
//     }, 10000);
//   };

//   const handleAddAfterCurrent = () => {
//     const currentIndex = carouselRef.current.state.selectedItem;
//     const newArray = [...array];
//     newArray.splice(currentIndex + 1, 0, 'Added After Current');
//     setArray(newArray);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Element</button>
//       {showElement && (
//         <div>
//           <Carousel ref={carouselRef}>
//             {array.map((element, index) => (
//               <div key={index}>
//                 <p>{element}</p>
//               </div>
//             ))}
//           </Carousel>
//           <button onClick={handleAddAfterCurrent}>Add After Current</button>
//         </div>
//       )}
//     </div>
//   );
// }

// // export default ArrayCarousel;


// import React, { useState, useRef } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function ArrayCarousel() {
//   const [array, setArray] = useState(['a','b','c']);
//   const [showElement, setShowElement] = useState(false);
//   const carouselRef = useRef(null);

//   const handleClick = () => {
//     setTimeout(() => {
//       setArray(prevArray => [...prevArray, 'New Element']);
//       setShowElement(true);
//     }, 1000);
//   };

//   const handleAddAfterCurrent = () => {
//     const currentIndex = carouselRef.current.state.selectedItem;
//     const currentData = array[currentIndex];
//     const newArray = [...array];
//     newArray.splice(currentIndex + 1, 0, currentData);
//     setArray(newArray);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Element</button>
//       {showElement && (
//         <div>
//           <Carousel ref={carouselRef}>
//             {array.map((element, index) => (
//               <div key={index}>
//                 <p>{element}</p>
//               </div>
//             ))}
//           </Carousel>
//           <button onClick={handleAddAfterCurrent}>Add After Current</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArrayCarousel;

//no switch to next
import React, {useState, useRef, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

const AnkiCarousel = ({flashcards}) => {

  const [array, setArray] = useState([]);
  const carouselRef = useRef(null);

 useEffect(() => {
  const shuffledItems = [...flashcards].sort(() => Math.random() - 0.5);
  const pickedItems = shuffledItems.slice(0, 10);
  setArray(pickedItems);
}, [flashcards]);

  const handleAddAfterCurrent = () => {
    const currentIndex = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndex];
    const newArray = [...array];
    setTimeout(() => {
      console.log(carouselRef.current);
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex + 1, 0, currentData);
      setArray(newArray);
    }, 2000);
  };

  return (
    <div style={{width: '80%', margin: '0 auto' }}>
      <Carousel ref={carouselRef} showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false}>
        {array.map((flashcard, index) => (
          <div key={index} className="anki-card" style={{borderRadius:'25px', height:"26vw", backgroundColor:"deepskyblue", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <AnkiCard question={flashcard.question} answer={flashcard.answer} />
          </div>
        ))}
      </Carousel>
      <button onClick={handleAddAfterCurrent}>Add After Current</button>
    </div>
  );
};

export default AnkiCarousel;
