import styled from 'styled-components';
import farmersmarket from '../../images/farmersmarket.png';
import fruitseller from '../../images/illustration/fruitseller.png';

import cherry from '../../images/illusvg/cherry.svg';
import limes from '../../images/illusvg/limes.svg';

const EventWrapper = styled.section`
  position: relative;
  padding: 75px 100px;
  background: linear-gradient(180deg, var(--beige) 80%, var(--yelloworange) 20%);
`;
const EventTitle = styled.h3`
  font-size: 72px;
  color: var(--red);
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--red);
  position: absolute;
  z-index: 1;
  left: 0;
`;

const EventBody = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: row;
  
    div{
      width: 40%;
    }
    div img{
      margin-top: 50px;
      width: 65%;
    }
    .farmers{
      width: 60%;
    }
    p{width: 300px; font-size: 18px; line-height: 25px;}

    button{
      background-color: var(--red);
      width: 300px;
      border-radius: 50px;
      border: 0px solid var(--red);
      height: 45px;
      margin-top: 26px;
      font-size: 18px;
      font-family: var(--opensans);
      font-weight: bold;
      color: white;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 250ms ease-in-out;
    }
    button:hover{
      background-color: var(--submitorange);
    }

    @media (max-width: 920px) {
      flex-direction: column;
      div{
        width: 100%;
      }
      div img{
        width: 100%;
      }
      .farmers{
        display: none;
      }
    }
`;

const BgImg = styled.div`
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  
  .cherry{
    align-self: flex-end;
    margin-right: 25vh;
    margin-top: -15vh;
  }
  .limes{
    width: 20vh;
    align-self: flex-start;
    margin-left: -17vh;
  }
`;

export default function Events(){
  return(
      <EventWrapper id="events">
          <BgImg>
            <img className="cherry" src={cherry} alt="cherry" />
            <img className="limes" src={limes} alt="limes" />
          </BgImg>
          <EventTitle>Events</EventTitle>
          <Line />
          <EventBody>
            <div>
              <p>Attend a Farmers Market near you! Support your local growers and chefs. </p>
              <button>View More</button>
              <img src={fruitseller} alt="fruitseller" />
            </div>
            <img className="farmers" src={farmersmarket} alt="farmers market"/>
          </EventBody>
      </EventWrapper>
  )

}