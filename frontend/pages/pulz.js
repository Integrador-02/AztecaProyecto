import React, { useState, useEffect } from "react";
import { Motion, spring } from "react-motion";
import Swal from 'sweetalert2';
import { Base1 } from "@layouts/Baseof";


const styles = {
  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    minHeight: "100vh",
    background: "#111",
    color: "white"
  },
  code: {
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace`
  },
  app: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  },
  h1: {
    margin: 0
  },
  board: {
    position: "relative",
    padding: 0
  },
  tile: {
    position: "absolute",
    listStyle: "none",
    background: "#ec6f66",
    display: "grid",
    placeItems: "center",
    fontSize: "20px"
  },
  button: {
    display: "block"
  }
};
 const images = "/images/abc.jpg"
function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [randomImageUrl, setRandomImageUrl] = useState("");

 /**
  * /images/aztecas3.jpg
  * /images/azteca1.jpg"
  * "/images/imperioazteca.jpg")
  */
 const imageList = [
    {
      url: "/images/religion-cultura-azteca.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Religion]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },
    {
      url: "/images/Diosdelamuerte.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Religion]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },
    {
      url: "/images/Coatlicue.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Religion]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },
    {
      url: "/images/XipeTótec.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Religion]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },
    {
      url: "/images/pulze1.gif",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Religion]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },
    {
      url: "/images/ceramica2.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [Arte]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    },



    {
      url: "/images/azteca1.jpg",
      descripcion: "Descripción 2"
    },
    {
      url: "/images/imperioazteca.jpg",
      descripcion: "Rompecaza es un juego de rompecabezas deslizante en el que pondrás a prueba tus habilidades de resolución de problemas y tu capacidad de observación. El objetivo es reorganizar las piezas del rompecabezas para formar la imagen completa.En esta ocasión, te ha tocado un tema al azar, el cual es [tema aleatorio]. Te encontrarás con una imagen relacionada a este tema y tendrás que deslizar las piezas del rompecabezas para armarla correctamente.Si deseas obtener información detallada sobre el tema en cuestión, puedes encontrarla en la página correspondiente. ¡Explora y disfruta mientras te diviertes resolviendo el rompecabezas deslizante!"
    }
  ];
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setRandomImageUrl(imageList[randomIndex].url)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
      
    }
    Swal.fire({
        title: "¡Bienvenido al juego Rompecaza!",
        text: imageList[randomIndex].descripcion,
        icon: "info",
        confirmButtonText: "Aceptar"
      });
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.h1}>Resuelve el rompecabeza🧠</h1>
      <Board imgUrl={ randomImageUrl } />
      <input value={imgUrl} onChange={handleImageChange} />
    </div>
  );
}

function Board({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE
  };
  const hasWon = isSolved(tiles);

  return (
    <>

      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Resuelve el rompecabeza🧠 🎉</div>}
      {!isStarted ? (
        <button style={styles.button} onClick={() => handleStartClick()}>
          Jugar
        </button>
      ) : (
        <button style={styles.button} onClick={() => handleShuffleClick()}>
          Revolver tablero
        </button>
      )}
    </>
    
  );
}

const TILE_COUNT = 25;
const GRID_SIZE = 5;
const BOARD_SIZE = 500;

// Get the linear index from a row/col pair.
function getIndex(row, col) {
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// Get the row/col pair from a linear index.
function getMatrixPosition(index) {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE
  };
}

function getVisualPosition(row, col, width, height) {
  return {
    x: col * width,
    y: row * height
  };
}

function shuffle(tiles) {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1
  ];
  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
    ? shuffledTiles
    : shuffle(shuffledTiles);
}

function canSwap(srcIndex, destIndex) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

function swap(tiles, src, dest) {
  const tilesResult = [...tiles];
  [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
  return tilesResult;
}

function isSolvable(tiles) {
  let product = 1;
  for (let i = 1, l = TILE_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

function isSolved(tiles) {
  for (let i = 0, l = tiles.length; i < l; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }
  return true;
}

function updateURLParameter(url, param, paramVal) {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split("=")[0] !== param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}

function Tile({ index, imgUrl, tile, width, height, handleTileClick }) {
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const style = {
    ...styles.tile,
    width,
    height,
    transform: `translate(${visualPos.x}px, ${visualPos.y}px)`
  };

  const handleClick = () => {
    handleTileClick(index);
  };

  return (
    
    <Motion style={style}>
      {({ width, height, x, y }) => (
        <li style={style} onClick={handleClick}>
          <div
            style={{
              width,
              height,
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: `${TILE_COUNT * 20}%`,
              backgroundPosition: `${((tile % GRID_SIZE) / (GRID_SIZE - 1)) *
                100}% ${Math.floor(tile / GRID_SIZE) / (GRID_SIZE - 1) * 100}%`,
              transform: `translate(${x}px, ${y}px)`,
              opacity: tile === TILE_COUNT - 1 ? 0 : 1
            }}
          >
            {tile + 1}
          </div>
        </li>
      )}
    </Motion>
   
  );
}

export default App;
