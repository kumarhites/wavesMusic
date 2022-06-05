import React from "react";

// components
import LibrarySongs from "./LibrarySongs"

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library':''}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song) => (<LibrarySongs song={song} setCurrentSong={setCurrentSong} songs={songs} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>))}
        </div>
    </div>
  )
}

export default Library;
