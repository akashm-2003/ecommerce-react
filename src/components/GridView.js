import React from 'react'
import Product from './Product'
import styled from 'styled-components'
const GridView = ({filtered_products}) => {
  return (
    <div className="container">
            <div className="grid grid-three-column ">
                {filtered_products.map((product)=>{
                    return <Product key={product.id} {...product}/>
                })}
            </div>

        </div>
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
export default GridView