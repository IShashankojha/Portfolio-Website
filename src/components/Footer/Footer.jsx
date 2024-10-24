import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import "./footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
      animate={{ opacity: 1, y: 0 }} // Animate to on-screen and fully opaque
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="footer container">
        <h1 className="footer__title">Shashank</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#Devs" className="footer__link">Devs</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
            href="https://www.instagram.com/___heyy_shashank?igsh=MTlmMHY5NW5pdGVoaA==" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/ishashankojha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a 
            href="https://x.com/IShashank_01?t=ryUEHvxDZlEqVAKfR19-OA&s=09" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Ishashank. All rights reserved</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
