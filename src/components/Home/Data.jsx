import React from 'react';
import { motion } from 'framer-motion';

const Data = () => {
  return (
    <motion.div
      className="home__data"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="home__title"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Shashank Ojha
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          {/* SVG paths here */}
        </svg>
      </motion.h1>

      <motion.h3
        className="home__subtitle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full-Stack Developer
      </motion.h3>

      <motion.p
        className="home__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        I'm an aspiring Full-stack developer specializing in the MERN stack, passionate about building impactful web applications. As a final-year B.Tech student, I love transforming ideas into practical solutions that solve real problems and offer a great user experience. My focus is on learning, growing, and creating meaningful technology that makes a difference. Welcome to my portfolio—where I share my journey, skills, and the projects that inspire me.
      </motion.p>

      <motion.a
        href="#contact"
        className="button button--flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG paths here */}
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Data;
