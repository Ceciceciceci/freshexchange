import styled from 'styled-components';

import Header from '../components/HomeParts/Header';
import Hero from '../components/HomeParts/Hero';
import Features from '../components/HomeParts/Features';
import Events from '../components/HomeParts/Events';
import Footer from '../components/Footer';

const HomeWrapper = styled.section`
   background-color: var(--palegreen);
   position: absolute;
   z-index: -5;
`;

export default function Home(){
  return (
    <HomeWrapper>
      <Header></Header>
      <Hero></Hero>
      <Features/>
      <Events/>
      <Footer></Footer>
    </HomeWrapper>
  );
}