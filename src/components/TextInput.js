import styled from 'styled-components';

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label{
    font-size: 18px;
    font-weight: 600;
    font-family: var(--opensans);
    text-transform: capitalize;
    margin-bottom: 5px;
  }
  input{
    height: 60px;
    width: 360px;
    background-color: var(--beige);
    font-family: var(--monty);
    border: 3px solid white;
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
export default function TextInput({inputType, inputId, fieldName, inputRef, placeholder, value, onChange, disabled, inputReq, error}){
  console.log("REQUIRED, " , inputReq);
  return(
    <FormField>
      <label>{fieldName}</label>
      <input type={inputType} id={inputId} name={fieldName} ref={inputRef} placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} required={inputReq} autoComplete="off" />
      <span style={{display: (error ? 'block':'none')}}></span>
    </FormField>
  )
}