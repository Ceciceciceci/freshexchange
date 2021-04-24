import {useRef, useState} from 'react';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

import blueberries from '../../images/illusvg/blueberries.svg';

const FormHeader = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 400px;
  h4{
    font-size: 24px;
  }
  h2{
    font-size: 48px;
    margin-bottom: 25px;
  }
  p{text-align: left;}
  span{
    color: var(--red);
    text-decoration: underline;
    font-weight: 600;
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

  .alert{
    color: var(--red);
    background-color: rgba(224,99,8,0.2);
    width: 100%;
    padding: 10px 0;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Modal = styled.div`
  height: 80%;
  width: 70%;
  box-shadow: 0px 5px 8px 0px rgba(63,63,63,0.5);
  background-color: white;
  position: absolute;
  z-index: 10;
  top: -100%;
  transition: all 500ms ease-out;
  border-radius: 25px;


  h2{
    padding: 25px 100px 25px 25px;
    border-bottom: 3px solid var(--palegreen);
  }

  button{
    position: absolute;
    right: 0;
    width: 60px;
    font-size: 25px;
    margin-right: 25px;
  }
`;

const ModalBody = styled.div`
  text-align: left;
  padding: 15px 25px;
  line-height: 25px;

  .body-sub{
    color: var(--red);
    margin-top: 20px;
  }
  img{
    margin-top: 20px;
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--darkblue);
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  transition: all 200ms ease-in-out;
`;


export default function PersonalForm(props){

  const {step, setStep, setError, streetNumRef, streetNameRef, streetNameRef2} = props;
  let inputStatus = 'default';
  let required= true;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
      <Modal style={{opacity: show ? '1' : '0', top: show ? '10%':'-100%' }}>
        <button onClick={() => handleClose()}>X</button>
        <div className="modal-header">
          <h2>We believe by bringing neighbors together, 
            we can cultivate a kinder world where 
            everyone can rely on those around them. </h2>
        </div>
        <ModalBody>
          <p className="body-sub"><b>Your privacy is our priority</b></p>
          <p>We do not share your name, address or email with advertisers, 
            and your conversations will not be indexed by search engines. 
            We are committed to building trust with neighbors every day. </p>

          <p className="body-sub"><b>Real people at real addresses</b></p>
          <p>Connect with neighbors who have verified their identity; 
            they’re the same people you wave to on the block.  
            Your address however won’t be shared with people who live 
            nearby you. If you want to share your address feel free 
            to do so through private channels.</p>

            <img src={blueberries} />
        </ModalBody>
      </Modal>
      <Overlay style={{opacity: show ? '0.6' : '0', display: show ? 'block':'none' }} />

      <FormHeader>
        <h4>WELCOME,</h4>
        <h2>SIGN UP</h2>
        <p>Your information is <span onClick={handleShow}>safe and secure</span>.</p>
      </FormHeader>
      {/* {error && <p className="alert">{error}</p>} */}
      <form>
        <TextInput inputType="text" inputId={`addrNum ${inputStatus}`} fieldName="Street Number" inputRef={streetNumRef} placeholder='12345' inputReq={required} />
        <TextInput inputType="text" inputId={`addrName ${inputStatus}`} fieldName="Street Name" inputRef={streetNumRef} placeholder='Enter your street name' inputReq={required} />
        <TextInput inputType="text" inputId={`addrName2 ${inputStatus}`} fieldName="Street Name 2" inputRef={streetNumRef} placeholder='PO Box, Apt, etc.' inputReq={required} />
        <TextInput inputType="text" inputId={`addrCity ${inputStatus}`} fieldName="City" inputRef={streetNumRef} placeholder='San Francisco' inputReq={required} />
        <TextInput inputType="text" inputId={`addrZip ${inputStatus}`} fieldName="Zip Code" inputRef={streetNumRef} placeholder='12345' inputReq={required} />
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