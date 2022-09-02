import React from 'react';
import styled from 'styled-components';

const InputButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 10rem;
  height: 3rem;

  .btn {
    background: var(--black);
    color: #fff;
    min-width: inherit;
    width: inherit;
    height: inherit;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    padding:0 1rem;
    text-align: center;
    caret-color: rgba(0, 0, 0, 0);
    whitespace: nowrap;
  }
`;
const InputButton = ({ value, type }) => {
  return (
    <InputButtonStyles>
      <input className='btn' value={value} type={type} />
    </InputButtonStyles>
  );
};

export default InputButton;
