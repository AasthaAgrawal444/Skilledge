import React from 'react'

function Dropdown() {
  return (
    <div>
      <div className='dropdown'>
        <div className='dropdown-btn'>Gender</div>
        <div className='dropdown-content'>
            <div className='dropdown-item'>Male</div>
            <div className='dropdown-item'>Female</div>
            <div className='dropdown-item'>Others</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
