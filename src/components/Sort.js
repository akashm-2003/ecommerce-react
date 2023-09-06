import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

const options = [
  { value: 'lowest', label: 'Price(lowest)' },
  { value: 'highest', label: 'Price(highest)' },
  { value: 'a-z', label: 'Name(Ascending)' },
  { value: 'z-a', label: 'Name(Descending)' },
];
const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#000" : "#000",
    backgroundColor: state.isSelected ? "grey" : "#fff"
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    border: "1px solid #000",
    borderRadius: "8px",
    boxShadow: "none",
  }),
  // singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#111" }),
};

const Sort = ({ grid_view, setGridView, filtered_products }) => {
  const [selectedOption, setSelectedOption] = useState({value: 'lowest', label: 'Lowest'});
  const {sorting} = useFilterContext();
  // console.log(selectedOption.value);
  
  // console.log(selectedOption);
  useEffect(() => {
    sorting(selectedOption.value)
  },[selectedOption])
  return (
    <Wrapper className='sort-section'>
      <div className="sorting-list--grid">
        <button className={grid_view ? 'sort-btn active' : 'sort-btn'} onClick={() => { setGridView(true) }}>
          <BsFillGridFill className="icon" />
        </button>
        <button className={!grid_view ? 'sort-btn active' : 'sort-btn'} onClick={() => { setGridView(false) }}>
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{filtered_products.length} products available</p>
      </div>
      <div className="sort-selection">
        <div className="sort-selection--style">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
          />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding:  0.8rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }

  .sort-selection--style{
    heigth:1rem;
    min-width: 10rem;
    width:20vh;
  }
`;

export default Sort