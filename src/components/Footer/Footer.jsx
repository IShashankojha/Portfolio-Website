import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer container container">
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
             <a href="https://www.instagram.com/___heyy_shashank?igsh=MTlmMHY5NW5pdGVoaA==" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
            </a>
        <a href="https://www.linkedin.com/in/ishashankojha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer__social-link" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://x.com/IShashank_01?t=ryUEHvxDZlEqVAKfR19-OA&s=09" className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i>
        </a>
         </div>
         <span className="footer__copy">&#169;Ishashank.All rights reserved
         </span>
        </div>
    </footer>
  )
}

export default Footer
