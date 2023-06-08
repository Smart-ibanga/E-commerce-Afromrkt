import React from 'react'


function Shopcard(props) {
  return (
    <div className='shopcard'>
      <img src={props.img} alt={props.alt} />
      <h4>{props.desc}</h4>
    </div>
  );
}

export default Shopcard