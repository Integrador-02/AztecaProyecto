

import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';
import axios from "axios";
import Cookies from "js-cookie";
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPauseCircle, faForward, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Leyenda1=()=>{
  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'leyenda 1';
      const newCommentObject = {
        id: 1,
        text: 1,
        username: email,
        replyTo: 1,
        likes: 0,
        timestamp: 1,
      };


      const coment = newCommentObject.text
      const correo = newCommentObject.username
      try {
        const response = await axios.post("http://localhost:4000/api/progresorReligion", { correo, pagina });
        // Manejo de la respuesta exitosa
        //alert("Registrado correctamente");
      } catch (error) {
        // Manejo de errores en caso de que falle la solicitud al backend
        console.log(error);
        //alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      console.log(email)
      guardarProgresoJeraquia();
    }
  }, [email]);

  const handleSubmit = async () => {

    //window.location.href = "/categories/jerarquia/comentarioJeraquia";

  };

  useEffect(() => {
    const handlerRevision = async () => {
      try {
        console.log('sd', email);
        const url = `http://localhost:4000/api/recuperarprogresoReligion?correo=${email}`;
        const respuesta = await axios.get(url);
        setSelectedOptions2(respuesta.data.valor); // Utiliza respuesta.data.valor en lugar de respuesta.valor
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      handlerRevision();
    }
  }, [email]);




  const TextWithBoldFirstLetter = ({ title, text }) => {
    const firstLetter = text.charAt(0);
    const restOfText = text.slice(1);

    return (
      <div>
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
          <span className="text-green-600">{title}</span>
        </h1>

        <p
          style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <span >{firstLetter}</span>
          {restOfText}
        </p>
      </div>
    );
  };

  const Carta = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 1; // Número de imágenes por página
    const text = [
      {
        title: 'Leyenda Volcán Popocatépetl',
        texto1: " Cuenta una leyenda el origen del volcán Popocatépetl y del volcán con perfil de mujer, conocida como la (Mujer dormida).Hace mucho, mucho tiempo, gobernó entre los aztecas un hombre bueno y justo, al que todos querían muchísimo."
      },
      {
        title: 'Leyenda Volcán Popocatépetl',
        texto1: "emperador tuvo una hija, hermosa e inteligente. Según iba creciendo, sus dones aumentaban, hasta tal punto que su padre temía no encontrar una pareja lo suficientemente valiosa para ella."
      },



      {

        title: 'Leyenda Volcán Popocatépetl',
        texto1: "Sin embargo, su hija, de nombre Izta, ya se había enamorado de un valiente guerrero, muy popular entre todos por sus victorias. Pero por supuesto, ambos jóvenes llevaban su amor en secreto."

      },
      {

        title: 'Leyenda Volcán Popocatépetl',
        texto1: "En una ocasión, el imperio se vio amenazado por un enemigo muy fuerte. El emperador estaba tan preocupado, que llamó a sus tres mejores guerreros. Entre ellos estaba Popocatépetl, el guerrero del que su hija se había enamorado en secreto."

      },
      {

        title: 'Leyenda Volcán Popocatépetl',
        texto1: "En una ocasión, el imperio se vio amenazado por un enemigo muy fuerte. El emperador estaba tan preocupado, que llamó a sus tres mejores guerreros. Entre ellos estaba Popocatépetl, el guerrero del que su hija se había enamorado en secreto."

      },



    ];

    // Calcula el número total de páginas
    const totalPages = Math.ceil(text.length / itemsPerPage);

    // Calcula los índices de inicio y fin según la página actual y los elementos por página
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Obtiene los dioses para la página actual
    const paginatedDioses = text.slice(start, end);

    // Función para cambiar de página
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    return (
      <div className="container" style={{ width: '50rem', height: '25rem', margin: '5%', marginTop: '-9.5%', width: '40vw' }}>
        {/* Mostrar las cartas paginadas */}
        {paginatedDioses.map((dios, index) => (
          <li key={index}>
            <TextWithBoldFirstLetter title={dios.title} text={dios.texto1} />
          </li>
        ))}

        {/* Agregar iconos de paginación */}
        <div className="pagination" style={{ justifyContent: 'left' }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={page === index + 1 ? 'active' : ''}
              style={{
                backgroundColor: '#40E0D0',
                border: '2px solid #40E0D0',
                borderRadius: '50%',


                cursor: 'pointer',
              }}
            >
              {index + 1}
            </button>

          ))}

        </div>
      </div>
    );
  };

  

    return (
        <Base1>
         <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>


<div className="grid grid-cols-2 gap-1">
  <Carta />

  <div style={{padding:'1%'}}>
  <Audid/>
  

  </div>
 
  

</div>
</section>
         
        </Base1>
    )

}

export default Leyenda1;

const Audid = () => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Leyenda Volcán Popocatépetl',
    songArtist: 'Equipo Azteca',
    songSrc: '../../.././Assets/songs/Leyenda1.mp3',
    songAvatar: 'https://www.inside-mexico.com/wp-content/uploads/2013/10/LamujerdormidabyWarnerC.jpg'
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('03 : 20');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0);
  const currentAudio = useRef();

  useEffect(() => {
    currentAudio.current.addEventListener('timeupdate', handleAudioUpdate);
    return () => {
      currentAudio.current.removeEventListener('timeupdate', handleAudioUpdate);
    };
  }, []);

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
  };

  let avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songName: 'Leyenda Volcán Popocatépetl',
      songArtist: 'Equipo Azteca',
      songSrc: '../../../Assets/songs/Leyenda1.mp3',
      songAvatar: 'https://www.inside-mexico.com/wp-content/uploads/2013/10/LamujerdormidabyWarnerC.jpg'
    },
    {
      songName: 'Leyenda Volcán Popocatépetl',
      songArtist: 'Equipo Azteca',
      songSrc: '../../.././Assets/songs/Leyenda1.mp3',
      songAvatar: 'https://www.inside-mexico.com/wp-content/uploads/2013/10/LamujerdormidabyWarnerC.jpg'}
  ];
  const vidArray = [];
  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleChangeBackground = () => {
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  };

  const [volume, setVolume] = useState(1.0);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    currentAudio.current.volume = newVolume;
  };

  return (
    <>
      <div className="card2" >
        <audio src="../../.././Assets/songs/Leyenda1.mp3" ref={currentAudio} onEnded={handleNextSong}></audio>
        <div className="music-Container">
          <p className="musicPlayer">Audio Azteca Player</p>
          <p className="music-Head-Name">{currentMusicDetails.songName}</p>
          <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
          <img
            src={currentMusicDetails.songAvatar}
            className={avatarClass[avatarClassIndex]}
            onClick={handleAvatar}
            alt="song Avatar"
            id="songAvatar"
          />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <div className="grid grid-cols-3 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <FontAwesomeIcon icon={faBackward} className="musicControler" onClick={handlePrevSong} />
            <FontAwesomeIcon
              icon={isAudioPlaying ? faPauseCircle : faCirclePlay}
              className="musicControler"
              onClick={handleAudioPlay}
            />
            <FontAwesomeIcon icon={faForward} className="musicControler" onClick={handleNextSong} />
          </div>
          <input type="range" name="musicProgressBar" className="musicProgressBar" value={audioProgress} onChange={handleMusicProgressBar} />

          <div className="grid" style={{ gridAutoFlow: 'column', gap: '1rem' }}>
            {/* Resto de los iconos de control... */}
            <FontAwesomeIcon icon={faVolumeDown} className="musicControler" onClick={handleChangeBackground} />
          
          <input type="range" name="musicProgressBar" className="musicProgressBar" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
        </div></div>
      </div>
    </>
  );
};
