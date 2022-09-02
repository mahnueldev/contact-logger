import React from 'react'
import styled from 'styled-components';

const ButtonStylesTwo = styled.div`
.button{
    font-size: 14px;
    display: inline-block;
    padding: 0.4rem 5rem;
    border-radius: 8px;
    background-color: ${(props) =>
      props.sub ? 'var(--dark-bg)' : 'var(--lightpurple)'};
    color: ${(props) => (props.sub ? 'var(--light-bg)' : 'var(--dark-bg)')};
    transition: all 0.2s ease-in-out;
    
}

`
const Button2 = ({text, sub= false, onClick}) => {
  return (
    <ButtonStylesTwo sub= {sub}>
      <button className='button' type='submit' onClick={onClick}> {text}</button>
    </ButtonStylesTwo>
  )
}

export default Button2