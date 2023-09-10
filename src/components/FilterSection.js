import React from 'react'
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';
const FilterSection = () => {
  const { filter: { text,category,color }, updateFilterValue, all_products } = useFilterContext();

  // map is used to get only that particular data of object
  // filter is used to get the entire object data
  const getUniqueData = (data, type) => {
    let newVal = data.map((item) => item[type]);
    if(type==='colors'){
      newVal = ["all", ...new Set(newVal.flat(1))];
      return newVal;
    }
    else{
      newVal = ["all", ...new Set(newVal)];
      return newVal;
    }
  }
  // const getUniqueColor = (data, type) => {
  //   let newVal = data.map((item) => item[type]);
  //   if(type==='colors'){
  //     newVal = ["all", ...new Set(newVal.flat(1))];
  //     return newVal;
  //   }
  //   else{
  //     newVal = ["all", ...new Set(newVal)];
  //     return newVal;
  //   }
  // }
  // we need unique category data from all products
  const categoryData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');
  const colorsData = getUniqueData(all_products, 'colors');
  return (
    <Wrapper>
    <div className="filter-search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={(e)=>{updateFilterValue(e.target.value,'text')}}
        />
      </form>
    </div>

    <div className="filter-category">
      <h3>Category</h3>
      <div>
        {categoryData.map((curElem, index) => {
          return (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              className={curElem === category ? "active" : ""}
              onClick={()=>{updateFilterValue(curElem,'category')}}>
              {curElem}
            </button>
          );
        })}
      </div>
    </div>

    <div className="filter-company">
      <h3>Company</h3>

      <form action="#">
        <select
          name="company"
          id="company"
          className="filter-company--select"
          onClick={updateFilterValue}>
          {companyData.map((curElem, index) => {
            return (
              <option key={index} value={curElem} name="company" onClick={()=>{updateFilterValue(curElem,'company')}}>
                {curElem}
              </option>
            );
          })}
        </select>
      </form>
    </div>

    <div className="filter-colors colors">
      <h3>Colors</h3>

      <div className="filter-color-style">
        {colorsData.map((curColor, index) => {
          return (
            <button
              key={index}
              type="button"
              value={curColor}
              name="color"
              style={{ backgroundColor: curColor }}
              className="btnStyle"
              onClick={updateFilterValue}>
              {color === curColor ? "" : null}
            </button>
          );
        })}
      </div>
    </div>
  </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection