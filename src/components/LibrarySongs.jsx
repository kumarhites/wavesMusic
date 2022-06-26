// import {playAudio} from '../util'


const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
  // console.log("id", id);
  // console.log("song id", song.id);
    const songSelectHandler = async () => {
        // const selectedSong = (songs);
        await setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((song) => {
          if(song.id === id){
              return{
                ...song,
                active: true,
              }
            }
            else{
              return {
                ...song,
                active: false,
              }
          }
        })
        setSongs(newSongs);
       //check if the song is already playing
       if(isPlaying) audioRef.current.play();
    };
    return (
      <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
        <img src={song.cover} alt="song cover" />
        <div className="song-desc">
            <h3>{song.track}</h3>
            <h4>{song.artistName}</h4>
        </div>
      </div>
    )
  }
  export default LibrarySong;
  