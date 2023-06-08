import React from 'react'
import "./book.css"
import  "../Afromarktdeals/Afromarketdeals.css"
import Novel from './Novel';
import Book1 from "../../ASSESTS/Main_section/Books/book1.svg";
import Book2 from "../../ASSESTS/Main_section/Books/book2.svg";
import Book3 from "../../ASSESTS/Main_section/Books/book3.svg";
import Book4 from "../../ASSESTS/Main_section/Books/book4.svg";
import Book5 from "../../ASSESTS/Main_section/Books/Book5.svg";
import Book6 from "../../ASSESTS/Main_section/Books/book6.svg";

function Books() {
  return (
    <section>
      <div className="title_banners">Books</div>
      <div className="book">
        <Novel img={Book1} />
        <Novel img={Book2} />
        <Novel img={Book3} />
        <Novel img={Book4} />
        <Novel img={Book5} />
        <Novel img={Book6} />
      </div>
    </section>
  );
}

export default Books