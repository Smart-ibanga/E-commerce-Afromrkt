import React from 'react'
import "./footer.css"
import facebook from "../../ASSESTS/Main_section/Footer/Facebook.svg"
import instagram from "../../ASSESTS/Main_section/Footer/Instagram Circle.svg"
import twitter from "../../ASSESTS/Main_section/Footer/TwitterCircled.svg";
import linkedin from "../../ASSESTS/Main_section/Footer/LinkedInCircled.svg";

import mastercard from '../../ASSESTS/Main_section/Footer/Mastercard Logo.svg'
import paypal from "../../ASSESTS/Main_section/Footer/PayPal.svg"
import paystack from "../../ASSESTS/Main_section/Footer/paystack-logo.svg";
import visa from "../../ASSESTS/Main_section/Footer/Visa.svg";


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="majorfooters">
          <div className="afromarkt_footer">
            <h2>Afromarkt</h2>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Our blog</li>
              <li>Pay for my order</li>
              <li>Afromarkt delivery</li>
              <li>Payment gateways</li>
            </ul>
          </div>
          <div className="becomeafro">
            <h2>Become a Afromarkter</h2>
            <ul>
              <li>Sell products on affiliate</li>
              <li>Become an affiliate</li>
              <li>Become an affiliate</li>
            </ul>
          </div>
          <div className="support">
            <h2>Support</h2>
            <ul>
              <li>Terms and condition</li>
              <li>Privacy policy</li>
              <li>Returns policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="stayconnected">
            <h2>Stay Connected</h2>
            <div className="socialmedia">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="payonline">
          <div className="mastercard">
            <img src={mastercard} alt="mastercard" />
            <h4>Mastercard</h4>
          </div>
          <img src={paystack} alt="paystack" className="paypal" />
          <div className="paystack">
            <img src={paypal} alt="paypal" />
            <h4>Paypal</h4>
          </div>
          <img src={visa} alt="visa" className="visa" />
        </div>
      </div>
    </footer>
  );
}

export default Footer