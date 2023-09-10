import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from '../styles/Button'
const HeroSection = ({data}) => {
    const {title}=data;
    console.log(data.title);
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">
                        Welcome to
                        <h1> {title}</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam cumque, dolore nesciunt facere eveniet incidunt minus voluptatibus aut libero dolor unde similique alias soluta possimus, tempore modi sunt explicabo
                    </p><br/>
                    <NavLink to='/products'>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                {/* HeroSection Image */}
                <div className="hero-section-image">
                    <figure>
                        <img src="images/hero.jpg" alt="hero section image" className='img-style' />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection