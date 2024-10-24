import React from 'react';
import { motion } from 'framer-motion';

const Info = () => {
  // Define the animation variants
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },  // Start with hidden and slightly lower
    visible: { opacity: 1, y: 0 },  // Fully visible and at its original position
  };

  return (
    <div className="about__info grid">
      <motion.div
        className="about__box"
        initial="hidden"
        whileInView="visible"
        variants={boxVariants}
        transition={{ duration: 1 }} // Duration of the animation
      >
        <i className='bx bxs-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">N/A</span>
      </motion.div>

      <motion.div
        className="about__box"
        initial="hidden"
        whileInView="visible"
        variants={boxVariants}
        transition={{ duration: 1, delay: 1}} // Adding a slight delay for the second box
      >
        <i className='bx bxs-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </motion.div>

      <motion.div
        className="about__box"
        initial="hidden"
        whileInView="visible"
        variants={boxVariants}
        transition={{ duration: 1, delay: 1.5 }} // Adding a slight delay for the third box
      >
        <i className='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
}

export default Info;
