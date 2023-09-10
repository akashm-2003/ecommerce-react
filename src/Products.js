import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";
const Products = () => {
  const {grid_view,filtered_products,setGridView}=useFilterContext();
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection/>
      </div>
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort grid_view={grid_view} filtered_products={filtered_products} setGridView={setGridView}/>
        </div>
        <div className="main-product">
          <ProductList grid_view={grid_view} filtered_products={filtered_products}/>
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
