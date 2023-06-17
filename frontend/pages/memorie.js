import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';


const Card = ({ name, number, frontFace, flipCard, unflippedCards, disabledCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards])

  const handleClick = e => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div className='card' >
      <ReactCardFlip isFlipped={isFlipped} >
        <img className='card-image' src={'images/3855818.png'} alt='back-face' onClick={hasEvent ? handleClick : null} />
        <img className='card-image' src={frontFace} alt='front-face' onClick={hasEvent ? handleClick : null} />
      </ReactCardFlip>
    </div>
  )
}


const images = [
    {
      src: 'images/1.jpg',
      player: 'Ansu Fati'
    },
    {
      src:  'images/1.jpg',
      player: 'Ansu Fati'
    },
    {
      src:  'images/1.jpg',
      player: 'Alphonso Davies'
    },
    {
      src:  'images/religion.jpg',
      player: 'Alphonso Davies'
    },
    {
      src:  'images/religion.jpg',
      player: 'Christian Pulisic'
    },
    {
      src:  'images/religion.jpg',
      player: 'Christian Pulisic'
    },
    {
      src:  'image/religion.jpg',
      player: 'Erling Haaland'
    },
    {
      src:  'image/religion.jpg',
      player: 'Erling Haaland'
    },
    {
      src:  'image/religion.jpg',
      player: 'Jordan Sancho'
    },
    {
      src:  'image/religion.jpg',
      player: 'Jordan Sancho'
    },
    {
      src:  'image/religion.jpg',
      player: 'Kylian Mbappe'
    },
    {
      src:  'image/religion.jpg',
      player: 'Kylian Mbappe'
    },
  
  ];


function App4() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

 
  
 
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }

  return (
    <div className='app'>
      <div className='cards-container' >
        {
          cards.map((card, index) => (
            <Card
              name={card.player}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App4;
