import {useRef, useState} from 'react';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../../redux/Form/useForm';

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
`;
export default function PersonalForm(props){

  const {step, setStep, nameRef, emailRef, pwdRef, pwd2Ref, setError} = props;

  const {handleChange, values, handleSubmit } = useForm();
  let inputStatus = 'default';
  let required= true;

  function handleNext(e){
    // handleSubmit(e);
    setStep(2);
  }

  return(
    <FormWrapper>
      <FormHeader>
        <h4>WELCOME,</h4>
        <h2>SIGN UP</h2>
        <p>Let’s fill in some basic information about yourself!</p>
      </FormHeader>
      {/* {error && <p className="alert">{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <TextInput inputType="text" 
                   inputId={`fullname ${inputStatus}`} 
                   fieldName="fullname" 
                   placeholder='Enter full name' 
                   inputReq={required} 
                   value={values.fullname} 
                   onChange={handleChange}/>

        <TextInput inputType="text" 
                   inputId={`email ${inputStatus}`} 
                   fieldName="email" 
                   placeholder='Enter email' 
                   inputReq={required} 
                   value={values.email} 
                   onChange={handleChange}/>

        <TextInput inputType="password" 
                   inputId={`password ${inputStatus}`} 
                   fieldName="password" 
                   placeholder='Enter password' 
                   inputReq={required} 
                   value={values.password} 
                   onChange={handleChange}/>

        <TextInput inputType="password" 
                   inputId={`password2 ${inputStatus}`} 
                   fieldName="retype password" 
                   placeholder='Re-enter chosen password' 
                   inputReq={required} 
                   value={values.password2} 
                   onChange={handleChange}/>
        <button className="" onClick={(e) => handleNext(e)}>
          Next
        </button>
      </form>
    </FormWrapper>
  )
}