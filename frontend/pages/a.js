import React, { useState } from 'react';

const ImageTitlePair = ({ image, titles, onTitleSelect }) => {
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    onTitleSelect(title);
  };

  return (
    <div className="image-title-pair">
      <img src={image} alt="Imagen" style={{ width: '300px', height: '200px' }} />
      <div className="title-options">
        {titles.map((title, index) => (
          <button
            key={index}
            onClick={() => handleTitleSelect(title)}
            className={`submit-button ${selectedTitle === title ? 'selected' : ''}`}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

const Game = () => {
  const [pairs, setPairs] = useState([]);

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  const handleTitleSelect = (selectedTitle) => {
    const currentPair = pairs[currentPairIndex];

    if (currentPair.title === selectedTitle) {
      setScore(score + 1);
    }

    setCurrentPairIndex(currentPairIndex + 1);
  };

  const handleDifficultySelect = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setPairs(getPairsForDifficulty(selectedDifficulty));
    setCurrentPairIndex(0);
    setScore(0);
  };

  const resetGame = () => {
    setCurrentPairIndex(0);
    setScore(0);
    setDifficulty('');
    setPairs([]);
  };

  const getPairsForDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'Fácil':
        return [
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/250px-Quetzalcoatl.svg.png', title: 'Quetzalcóatl' },
          { image: 'https://mxcity.mx/wp-content/uploads/2017/06/huitzilopochtli-1.jpg', title: 'Huitzilopochtli' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png', title: 'Tlaloc' },
          { image: 'https://www.mitologia.info/wp-content/uploads/2017/06/1-6.jpg.webp', title: 'Xochiquetzal' },
          { image: 'https://mitosyleyendascr.com/wp-content/uploads/2016/08/tezcatlipoca01.jpg', title: 'Tezcatlipoca' },
        ];
      case 'Medio':
        return [
         
          { image: 'https://img.freepik.com/vector-premium/coatlicue-madre-azteca_60223-210.jpg', title: 'Coatlicue' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Tonatiuh_6_b.jpg', title: 'Tonatiuh' },
          { image: 'https://enciclopediagro.mx/wp-content/uploads/egro/enciclopedia/tomo6/Foto-335.png', title: 'Xipe Totec' },
          { image: 'https://static.wixstatic.com/media/aa02eb_35ccd1f3638f4b6da6afd928005a2719~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa02eb_35ccd1f3638f4b6da6afd928005a2719~mv2.jpg', title: 'Mictlantecuhtli' },
          { image: 'https://media.admagazine.com/photos/618a63484b3f9152d1b42130/master/w_1600%2Cc_limit/79010.jpg', title: 'Quetzalcóatl' },
          { image: 'https://dam.muyinteresante.com.mx/wp-content/uploads/2019/04/mitos-y-leyendas-huitzilopochtli-sed-de-guerra.jpg', title: 'Huitzilopochtli' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png', title: 'Tlaloc' },
          { image: 'https://www.mitologia.info/wp-content/uploads/2017/06/1-6.jpg.webp', title: 'Xochiquetzal' },
          { image: 'https://cdn1.matadornetwork.com/blogs/2/2019/12/shutterstock_1211759326.jpg', title: 'Tezcatlipoca' },
          { image: 'https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg', title: 'Chalchiuhtlicue' },
        ];
      case 'Difícil':
        return [
         
            { image: 'https://enciclopediagro.mx/wp-content/uploads/egro/enciclopedia/tomo6/Foto-335.png', title: 'Xipe Totec' },
            { image: 'https://tlapalliollin.com/wp-content/uploads/2022/09/Mictlantecuhtli.jpg', title: 'Mictlantecuhtli' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chicomecoatl_2.jpg/200px-Chicomecoatl_2.jpg', title: 'Chicomecóatl' },
          { image: 'https://mxcity.mx/wp-content/uploads/2020/02/Xiuhtecuhtli-esp%C3%ADritu-del-fuego-7.jpg', title: 'Xiuhtecuhtli' },
          { image: ' https://static.wixstatic.com/media/a9d8c0_4906283b93304c9e8ceda39be7ee750d.png/v1/fit/w_500,h_500,q_90/file.png ', title: 'Cihuacóatl' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Itzpapalotl_1.jpg', title: 'Itzpapalotl' },
          { image: 'https://www.ecured.cu/images/f/f2/Centeotl.jpg', title: 'Centéotl' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Quetzalcoatl_magliabechiano.jpg/325px-Quetzalcoatl_magliabechiano.jpg', title: 'Quetzalcóatl' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Huitzilopochtli_telleriano.jpg/258px-Huitzilopochtli_telleriano.jpg', title: 'Huitzilopochtli' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png', title: 'Tlaloc' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/220px-Xochiquetzal.jpg', title: 'Xochiquetzal' },
          { image: 'https://cdn1.matadornetwork.com/blogs/2/2019/12/shutterstock_1211759326.jpg', title: 'Tezcatlipoca' },
          { image: 'https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg', title: 'Chalchiuhtlicue' },
          { image: 'https://cdn2.excelsior.com.mx/media/pictures/2020/08/16/2421996.jpg', title: 'Coatlicue' },
          { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tonatiuh.jpg/220px-Tonatiuh.jpg', title: 'Tonatiuh' },
        ];
      default:
        return [];
    }
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const renderGameContent = () => {
    if (!difficulty) {
      return (
        <div>
          <h2>Selecciona la dificultad:</h2>
          <button className="submit-button" onClick={() => handleDifficultySelect('Fácil')}>Fácil</button>
          <button className="submit-button" onClick={() => handleDifficultySelect('Medio')}>Medio</button>
          <button className="submit-button" onClick={() => handleDifficultySelect('Difícil')}>Difícil</button>
        </div>
      );
    }

    if (currentPairIndex >= pairs.length) {
      return (
        <div>
          <h2>Juego terminado</h2>
          <p>Puntuación: {score}</p>
          <button className="submit-button" onClick={resetGame}>Jugar de nuevo</button>
        </div>
      );
    }

    const currentPair = pairs[currentPairIndex];
    const titles = shuffleArray(pairs.map((pair) => pair.title)).slice(0, 3);

    return (
      <div>
        <h2>Selecciona el título correcto para esta imagen:</h2>
        <ImageTitlePair
          image={currentPair.image}
          titles={titles}
          onTitleSelect={handleTitleSelect}
        />
      </div>
    );
  };

  return (
    <div className="game">
      <h1>Juego de Relacionar Imagen con Título</h1>
      {renderGameContent()}
    </div>
  );
};

export default Game;
