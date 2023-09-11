import { createContext,useContext,useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext= createContext();
const initialState={
    cart:[],
    total_items:0,
    total_amount:0,
    shipping_fee:50000,
}
const CartProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const addToCart=(id,mainColor,amount,product)=>{
        console.log(product);
        dispatch({type:'ADD_TO_CART',payload:{id,mainColor,amount,product}})
    }
    const setAmount=(id,amount,color)=>{
        dispatch({type:'AMOUNT_TOGGLE',payload:{id,amount,color}})
    }
    const removeItem=(id,color)=>{
        dispatch({type:'REMOVE_ITEM',payload:{id,color}})
    }
    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'})
    }
    return (
        <CartContext.Provider value={{...state,addToCart,setAmount,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider,useCartContext}