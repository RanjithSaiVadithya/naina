import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeUp, FaVolumeMute, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleMusic, musicPlaying }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
  const activeLinkClasses = `${linkClasses} text-primary-700 font-semibold`;
  const inactiveLinkClasses = `${linkClasses} text-gray-700 hover:text-primary-600 hover:bg-primary-50`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center">
            <span className="text-2xl mr-2">🎂</span>
            <span className="font-dancing text-xl md:text-2xl font-bold text-primary-600">
              Naina's Birthday
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/" 
            className={location.pathname === '/' ? activeLinkClasses : inactiveLinkClasses}
          >
            Home
          </Link>
          <Link 
            to="/timeline" 
            className={location.pathname === '/timeline' ? activeLinkClasses : inactiveLinkClasses}
          >
            Our Journey
          </Link>
          <Link 
            to="/gallery" 
            className={location.pathname === '/gallery' ? activeLinkClasses : inactiveLinkClasses}
          >
            Gallery
          </Link>
          <Link 
            to="/quotes" 
            className={location.pathname === '/quotes' ? activeLinkClasses : inactiveLinkClasses}
          >
            Quotes & Songs
          </Link>
          
          <button 
            onClick={toggleMusic}
            className="ml-2 p-2 rounded-full bg-secondary-100 text-secondary-600 hover:bg-secondary-200 transition-colors"
            aria-label={musicPlaying ? "Mute music" : "Play music"}
          >
            {musicPlaying ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMusic}
            className="p-2 mr-2 rounded-full bg-secondary-100 text-secondary-600"
            aria-label={musicPlaying ? "Mute music" : "Play music"}
          >
            {musicPlaying ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0,
          display: isMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
      >
        <div className="px-4 py-2 space-y-1">
          <Link 
            to="/" 
            className={`block py-3 ${location.pathname === '/' ? 'text-primary-700 font-semibold' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <Link 
            to="/timeline" 
            className={`block py-3 ${location.pathname === '/timeline' ? 'text-primary-700 font-semibold' : 'text-gray-700'}`}
          >
            Our Journey
          </Link>
          <Link 
            to="/gallery" 
            className={`block py-3 ${location.pathname === '/gallery' ? 'text-primary-700 font-semibold' : 'text-gray-700'}`}
          >
            Gallery
          </Link>
          <Link 
            to="/quotes" 
            className={`block py-3 ${location.pathname === '/quotes' ? 'text-primary-700 font-semibold' : 'text-gray-700'}`}
          >
            Quotes & Songs
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;