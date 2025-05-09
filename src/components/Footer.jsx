import { motion } from 'framer-motion';
import { FaHeart, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="font-dancing text-2xl font-bold mb-2">Made with Love</h3>
            <p className="text-white/80 text-sm">
              This site is a gift that will always remind you of our special journey
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <p className="flex items-center text-lg mb-4">
              Made with <FaHeart className="text-red-400 mx-2 animate-pulse" /> by 
              <span className="font-dancing text-xl ml-2">Ranjith Sai Vadithya</span>
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Call"
              >
                <FaPhone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} A Birthday Gift for Naina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;