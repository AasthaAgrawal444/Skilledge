import React from 'react';
import './wallet.css';
import Search from '../../images/Search.png';
function Wallet() {
  return (
    <div>
      <div className='walletedu'>
        <div className='wallethistory'>
            <div className='wallettext'>
                <p id='skilltext'>Skill Edge</p>
                <p id='wallettext' style={{color:'#586AF5'}}>Wallet</p>
                <img src='' alt='' className='walletimg'/>
            </div>
            <div className='balance'>
                <p id='amount' >$1,256</p>
                <p id='baltext'>Current Balance</p>
            </div>
            <div>
                <button className='redeembut'>Redeem Balance</button>
            </div>
        </div>
        <div className='transactionhistory'>
            <p id='tranhist'>Transaction History</p>
            <div className="search">
             <img src={Search} className="searchingicon" alt="search"/>
             <input type="text" placeholder="search" id="loginsearches"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet;
