import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="about-me">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hi! I'm Sidra Osmani, a web developer passionate about creating clean, functional, and user-friendly websites. I graduated from DePaul University with a degree in Web Development in June 2024.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }}
      >
        Outside of coding, I have a love for cooking, makeup, and skincare. These hobbies allow me to explore my creativity and attention to detail, which I bring into my web development work.
      </motion.p>
    </section>
  );
};

export default AboutMe;
