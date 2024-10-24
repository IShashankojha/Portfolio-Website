import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './scrollup.css';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 560) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [isVisible, controls]);

    return (
        <motion.a
            href="#"
            className="scrollup"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={controls} // Animation control from Framer Motion
            transition={{ duration: 0.3 }} // Transition duration
        >
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </motion.a>
    );
};

export default ScrollUp;
