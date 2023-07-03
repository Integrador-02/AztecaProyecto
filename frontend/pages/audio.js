import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPauseCircle, faForward, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Audio = () => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Leyenda azteca del maíz',
    songArtist: 'NEFFEX',
    songSrc: './Assets/songs/leyendaAzteca1.mp3',
    songAvatar: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/07/maiz-1-768x505.jpg'
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
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
      songName: 'Leyenda azteca del maíz',
      songArtist: 'NEFFEX',
      songSrc: './Assets/songs/leyendaAzteca1.mp3',
      songAvatar: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/07/maiz-1-768x505.jpg'
    },
    {
      songName: 'El Mito del Dios Maíz',
      songArtist: 'Aurora Aksnes',
      songSrc: './Assets/songs/El Mito del Dios Maíz.mp3',
      songAvatar: './Assets/Images/image4.jpg'
    }
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
        <audio src="./Assets/songs/El Mito del Dios Maíz.mp3" ref={currentAudio} onEnded={handleNextSong}></audio>
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

export default Audio;
