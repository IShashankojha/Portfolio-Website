import React from 'react';
import './project.css';
import Projects from "./Project"
const projects = () => {
  return (
    <section className="project section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What i have Done!</span>
            <Projects/>
    </section>
  )
}

export default projects
 