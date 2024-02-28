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
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import lockunlock from "../images/lockunlock.png"
import financiaprotaction from "../images/financiaprotaction.png"
import clientfinance from "../images/clientfinance.png"
import Navbar from "./navbar/Navbar"
import Example from './navbar/Navtest';
function Product() {
  return (
    <>
      <Navbar />
      {/* <Example/> */}

      {/* <nav className='Hnav'>
        <img src={logo} alt='Logo' className='Alogo' />
        <header className='Hheader'>
          <ul className='Hul'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li className='Hli'>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li className='Hli'>
                            <Link to='/services'>OUR SERVICES</Link>
                        </li>
            <li className='Hli'>
              <Link to='/product'>PRODUCT</Link>
            </li>
            <li className='Hli'>
                            <Link to='/career'>CAREER</Link>
                        </li>
            <li className='Hli'>
              <Link to='/contact'>CONTACT US</Link>
            </li>
            <li className='Hli'>
                            <Link to='/blog'>BLOG</Link>
                        </li>
            <li className='Hli'>
              <a href="https://portal.tcopsztpro.in/">LOGIN</a>
            </li>

          </ul>
          <h1 className='companyheading'>Mobile App & Development Services</h1>
        </header>
      </nav> */}
      <div>
        <div className='Productparent'>
          <div className="Productcard1" id='Productmargin'>
            <img src={prologo} className='Productlogo' />
            <h1>T-Cops Zt Pro</h1>
            <p className='download'>
              <a href="https://us-central1-t-cops-zt.cloudfunctions.net/aml/emm/mobile_apps/TCopsZTProKeygen.apk" download="proposed_file_name">Download</a>
            </p>
          </div>
          <div className="Productcard2" id='Productmargin'>
            <img src={pluslogo} className='Productlogo' id='Pluslogo' />
            <div className='ProductcardDetails'>
              <h1>T-Cops Zt Plus</h1>
              <p className='download'>
                <a href="https://us-central1-t-cops-zt.cloudfunctions.net/aml/emm/mobile_apps/TCopsZTPlus.apk" download="proposed_file_name">Download</a>
              </p>
            </div>
          </div>
          <div className="Productcard3" id='Productmargin'>
            <img src={maclogo} className='Productlogo' />
            <h1>T-Cops I MAC</h1>
            <p>
              <button className='Productbutton'>Live Now 🎉🎉</button>
            </p>
          </div>
        </div>

        {/* //// */}
        <div className='Productcontent'>
          <div className='ProductBanner'>
            <img src={productbanner} className='Productbanner' />
          </div>
          <h1 className='Productheading' id='producth1'>Product</h1>
          <div className='Productmain'>
            <h1 id='Productheading1' >Discover the impressive features of the T-cops Zt pro.</h1>
            <p className='Productpera'>The T-cops Zt Pro mobile app empowers retailers to oversee their financed customers. In case of delayed EMI payments,
              the store can promptly disable their phone.</p>
          </div>
        </div>
        <div className='ProductEMI1'>
          <div className='EMIbanner' id='EMIbanner1'>
            <img src={emibanner} className='banneremi' />
          </div>
          <div className='EMIcontent'>
            <h1 className='featuresEMI'>Features</h1>
            <h3 className='manageemi'>Manage your EMI</h3>
          </div>
          <div className='EMIdetails'>
            <h4 className='EMIheading'>EMI Notification</h4>
            <p className='EMIpera' id='pera1'>Retailers will notify customers about upcoming EMI payments via text or WhatsApp, sending reminders three days before the due date</p>
            <h4 className='EMIheading'>EMI Payment History</h4>
            <p className='EMIpera' id='pera2'>Retailers can conveniently monitor the timing and dates of EMI payments made by customers.</p>
            <h4 className='EMIheading'>Planned EMI Payments</h4>
            <p className='EMIpera' id='pera3'>Customers are required to make EMI payments on the specified day every month.</p>
            <h4 className='EMIheading' id='paymentcenter'>Payment Center</h4>
            <p className='EMIpera' id='pera4'>For EMI transactions, customers can use the user-friendly payment platform, which accepts cash payments or allows scanning a QR code on their phone's lock screen.</p>
            <h4 className='EMIheading' id='SIM'>SIM Card Details</h4>
            <p className='EMIpera' id='SIMcard'>Retailers will collect the SIM card number from customers with new or active SIM cards.</p>
          </div>
        </div>

        {/* SECOND */}

        <div className='ProductEMI2' id='EMIproduct'>
          <div className='EMIcontent'>
            <h1 className='featuresEMI' id='EMIfeature'>Instantly lock/unlock phones.</h1>

          </div>
          <div className='EMIdetails' id='detailsEMI'>
            <h4 className='EMIheading' id="controlaccess">Control access to media and calls</h4>
            <p className='EMIpera' id='takecontrol'>Take control of enabling or disabling social media and phone calls. If EMI payments are overdue, you can restrict access to these features on the customer's financed phone, giving you authority over its usage.</p>
            <h4 className='EMIheading'>Activate Lock Screen</h4>
            <p className='EMIpera' id='takecontrol'>Retailers have the ability to secure the phone screen using a personal PIN and password.</p>
            <h4 className='EMIheading'>Secure the Device</h4>
            <p className='EMIpera' id='takecontrol'>Retailers can choose to fully lock a customer's phone if EMI payments are delayed.</p>
            <h4 className='EMIheading' id='lockunlock'>Lock & Unlock for Multiple Devices</h4>
            <p className='EMIpera' id='takecontrol'>Retailers can now lock or unlock multiple devices at once if EMI payments are not made on time.</p>
          </div>
          <div className='EMIbanner' id='EMIbanner3'>
            <img src={lockunlock} className='banneremi' />
          </div>
        </div>
        {/* THIRDCARD */}

        <div className='ProductEMI3' id='TheardCard'>
          <div className='EMIbanner' id='EMIbanner2'>
            <img src={financiaprotaction} className='banneremi' />
          </div>
          <div className='EMIcontent' id='contentEMI'>
            <h1 className='featuresEMI' id="financial">Financial Protection</h1>
            {/* <h3 className='manageemi'>Manage your EMI</h3> */}
          </div>
          <div className='EMIdetails' id='EMIdetails3'>
            <h4 className='EMIheading' id='clientheading'>Client Information and Digital Verification</h4>
            <p className='peradetails'>Retailers can use digital signatures to confirm agreements and keep track of customer profile pictures.</p>
            <h4 className='EMIheading'>Control of Soft Reset</h4>
            <p className='peradetails'>Retailers can stop users from resetting their devices.</p>
            <h4 className='EMIheading'>Handling Hard Resets</h4>
            <p className='peradetails'>Retailers can decide who can use the phone after a hard reset. either locking it down or granting access.</p>
            <h4 className='EMIheading'>Post-Hard Reset Control</h4>
            <p className='peradetails'>Retailers can lock or unlock phones even after a hard reset.</p>
            <h4 className='EMIheading'>Full Protection</h4>
            <p className='peradetails'>This feature ensures that the phone cannot be reset or reprogrammed.</p>
          </div>
        </div>
        <div className='ProductEMI4' id='thirdfinance'>
          <div className='EMIcontent'>
            <h1 className='featuresEMI' id='manage'>Manage clients' finances</h1>
            {/* <h3 className='manageemi'>Manage your EMI</h3> */}
          </div>
          <div className='EMIdetail' id='lastdetails'>
            <h4 className='EMIheading' id='emiheadinglast'>EMI Calculation Pro</h4>
            <p className='EMIpera' id='retailerscss'>Retailers can use a tool to accurately calculate installment payments.</p>
            <h4 className='EMIheading' id='emiheadinglast'>Emergency Call Option</h4>
            <p className='EMIpera' id='retailerscss'>Customers can make emergency calls even if they haven't paid their installments and their phones are locked.</p>
            <h4 className='EMIheading' id='emiheadinglast'>Location Tracking</h4>
            <p className='EMIpera' id='retailerscss'>Retailers can track the location of the user's device if they miss EMI payments.</p>
            <h4 className='EMIheading' id='emiheadinglast'>USB Management:</h4>
            <p className='EMIpera' id='retailerscss'>Retailers can control whether customers can use USB functions on their phones.</p>
            <h4 className='EMIheading' id='emiheadinglast'>Instant Restart</h4>
            <p className='EMIpera' id='retailerscss'>Retailers can quickly restart customers' phones if they've missed EMI payments.</p>
          </div>
          <div className='EMIbanner' id='bannerlast'>
            <img src={clientfinance} className='banneremi' />
          </div>
        </div>

        {/* /// */}

        {/* footer */}

        <footer className="footer" id='productfooter'>
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
      </div>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


    </>
  );
}

export default Product;