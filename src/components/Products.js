import React from 'react';
import "../product.css"
import prologo from "../images/prologo.png"
import pluslogo from "../images/pluslogo.png"
import maclogo from "../images/maclogo.png"
import productbanner from "../images/product banner.png"
import emibanner from "../images/emibanner.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import lockunlock from "../images/lockunlock.png"
import financiaprotaction from "../images/financiaprotaction.png"
import clientfinance from "../images/clientfinance.png"
function Product() {
  return (
    <>
      <nav className='Hnav'>
        <img src={logo} alt='Logo' className='Alogo' />
        <header className='Hheader'>
          <ul className='Hul'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li className='Hli'>
              <Link to='/about'>ABOUT</Link>
            </li>
            {/* <li className='Hli'>
                            <Link to='/services'>OUR SERVICES</Link>
                        </li> */}
            <li className='Hli'>
              <Link to='/product'>PRODUCT</Link>
            </li>
            {/* <li className='Hli'>
                            <Link to='/career'>CAREER</Link>
                        </li> */}
            <li className='Hli'>
              <Link to='/contact'>CONTACT US</Link>
            </li>
            {/* <li className='Hli'>
                            <Link to='/blog'>BLOG</Link>
                        </li> */}
            <li className='Hli'>
              <a href="https://portal.tcopsztpro.in/">LOGIN</a>
            </li>

          </ul>
          <h1 className='companyheading'>Mobile App & Development Services</h1>
        </header>
      </nav>
      <div className='Productparent'>
        <div className="Productcard1">
          <img src={prologo} className='Productlogo' />
          <h1>T-Cops Zt Pro</h1>
          <p className='download'>
            <a href="https://us-central1-t-cops-zt.cloudfunctions.net/aml/emm/mobile_apps/TCopsZTProKeygen.apk" download="proposed_file_name">Download</a>
          </p>
        </div>
        <div className="Productcard2">
          <img src={pluslogo} className='Productlogo' />
          <div className='ProductcardDetails'>
          <h1>T-Cops Zt Plus</h1>
          <p className='download'>
            {/* <a href="https://us-central1-t-cops-zt.cloudfunctions.net/aml/emm/mobile_apps/TCopsZTPlus.apk" download="proposed_file_name">Download</a> */}
            Download
          </p>
          </div>
        </div>
        <div className="Productcard3">
          <img src={maclogo} className='Productlogo' />
          <h1>T-Cops I MAC</h1>
          <p>
            <button className='Productbutton'>Comming Soon🤞</button>
          </p>
        </div>
      </div>

      {/* //// */}
      <div className='Productcontent'>
        <div className='ProductBanner'>
          <img src={productbanner} className='Productbanner' />
        </div>
        <h1 className='Productheading'>Product</h1>
        <div className='Productmain'>
          <h1>Discover the impressive features of the T-cops Zt pro.</h1>
          <p className='Productpera'>The T-cops Zt Pro mobile app empowers retailers to oversee their financed customers. In case of delayed EMI payments,
            the store can promptly disable their phone.</p>
        </div>
      </div>
      <div className='ProductEMI'>
        <div className='EMIbanner'>
          <img src={emibanner} className='banneremi' />
        </div>
        <div className='EMIcontent'>
          <h1 className='featuresEMI'>Features</h1>
          <h3 className='manageemi'>Manage your EMI</h3>
        </div>
        <div className='EMIdetails'>
          <h4 className='EMIheading'>EMI Notification</h4>
          <p className='EMIpera'>Retailers will notify customers about upcoming EMI payments via text or WhatsApp, sending reminders three days before the due date</p>
          <h4 className='EMIheading'>EMI Payment History</h4>
          <p className='EMIpera'>Retailers can conveniently monitor the timing and dates of EMI payments made by customers.</p>
          <h4 className='EMIheading'>Planned EMI Payments</h4>
          <p className='EMIpera'>Customers are required to make EMI payments on the specified day every month.</p>
          <h4 className='EMIheading'>Customer-Friendly Payment Center</h4>
          <p className='EMIpera'>For EMI transactions, customers can use the user-friendly payment platform, which accepts cash payments or allows scanning a QR code on their phone's lock screen.</p>
          <h4 className='EMIheading'>SIM Card Details</h4>
          <p className='EMIpera'>Retailers will collect the SIM card number from customers with new or active SIM cards.</p>
        </div>
      </div>

      {/* SECOND */}


      <div className='ProductEMI'>
        <div className='EMIcontent'>
          <h1 className='featuresEMI'>Instantly lock/unlock phones.</h1>

        </div>
        <div className='EMIdetails'>
          <h4 className='EMIheading'>Control access to social media and calls</h4>
          <p className='EMIpera'>Take control of enabling or disabling social media and phone calls. If EMI payments are overdue, you can restrict access to these features on the customer's financed phone, giving you authority over its usage.</p>
          <h4 className='EMIheading'>Activate Lock Screen</h4>
          <p className='EMIpera'>Retailers have the ability to secure the phone screen using a personal PIN and password.</p>
          <h4 className='EMIheading'>Secure the Device</h4>
          <p className='EMIpera'>Retailers can choose to fully lock a customer's phone if EMI payments are delayed.</p>
          <h4 className='EMIheading'>Manage Locking/Unlocking for Multiple Devices</h4>
          <p className='EMIpera'>Retailers can now lock or unlock multiple devices at once if EMI payments are not made on time.</p>
        </div>
        <div className='EMIbanner'>
          <img src={lockunlock} className='banneremi' />
        </div>
      </div>
      {/* THIRDCARD */}
      <div className='ProductEMI'>
        <div className='EMIbanner'>
          <img src={financiaprotaction} className='banneremi' />
        </div>
        <div className='EMIcontent'>
          <h1 className='featuresEMI'>Financial Protection</h1>
          {/* <h3 className='manageemi'>Manage your EMI</h3> */}
        </div>
        <div className='EMIdetails'>
          <h4 className='EMIheading'>Client Information and Digital Verification</h4>
          <p className='EMIpera'>Retailers can use digital signatures to confirm agreements and keep track of customer profile pictures.</p>
          <h4 className='EMIheading'>Control of Soft Reset</h4>
          <p className='EMIpera'>Retailers can stop users from resetting their devices.</p>
          <h4 className='EMIheading'>Handling Hard Resets</h4>
          <p className='EMIpera'>Retailers can decide who can use the phone after a hard reset. either locking it down or granting access.</p>
          <h4 className='EMIheading'>Post-Hard Reset Control</h4>
          <p className='EMIpera'>Retailers can lock or unlock phones even after a hard reset.</p>
          <h4 className='EMIheading'>Full Protection</h4>
          <p className='EMIpera'>This feature ensures that the phone cannot be reset or reprogrammed.</p>
        </div>
      </div>
      <div className='ProductEMI'>
        <div className='EMIcontent'>
          <h1 className='featuresEMI'>Manage clients' finances</h1>
          {/* <h3 className='manageemi'>Manage your EMI</h3> */}
        </div>
        <div className='EMIdetails'>
          <h4 className='EMIheading'>EMI Calculation Pro</h4>
          <p className='EMIpera'>Retailers can use a tool to accurately calculate installment payments.</p>
          <h4 className='EMIheading'>Emergency Call Option</h4>
          <p className='EMIpera'>Customers can make emergency calls even if they haven't paid their installments and their phones are locked.</p>
          <h4 className='EMIheading'>Location Tracking</h4>
          <p className='EMIpera'>Retailers can track the location of the user's device if they miss EMI payments.</p>
          <h4 className='EMIheading'>USB Management:</h4>
          <p className='EMIpera'>Retailers can control whether customers can use USB functions on their phones.</p>
          <h4 className='EMIheading'>Instant Restart</h4>
          <p className='EMIpera'>Retailers can quickly restart customers' phones if they've missed EMI payments.</p>
        </div>
        <div className='EMIbanner'>
          <img src={clientfinance} className='banneremi' />
        </div>
      </div>

      {/* /// */}

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
          {/* <li className="menu__item"><a className="menu__link" href="/services">Services</a></li> */}
          <li className="menu__item"><a className="menu__link" href="/product">Product</a></li>
          {/* <li className="menu__item"><a className="menu__link" href="/career">Career</a></li> */}
          <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>
          {/* <li className="menu__item"><a className="menu__link" href="/blog">Blog</a></li> */}


        </ul>
        <p>&copy;2024  Redwolfhi-tech || All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


    </>
  );
}

export default Product;