import React from 'react'
import Shopcard from './Shopcard';
import "./maincategory.css"
import Category from './Category';
import Leather from "../../ASSESTS/Main_section/leather.svg";
import Beads from "../../ASSESTS/Main_section/beads.svg";
import Chicken from "../../ASSESTS/Main_section/chickens.svg";
import Textile from "../../ASSESTS/Main_section/textiles.svg";

import Cake from "../../ASSESTS//Main_section/more categories/cakes.svg";
import Groceries from "../../ASSESTS/Main_section/more categories/groceries.svg"
import Food from "../../ASSESTS/Main_section/more categories/foods.svg";
import Books from "../../ASSESTS/Main_section/more categories/books.svg";
import Art from "../../ASSESTS/Main_section/more categories/arts.svg";
import Fashion from "../../ASSESTS/Main_section/more categories/fashion.svg";


function Maincategory() {
  return (
    <section className="maincategory">
      <div className="shop">
        <div className="shop_title">
          <h3>Shop by category</h3>
        </div>
        <div className="shop_category">
          <Shopcard
            img={Leather}
            desc="Everything leather no be khaki"
            alt="Leather"
          />
          <Shopcard img={Beads} desc="Accessories" alt="Accessories" />
          <Shopcard img={Chicken} desc="Livestock" alt="Livestock" />
          <Shopcard img={Textile} desc="Textile/Fabrics" alt="Textile" />
        </div>
      </div>
      <div className="category">
        <Category img={Cake} desc="Cake and Pasteries" alt="Leather" />
        <Category img={Groceries} desc="Groceries" alt="Groceries" />
        <Category img={Food} desc="Food is ready" alt="FOOD IS READY" />
        <Category img={Books} desc="Books" alt="Books" />
        <Category img={Art} desc="Arts and Craft" alt="Arts and CraftS" />
        <Category img={Fashion} desc="Fashion" alt="Fashion" />
      </div>
    </section>
  );
}

export default Maincategory