import React from "react";
import logo from "../images/logo.png";
import growup from "../images/growup.png";
import bannerhome1 from "../images/bannerhome1.jpg";
import SuperDist from "../images/SuperDist.png";
import Distributor from "../images/Distributor.png";
import retailer from "../images/retailer.png";
import active from "../images/active.png";
import Quality from "../images/Quality.jpg";
import trust from "../images/trust.jpg";
import affordability from "../images/affordability.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import Navbar from "./navbar/Navbar"
import "../home.css";
function Home() {
  return (
    <>
      <Navbar />
      {/* <nav className="Hnav">
        <img src={logo} alt="Logo" className="Alogo" />
        <header className="Hheader">
          <ul className="Hul">
            <li>
              <Link to="/">HOME</Link>
            </li> */}
      {/* <li className="Hli">
              <Link to="/about">ABOUT</Link>
            </li> */}
      {/* <li className='Hli'>
                            <Link to='/services'>OUR SERVICES</Link>
                        </li> */}
      {/* <li className="Hli">
              <Link to="/product">PRODUCT</Link>
            </li> */}
      {/* <li className='Hli'>
                            <Link to='/career'>CAREER</Link>
                        </li> */}
      {/* <li className="Hli">
              <Link to="/contact">CONTACT US</Link>
            </li> */}
      {/* <li className='Hli'>
                            <Link to='/blog'>BLOG</Link>
                        </li> */}
      {/* <li className="Hli">
              <a href="https://portal.tcopsztpro.in/">LOGIN</a>
            </li>
          </ul>
          <h1 className="companyheading">Mobile App & Development Services</h1>
        </header>
      </nav> */}
      <main>
        <section>
          <div className="Hcontainer">
            <div className="Hcontant">
              <p className="sliderpara">
                Protect Your Mobile Business Completely With T-Cops.
              </p>
            </div>
            <div className="Himg">
              <img src={growup} className="slider1" />
            </div>
          </div>
          <hr />
          <br />
          {/* <a class="prev" role="button"><span class="text1">&#10094;</span><span>Prev</span></a>
                    <a class="next" role="button"><span class="text2">&#10095;</span><span>Next</span></a> */}
          <div className="main">
            <img src={bannerhome1} className="banner1" />
          </div>
          <div className="paraparent">
            <div className="para1">
              <h1 className="Welcome">WELCOME TO REDWOLF HI-TECH PVT LTD</h1>
            </div>
            <div className="text1">
              <p className="subpera">
                {" "}
                REDWOLF HI-TECH Private Limited is a specialised SALES & IT
                solution, Company based out at Noida, India. We provide high
                quality professional software services to the clients residing
                across the globe.
              </p>
            </div>
          </div>
          {/* <hr /> */}

          <div class="row">
            <div class="column">
              <div class="card">
                <img src={SuperDist} className="superdist" />
                <h3 className="counter1">+</h3>
                <p className="counterpera">SuperDistributor</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src={Distributor} className="distributor" />
                <h3 className="counter2">+</h3>
                <p className="counterpera2">Distributor</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src={retailer} className="retailer" />
                <h1 className="counter3">+</h1>
                <p className="counterpera3">Retailer</p>
              </div>
            </div>

            {/* <div class="column">
                            <div class="card">
                                <img src={active} className='active' />
                                <h3 className='counter4'>+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div> */}
          </div>
        </section>
      </main>

      {/* ///////////////////////////// */}

      {/* mission vission values properties */}

      <div className="VMVparent">
        <div className="vision">
          <div className="visioncontent">
            <h1 className="visionheading">OUR VISION</h1>
            <p className="visionpera">
              Honesty, Quality, Reliability, Trust, and Teamwork are at the core
              of how we operate, and we acknowledge the significance of every
              team member's role in our company.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="visioncontent">
            <h1 className="visionheading">OUR MISSION</h1>
            <p className="visionpera">
              We work hard to give our clients the best deals, the most options,
              and the simplest way to get what they need.
            </p>
          </div>
        </div>
        <div className="value">
          <div className="visioncontent">
            <h1 className="visionheading">OUR VALUE</h1>
            <p className="visionpera">
              Our vision is to offer top-notch security services, ensuring the
              safety of our clients, their customers, and everyone we interact
              with.
            </p>
          </div>
        </div>
      </div>

      <hr className="hr" />

      {/* home points */}

      <div className="Homepoints">
        <div className="Homeinnerpoints">
          <h1 className="Homeh1">Few Reasons Why People Choose Us!</h1>
          <p className="Homep">
            Choose us for top quality, fair prices, lots of options, easy
            access, trust, honesty, and dependable service. Our united team is
            here to put your needs first. We're the provider you can trust for
            all your needs.
          </p>
        </div>
      </div>
      <div className="Homecards">
        <div className="Homecardpoints">
          <div className="Homequality">
            <h1 className="Quality">Quality Service</h1>
            <p className="Qualitycontent">
              At the heart of our success is our unwavering commitment to
              providing high-quality service. We pride ourselves on delivering
              top-notch solutions that consistently meet and exceed our clients'
              expectations.
            </p>
          </div>
          <div className="Homequality2">
            <h1 className="Quality">Trustworthiness</h1>
            <p className="Qualitycontent">
              Trust is fundamental to the relationship we build with our
              clients. Over the years, we've earned their trust by consistently
              delivering on our promises and safeguarding their interests.
            </p>
          </div>
          <div className="Homequality3">
            <h1 className="Quality">Affordability</h1>
            <p className="Qualitycontent">
              We understand the value of money and work diligently to offer
              competitive prices without compromising on quality. Clients
              appreciate our commitment to affordability, ensuring that they
              receive great value for their investment.
            </p>
          </div>
        </div>
      </div>
      <div className="testmonialparent">
        <h1 className="testmonialheading">Testmonials</h1>
        <hr />
        <div className="testmonial">
          <FaQuoteLeft className="icon" />
          <div className="visioncontent">
            <p className="visionpera">
              "They've done a fantastic job for our mobile business. Their
              ability to solve problems and their hard work really helped us. We
              strongly recommend their services!"
            </p>
            <h4 className="visionheading">--R M Singh</h4>
          </div>
          <FaQuoteLeft className="icon" />
          <div className="visioncontent">
            <p className="visionpera">
              "Remarkable problem solvers! They tackled business challenges with
              practical solutions, saving time, and money, and achieving a
              significant positive impact."
            </p>
            <h4 className="visionheading">--A P </h4>
          </div>
          <FaQuoteLeft className="icon" />
          <div className="visioncontent">
            <p className="visionpera">
              "Their commitment and skills have left a lasting impression. They
              came up with innovative solutions to our Mobile business
              challenges, and it's made a substantial difference!"
            </p>
            <h4 className="visionheading">--A K Sharma</h4>
          </div>
        </div>
      </div>

      <div className=""></div>

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
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.facebook.com/profile.php?id=61553777321124&mibextid=ZbWKwL"
            >
              <FaFacebookF name="logo-facebook"></FaFacebookF>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com/redwolfhitech.">
            <FaXTwitter name="logo-twiter" ></FaXTwitter>
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
        <p>&copy;2024 RED WOLF HI-TECH PVT. LTD. || All Rights Reserved</p>
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
  );
}
export default Home;
