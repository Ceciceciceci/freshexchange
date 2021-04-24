import {useRef, useState} from 'react';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

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
    width: 55%;
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
export default function PersonalForm({ formData, setForm, navigation }){

  const { fullname, email, password} = formData;

  let inputStatus = 'default';
  const nameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const pwd2Ref = useRef();

  const {signup} = useAuth();

  const [step, setStep] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  let required = true;
  let notRequired = false;

  async function handleSubmit(e) {
    e.preventDefault()

    if (pwdRef.current.value !== pwd2Ref.current.value) {
      return setError("Passwords do not match");
    }

    try {
      console.log("intry");
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, pwdRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return(
    <FormWrapper>
      <FormHeader>
        <h4>WELCOME,</h4>
        <h2>SIGN UP</h2>
        <p>Let’s fill in some basic information about yourself!</p>
      </FormHeader>
      {error && <p className="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <TextInput inputType="text" inputId={`fullname ${inputStatus}`} fieldName="fullname" inputRef={nameRef} placeholder='Enter full name' inputReq={required} />
        <TextInput inputType="text" inputId={`email ${inputStatus}`} fieldName="email" inputRef={emailRef} placeholder='Enter email' inputReq={required} />
        <TextInput inputType="password" inputId={`password ${inputStatus}`} fieldName="password" inputRef={pwdRef} placeholder='Enter password' inputReq={required} />
        <TextInput inputType="password" inputId={`password2 ${inputStatus}`} fieldName="retype password" inputRef={pwd2Ref} placeholder='Re-enter chosen password' inputReq={required} />
        <button disabled={loading} className="" type="submit" onClick={() => navigation.next()}>
          Sign Up
        </button>
      </form>
      <p>Already have an account? <Link to='/login'>LOGIN</Link></p>
    </FormWrapper>
  )
}