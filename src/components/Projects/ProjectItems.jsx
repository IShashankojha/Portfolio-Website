import React from 'react';
import { motion } from 'framer-motion';

const ProjectItems = ({ item }) => {
  return (
    <motion.div 
      className="project__card" 
      key={item.id} 
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly translated down
      animate={{ opacity: 5, y: 10 }} // Final state: fully visible and back to original position
      transition={{ duration:2,delay:2 }} // Animation duration
    >
      <img src={item.image} alt={item.title} className='project__img' />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.link} className="project__button" target="_blank" rel="noopener noreferrer">
        Visit<i className='bx bx-right-arrow-alt project__button-icon'></i>
      </a>
    </motion.div>
  );
};

export default ProjectItems;
