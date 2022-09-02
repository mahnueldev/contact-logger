import React from 'react'
import styled from 'styled-components';

const ButtonStyles = styled.div`
.button{
    font-size: 14px;
    display: inline-block;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    background-color: ${(props) =>
      props.del ? 'var(--dark-bg)' : 'var(--lightgreen)'};
    color: ${(props) => (props.del ? 'var(--light-bg)' : 'var(--dark-bg)')};
    transition: all 0.2s ease-in-out;
}

`
const Button = ({text, del= false}) => {
  return (
    <ButtonStyles del= {del}>
      <div className='button'> {text}</div>
    </ButtonStyles>
  )
}

export default Button