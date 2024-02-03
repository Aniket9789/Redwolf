import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.facebook.com/profile.php?id=61553777321124&mibextid=ZbWKwL"
            >
              <FaFacebookF name="logo-facebook"></FaFacebookF>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaTwitter name="logo-twitter"></FaTwitter>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="www.linkedin.com/in/ashi-jain-3988252a6"
            >
              <FaLinkedinIn name="logo-linkedin"></FaLinkedinIn>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.instagram.com/redwolfhitech?igsh=YnE1amNiNTdiMDI4"
            >
              <FaSquareInstagram name="logo-instagram"></FaSquareInstagram>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/about">
              About
            </a>
          </li>
          {/* <li className="menu__item"><a className="menu__link" href="/services">Services</a></li> */}
          <li className="menu__item">
            <a className="menu__link" href="/product">
              Product
            </a>
          </li>
          {/* <li className="menu__item"><a className="menu__link" href="/career">Career</a></li> */}
          <li className="menu__item">
            <a className="menu__link" href="/contact">
              Contact
            </a>
          </li>
          {/* <li className="menu__item"><a className="menu__link" href="/blog">Blog</a></li> */}
        </ul>
        <p>&copy;2024 Redwolfhi-tech || All Rights Reserved</p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  )
}

export default Footer