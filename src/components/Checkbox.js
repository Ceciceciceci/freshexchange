

import styled from 'styled-components';

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 0px;
  label{
    font-size: 18px;
    font-weight: 600;
    font-family: var(--opensans);
    text-transform: capitalize;
    margin-top: 17px;
    margin-left: 15px;
  }
  input{
    display: inline;
    height: 60px;
    font-family: var(--monty);
    border: 0px solid var(--green);
    transition: all 100ms ease-in-out;
    border-radius: 50px;
    padding: 0 20px;
  }
  input:focus{
    border: 3px solid var(--teal);
    outline: none;
  }
  input#complete{
    border: 3px solid var(--green);
    outline: none;
  }
  input#error{
    border: 3px solid var(--red);
  }
  input#next{
    background-color: var(--submitorange);
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 18px;
    width: 100%;
  }
`;
export default function TextInput({inputId, fieldName, inputRef, labelName, disabled, inputReq, error, inputcheck}){
  console.log("REQUIRED, " , inputReq);
  return(
    <FormField>
      {inputcheck ? 
      <><input type="checkbox" id={inputId} name={fieldName} required={inputReq} checked /><label for={fieldName}>{labelName}</label></>
      : 
      <><input type="checkbox" id={inputId} name={fieldName} required={inputReq} /><label for={fieldName}>{labelName}</label></>
      }
      <span style={{display: (error ? 'block':'none')}}></span>
    </FormField>
  )
}