// create a context
// create a provider
import { createContext ,useContext, useEffect, useReducer   } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
// create a consumer
const AppContext = createContext();
 

const API = "https://api.pujakaitem.com/api/products"
const initialState = {  
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}

// Here the children is App component
// Important to add App component in index.js
const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"}) 
        try{
        const response = await axios.get(url);
        const products = await response.data;
        dispatch({type:"SET_API_DATA" , payload:products})
        }
        catch(error){
            dispatch({type:"API_ERROR"})
        }
    }
// My second Api call for single product
    const getSingleProduct = async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const response = await axios.get(url)
            const singleProduct = await response.data;
            dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct})
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }
 
    useEffect(() => {
        getProducts(API);
    },[])

    return (
        <AppContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext,useProductContext};