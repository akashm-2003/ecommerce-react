import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeatureProduct from './components/FeatureProduct';
const Home = () => {
  const data={
    title:'Akash Store'
  }
  return (
    <Wrapper>
      <HeroSection data={data}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </Wrapper>
  )
}
const Wrapper = styled.div`

`;
export default Home