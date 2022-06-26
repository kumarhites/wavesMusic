
const Song = ({currentSong}) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="song cover" />
      <h2>{currentSong.track}</h2>
      <h3>{currentSong.artistName}</h3>
    </div>
  )
}
export default Song;
