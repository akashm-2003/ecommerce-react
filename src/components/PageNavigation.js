import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink><span>/{title}</span>
        
    </Wrapper>
  )
}
const Wrapper = styled.section`
    height:10rem,
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    font-size: 3.2rem;
    padding-left: 1.2rem;
    padding-top: 1.2rem;
    NavLink{
        font-size:3.2rem;
    }
`;

export default PageNavigation