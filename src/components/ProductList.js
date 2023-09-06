import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/productcontext'
import Spinner from './Spinner'
import GridView from './GridView'
import ListView from './ListView'
const ProductList = ({grid_view,filtered_products}) => {
    const {isLoading} =useProductContext();
  return (
    <Wrapper>
        {isLoading?<Spinner/>:grid_view?<GridView filtered_products={filtered_products}/>:<ListView filtered_products={filtered_products} />}
        
    </Wrapper>
  )
}
const Wrapper = styled.section`

  background-color: ${({ theme }) => theme.colors.bg};
  .grid{
    gap:1rem;
    padding:2rem;
  }  
  .container {
    max-width: 120rem;
  }

  
`
export default ProductList