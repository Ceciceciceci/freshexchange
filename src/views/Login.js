import {useState} from 'react';
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../redux/Form/useForm';

import TextInput from '../components/TextInput';
import LoadingScreen from '../views/LoadingScreen';

import orange from '../images/illusvg/orange.svg';
import blueberries from '../images/illusvg/blueberries.svg';
import tomato from '../images/illusvg/tomato2.svg';
import lemon from '../images/illusvg/lemon2.svg';
import lettuce from '../images/illusvg/lettuce.svg';
import cherry from '../images/illusvg/cherry.svg';
import carrot from '../images/illusvg/carrot.svg';
import grapes from '../images/illusvg/grapes.svg';
import limes from '../images/illusvg/limes.svg';

const LoginWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const LoginLeft = styled.div`
  background-color: var(--palegreen);
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  h1{
    font-size: 96px;
    text-align: center;
    color: white;
    line-height: 1em;
    margin-bottom: 45px;
  }
  p{
    font-size: 24px;
    text-align: center;
    width: 30%;
  }
  
`;

const FruitBg = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  img{
    height: 50px;
  }

  .orange{
    position: absolute;
    left: 30%;
    height: 200px;
    top: -100px;
  }
  .blue{
    position: absolute;
    height: 150px;
    right: 5%;
    top: 20px;
  }
  .tomato{
    position: absolute;
    height: 200px;
    left: -75px;
    top: 23%;
  }
  .lemon{
    position: absolute;
    height: 100px;
    top: 80%;
    right: 25%;
  }
  .lettuce{
    position: absolute;
    height: 150px;
    top: 60%;
    right: 3%;
    transform: rotate(100deg);
  }
  .cherry{
    position: absolute;
    height: 75px;
    top: 75%;
    left: 15%;
  }
  .grapes{
    position: absolute;
    height: 200px;
    top: 80%;

  }
  .carrot{
    position: absolute;
    height: 300px;
    top: -5%;
    left: -5%;
    transform: rotate(-15deg);
  }
  .limes{
    position: absolute;
    height: 100px;
    bottom: 2%;
    right: 5%;
  }

`;

const LoginRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 25px;

  div a {
    margin-left: 50px;
  }
  a{
    color: var(--red);
    font-weight: 800;
    letter-spacing: 1px;
  }
`;
const FormHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;

  h4{
    font-size: 24px;
  }
  h2{
    font-size: 48px;
    margin-bottom: 25px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 7rem;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form button{
    outline: 0px solid white;
  }
`;

export default function Login(){

  let inputStatus = 'default';
  const { handleChange, values, handleSubmit, errors } = useForm();


  const [loading, setLoading] = useState(false);
  let history = useHistory();
  let loadingscreen;

  if (loading) {
    loadingscreen = <LoadingScreen loading={loading}/>;
  } else {
    loadingscreen = null;
  }

  const timeLoad = (e) =>{
    e.preventDefault();
    // handleSubmit(e);

    setLoading(true);
    setTimeout(
      function(){ 
        setLoading(false);
        history.push('./dashboard');
      }, 2500);
  }

  return(
    <>
      {loadingscreen}
    
      <LoginWrapper>
        <LoginLeft>
          <FruitBg>
            <img className="orange" src={orange} alt="fruit"/>
            <img className="blue" src={blueberries} alt="fruit"/>
            <img className="tomato" src={tomato} alt="fruit"/>
            <img className="lemon" src={lemon} alt="fruit"/>
            <img className="lettuce" src={lettuce} alt="fruit"/>
            <img className="cherry" src={cherry} alt="fruit"/>
            <img className="grapes" src={grapes} alt="fruit"/>
            <img className="carrot" src={carrot} alt="fruit"/>
            <img className="limes" src={limes} alt="fruit"/>
          </FruitBg>
          <h1>Fresh Exchange</h1>
          <p>Pick up.  Trade. Request. Sell. Donate near by.</p>
        </LoginLeft>
        
        <LoginRight>
          <div><Link to='/'>Back to Home</Link></div>
          <FormWrapper>
            <FormHeader>
              <h4>WELCOME,</h4>
              <h2>LOG IN</h2>
              <p>Welcome back!</p>
            </FormHeader>
            <form>
              <TextInput inputType="text" inputId={`email ${inputStatus}`} fieldName="email" inputValue={values.email} placeholder='Enter email' onChange={handleChange}/>
              <TextInput inputType="password" inputId={`password ${inputStatus}`} fieldName="password" inputValue={values.password} placeholder='Enter password' onChange={handleChange}/>
              <button type='submit' className="" onClick={(e) => timeLoad(e)}>
                Submit
              </button>
            </form>
            <br></br>
            <p>Don't have an account? <Link to='/signup'>SIGN UP</Link></p>
          </FormWrapper>
        </LoginRight>
      </LoginWrapper>
    </>
  )
}