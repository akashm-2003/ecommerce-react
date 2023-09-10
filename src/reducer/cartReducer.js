import React from 'react'

const cartReducer = (state,action) => {
    if(action.type==='ADD_TO_CART'){
        let {id,mainColor,amount,product}=action.payload
        return {...state,total_items:state.total_items+1,total_amount:state.total_amount+product.price*amount,cart:[...state.cart,{id,mainColor,amount,product}]};
    }
    if(action.type==='AMOUNT_TOGGLE'){
        let {id,amount,color}=action.payload
        const product=state.cart.find((curItem)=>curItem.id===id).product.price
        const productPrice=product*amount
        const prevProductPrice=state.cart.find((curItem)=>curItem.id===id).product.price*state.cart.find((curItem)=>curItem.id===id).amount
        const prevAmount=state.cart.find((curItem)=>curItem.id===id).amount
        return {...state,total_items:state.total_items-prevAmount+amount,total_amount:state.total_amount+productPrice-prevProductPrice,cart:state.cart.map((curItem)=>{
            if(curItem.id===id &&curItem.mainColor===color){     
                return {...curItem,amount}
            }
            return curItem
        })}
    }
    if(action.type==='REMOVE_ITEM'){
        let {id,color}=action.payload
        const productPrice=state.cart.find((curItem)=>curItem.id===id).product.price*state.cart.find((curItem)=>curItem.id===id).amount
        const prevAmount=state.cart.find((curItem)=>curItem.id===id).amount
        return {...state,total_items:state.total_items-prevAmount,total_amount:state.total_amount-productPrice,cart:state.cart.filter((curItem)=>curItem.id!==id || curItem.mainColor!==color)}
    }
    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]}
    }
}

export default cartReducer