
import styled, {keyframes} from 'styled-components';
import orange from '../images/illusvg/orange.svg';
import blueberries from '../images/illusvg/blueberries.svg';
import tomato from '../images/illusvg/tomato.svg';
import lemon from '../images/illusvg/lemon1.svg';
import lettuce from '../images/illusvg/lettuce.svg';
import cherry from '../images/illusvg/cherry.svg';
import carrot from '../images/illusvg/carrot.svg';
import grapes from '../images/illusvg/grapes.svg';
import limes from '../images/illusvg/limes.svg';
import asianpear from '../images/illusvg/asianpear.svg';
import onion from '../images/illusvg/onion.svg';

const jumping = keyframes`
0%   { transform: scale(1,1)      translateY(0); }
10%  { transform: scale(1.1,.9)   translateY(0); }
30%  { transform: scale(.9,1.1)   translateY(-100px); }
50%  { transform: scale(1.05,.95) translateY(0); }
57%  { transform: scale(1,1)      translateY(-7px); }
64%  { transform: scale(1,1)      translateY(0); }
100% { transform: scale(1,1)      translateY(0); }
`;

const LoadingWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--beige);
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;

  .fruitBg{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img{
    height: 100px;
    margin: 5px;
  }
  img:nth-child(2n){
    animation-name: ${jumping};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  img:nth-child(1n){
    animation-name: ${jumping};
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
  }

  .carrot{
    height: 150px;
  }
  .lettuce{
    height: 125px;
  }
  .grapes{
    height: 125px;
  }
  .onion{
    height: 75px;
  }

`;

export default function LoadingScreen(props){
  const{loading} = props;
  return(
    <LoadingWrapper style={{opacity: loading ? 1 : 0}}>
      <div className="fruitBg">
        <img className="cherry" src={cherry} alt="fruit"/>
        <img className="tomato" src={tomato} alt="fruit"/>
        <img className="orange" src={orange} alt="fruit"/>
        <img className="carrot" src={carrot} alt="fruit"/>
        <img className="lemon" src={lemon} alt="fruit"/>
        <img className="pear" src={asianpear} alt="fruit"/>
        <img className="lettuce" src={lettuce} alt="fruit"/>
        <img className="limes" src={limes} alt="fruit"/>
        <img className="blue" src={blueberries} alt="fruit"/>
        <img className="grapes" src={grapes} alt="fruit"/>
        <img className="onion" src={onion} alt="fruit"/>
      </div>
      <h2>Loading...</h2>
    </LoadingWrapper>
  )
}