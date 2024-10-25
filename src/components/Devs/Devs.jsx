import React, { useState, useEffect } from "react";
import "./devs.css";
import work1 from "../../assets/work1.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work5.jpg";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Devs = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
 
  // Define motion variants for the modal and description
  const modalVariants = {
    hidden: { opacity: 0, y: -50 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 }, // Hidden state for description
    visible: { opacity: 1, y: 0 }, // Visible state for description
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state for list items
    visible: { opacity: 1, y: 0 }, // Final state for list items
  };

  const listVariants = {
    hidden: {},
    visible: { 
      transition: {
        staggerChildren: 0.8, // Stagger the appearance of each child
      },
    },
  };

  return (
    <section className="devs section" id="Devs">
      <h2 className="section__title">DEV-Diaries</h2>
      <span className="section__subtitle">My Journey in Tech</span>

      <div className="devs__container container grid">
        <div className="devs__content">
          <div>
            <img src={work3} alt="Work 1" className="devs__image" />
            <h3 className="devs__title">DEV 0.0</h3>
          </div>

          <span className="devs__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right devs__button-icon"></i>
          </span>

          <motion.div
            className={toggleState === 1 ? "devs__modal active-modal" : "devs__modal"}
            initial="hidden" // Start hidden
            animate={toggleState === 1 ? "visible" : "hidden"} // Control visibility based on toggleState
            variants={modalVariants} // Use defined variants
            transition={{ duration: 1.5 }} // Duration of the transition
          >
            <div className="devs__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times devs__modal-close"></i>

              <h3 className="devs__modal-title">My First Step into Development</h3>
              <motion.p 
                className="devs__modal-description"
                initial="hidden"
                animate={toggleState === 1 ? "visible" : "hidden"}
                variants={descriptionVariants}
                transition={{ duration: 1 }}
              >
                "The Spark of Curiosity"
              </motion.p>

              <motion.ul className="devs__modal-devs grid" variants={listVariants} initial="hidden" animate={toggleState === 1 ? "visible" : "hidden"}>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">First Coding Experience: Introduced to programming through HTML, CSS, and JavaScript, sparking my interest.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Early Learning Resources: Used online tutorials and courses to learn the basics of web development.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Initial Challenges: Struggled with understanding JavaScript logic initially, but overcame it through consistent practice.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">First Small Project: Created a simple webpage, which boosted my confidence in building things from scratch.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Motivation to Continue: Inspired by the limitless potential to create and solve real-world problems through coding.</p>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Repeat the above structure for DEV 0.1 and DEV 0.2 */}
        <div className="devs__content">
          <div>
            <img src={work4} alt="Work 2" className="devs__image" />
            <h3 className="devs__title">DEV 0.1</h3>
          </div>

          <span className="devs__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right devs__button-icon"></i>
          </span>

          <motion.div
            className={toggleState === 2 ? "devs__modal active-modal" : "devs__modal"}
            initial="hidden"
            animate={toggleState === 2 ? "visible" : "hidden"}
            variants={modalVariants}
            transition={{ duration:1.5 }}
          >
            <div className="devs__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times devs__modal-close"></i>

              <h3 className="devs__modal-title">Laying the Foundations</h3>
              <motion.p
                className="devs__modal-description"
                initial="hidden"
                animate={toggleState === 2 ? "visible" : "hidden"}
                variants={descriptionVariants}
                transition={{ duration: 1 }}
              >
                Building the Foundation
              </motion.p>

              <motion.ul className="devs__modal-devs grid" variants={listVariants} initial="hidden" animate={toggleState === 2 ? "visible" : "hidden"}>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Expanding Skillset: Learned React and the MERN stack to enhance my development capabilities and build dynamic applications.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">First Major Project: Developed a Gmail clone, which provided practical experience in integrating user authentication and responsive design.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Collaborative Experience: Gained valuable teamwork skills while working on a customer segmentation ML project, learning the power of diverse perspectives.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Full-Stack Exposure: Transitioned from frontend to full-stack development, acquiring a holistic understanding of how web applications function.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Breakthrough Moments: Achieved a significant breakthrough by successfully deploying a complex project and solving challenging bugs through persistence.</p>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>

        <div className="devs__content">
          <div>
            <img src={work1} alt="Work 3" className="devs__image" />
            <h3 className="devs__title">DEV 0.2</h3>
          </div>

          <span className="devs__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right devs__button-icon"></i>
          </span>

          <motion.div
            className={toggleState === 3 ? "devs__modal active-modal" : "devs__modal"}
            initial="hidden"
            animate={toggleState === 3 ? "visible" : "hidden"}
            variants={modalVariants}
            transition={{ duration:1.5}}
          >
            <div className="devs__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times devs__modal-close"></i>

              <h3 className="devs__modal-title">The Developer's Journey Continues</h3>
              <motion.p
                className="devs__modal-description"
                initial="hidden"
                animate={toggleState === 3 ? "visible" : "hidden"}
                variants={descriptionVariants}
                transition={{ duration:1}}
              >
                Evolving as a Developer
              </motion.p>

              <motion.ul className="devs__modal-devs grid" variants={listVariants} initial="hidden" animate={toggleState === 3 ? "visible" : "hidden"}>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Current Projects: Actively developing a bike rental application as my final year project while enhancing my portfolio to showcase my skills.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Technologies and Tools: Focusing on the MERN stack and API integration to build robust and scalable applications for the bike rental app.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Recent Challenges: Recently tackled the challenge of implementing a user-friendly booking system in my bike rental application.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">New Learnings: Currently learning about Machine Learning to broaden my skill set and explore its applications in web development.</p>
                </motion.li>
                <motion.li className="devs__modal-dev" variants={listItemVariants}>
                  <i className="uil uil-check-circle devs__modal-icon"></i>
                  <p className="devs__modal-info">Future Goals: Aiming to build AI-integrated web apps and contribute to impactful projects that solve real-world problems.</p>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Devs;
