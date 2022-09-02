import React from 'react'
import RegisterSvg from '../../assets/svg/RegisterSvg'
import styled from 'styled-components';
import RegisterItem from './RegisterItem';

const RegisterStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0rem 0rem;
.container{
  display: flex;
}
.left-sec {
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
    
  }
.right-sec {

height: 100vh;
width: 100vw;
/* background: grey; */   
  }

`

const Register = () => {
  return (
    <RegisterStyles >
      
        <div className='left-sec'>
       <RegisterItem />
        </div>
        <div className='right-sec'>
        <RegisterSvg />
        </div>
        
    </RegisterStyles>
  )
}

export default Register