import styled from 'styled-components';
import heroimg from '../../images/heroimg.png';
import applebtn from '../../images/applebtn.png';
import googleplaybtn from '../../images/googleplaybtn.png';
import tomato from '../../images/illusvg/tomato.svg';
import lettuce from '../../images/illusvg/lettuce.svg';

const HeroWrapper = styled.section`
  padding: 50px 100px;
  position: relative;
  display: flex;
  flex-direction: row;

  .lady{
    width: 70vh;
    height: auto;
  }

  .tomato{
    position: absolute;
    top: 35vh;
    left: -9vh;
    z-index: 5;
    width: 40vh;
  }
  .lettuce{
    position: absolute;
    z-index: -1;
    right: -5vh;
    width: 25vh;
    top: 30vh;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
  @media (max-width: 820px) {
    padding: 50px 15px;
    .lady{
      width: 70vh;
      height: auto;
    }
  }
`;

const HeroTitle = styled.h2`
  font-size: 8vh;
  margin-right: 25px;
  font-weight: 400;
  font-family: var(--opensans);
  line-height: 11vh;

  b{
    color: var(--beige);
  }
  @media (max-width: 820px) {
    font-size: 6vh;
    line-height: 7vh;
    margin: 15px 0px 15px 0px;
  }
`;

const HeroSubtitle = styled.h4`
  font-size: 36px;
  font-weight: 400;
`;

const HeroText = styled.div`

  margin-left: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 820px) {
    margin-left: 15px;
  }
`;

const HeroButtons = styled.div`

  > * + *{
    margin-left: 25px;
  }
  button{
    background-color: transparent;
    border: none;
    width: auto;
  }
`;


export default function Hero(){
  return(
    <HeroWrapper>
      <img className="lettuce" src={lettuce} alt="lettuce"/>
      <img className="tomato" src={tomato} alt="tomato"/>
      <img className='lady' src={heroimg} alt='lady getting fruit'/>
      <HeroText>
        <HeroTitle>
          Don’t let your <b>extra produce</b> go to waste!
        </HeroTitle>
        <HeroSubtitle>
          Pick up.  Trade. Request. Sell. Donate near by.
        </HeroSubtitle>
        <HeroButtons>
          <button className="appleappbtn"><img src={applebtn} alt='apple app store'/></button>
          <button className="googleplaybtn"><img src={googleplaybtn} alt='google play store'/></button>
        </HeroButtons>
      </HeroText>
    </HeroWrapper>
  )
}