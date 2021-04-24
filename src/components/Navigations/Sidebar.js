import styled from 'styled-components';
import {Link} from 'react-router-dom';
import apptblack from '../../images/icons/apptblack.svg';
import eventblack from '../../images/icons/eventblack.svg';
import homeblack from '../../images/icons/homeblack.svg';
import postblack from '../../images/icons/postblack.svg';
import mapside from '../../images/mapside.png';
import placeicon from '../../images/icons/placeicon.svg';
import cherry from '../../images/illusvg/cherry.svg';
import limes from '../../images/illusvg/limes.svg';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: var(--palegreen);
  color: var(--darkblue); 
  height: 100vh;
  position: fixed;
  z-index: 10; 
  border-right: 3px solid var(--darkblue);

  .extra-links{
    position: absolute;
    bottom: 25px;
    left: 25px;
    > * + *{
      margin-left: 25px;
    }
  }
  .extra-links a{
    color: var(--darkblue);
    text-decoration: none;
    transition: all 100ms ease-in-out;
  }
  .extra-links a:hover{
    font-weight: 600;

  }
`;

const Logo = styled.h3`
  font-size: 24px;
  font-family: var(--monty);
  color: var(--darkblue);
  padding: 20px;
  border-bottom: 1px solid var(--darkblue);
`;

const SidebarNav = styled.nav`
  margin: 0 0 20px 0;
  color: var(--darkblue);

  li{
    padding: 5px 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 250ms ease-in-out;
  }
  span{
    position:absolute;
    top: 27%;
    left: 60px;
  }
  li a {
    color: var(--darkblue);
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
  img{
    height: 30px;
  }

  li.active{
    background-color: var(--beige);
  }
  li:hover{
    cursor: pointer;
    background-color: rgba(245, 241, 224, 0.6);
  }
`;

const EventsMap = styled.div`
  margin-left: 20px;
  margin-top: 25px;
  position: relative;

  div{
    position: relative;
  }

  img{
    margin-top: 20px;
    height: 215px;
    position: absolute;
    z-index: 15;
  }
  .pins{
    position: absolute;
    top: 0;
  }
  .pins img{
    position: absolute;
    height: 45px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
  .pins img:hover{
    transform: scale(1.2);
  }
  .place1{
    top: 0; 
    left: 25px;
  }
  .place2{
    top: 0px;
    left: 75px;
  }
  .place3{
    top: 150px;
    left: 175px;
  }
  .place4{
    top: 50px;
    left: 5px;
  }

  .cherry{
    position: absolute;
    z-index: 11;
    height: 50px;
    top: -40px;
    left: 160px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .limes{
    position: absolute;
    z-index: 11;
    height: 75px;
    top: 190px;
    left: -15px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export default function Sidebar(){

    const links = ['Home', 'Events', 'Appointment', 'My Posts']
    return(
        <SidebarWrapper>
          <Logo>Fresh Exchange</Logo>
          <SidebarNav>
            <ul>
              <li className="active"><Link><img src={homeblack}/><span>Home</span></Link></li>
              <li><Link><img src={eventblack}/><span>Events</span></Link></li>
              <li><Link><img src={apptblack}/><span>Appointments</span></Link></li>
              <li><Link><img src={postblack}/><span>Posts</span></Link></li>
            </ul>
          </SidebarNav>
          <EventsMap>
            <h4>Today's Events</h4>
            <div>
              <img src={mapside} alt="map"/>
              <div className="pins">
                <img src={placeicon} className="place1" />
                <img src={placeicon} className="place2" />
                <img src={placeicon} className="place3" />
                <img src={placeicon} className="place4" />
              </div>
              <img src={cherry} className="cherry" alt='cherry'/>
              <img src={limes} className="limes" alt='limes'/>
            </div>
          </EventsMap>
          <div className="extra-links">
            <Link to='/contact'>Contact Us</Link>
            <Link to='/about'>About</Link>
          </div>
        </SidebarWrapper>
    )
}