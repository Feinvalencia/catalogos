import React from 'react';
import images from '../exports/images';
import '../styles/slider.css';
import { motion } from 'framer-motion';

export const Slider = () => {
  return (
    <motion.div className='slider-container'>
      <motion.div
        className='slider'
        drag='x'
        dragConstraints={{ right: 0, left: -123 }}
      >
        {images.map((image, index) => (
          <motion.div className='item'>
            <img src={image} alt={`image-${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
