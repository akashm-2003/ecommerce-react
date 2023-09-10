
import React, { useContext } from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import {useProductContext} from './context/productcontext'
const About = () => {
  const   {myName}= useProductContext()
  const data={
    title:'Akash Ecommerce'
  }
  return (
    <Wrapper>
      {myName}
      <HeroSection data={data}/>
    </Wrapper>
  )
}
const Wrapper = styled.div`

`;
export default About