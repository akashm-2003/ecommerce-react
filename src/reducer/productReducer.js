const ProductReducer =(state, action) =>{
    // console.log(action);
    if(action.type === "SET_LOADING"){
        return {...state, isLoading:true,isError:true}
    }
    if(action.type === "SET_API_DATA"){ 
        const featureData= action.payload.filter((item) => item.featured === true);
        return {...state, featuredProducts:featureData, isLoading:false, products:action.payload}
    }
    if(action.type === "API_ERROR"){
        return {...state, isLoading:false, isError:true}
    }
    if(action.type === "SET_SINGLE_LOADING")
    {
        return {...state, isSingleLoading:true,isError:true}
    }
    if(action.type === "SET_SINGLE_PRODUCT"){
        return {...state, isSingleLoading:false, singleProduct:action.payload}
    }
    if(action.type === "SET_SINGLE_ERROR"){
        return {...state, isSingleLoading:false, isError:true}
    }
} 

export default ProductReducer;