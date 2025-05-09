import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import { FaHeart, FaCalendarAlt, FaImages, FaQuoteRight, FaSearch } from 'react-icons/fa';

const featuredImages = [
  {
    src: '../images/1.jpg',
    // src: "https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "School Days",
    description: "Our first class picture together",
    style: "col-span-2 row-span-2"
  },
  {
    // src: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    src: img1,
    title: "Study Sessions",
    description: "Late night study marathons",
    style: "col-span-1 row-span-1"
  },
  {
    src: img3,
    // src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "College Life",
    description: "Our college adventures",
    style: "col-span-1 row-span-1"
  },
  {
    src: img2,
    title: "Special Moments",
    description: "Unforgettable memories together",
    style: "col-span-2 row-span-1"
  }
];

const Home = () => {
  useEffect(() => {
    document.title = "Happy Birthday Naina! 🎂";
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-200 opacity-60 animate-float" style={{ animationDelay: "0s" }}></div>
          <div className="absolute top-40 right-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary-200 opacity-60 animate-float" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent-200 opacity-50 animate-float" style={{ animationDelay: "0.8s" }}></div>

          {/* Balloon Animations */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
            className="absolute left-[15%] bottom-0 text-4xl"
          >
            🎈
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ duration: 12, delay: 2, repeat: Infinity, repeatType: "loop" }}
            className="absolute left-[75%] bottom-0 text-4xl"
          >
            🎈
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ duration: 8, delay: 1, repeat: Infinity, repeatType: "loop" }}
            className="absolute left-[45%] bottom-0 text-4xl"
          >
            🎈
          </motion.div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-dancing text-5xl md:text-7xl font-bold text-primary-500 mb-4"
            >
              Happy Birthday Naina!
            </motion.h1>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl mb-8 flex justify-center space-x-4"
            >
              <span>🎂</span>
              <span>🎉</span>
              <span>✨</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6"
            >
              A journey through our special memories together, crafted with love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-primary-500 text-lg mb-10"
            >
              From Maahi <span className="mx-2">❤️</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to="/timeline"
                className="btn btn-primary"
              >
                Start the Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-12"
          >
            Featured Memories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.style}`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.description}</p>
                      <button className="mt-3 px-4 py-2 bg-primary-500 text-white rounded-full flex items-center text-sm hover:bg-primary-600 transition-colors">
                        <FaSearch className="mr-2" /> Quick View
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="btn btn-outline"
            >
              View Full Gallery
            </Link>
          </div>
        </div>

        {/* Quick View Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-dancing font-bold text-primary-500 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Explore Our Story</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          >
            {/* Timeline Card */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mb-4">
                <FaCalendarAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Journey</h3>
              <p className="text-gray-600 mb-4">
                Explore our shared history from 2015 to 2025, reliving each special moment.
              </p>
              <Link to="/timeline" className="mt-auto text-primary-500 hover:text-primary-600 font-medium">
                View Timeline
              </Link>
            </motion.div>

            {/* Gallery Card */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-secondary-100 text-secondary-500 rounded-full mb-4">
                <FaImages size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photo Gallery</h3>
              <p className="text-gray-600 mb-4">
                Browse through our collection of memories captured in photographs.
              </p>
              <Link to="/gallery" className="mt-auto text-secondary-500 hover:text-secondary-600 font-medium">
                View Gallery
              </Link>
            </motion.div>

            {/* Quotes Card */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center text-center md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-accent-100 text-accent-500 rounded-full mb-4">
                <FaQuoteRight size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quotes & Songs</h3>
              <p className="text-gray-600 mb-4">
                Read the words that mean the most and listen to songs that bring back memories.
              </p>
              <Link to="/quotes" className="mt-auto text-accent-500 hover:text-accent-600 font-medium">
                View Quotes
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-dancing text-4xl font-bold mb-6" data-aos="fade-up">
              A Special Note For You
            </h2>

            <div
              className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute -top-4 -left-4 text-4xl">❝</div>
              <div className="absolute -bottom-4 -right-4 text-4xl">❞</div>

              <p className="italic text-lg mb-4">

                Naina,

                On your special day, I wanted to create something as unique and meaningful as you are to me. I built this website myself — with all the knowledge I've gathered, and with my whole heart filled with happiness.

                Every section of this site holds a piece of our journey — every laugh, every memory, every moment we've shared. You’re not just special to me… you’re the best person I’ve ever met, and you’ve been a true source of motivation in my life. You pushed me to aim higher, dream bigger, and believe in myself more.

                Thank you for everything  - Summu Papa ❤️
              </p>

              <p className="font-dancing text-xl mt-4">
                Happy Birthday! <span className="ml-2"> —Naina,  ❤️ 💖</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;