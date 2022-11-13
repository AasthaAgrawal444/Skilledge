import React from 'react';
import Mycart from './mycart';
import Noorder from '../../images/noorders.png';

function Emptycart() {
  return (
    <div>
      <Mycart/>
      <img src={Noorder} alt='' className='noorder' style={{height: '50vh',width: '30vw', margin: '4vh' }}/>
    </div>
  )
}

export default Emptycart;
