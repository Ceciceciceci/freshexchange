import {useRef, useState} from 'react';
import styled from 'styled-components';
import CheckBox from '../../components/Checkbox';
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

const TermsBox = styled.div`
  height: 30vh;
  width: 360px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: white;
  border: 1px solid #ccc;
  padding: 15px;

  p{text-align: left;}

  &::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--red); 
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--darkblue); 
  }
`;
export default function PersonalForm(props){

  const {step, setStep, setError, termsAcceptRef} = props;
  let inputStatus = 'default';
  let required= true;

  let history = useHistory();

  function handleNext(e){
    let falseFlag = false;
    history.push('/dashboard');
  }

  let checked = false;

  return(
    <FormWrapper>
      <FormHeader>
        <h4>WELCOME,</h4>
        <h2>SIGN UP</h2>
        <p>Your information is <Link to='/safety'>safe and secure</Link>.</p>
      </FormHeader>
      {/* {error && <p className="alert">{error}</p>} */}
      <TermsBox>
        <h4>Terms and Conditions</h4>
        <p>
          Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.
        </p>
        <p>
          Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.
        </p>
        <p>
          Mea ea nonumy labores lobortis, duo quaestio antiopam inimicus et. Ea natum solet iisque quo, prodesset mnesarchum ne vim. Sonet detraxit temporibus no has. Omnium blandit in vim, mea at omnium oblique.
        </p>
        <p>
          Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit. Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas partiendo.
        </p>
        <p>
          Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias qui. Postea tincidunt vel eu.
        </p>
        <p>
          Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus inciderint.
        </p>
      </TermsBox>

      <form>
        <CheckBox inputId={`terms ${inputStatus}`} fieldName="terms" labelName="Accept Terms & Conditions" inputRef={termsAcceptRef} />
        <button className="" onClick={() => handleNext()}>
          Finish
        </button>
      </form>
    </FormWrapper>
  )
}