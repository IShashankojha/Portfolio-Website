// ScrollSection.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
const ScrollSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50}} // Start off-screen
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 50 : 200 }} // Animate in when in view
      transition={{ duration: 1.5 }} // Duration of the animation
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
