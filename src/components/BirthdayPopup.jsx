import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { FaTimes } from 'react-icons/fa';

const BirthdayPopup = ({ onClose }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <Confetti 
        width={windowSize.width} 
        height={windowSize.height} 
        recycle={false}
        numberOfPieces={500}
        colors={['#ec4899', '#8b5cf6', '#ffd700', '#fdba74', '#c4b5fd']}
      />
    
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white hover:text-primary-600 transition-colors"
          >
            <FaTimes size={16} />
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-primary-400 to-secondary-600 p-6 text-white text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-dancing text-3xl md:text-4xl mb-2">Happy Birthday!</h2>
            <div className="flex justify-center text-4xl space-x-2">
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                🎂
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
              >
                🎁
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              >
                🎉
              </motion.span>
            </div>
          </motion.div>
        </div>
        
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-dancing font-bold text-primary-700 mb-3">Dearest Naina</h3>
            <p className="text-gray-700 mb-4">
              Welcome to this special place I've created just for you! 
              Join me on a journey through our memories together.
            </p>
            <p className="font-dancing text-lg text-secondary-600 mb-6">
              With love, Ranjith
            </p>
            
            <button
              onClick={onClose}
              className="btn btn-primary w-full"
            >
              Begin the Journey
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayPopup;