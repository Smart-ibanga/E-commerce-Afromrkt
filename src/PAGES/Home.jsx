import React from "react";
import shoppers from ".././ASSESTS/Afromarkt_Header/shoppingboy.svg";
import shopCart from ".././ASSESTS/Afromarkt_Header/ShoppingKart.svg";
import shopper1 from ".././ASSESTS/Afromarkt_Header/shopinggirl.svg";
import Maincategory from "../COMPONENTS/Maincategory/Maincategory";
import Afromarktdeals from "../COMPONENTS/Afromarktdeals/Afromarktdeals";
import Ladieswear from "../COMPONENTS/Ladieswear/Ladieswear";
import Books from "../COMPONENTS/Books/Books";
import Furniture from "../COMPONENTS/Furniture/Furniture";
import Services from "../COMPONENTS/Services/Services";
import Footer from "../COMPONENTS/Footer/Footer";




const Home = () => {
  return (
      <section className="singlepage">
            <div className="Home">
                <div className="Shop">
                    <div className="shop_ease">
                    <h1>Shop with</h1>
                    <h1 className="ease">with ease</h1>
                    </div>
                    <button className="see_products">see all products</button>
                </div>
                <div className="shoppers">
                    <img src={shopCart} alt="Shopping Cart"  />
                    <img src={shoppers} alt="shopper1"  />
                    <img src={shopper1} alt="shopper2" />
                </div>
            </div>
            <Maincategory />
            <Afromarktdeals />
            <Ladieswear />
            <Books />
            <Services />
            <Furniture />
            <Footer />
      </section>
  );
};

export default Home;
