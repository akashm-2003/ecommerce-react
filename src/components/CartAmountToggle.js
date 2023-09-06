import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div>
        <div className="cart-button">
            <div className="amount-toggle">
                <button className="amount-btn" onClick={()=>setDecrease()}><FaMinus/></button>
                <div className="amount-style">{amount}</div>
                <button className="amount-btn" onClick={()=>setIncrease()}><FaPlus/></button>
            </div>
        </div>
    </div>
  )
}

export default CartAmountToggle