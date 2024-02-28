import React from 'react'
import logo from '../images/logo.png'
import aboutsvg from '../images/aboutsvg.png'
import aboutside from '../images/aboutside.jpeg'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../about.css'
import Navbar from "./navbar/Navbar"
function About() {
  return (
    <>
      <Navbar />

      {/* <nav className='Aboutnav'>
        <img src={logo} alt='Logo' className='Aboutlogo' />
        <header className='Aboutheader'>
          <ul className='Aboutul'>
            <li className='Aboutli'>
              <Link to='/' id='a'>HOME</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/about' id='a'>ABOUT</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/services'>OUR SERVICES</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/product' id='a'>PRODUCT</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/career'>CAREER</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/contact' id='a'>CONTACT US</Link>
            </li>
            <li className='Aboutli'>
              <Link to='/blog'>BLOG</Link>
            </li>

          </ul>
        </header>
        <h1 className='Aboutheading'>About</h1>
      </nav> */}


      {/* //////////////////// */}

      {/* MAIN CONTENT ABOUT PAGE  */}


      <div className='aboutsvg'>
        <img src={aboutsvg} />
      </div>
      <div className='Aboutcontainer'>
        <h1 className='Abouheading1'>We Help Our Clients To Grow Their Business</h1>
        <p>Using the latest technology, we create products tailored just for you. These items are excellent and designed to fit your specific needs. When it comes to security, we're not just an option – we're the best choice.

          We take great pride in being the team you can rely on to protect what you hold dear. Security isn't just important to us; it's our passion.

          When you choose us, you're not just a customer – you're a partner in ensuring the safety of what matters most to you. Your trust in us means a lot, and we're dedicated to keeping your world safe and secure.

          With us, you're not just a part of a transaction – you're part of a partnership, ensuring that your world is safe and sound.
        </p>
      </div>

      <div className='Aboutouter'>
        <div className='Aboutinner'>
          <p>
            Redwolfhi-tech Private Limited is a specialized Web & Mobile Development Company based out at Noida, India. We provide high quality and professional software services to the clients residing across the globe. Our professionals have been working with clients of India as well as from International origin.
          </p>
        </div>
        <div className='Aboutinner2'>
          <p>
            Our team consists of talented and dedicated professional consultants who work hard and dedicatedly to understand your business needs. We are the best in providing you the valuable insight to leverage your internet presence as well as business prospects. Over the past years, we have been exceptional in delivering the quality product to our clients.
          </p>
        </div>
        {/* <div className='Aboutinner3'> */}
        {/* <p>
            We are not limited in terms of area rather we deliver the quality service across the globe. We are powered with the best latest technology & synergistic approach for online solutions.
          </p> */}
        {/* </div> */}
      </div>

      <h3 className='Aboutoutside'>
        As a top Web Development Agency, our highly competitive rates enable your business website to dramatically improve sales and rankings while keeping your budget intact.
      </h3>
      <div className='AboutQuestions'>
        <div className='Questionstap'>
          <h4 className='Aboutheading2'>Work with us to believe it.</h4>
          <p className='Questions'>👉 Our motive is not only to deliver software and services but we strive for never ending relationships with our clients.
          </p>
          <p className='Questions'>👉 Our professionals are strategic thinkers with a strong work ethic and extremely dedicated to their work.</p>
          <p className='Questions'>👉 This allows us to maintain our satisfaction guarantee policy and be proud of the tremendous reputation that we have established among our existing clients. </p>
        </div>
      </div>
      <div className='Abouttemplate'>
        <div className='Aboutside'>
          <img src={aboutside} className='Abouttemplateimage' />
        </div>
        <div className='Abouttext'>
          <div className='Aboutlitel'>
            <h1 className='Aboutheadingtemplate'>
              Commitment
            </h1>
            <p className='Aboutperatemplate'>
              We strive hard to supersede our client’s expectations and ensure that their online goals are met successfully. Our commitment towards our clients has earned us an impressive portfolio & reference group covering a variety of industries all over the world.
            </p>
          </div>
          <div className='Aboutlitel2'>
            <h1 className='Aboutheadingtemplate'>
              Quality
            </h1>
            <p className='Aboutperatemplate'>
              We always strive for delivering the best to our clients within a specified budget while maintaining the highest quality standards.
            </p>
          </div>
          <div className='Aboutlitel3'>
            <h1 className='Aboutheadingtemplate'>
              Values
            </h1>
            <p className='Aboutperatemplate'>
              Being a leading web development agency in India, we at redwolf believe in high values that express our mission, commitment, and the actions. When it comes to deal with the customer’s satisfaction, there is no one who can stand parallel to us.
            </p>
          </div>
        </div>
      </div>

      <div className='Aboutclient'>

      </div>


      {/* //////// */}
      {/* footer */}
      <footer className="footer" id="Aboutfooter">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/profile.php?id=61553777321124&mibextid=ZbWKwL">
            <FaFacebookF name="logo-facebook"></FaFacebookF>
          </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="https://twitter.com/redwolfhitech.">
          <FaXTwitter name="logo-twiter" ></FaXTwitter>
          </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="www.linkedin.com/in/ashi-jain-3988252a6">
            <FaLinkedinIn name="logo-linkedin"></FaLinkedinIn>
          </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/redwolfhitech?igsh=YnE1amNiNTdiMDI4">
            <FaSquareInstagram name="logo-instagram"></FaSquareInstagram>
          </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
          {/* <li className="menu__item"><a className="menu__link" href="/services">Services</a></li> */}
          <li className="menu__item"><a className="menu__link" href="/product">Product</a></li>
          {/* <li className="menu__item"><a className="menu__link" href="/career">Career</a></li> */}
          <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>
          {/* <li className="menu__item"><a className="menu__link" href="/blog">Blog</a></li> */}


        </ul>
        <p>&copy;2024  RED WOLF HI-TECH PVT. LTD. || All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}
export default About;