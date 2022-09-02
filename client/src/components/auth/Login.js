import React from 'react'
import LoginSvg from '../../assets/svg/LoginSvg'
import styled from 'styled-components';
import LoginItem from './LoginItem';

const LoginStyles = styled.div`
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

const Login = () => {
  return (
    <LoginStyles >
      
        <div className='left-sec'>
       <LoginItem />
        </div>
        <div className='right-sec'>
        <LoginSvg />
        </div>
        
    </LoginStyles>
  )
}

export default Login