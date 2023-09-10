import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";

import reducer from "../reducer/filterReducer";

const FilterContext = createContext();


const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filter: {
        text: "",
        category: "all",
        company: "all",
        color: "all"
    }
}
const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    const setGridView = (setGrid) => {
        return dispatch({ type: "SET_GRID_VIEW", payload: setGrid })
    }

    const sorting = (filter) => {
        return dispatch({ type: "GET_SORT_VALUE", payload:filter })
    }
    const updateFilterValue = (value, name) => {
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { value, name } })
    }
    useEffect(() => {
        dispatch({ type: "USE_FILTER_SECTION" ,payload:products})
        dispatch({type:'SORTING_PRODUCTS'})
    }, [products, state.filter, state.sorting_value])
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])
    return (
        <FilterContext.Provider value={{ ...state, setGridView, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContextProvider, useFilterContext }