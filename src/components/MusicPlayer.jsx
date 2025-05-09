import { useEffect, useRef } from 'react';

const MusicPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null);
  
  // Background music URL (a soft, gentle piano music)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"; // Placeholder royalty-free music
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0.3; // Set volume to 30%
        audioRef.current.play().catch(error => {
          // Autoplay was prevented, we'll handle it silently
          console.log("Autoplay prevented:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying]);
  
  return (
    <audio 
      ref={audioRef}
      src={musicUrl}
      loop
      style={{ display: 'none' }}
    />
  );
};

export default MusicPlayer;