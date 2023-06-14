import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card" style={{ width: '90%' }}>
      <center>
        <div
          className="card-question"
          style={{
            marginTop: '1vw',
            height: '5vw',
            textAlign: 'center',
            color: 'white',
            fontFamily:
              'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            fontSize: '2vw',
            fontWeight: '600'
          }}
        >
          {question}
        </div>
        <div
          style={{
            height: '14vw',
            width: '80%',
            textAlign: 'center',
            verticalAlign: 'middle',
            fontFamily:
              'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            fontSize: '2vw'
          }}
        >
          {showAnswer && <div className="card-answer" style={{verticalAlign: 'middle'}}>{answer}</div>}
        </div>
        <div style={{ height: '4vw' }}>
          <button
            className="card-toggle"
            onClick={toggleAnswer}
            style={{
              appearance: 'none',
              backgroundColor: '#000000',
              borderRadius: '2vw',
              borderStyle: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontFamily:
                'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
              fontSize: '1.2vw',
              lineHeight: 'normal',
              minHeight: '3vw',
              minWidth: '0',
              outline: 'none',
              padding: '1vw 1.5vw',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
              userSelect: 'none',
              touchAction: 'manipulation',
              width: '16vw',
              willChange: 'transform'
            }}
          >
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
      </center>
    </div>
  );
};

export default Card;
