import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filter from 'bad-words-es';


const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isComputerTurn, setIsComputerTurn] = useState(false);
    const wordFilter = new Filter();
    const baneadas = ['', 'peluche', 'facha','zorra', 'cabrón', 'puta', 'gilipollas', 'cornudo', 'maricón','bollera','vago','boca de tarro'];
    wordFilter.addWords(...baneadas);

    const [facts, setFacts] = useState([
        'El nombre original de los aztecas era "mexicas"',

    'Los aztecas fundaron su capital, Tenochtitlán, en 1325 en un islote del Lago Texcoco',

        'El Lago Texcoco, donde se encontraba Tenochtitlán, era más grande que muchas ciudades europeas de la época, incluyendo Londres.',

        'Los aztecas construyeron un elaborado sistema de diques, canales y puentes para mantener Tenochtitlán en su lugar y evitar inundaciones.',

        'Tenochtitlán estaba conectada a tierra firme por medio de tres grandes calzadas, o caminos elevados.',

        'La población de Tenochtitlán era estimada en alrededor de 200,000 habitantes, lo que la convertía en una de las ciudades más grandes del mundo en ese entonces.',

        'Los aztecas tenían una estructura social jerárquica con el emperador en la cima, seguido de nobles, sacerdotes, guerreros y agricultores.',

        'La agricultura era una parte fundamental de la economía azteca. Cultivaban maíz, frijoles, calabazas, chiles y algodón, entre otros cultivos',

        'Los aztecas domesticaron animales como perros, pavos y abejas para uso alimenticio y otros propósitos.',

        'Desarrollaron técnicas de cultivo innovadoras, como las chinampas, que eran islas flotantes construidas en el lago para cultivar alimentos',

        'El maíz era considerado sagrado por los aztecas y desempeñaba un papel central en su cultura y religión.',

        'Los aztecas tenían un sistema de escritura pictográfica y mantenían registros históricos en códices, que eran libros hechos de papel amate.',

        'Uno de los códices aztecas más famosos que ha sobrevivido es el Códice Florentino, que contiene información detallada sobre la vida, costumbres y religión azteca.',

        'Los aztecas tenían dos calendarios: el xiuhpohualli, un calendario solar de 365 días, y el tonalpohualli, un calendario sagrado de 260 días.',

        'La combinación de los dos calendarios aztecas formaba un ciclo de 52 años llamado "xiuhmolpilli".',

        'Los aztecas creían que el universo estaba en constante equilibrio y que los sacrificios humanos eran necesarios para mantener dicho equilibrio.',

        'Los sacrificios humanos aztecas tenían propósitos religiosos y se realizaban en templos especiales llamados "teocallis".',

        'Se estima que los aztecas realizaron sacrificios humanos en una escala masiva. Durante la dedicación del Templo Mayor en Tenochtitlán en 1487, se calcula que se sacrificaron entre 10,000 y 80,000 personas en cuatro días. El juego de pelota mesoamericano, llamado "tlachtli" en náhuatl, era un deporte importante para los aztecas. Se jugaba con una pelota de caucho y tenía un significado religioso y simbólico',

        'Los aztecas tenían un sistema de educación formal para los hijos de la nobleza y los sacerdotes. Aprendían historia, religión, matemáticas, música y astronomía.',

        'El idioma principal de los aztecas era el náhuatl, que sigue siendo hablado por algunas comunidades indígenas en México en la actualidad.',

        'Los aztecas tenían una amplia variedad de dioses y diosas en su panteón. Algunos de los más importantes incluían a Huitzilopochtli (dios del sol y la guerra), Tlaloc (dios de la lluvia) y Quetzalcóatl (dios del viento y la sabiduría).',

        'La religión azteca incluía festivales y ceremonias elaboradas. Uno de los más conocidos era el festival de "Huey Tozoztli", que celebraba la renovación del mundo y la purificación de la comunidad.',

        'La arquitectura azteca se caracterizaba por sus grandes templos, palacios y pirámides. El Templo Mayor en Tenochtitlán era una de las estructuras más imponentes, con dos templos superpuestos dedicados a Huitzilopochtli y Tlaloc.',

        'Los aztecas desarrollaron un sistema de medicina herbal y tenían conocimientos de cirugía. Utilizaban plantas medicinales y técnicas como la acupuntura para tratar enfermedades.',

        'La sociedad azteca estaba organizada en clanes matrilineales, lo que significa que la descendencia se seguía a través de la línea materna.',

        'Los aztecas eran expertos en la metalurgia y trabajaban con metales como oro, plata y cobre para crear joyería y objetos ornamentales.',

        'El comercio era una parte importante de la economía azteca. Utilizaban un sistema de trueque y también tenían monedas hechas de cacao.',

        'Los aztecas tenían una dieta variada que incluía alimentos como maíz, frijoles, chiles, pescado, aves, venado y insectos como los chapulines (saltamontes).',

        'Los aztecas utilizaban una amplia gama de hierbas y especias en su cocina, como el chocolate, la vainilla, el achiote y el epazote.',

        'La música y la danza eran parte integral de la vida azteca. Utilizaban una variedad de instrumentos musicales, como tambores, flautas, cascabeles y sonajas.',

        'Los aztecas tenían un sistema de correos eficiente que utilizaba corredores conocidos como "tlayehuanes" para transmitir mensajes importantes a largas distancias.',

        'La cerámica azteca era muy elaborada y decorada con diseños geométricos, animales y deidades.'

    ]);
    const [userFact, setUserFact] = useState('');

    useEffect(() => {
        if (player === 'O' && !winner) {
            setIsComputerTurn(true);
            setTimeout(() => {
                makeComputerMove();
                setIsComputerTurn(false);
            }, 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player]);

    useEffect(() => {
        checkWinner();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board]);

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                handleGiveFact(); // Llamar a la función handleGiveFact cuando hay un ganador
                return;
            }
        }

        if (board.every((cell) => cell !== '')) {
            setWinner('Empate');
        }
    };
    const handleClick = (index) => {
        if (board[index] === '' && !winner && player === 'X') {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            checkWinner(); // Verificar si 'X' ha ganado después de hacer el movimiento
            setPlayer(winner ? player : 'O'); // Cambiar al turno de 'O' solo si no hay ganador
        }
    };

    const makeComputerMove = () => {
        const availableMoves = board.reduce((acc, cell, index) => {
            if (cell === '') {
                acc.push(index);
            }
            return acc;
        }, []);

        // Verificar si la máquina puede ganar en el siguiente movimiento
        for (let i = 0; i < availableMoves.length; i++) {
            const move = availableMoves[i];
            const newBoard = [...board];
            newBoard[move] = player;
            if (checkWinningMove(newBoard, player)) {
                setBoard(newBoard);
                setPlayer('X');
                return;
            }
        }

        // Verificar si el jugador puede ganar en el siguiente movimiento y bloquear su jugada
        for (let i = 0; i < availableMoves.length; i++) {
            const move = availableMoves[i];
            const newBoard = [...board];
            newBoard[move] = 'X';
            if (checkWinningMove(newBoard, 'X')) {
                newBoard[move] = player;
                setBoard(newBoard);
                setPlayer('X');
                return;
            }
        }

        // Si no hay jugadas que eviten la victoria del jugador, hacer un movimiento aleatorio
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        const computerMove = availableMoves[randomIndex];

        const newBoard = [...board];
        newBoard[computerMove] = player;
        setBoard(newBoard);
        setPlayer('X');
    };

    const checkWinningMove = (board, player) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] === player && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }

        return false;
    };

    const handleReset = () => {
        setBoard(Array(9).fill(''));
        setPlayer('X');
        setWinner(null);
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const handleGiveFact = () => {
      if (winner === 'X') {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setUserFact(randomFact);
      } else if (winner === 'O') {
        const userEnteredFact = prompt('Para seguir esparciendo conocimiento, por favor cuéntame un dato curioso sobre los aztecas.');
    
        if (userEnteredFact) {
          const linkRegex = /(http|https):\/\/[^\s]+/gi; // Expresión regular para buscar enlaces
          const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Expresión regular para buscar etiquetas de script
    
          if (linkRegex.test(userEnteredFact) || scriptRegex.test(userEnteredFact)) {
            alert('No se permiten enlaces o scripts en el dato curioso ingresado.');
          } else {
            if (wordFilter.isProfane(userEnteredFact)) {
              alert('Se ha detectado una violación de los términos y condiciones. Por favor, ingresa un dato apropiado.');
            } else {
              setFacts([...facts, userEnteredFact]);
              setUserFact(userEnteredFact);
            }
          }
        }
      }
    };
    
    
   
    const StyledTicTacToe = styled.div`
    text-align: center;
    margin-top: 50px;
  `;
  
  const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
  `;
  
  const Square = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 36px;
  `;
  
  const Thinking = styled.div`
    margin-top: 10px;
    font-weight: bold;
  `;
  
  const Result = styled.div`
    margin-top: 10px;
    font-weight: bold;
  `;
  
  const Draw = styled.div`
    margin-top: 10px;
    font-weight: bold;
  `;
  
  const Winner = styled.div`
    margin-top: 10px;
    font-weight: bold;
  `;
  
  const GiveFactButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 16px;
  `;
  
  const DrawMessage = styled.div`
    margin-top: 10px;
    font-weight: bold;
  `;
  
  const FactWrapper = styled.div`
    margin-top: 10px;
    border: 1px solid #000;
    padding: 10px;
  `;
  
  const Fact = styled.div`
    margin-top: 10px;
  `;
  
  const ResetButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 16px;
  `;
    return (
        <StyledTicTacToe>
        <div className="tic-tac-toe">
          <Board>
            {board.map((_, index) => renderSquare(index))}
          </Board>
          {isComputerTurn && <Thinking>Azteca pensando...</Thinking>}
          {winner && (
            <Result>
              {winner === 'Empate' ? (
                <Draw>{winner}</Draw>
              ) : (
                <>
                  <Winner>¡{winner} ha ganado el juego!</Winner>
                  {winner === 'O' && (
                    <GiveFactButton onClick={handleGiveFact}>
                      Dato curioso
                    </GiveFactButton>
                  )}
                </>
              )}
            </Result>
          )}
          {!winner && board.every((cell) => cell !== '') && (
            <DrawMessage>¡Empate!</DrawMessage>
          )}
        </div>
        {userFact && (
          <Fact>
            <div>Tu dato curioso:</div>
            <div>{userFact}</div>
          </Fact>
        )}
        <ResetButton onClick={handleReset}>Reiniciar</ResetButton>
      </StyledTicTacToe>
    );
};

export default TicTacToe;
