import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterWrapper = styled.footer`
  padding: 35px 100px;
  background-color: var(--darkblue);
  color: white;
  font-weight: 400;
  display: flex; 
  flex-direction:row;
  justify-content: space-between;
  align-items: center;

  div{
    > * + *{
      margin-left: 25px;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: all 100ms ease-in-out;
  }
  a:hover{
    font-weight: 600;
  }

  @media (max-width: 820px) {
    flex-direction:column;
    text-align: center;
    a{
      display: block;
      margin-bottom: 15px;
    }
    div{
      > * + *{
        margin-left: 0px;
      }
    }
  }
`
export default function Footer(){
  return (
    <FooterWrapper>
      <div>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Link to='/contactfoodbank'>Contact a Food Bank</Link>
        <Link to='/contactharvestcomp'>Contact a Harvesting Company</Link>
      </div>
    </FooterWrapper>
  )
}