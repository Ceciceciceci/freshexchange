import {useRef, useState} from 'react';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

const FormHeader = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  h4{
    font-size: 24px;
  }
  h2{
    font-size: 48px;
    margin-bottom: 25px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .alert{
    color: var(--red);
    background-color: rgba(224,99,8,0.2);
    width: 100%;
    padding: 10px 0;
    margin-bottom: 20px;
    text-align: center;
  }

  form button {
    width: 170px !important;
  }
  form .button-group{
    display: flex;
    flex-direction: row;

    > * + * {
      margin-left: 50px;
    }
  }
`;
export default function PersonalForm(props){

  const {step, setStep, setError, photoUploadRef} = props;
  let inputStatus = 'default';
  let required= true;

  function handleNext(e){
    let falseFlag = false;
    // if (!nameRef.current.value){
    //   return setError("Enter your full name");
    //   falseFlag = true;
    // }
    // if (!emailRef.current.value){
    //   return setError("Enter an email");
    //   falseFlag = true;
    // }
    // if (!pwdRef.current.value){
    //   return setError("Enter a password");
    //   falseFlag = true;
    // }
    // if (pwdRef.current.value !== pwd2Ref.current.value) {
    //   return setError("Passwords do not match");
    //   falseFlag = true;
    // }

    if(!falseFlag){
      setStep(3);
    }
  }


  return(
    <FormWrapper>
      <FormHeader>
        <h4>WELCOME,</h4>
        <h2>SIGN UP</h2>
        <p>Your information is <Link to='/safety'>safe and secure</Link>.</p>
      </FormHeader>
      {/* {error && <p className="alert">{error}</p>} */}
      <form>
        <input type="file" id="myFile" name="filename"/>
        <div className="button-group">
          <button className="" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="" onClick={() => setStep(3)}>
            Next
          </button>
        </div>
      </form>
    </FormWrapper>
  )
}