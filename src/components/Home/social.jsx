import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className="home__social">
      <motion.a
        href="https://www.instagram.com/___heyy_shashank?igsh=MTlmMHY5NW5pdGVoaA=="
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="uil uil-instagram"></i>
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/ishashankojha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <i className="uil uil-linkedin"></i>
      </motion.a>

      <motion.a
        href="https://github.com/IShashankojha"
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <i className="uil uil-github-alt"></i>
      </motion.a>
    </div>
  );
};

export default Social;
