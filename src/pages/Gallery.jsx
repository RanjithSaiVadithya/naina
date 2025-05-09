import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Gallery data using placeholder images from Pexels
const galleryData = [
  {
    id: 1,
    title: "First Day of School",
    description: "Our first class picture together",
    src: "/images/4.jpg",
    category: "School Memories",
    style: "sqare",
    year: 2015
  },
  {
    id: 2,
    title: "Study Session",
    description: "Late night cramming for exams",
    src: "/images/1.jpg",
    category: "School Memories",
    style: "landscape",
    year: 2016
  },
  {
    id: 3,
    title: "College Orientation",
    description: "First day at our separate colleges",
    src: "/images/3.jpg",
    category: "College Days",
    style: "panorama",
    year: 2018
  },
  {
    id: 4,
    title: "B.Tech Meet",
    description: "Our reunion at Sreekantam circle",
    src: "/images/4.jpg",
    category: "College Days",
    style: "panorama",
    year: 2020
  },
  {
    id: 5,
    title: "Street Food Adventure",
    description: "Trying all the local delicacies",
    src: "/images/5.jpg",
    category: "Shopping & Food",
    style: "portrait",
    year: 2021
  },
  {
    id: 6,
    title: "Movie Night",
    description: "Our triple feature movie marathon",
    src: "/images/6.jpg",
    category: "College Days",
    style: "landscape",
    year: 2022
  },
  {
    id: 7,
    title: "Graduation Day",
    description: "Finally earned our degrees",
    src: "/images/7.jpg",
    category: "Celebrations",
    style: "portrait",
    year: 2023
  },
  {
    id: 8,
    title: "Mehefil Celebration",
    description: "Celebrating your job offer",
    src: "/images/8.jpg",
    category: "Celebrations",
    style: "square",
    year: 2024
  },
  {
    id: 9,
    title: "Shopping Day",
    description: "Our day at Trends trying on outfits",
    src: "/images/9.jpg",
    category: "Shopping & Food",
    style: "landscape",
    year: 2024
  },
  {
    id: 10,
    title: "Birthday Preparation",
    description: "Getting ready for your special day",
    src: "/images/10.jpg",
    category: "Celebrations",
    style: "panorama",
    year: 2025
  }
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryData);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  
  useEffect(() => {
    document.title = "Photo Gallery | Happy Birthday Naina!";
    
    let filtered = galleryData;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    if (selectedStyle !== "All") {
      filtered = filtered.filter(img => img.style === selectedStyle);
    }
    
    setFilteredImages(filtered);
  }, [selectedCategory, selectedStyle]);

  const categories = ["All", ...new Set(galleryData.map(img => img.category))];
  const styles = ["All", "portrait", "landscape", "square", "panorama"];
  
  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  // Handle opening the modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle navigation in the modal
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const getGridItemClass = (style) => {
    switch (style) {
      case 'portrait':
        return 'row-span-2';
      case 'landscape':
        return 'col-span-2';
      case 'panorama':
        return 'col-span-3';
      case 'square':
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Our Photo Gallery
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            A collection of our special moments captured in photographs. Each picture tells a story of our journey together.
          </motion.p>
        </div>
        
        {/* Filters and View Toggle */}
        <div className="mb-8 space-y-4">
          {/* Category Filter */}
          <div className="overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Style Filter and View Toggle */}
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex space-x-2 overflow-x-auto">
              {styles.map((style, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                    selectedStyle === style
                      ? 'bg-secondary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setViewMode('grid')}
              >
                Grid View
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'masonry'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setViewMode('masonry')}
              >
                Masonry View
              </button>
            </div>
          </div>
        </div>
        
        {/* Gallery Layout */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${getGridItemClass(image.style)}`}
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm">{image.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-4"
              >
                <div
                  className="card overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-[1.05]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-white">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                        <div className="flex justify-between text-xs mt-1">
                          <span>{image.category}</span>
                          <span>{image.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        )}
        
        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative max-w-4xl w-full h-auto max-h-[90vh] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <FaTimes size={18} />
                </button>
                
                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <FaChevronLeft size={18} />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <FaChevronRight size={18} />
                </button>
                
                {/* Image */}
                <div className="w-full h-[70vh] bg-gray-100">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Description */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{selectedImage.category}</span>
                    <span>{selectedImage.year}</span>
                  </div>
                  <p className="text-gray-700">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;