import styled from 'styled-components';
import HomeNav from '../Navigations/HomeNav';
import blueberries from '../../images/illusvg/blueberries.svg';
import lemon2 from '../../images/illusvg/lemon2.svg';

const HeaderWrapper = styled.section`
  width: 100%;
  position: relative;
  padding-top: 35px;
`;
const Header = styled.h1`
  font-size: 18vh;

  text-align: center;
  position: relative;
  line-height: 1.05;
  color: var(--darkblue);

  @media (max-width: 820px) {
    font-size: 10vh;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--darkblue);
  position: absolute;
  z-index: 1;
  bottom: 75px;
  left: 0;
`;

const Bgimage = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  z-index:-3;
  justify-content: space-between;

  .blue{
    position: absolute;
    z-index: -1;
    margin-left: 23vw;
    margin-top: -10vh;
  }
  .lemon{
    width: 7%;
    position: absolute;
    z-index: -2;
    right: 21vw;
    top: -10vh;
  }
`;

export default function Hero(){
  return(
      <HeaderWrapper>
        <Bgimage>
          <img className="blue" src={blueberries} alt='blueberries'/>
          <img className="lemon" src={lemon2} alt='lemon'/>
        </Bgimage>
        <Header>Fresh Exchange</Header>
        <Line />
        <HomeNav />
      </HeaderWrapper>
  )
}