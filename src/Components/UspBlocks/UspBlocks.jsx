import React from 'react'
import './UspBlocks.css'
import users from '@assets/users-svgrepo-com.svg'

function UspBlocks() {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-3 brand-promo-container gap-3">
        <div className="brand-promo-box text-center">
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src={users} height="40px" alt="" />
        </div>
        <div className="brand-promo-box text-center">
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src="" height="40px" alt="" />
        </div>
        <div className="brand-promo-box text-center">
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src="" height="40px" alt="" />
        </div>
        <div className="brand-promo-box text-center">
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src="" height="40px" alt="" />
        </div>
        <div className="brand-promo-box text-center">
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src="" height="40px" alt="" />
        </div>
    </div>
  )
}

export default UspBlocks
