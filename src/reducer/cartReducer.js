import React from 'react'

const cartReducer = (state,action) => {
    if(action.type==='ADD_TO_CART'){
        let {id,mainColor,amount,product}=action.payload
        console.log(id,mainColor,amount,product);
    }
    return state;
}

export default cartReducer