import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { images } from '../data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ImageSlider = () => {
    const [index,setIndex]=useState(0)

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 2000); 

        
        return () => clearInterval(intervalId);
    }, [nextImage]); 


  return (
    <div className="container mt-8 relative w-[110%] max-w-[1200px] h-[400px] mx-auto overflow-hidden rounded-xl shadow-lg bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].url}
            src={images[index].url}
            className="animate w-[110%] h-[400px] object-cover rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
        <button
            className="nav-button absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 border-none text-2xl p-2 cursor-pointer z-10 rounded-full shadow-md left-2"
            onClick={prevImage}
        >
          <FaAngleLeft />
        </button>
        <button
            className="nav-button absolute top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 border-none text-2xl p-2 cursor-pointer z-10 rounded-full shadow-md right-2"
            onClick={nextImage}
        >
          <FaAngleRight />
        </button>
      </div>
  )
}

export default ImageSlider
