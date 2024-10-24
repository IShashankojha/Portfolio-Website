import React from 'react';
import { motion } from 'framer-motion';
import './home.css';
import Social from './social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
      {/* Main container with fade-in animation */}
      <motion.div
        className="home__container container grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Content grid with staggered animations for child elements */}
        <motion.div
          className="home__content grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', staggerChildren: 0.2 }}
        >
          {/* Social icons with individual animations */}
          <Social />

          {/* Placeholder for an image or graphic */}
          <motion.div
            className="home__img"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* You can place an image or a graphic here */}
          </motion.div>

          {/* Data section (name, title, description, and button) */}
          <Data />
        </motion.div>
        
        {/* ScrollDown with slide-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        >
          <ScrollDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
