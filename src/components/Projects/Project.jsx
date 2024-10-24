import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData, projectsNav } from './Data';
import ProjectItems from './ProjectItems';

const Project = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <motion.div 
        className="project__filters"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        {projectsNav.map((navItem, index) => {
          return (
            <span 
              onClick={(e) => handleClick(e, index)} 
              className={`${active === index ? 'active-project' : ""} project__item`} 
              key={index}
            > 
              {navItem.name}
            </span>
          );
        })}
      </motion.div>

      <motion.div 
        className="project__container container grid" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8}} // Delay each project by 0.1 seconds
            >
              <ProjectItems item={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Project;
