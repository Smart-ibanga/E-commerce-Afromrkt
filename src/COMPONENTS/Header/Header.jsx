import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../../ASSESTS/Afromarkt_Header/logo.svg";
import Locate from "../../ASSESTS/Afromarkt_Header/location.svg";
import profile from "../../ASSESTS/Afromarkt_Header/profile_img.svg";
import flag from "../../ASSESTS/Afromarkt_Header/nigeria-flag-icon.svg";

import Cart from "../../ASSESTS/Afromarkt_Header/shoppingcost.svg";

const Header = () => {
  return (
    <div>
      <header className="search-bar">
        <Link className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="delivery">
          <img src={Locate} className="" alt="location" />
          <div className="deliver_to">
            Deliver to <br></br> Nigeria
          </div>
          <img src={flag} className="" alt="flag" width="18%" />
        </div>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search Afromrkt" />
          <i class="fas fa-search"></i>
        </div>
        <div className="profile-button">
          <button className="profile">Sign-in</button>
          <img src={profile} alt="profile" srcset="" width="20%" />
          <img src={Cart} alt="profile" width="25%" />
        </div>
      </header>
      <nav>
        <div className="navbarmenu">
          <button  className="Navmenu"> 
            {/* <i class="fa-solid fa-times"></i>
            <i class="fa-solid fa-bars"></i> */}
              <div class="bar"></div>
          </button>
          <div className="menu">
            <Link to="/">All</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/gifdcards">Gift Cards</Link>
            <Link to="/sell">Sell</Link>
          </div>
        </div>
        <div className="market-deals">Afromarkt Deals</div>
      </nav>
    </div>
  );
};

export default Header;
