import React from 'react';
import styled from 'styled-components';

const InputFormStyles = styled.div`
  margin: 1.2rem 0;
  input {
    margin: 0.2rem 0;
    width: 20rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    padding: 1.5rem;
    background: var(--grey);
   
    
  }
  input:focus{
    outline: none;
    background-color: var(--lightgreen);
   
  }
  input:active{
    outline: none;
    background-color: var(--lightgreen);
  }
`;
const InputForm = ({
  type,
  name,
  value,
  checked,
  onChange,
  placeholder,
  id,
  required
  
}) => {
  return (
    <InputFormStyles>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </InputFormStyles>
  );
};

export default InputForm;
