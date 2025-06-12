import React from "react";
import "../styles/Services.css";
import { IoColorWandOutline } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineDeveloperMode, MdOutlineCloud } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="services" id="services">
      <div className="container">
        <motion.div
          whileInView={fade}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          className="heading"
        >
          <p className="heading-sub-text">What I Can Do</p>
          <p className="heading-text">My Services</p>
        </motion.div>
        <motion.div
          className="services-box"
          whileInView={fade}
          initial={{ opacity: 0 }}
        >
          {/* Web Development */}
          <div className="services-card">
            <BiCodeAlt className="services-icon" />
            <p className="services-title">Full Stack Development</p>
            <p className="services-desc">
              Expertise in building scalable web applications using the MERN stack.
              Skilled in front-end, back-end, and database integration.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="services-card">
            <IoColorWandOutline className="services-icon" />
            <p className="services-title">UI/UX Design</p>
            <p className="services-desc">
              Creating intuitive and visually appealing user interfaces using 
              Figma, Canva, and Tailwind CSS.
            </p>
          </div>

          {/* Cloud & DevOps */}
          <div className="services-card">
            <MdOutlineCloud className="services-icon" />
            <p className="services-title">Cloud & DevOps</p>
            <p className="services-desc">
              Experience with AWS S3, cloud computing concepts, and optimizing 
              application deployment.
            </p>
          </div>

          {/* AI & ML Development */}
          <div className="services-card">
            <MdOutlineDeveloperMode className="services-icon" />
            <p className="services-title">AI & ML Solutions</p>
            <p className="services-desc">
              Built AI-driven applications such as cardiovascular disease prediction 
              and AI interview mockers using machine learning and deep learning techniques.
            </p>
          </div>

          {/* Database & Backend Development */}
          <div className="services-card">
            <FaDatabase className="services-icon" />
            <p className="services-title">Database & Backend Development</p>
            <p className="services-desc">
              Efficiently manage databases using MongoDB and PostgreSQL while 
              ensuring optimized backend performance with Express.js and Next.js.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
