import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

// Quotes/poems data
// const quotesData = [
//   {
//     id: 1,
//     text: "In every smile of yours, I find a piece of heaven. Happy Birthday to the girl who brightens my every day.",
//     year: 2023,
//     occasion: "Birthday Message"
//   },
//   {
//     id: 2,
//     text: "From the first hello in class to late night calls, every moment with you has been a treasured memory that I'll hold forever.",
//     year: 2020,
//     occasion: "College Days"
//   },
//   {
//     id: 3,
//     text: "Distance is just a test to see how far love can travel. During our college years apart, I realized mine would cross any distance to reach you.",
//     year: 2019,
//     occasion: "Long Distance"
//   },
//   {
//     id: 4,
//     text: "The way your eyes light up when you're excited, the sound of your laughter on a quiet evening - these are the colors that paint my world beautiful.",
//     year: 2022,
//     occasion: "Personal Reflection"
//   },
//   {
//     id: 5,
//     text: "Some connections don't need constant conversation, just genuine understanding. Thankful that we share such a bond, one that grows stronger with each passing day.",
//     year: 2024,
//     occasion: "Friendship Day"
//   }
// ];

const quotesData = [
  {
    id: 1,
    text: "Like a sunrise brings light to the world, your morning messages brought warmth and happiness to my day. Every 'Good Morning' from you felt like a fresh start with glowing flowers and soft sunshine.",
    year: '',
    occasion: "Morning Memories"
  },
  {
    id: 2,
    text: "When the sun says bye bye and the moon says hi hi, your good night messages made the dark feel magical. You were the peace in my night and the calm in my dreams.",
    year: '',
    occasion: "Night Vibes"
  },
  {
    id: 3,
    text: "The day you wore that black dress — you looked like the moon glowing in a starry night sky. That moment, that beauty, it’s something I’ll never forget. You were the most beautiful girl in my life.",
    year: '',
    occasion: "Unforgettable Moment"
  }
];


// Songs data with placeholder links
const songsData = [
  {
    id: 1,
    title: "Our First Dance",
    artist: "Favorite Artist",
    cover: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder royalty-free music
    year: 2020,
    memory: "The song that played on our first dinner together"
  },
  {
    id: 2,
    title: "Late Night Drive",
    artist: "Road Trip Classics",
    cover: "https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    year: 2022,
    memory: "Our roadtrip playlist favorite"
  },
  {
    id: 3,
    title: "College Memories",
    artist: "Study Sessions",
    cover: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    year: 2021,
    memory: "The song we studied to during finals week"
  }
];

const Quotes = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    document.title = "Quotes & Songs | Happy Birthday Naina!";
  }, []);

  // Handle playing a song
  const handlePlay = (song) => {
    if (currentSong && currentSong.id === song.id) {
      // Toggle play/pause if it's the same song
      setIsPlaying(!isPlaying);
    } else {
      // Play new song
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setAudioVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setAudioVolume(0.7); // Restore to previous volume
    } else {
      setIsMuted(true);
      setAudioVolume(0); // Set volume to 0
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Quotes Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Words From The Heart
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Messages and thoughts I've shared with you over the years, each holding a special memory.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {quotesData.map((quote, index) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <div className="relative bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
                  <div className="absolute -top-4 -left-4 text-4xl text-primary-300">❝</div>
                  <div className="absolute -bottom-4 -right-4 text-4xl text-primary-300">❞</div>
                  
                  <p className="text-lg italic mb-4">{quote.text}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{quote.occasion}</span>
                    <span>{quote.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Songs Section */}
        <div>
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Soundtrack
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Songs that bring back memories of our moments together. Click to play and relive those special times.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songsData.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={song.cover} 
                    alt={song.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => handlePlay(song)}
                      className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center text-primary-600 hover:bg-white transition-colors"
                    >
                      {isPlaying && currentSong && currentSong.id === song.id 
                        ? <FaPause size={24} /> 
                        : <FaPlay size={24} />
                      }
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{song.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{song.artist} • {song.year}</p>
                  <p className="text-gray-500 text-sm italic">"{song.memory}"</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Audio Player */}
          {currentSong && (
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 p-4 border-t border-gray-200"
            >
              <div className="container mx-auto flex items-center">
                <img 
                  src={currentSong.cover} 
                  alt={currentSong.title} 
                  className="w-12 h-12 object-cover rounded mr-4 hidden sm:block"
                />
                
                <div className="flex-1 min-w-0 mr-4">
                  <h4 className="font-medium truncate">{currentSong.title}</h4>
                  <p className="text-sm text-gray-500 truncate">{currentSong.artist}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200"
                  >
                    {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                  </button>
                  
                  <div className="hidden sm:flex items-center">
                    <button
                      onClick={toggleMute}
                      className="p-1 text-gray-600"
                    >
                      {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
                    </button>
                    
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={audioVolume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 ml-2"
                    />
                  </div>
                </div>
                
                <ReactAudioPlayer
                  src={currentSong.audio}
                  autoPlay
                  volume={audioVolume}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  controls={false}
                  style={{ display: 'none' }}
                  preload="auto"
                  listenInterval={1000}
                  muted={isMuted}
                  loop={false}
                  play={isPlaying}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;