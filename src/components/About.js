import React from 'react';
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from '../images/Shahul photo.jpg';

const About = () => {  
  const horizontal = {
    x: 0, 
    opacity: 1, 
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  };

  return (
    <>
      <div className="about" id='about'>
        <div className="container">
          <motion.div 
            initial={{ x: '-100%', opacity: 0 }} 
            whileInView={horizontal} 
            viewport={{ once: true }} 
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className='heading-text'>About Me</p>
          </motion.div>

          <div className="split-about">
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }} 
              whileInView={horizontal} 
              className="about-content"
            >
              <p>
                Hello! My name is <strong>Shahul Hameed</strong>, and I am a passionate software developer specializing in full-stack development. 
                My journey in web development started with my first project, which ignited my passion for creating seamless and dynamic user experiences.
              </p>
              <br />
              <p>
                With a strong foundation in the <strong>MERN stack</strong>, I have built multiple projects ranging from e-commerce platforms to AI-driven applications. 
                I am highly proficient in <strong>React.js, Node.js, Express.js, MongoDB, and Next.js</strong>, ensuring optimized performance and scalability. 
                I also have experience in integrating AI and machine learning into web applications for smarter solutions.
              </p>
              <br />
              <p>
                Apart from coding, I enjoy experimenting with <strong>Three.js</strong> for 3D modeling, enhancing UI/UX with <strong>Tailwind CSS</strong>, 
                and exploring cloud technologies like <strong>AWS</strong>. I am always eager to learn and contribute to meaningful projects that make an impact.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: '50', opacity: 0 }} 
              whileInView={horizontal} 
              className='about-img'
            >
              <img src={ProfileImg} alt="Shahul Hameed" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
