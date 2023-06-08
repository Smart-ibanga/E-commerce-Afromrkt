import React from "react";
import "../Afromarktdeals/Afromarketdeals.css";
import Dresses from "./dresses";
import "./ladieswear.css"
import AnkaraDress from "../../ASSESTS/Main_section/Afromarkt prices/Ankara.svg";
import Dress2 from "../../ASSESTS/Main_section/Ladies wear/Dresses2.svg";
import Dress3 from "../../ASSESTS/Main_section/Ladies wear/Dresses3.svg";
import Dress4 from "../../ASSESTS/Main_section/Ladies wear/Dresses4.svg";
import Dress5 from "../../ASSESTS/Main_section/Ladies wear/Dresses5.svg";
import Dress6 from "../../ASSESTS/Main_section/Ladies wear/Dresses6.svg";




function Ladieswear() {
  return (
    <section>
      <div className="title_banners">Ladies wear</div>
      <div className="dresses">
        <Dresses img={AnkaraDress} />
        <Dresses img={Dress2} />
        <Dresses img={Dress3} />
        <Dresses img={Dress4} />
        <Dresses img={Dress5} />
        <Dresses img={Dress6} />
      </div>
    </section>
  );
}

export default Ladieswear;
