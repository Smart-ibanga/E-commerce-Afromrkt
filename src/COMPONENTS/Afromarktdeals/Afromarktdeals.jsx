import React from 'react'
import Afrodeals from './Afrodeals';
import "./Afromarketdeals.css"
import Ankara from "../../ASSESTS/Main_section/Afromarkt prices/Ankara.svg";
import Ram from "../../ASSESTS/Main_section/Afromarkt prices/Ram.svg";
import Bag from "../../ASSESTS/Main_section/Afromarkt prices/Bags.svg";
import Shoes from "../../ASSESTS/Main_section/Afromarkt prices/Shoes.svg";
import Native from "../../ASSESTS/Main_section/Afromarkt prices/Native wear.svg";
import Ankarabag from "../../ASSESTS/Main_section/Afromarkt prices/Ankarabag.svg";







function Afromarktdeals() {
  return (
    <section>
      <div className="title_banners">Afromarkt Deals</div>
      <div className="Afromarktdeals">
        <Afrodeals img={Ankara} prdt="Ankara Jump suit" price="41250" slash="Was: 55,000" disc="25% OFF" />
        <Afrodeals img={Ram} prdt="Ram" price="150,000" slash="Was: 187,500" disc="25% OFF" />
        <Afrodeals img={Bag} prdt="Leather School Bag" price="12,000" slash="Was:16,000" disc="25% OFF"/>
        <Afrodeals img={Shoes} prdt="Leather Shoes for men" price="32,000" slash="Was: 40,000" disc="25% OFF"/>
        <Afrodeals img={Native} prdt="Native for Men" price="41,250" slash="Was 55,000" disc="25% OFF" />
        <Afrodeals img={Ankarabag} prdt="Ankara Handbag" price="9250" slash="Was: 11,562.5" disc="25% OFF" />
      </div>
    </section>
  );
}

export default Afromarktdeals