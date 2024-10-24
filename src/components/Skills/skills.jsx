import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.span 
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Technical Level
      </motion.span>

      <motion.div 
        className="skills__container container grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Frontend />
        <Backend />
      </motion.div>
    </section>
  );
};

export default Skills;
