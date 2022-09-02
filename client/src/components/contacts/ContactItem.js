import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import Button from '../layout/Button';
import {
  useContacts,
  deleteContact,
  setCurrent,
  clearCurrent
} from '../../context/contact/ContactState';

const ContactItemStyles = styled.div`
max-width: 30rem;
min-width: 20rem;
  .class-bg-light {
    color: var(--black);
    padding: 0.5rem;
    border: 0.5px solid var(--grey);
    background: #d9d9d9;
    margin: 1rem;
    border-radius: 8px;
  }
  .badge {
    font-size: 0.8rem;
    padding: 0.2rem 0.7rem;
    text-align: center;
    margin: 0.3rem;
    background: var(--green);
    color: #333;
    border-radius: 5px;
  }
  .badge-success {
    background: #8470a2;
    color: #fff;
  }
  .badge-primary {
    background: #feaad6;
    color: #fff;
  }
 
  .list {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
  } 
`;

const ContactItem = ({ contact }) => {
  // we just need the contact dispatch without state.
  const contactDispatch = useContacts()[1];

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(contactDispatch, _id);
    clearCurrent(contactDispatch);
  };

  return (
    <ContactItemStyles>
      <div className='class-bg-light'>
        <h3 className='text-primary text left'>
          {name} {''}
          <span
            style={{ float: 'right' }}
            className={`badge ${
              type === 'professional' ? 'badge-success' : 'badge-primary'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className='list'>
          {email && (
            <li style={{ alignItems: 'center', display: 'flex'}}>
              <AiFillMail className='iconStyles'style={{marginRight: '0.2rem'}}/>
              <span>{email}</span>
            </li>
          )}
          {phone && (
            <li >
            <AiFillPhone className='iconStyles' style={{marginRight: '0.2rem'}}/>
              <span>{phone}</span>
            </li>
          )}
        </ul>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button text='Edit' onClick={() => setCurrent(contactDispatch, contact)} />
          <Button text='Delete' del='true' onClick={onDelete}/>
        </div>
      </div>
    </ContactItemStyles>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
