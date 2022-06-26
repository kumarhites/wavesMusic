export const playAudio = (isPlaying, audioRef) => {
   //check if song is already playing
   if(isPlaying){
    const playPromise = audioRef.current.play();
    if(playPromise !== undefined){
      playPromise.then((audio) => {
        audio.current.play();
      });
    }
  }
}

// export default util;
