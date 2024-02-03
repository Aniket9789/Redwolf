import React from 'react'
import '../contact.css'
import contact from '../images/contact.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <div className="Contactcontainer">
        <div className='Contactheading'>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className="Contactrow">
          <div className="Contactcolumn">
            <img src={contact} alt="Map" />
          </div>
          <div className="Contactcolumn">
            <form action="mailto:info@redwolfhitech.com" method="post" encType="text/plain">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

              <label htmlFor="lname">Your Number</label>
              <input type="text" id="lname" pattern="[0-9]*" min="0" maxLength="10" name="lastname" placeholder="Mobile Number" required />

              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">India</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px' }}
              ></textarea>

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>

      {/* //////// */}
      {/* footer */}


      <footer className="footer">
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
          <li className="social-icon__item"><a className="social-icon__link" href="#">
            <FaTwitter name="logo-twitter"></FaTwitter>
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
        </ul>
        <p>&copy;2024  Redwolfhi-tech || All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}
export default Contact;