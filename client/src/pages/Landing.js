import React from 'react';
import styled from 'styled-components';
import LandingSvg from '../assets/svg/LandingSvg';
import InputButton from '../components/layout/InputButton';
import { Link } from 'react-router-dom';

const LandingStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem;

  .container {
    display: flex;
  }
  .left-sec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    justify-content: center;
    width: 100vw;
  }
  .right-sec {
    height: 100vh;
    width: 100vw;
    /* background: grey; */
  }
  li {
    list-style: none;
  }
  li:nth-child(2){
    margin: 0 1rem;
  }
  .landing-link{
    display: flex;
  }
  .text-pad{
    width: 20rem;
    line-height: 1.5rem;
  }
`;

const Landing = () => {
  return (
    <LandingStyles>
      <div className='left-sec'>
        <h1>Be productive</h1>
        <br />
        <p className='text-pad'>Use this call logging app to log all of your calls and relevant contact details to save time and take better notes.</p>
        <br /> <br />
        <div className='landing-link'>
          <li>
            <Link to='/register'>
              <InputButton value='Get started' />
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <InputButton value='Already have an account?' />
            </Link>
          </li>
        </div>
      </div>
      <div className='right-sec'>
        <LandingSvg />
      </div>
    </LandingStyles>
  );
};

export default Landing;
