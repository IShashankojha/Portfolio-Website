import React from 'react';
import './project.css';
import Projects from './Project';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  return (
    <section className="project section" id="projects">
      {/* Animate the title and subtitle */}
      <motion.h2
        className="section__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2,delay:1}}
      >
        Projects
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        What I Have Done!
      </motion.span>

      {/* Animated projects component */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1}}
      >
        <Projects />
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
