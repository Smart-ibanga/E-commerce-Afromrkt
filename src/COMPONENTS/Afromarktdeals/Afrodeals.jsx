import React from 'react'


function Afrodeals(props) {
  return (
    <div className="afromarkt_title_images">
      <img src={props.img} alt="Ankara" />
      <h4>{props.prdts}</h4>
      <div className="prices">
        <h4>{props.price}</h4>
        <p>
          <s>{props.slash}</s>
        </p>
      </div>
      <button className='discounted'>{props.disc}</button>
    </div>
  );
}

export default Afrodeals