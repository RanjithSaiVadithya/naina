import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BirthdayPopup from './components/BirthdayPopup';
import MusicPlayer from './components/MusicPlayer';

// Pages
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import Quotes from './pages/Quotes';

// Styling
import './App.css';
import './index.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Check if the user has visited before
    const hasVisited = Cookies.get('hasVisitedNainasBday');
    
    if (!hasVisited) {
      // Show popup after 2 seconds for first-time visitors
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      
      // Set a cookie that expires in 1 day
      Cookies.set('hasVisitedNainasBday', 'true', { expires: 1 });
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setMusicPlaying(true);
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <Router>
      <div className="app font-poppins min-h-screen flex flex-col">
        <Navbar toggleMusic={toggleMusic} musicPlaying={musicPlaying} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        
        <AnimatePresence>
          {showPopup && <BirthdayPopup onClose={closePopup} />}
        </AnimatePresence>
        
        <MusicPlayer isPlaying={musicPlaying} />
      </div>
    </Router>
  );
}

export default App;