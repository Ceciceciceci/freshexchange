import {useRef, useState} from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

import PersonalForm from '../views/SignupForms/PersonalForm';
import AddressForm from '../views/SignupForms/AddressForm';
import UploadPhotoForm from '../views/SignupForms/UploadPhotoForm';
import TermsForm from '../views/SignupForms/TermsForm';

//images
import tomato from '../images/illusvg/tomato.svg';
import orange from '../images/illusvg/orange.svg';
import blueberries from '../images/illusvg/blueberries.svg';
import tomato2 from '../images/illusvg/tomato2.svg';
import lemon from '../images/illusvg/lemon2.svg';
import lettuce from '../images/illusvg/lettuce.svg';
import cherry from '../images/illusvg/cherry.svg';
import carrot from '../images/illusvg/carrot.svg';
import grapes from '../images/illusvg/grapes.svg';
import limes from '../images/illusvg/limes.svg';


const SignupWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const SignupLeft = styled.div`
  background-color: var(--palegreen);
  position:fixed;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

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
const SignupRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;

  a{
    color: var(--red);
    font-weight: 800;
    letter-spacing: 1px;
    margin-left: 50px;
  }
  p a{
    margin-left: 0px;
  }
  p.login{
    margin-top: 15px;
    margin-bottom: 25px;
    text-align: center;
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
  .tomato2{
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

export default function Signup(){

    //personal
  const nameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const pwd2Ref = useRef();
    //Address
  const streetNumRef = useRef();
  const streetNameRef = useRef();
  const streetNameRef2 = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const homeAcceptRef = useRef();
    //Photoupload
  const photoUploadRef = useRef();
    //terms
  const termsAcceptRef = useRef();


  const [step, setStep] = useState(1);
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // let required = true;
  // let notRequired = false;

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   if (pwdRef.current.value !== pwd2Ref.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   try {
  //     console.log("intry");
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, pwdRef.current.value)
  //     history.push("/dashboard")
  //   } catch {
  //     setError("Failed to create an account")
  //   }

  //   setLoading(false)
  // }

  return(
      <SignupWrapper>
        <SignupLeft>
          <FruitBg>
            <img className="orange" src={orange} alt="fruit"/>
            <img className="blue" src={blueberries} alt="fruit"/>
            <img className="tomato2" src={tomato2} alt="fruit"/>
            <img className="lemon" src={lemon} alt="fruit"/>
            <img className="lettuce" src={lettuce} alt="fruit"/>
            <img className="cherry" src={cherry} alt="fruit"/>
            <img className="grapes" src={grapes} alt="fruit"/>
            <img className="carrot" src={carrot} alt="fruit"/>
            <img className="limes" src={limes} alt="fruit"/>
          </FruitBg>
          <h1>Fresh Exchange</h1>
          <p>Pick up.  Trade. Request. Sell. Donate near by.</p>
        </SignupLeft>
        {error && <p className="alert">{error}</p>}
        <SignupRight>
          <Link to='/'>Back to Home</Link>
          {step === 1 && <PersonalForm step={step} 
                                       setStep={setStep} 
                                       nameRef={nameRef}
                                       emailRef={emailRef}
                                       pwdRef={pwdRef}
                                       pwd2Ref={pwd2Ref} 
                                       setError={setError}></PersonalForm>}

          {step === 2 && <AddressForm  step={step} 
                                       setStep={setStep} 
                                       streetNumRef={streetNumRef}
                                       streetNameRef={streetNameRef}
                                       streetNameRef2={streetNameRef2}
                                       stateRef={stateRef}
                                       zipRef={zipRef}
                                       homeAcceptRef={homeAcceptRef}
                                       setError={setError}></AddressForm>}

          {step === 3 && <UploadPhotoForm step={step} 
                                       setStep={setStep} 
                                       photoUploadRef={photoUploadRef}
                                       setError={setError}></UploadPhotoForm>}

          {step === 4 && <TermsForm    step={step} 
                                       setStep={setStep} 
                                       termsAcceptRef={termsAcceptRef}
                                       setError={setError}></TermsForm>}

          <p className="login">Already have an account? <Link to='/login'>LOGIN</Link></p>
        </SignupRight>
      </SignupWrapper>
  )
}