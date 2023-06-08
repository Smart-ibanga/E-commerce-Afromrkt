import React from 'react'
import "../Afromarktdeals/Afromarketdeals.css"
import "./Furniture.css"
import Chair from './Chair';
import chair from "../../ASSESTS/Main_section/Furniture/Chairs.svg";
import Whitechair from "../../ASSESTS/Main_section/Furniture/whitechair.svg";
import sittingroom from "../../ASSESTS/Main_section/Furniture/sittingroom.svg";
import showroom from "../../ASSESTS/Main_section/Furniture/showroom.svg";
import bedroom from "../../ASSESTS/Main_section/Furniture/bedroom.svg";


function Furniture() {
  return (
    <section>
      <div className="title_banners">Books</div>
      <div className="furniture">
        <Chair img={chair} />
        <Chair img={Whitechair} />
        <Chair img={showroom} />
        <Chair img={sittingroom} />
        <Chair img={bedroom} />
      </div>
    </section>
  );
}

export default Furniture