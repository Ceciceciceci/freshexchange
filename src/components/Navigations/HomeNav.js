import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavWrapper = styled.nav`
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--darkblue);
`;

const NavList = styled.ul`
  margin: 15px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;

  > * + *{
    margin-left: 25px;
  }
  a{
    color: var(--darkblue);
    font-weight: 700;
    text-decoration: none;
    transition: all 100ms ease-in-out;
  }
  a:hover{
    color: white;
  }
  @media (max-width: 820px) {
    margin: 13px 15px;
  }
`

export default function HomeNav(){
  return (
    <NavWrapper>
      <NavList>
        <li><a href="#features">Features</a></li>
        <li><a href="#events">Events</a></li>
      </NavList>
      <NavList>
        <Link to='login'><li>Login</li></Link>
        <Link to='signup'><li>Sign up</li></Link>
      </NavList>
    </NavWrapper>
  )
}