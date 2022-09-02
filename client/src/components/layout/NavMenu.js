import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineLogout } from 'react-icons/ai';
import { useAuth, logout } from '../../context/auth/AuthState';
import { useContacts, clearContacts } from '../../context/contact/ContactState';

const NavMenuStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding: 1rem;
  background: var(--light-bg);
  /* box-shadow: 5px 1px 18px rgba(0, 0, 0, 0.2); */
  border-bottom: 2px solid var(--grey);
  .nav {
    display: flex;
    gap: 1rem;
   
  }
`;

const NavMenu = () => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  // we just need the contact dispatch without state.
  const contactDispatch = useContacts()[1];

  const onLogout = () => {
    logout(authDispatch);
    clearContacts(contactDispatch);
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link onClick={onLogout} to='/login'>
          <AiOutlineLogout
            className='iconStyles'
            style={{ marginRight: '0.2rem' }}
          />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className='nav'>
        <li>
          <Link to='/login'>Login </Link>
        </li>
        <li>
          <Link to='/register'>Register </Link>
        </li>
      </div>
    </Fragment>
  );
  return (
    <NavMenuStyles>
      <h1>
        <Link to='/home'>
          <p>ContactLog</p>
        </Link>
      </h1>
      <ul className='nav-ul'>{isAuthenticated ? authLinks : guestLinks}</ul>
    </NavMenuStyles>
  );
};

export default NavMenu;
