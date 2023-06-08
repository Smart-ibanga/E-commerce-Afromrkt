import React from 'react'


function Category(props) {
  return (
    <section className='other_categories'>
      <img src={props.img} alt="cake" />
      <h5>{props.desc}</h5>
    </section>
  );
}

export default Category