import { createContext,useContext,useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext= createContext();
const initialState={
    cart:[],
    total_items:0,
    total_amount:0,
    shipping_fee:5000,
}
const CartProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const addToCart=(id,mainColor,amount,product)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,mainColor,amount,product}})
    }

    return (
        <CartContext.Provider value={{...state,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider,useCartContext}