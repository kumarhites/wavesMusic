import React, {useState, useRef, useEffect} from 'react';
//components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'
import {playAudio} from '../src/util'
//styles
import './styles/app.scss'
// Import utils
// import data from './data';
//api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3eb4c1a78msh2d89f060ea21644p174ee3jsna5ac473991db',
		'X-RapidAPI-Host': 'ncsmusic.p.rapidapi.com'
	}
}

const API_URL = 'https://ncsmusic.p.rapidapi.com/';


function App() {
  // Ref
  const audioRef = useRef(null);
  // state
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatioPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  
  //audio time update handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage for slider animation
    const roundedCurrent = Math.round(current);
    const roundedDuratiom = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuratiom)*100);
    setSongInfo({ ...songInfo, currentTime: current, duration: duration, animationPercentage
    });
  };
  const songEndedHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    await playAudio(isPlaying, audioRef);
  }
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(API_URL, options);
      const songsData = await response.json();
      setSongs(songsData);
      setCurrentSong(songsData[0])
    }
    fetchSongs();
  },[])


  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus} />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.url}
        onEnded={songEndedHandler}
        preload="metadata"
        ></audio>
    </div>
  );
}

export default App; 
