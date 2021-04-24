import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, PrivateRoute } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AuthProvider from "./contexts/AuthContext";



const LangSelect = styled.select`
    background-color: transparent;
    position: absolute;
    z-index: 1;
    right: 0;
    margin: 25px 100px 15px;
    border: 0px solid black;
    font-weight: 600;
    letter-spacing: 1px;
    text-align-last:right;

    transition: all 100ms ease-in-out;

    &:focus{
      outline: 1px solid black;
    }
    @media (max-width: 920px) {
      margin: 0 auto;
    }
    @media (max-width: 820px) {
      // margin: 0 auto;
    }
`;

function App() {
  const [langShow, setLangShow] = useState(true);

  return (
    <Router>
      <div className="App">
        <LangSelect style={{display: langShow ? 'block' :'none' }}>
            <option value="0">ENGLISH</option>
            <option value="1">SPANISH</option>
            <option value="2">CHINESE</option>
            <option value="3">TAGALOG</option>
            <option value="4">VIETNAMESE</option>
            <option value="5">KOREAN</option>
            <option value="6">ARMENNIAN</option>
            <option value="7">PERSIAN</option>
        </LangSelect>
        <AuthProvider>
          <Switch>
            <Route exact path="/" render={(props) => (
                <Home {...props} isAuthed={true}/>
                )} />
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" render={(props) => (
                <Dashboard {...props} setLangShow={setLangShow} isAuthed={true}/>
                )} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
