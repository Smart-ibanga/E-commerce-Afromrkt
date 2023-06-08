import React from 'react'
import "../Afromarktdeals/Afromarketdeals.css"
import "./services.css"
import logo from "../../ASSESTS/Afromarkt_Header/logo.svg"
import Mainsectionservices from './Mainsectionservices';

function Services() {
  return (
    <section>
      <div className="title_banners">Our Services</div>
      <div className="services">
        <div className="sidesection">
          <img src={logo} alt="Logo" />
          <div className="unitingbusiness">
            <div className="center_title">
              <h1>Uniting</h1>
              <h1>Businesses</h1>
            </div>
          </div>
          <button className="sidebutton">Uniting Africa</button>
        </div>
        <Mainsectionservices />
      </div>
    </section>
  );
}

export default Services