import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex box">
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          <p style={{padding:'10px'}}>The page you are looking for dosen't exist. How you got here is a mystery. But you can click the button below to go back to the homepage
          </p>
          <NavLink to='/'><Button>Go Back to Home</Button></NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .box{
    margin: 8rem 2rem;
  }
`;
export default ErrorPage