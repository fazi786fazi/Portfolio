import React from 'react'
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import './footer.scss'
import { useState } from 'react';

const Footer = () => {
  const [currentDate, setCurrentDate]= useState(new Date());
  const[currentYear, setCurrentYear]= useState(currentDate.getFullYear());

    // let newDate = new Date()
    // let year = newDate.getFullYear();
  
  return (
    <div>
      <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="/">
          <BsFacebook/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="/">
          <FaTwitter />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="/">
          <BsLinkedin name="logo-linkedin"></BsLinkedin>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="/">
          <AiFillInstagram name="logo-instagram"></AiFillInstagram>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="/">About</a></li>
      <li class="menu__item"><a class="menu__link" href="/">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="/">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="/">Contact</a></li>

    </ul>
    <p>&copy;{currentYear} | All Rights Reserved</p>
  </footer>
    </div>
  )
}

export default Footer
