import React, {useState, useRef} from 'react';
//components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'
import {playAudio} from '../src/util'
//styles
import './styles/app.scss'
// Import utils
import data from './data';


function App() {
  // Ref
  const audioRef = useRef(null);
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
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
    let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    await playAudio(isPlaying, audioRef);
  }
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
        src={currentSong.audio}
        onEnded={songEndedHandler}
        preload="metadata"
        ></audio>
    </div>
  );
}

export default App; 
