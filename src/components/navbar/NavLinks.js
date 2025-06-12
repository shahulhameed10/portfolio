import React from 'react';
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className='nav-links'>
      <li onClick={handleNav}>
        <a href="https://www.threads.net/@xha_hul_?igshid=NTc4MTIwNjQ2YQ%3D%3D" target='_blank' className='nav-link' rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li onClick={handleNav}>
        <a href="https://www.linkedin.com/in/shahul-hameed-73a548264/" target='_blank' className='nav-link' rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li onClick={handleNav}>
        <a href="https://github.com/shahulhameed10" target='_blank' className='nav-link' rel="noopener noreferrer">
          <BsGithub />
        </a>
      </li>
      <li onClick={handleNav}>
        <a href="mailto:shahulhameed3280@gmail.com" target='_blank' className='nav-link' rel="noopener noreferrer">
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
