import React from 'react'

function Interest() {
  return (
    <div>
    <h3 className='chooseint'>
        Choose Your Interest
    </h3>
      <img src='' alt='profile img' className='profileimage'/>
      <div className='cat3'>
          <div className='categ1'>Design
          <img src='' alt=''/></div>
          <div className='categ2'>Marketing
          <img src='' alt=''/></div>
        </div>
        <div className='cat4'>
          <div className='categ3'>Finance
          <img src='' alt=''/></div>
          <div className='categ4'>Data Science
          <img src='' alt=''/></div>
          <div className='categ5'>Department
          <img src='' alt=''/></div>
          </div>
        <div className='cat1'>
          <div className='categ6'>Music 
          <img src='' alt=''/></div>
          <div className='categ7'>Business
          <img src='' alt=''/></div>
          <div className='categ8'>Photography
          <img src='' alt=''/></div>
        </div>
        <button className='intcont'>Continue</button>
        <button className='intback'>Back</button>
    </div>
  )
}

export default Interest;
