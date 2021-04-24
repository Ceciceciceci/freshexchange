
import styled from 'styled-components';
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


const LoadingWrapper = styled.section`
  width: 100;
  height: 100vh;
  background-color: var(--beige);

  img{
    height: 100px;
  }
`;

export default function LoadingScreen(){
  return(
    <LoadingWrapper>
      <div className="fruitBg">
        <img className="orange" src={orange} alt="fruit"/>
        <img className="blue" src={blueberries} alt="fruit"/>
        <img className="tomato" src={tomato} alt="fruit"/>
        <img className="lemon" src={lemon} alt="fruit"/>
        <img className="lettuce" src={lettuce} alt="fruit"/>
        <img className="cherry" src={cherry} alt="fruit"/>
        <img className="grapes" src={grapes} alt="fruit"/>
        <img className="carrot" src={carrot} alt="fruit"/>
        <img className="onion" src={onion} alt="fruit"/>
        <img className="limes" src={limes} alt="fruit"/>
        <img className="pear" src={asianpear} alt="fruit"/>
      </div>
    </LoadingWrapper>
  )
}