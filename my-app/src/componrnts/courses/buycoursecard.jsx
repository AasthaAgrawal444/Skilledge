import React from 'react'

function  Buycoursecard(props) {
  return (
    <div>
    <div className='infoofcourse'>
      <img src={props.thumbnail}
        alt=''
        className='coursethumbnail'
      />
      <p>{props.price}</p>
      <div >
        <button className='buybutton'>Buy Now</button>
        <button className='addcartbutton'>Add to cart</button>
      </div>
      </div>
    </div>
  )
}

export default Buycoursecard;
