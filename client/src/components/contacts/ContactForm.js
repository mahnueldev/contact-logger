import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputForm from '../layout/InputForm';
import InputButton from '../layout/InputButton';
import {
  addContact,
  useContacts,
  updateContact,
  clearCurrent,
} from '../../context/contact/ContactState';

const ContactFormStyles = styled.div`
  .wrapper {
    height: 5rem;
    width: 20rem;
    border-radius: 5px;
    background: var(--grey);
    padding: 20px 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid; */
  }

  .wrapper .option {
    background: #fff;
    height: 100%;
    width: 100%;
    border: 2px solid lightgrey;
    margin: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
  }

  #option-1:checked ~ .option-1,
  #option-2:checked ~ .option-2 {
    border-color: var(--white);
    background: var(--red);
  }
  .wrapper .option .dot {
    height: 15px;
    width: 15px;
    background: #d9d9d9;
    border-radius: 50%;
    position: relative;
  }

  #option-1:checked ~ .option-1 .dot,
  #option-2:checked ~ .option-2 .dot {
    background: #fff;
  }
  .wrapper .option .dot::before {
    position: absolute;
    content: '';
    height: 9px;
    width: 9px;
    background: var(--red);
    left: 3px;
    top: 3px;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1.5);
    transition: all 0.3 ease;
  }
  #option-1:checked ~ .option-1 .dot::before,
  #option-2:checked ~ .option-2 .dot::before {
    opacity: 1;
    transform: scale(1);
  }

  .wrapper .option span {
    color: #808080;
    font-size: 14px;
  }

  #option-1:checked ~ .option-1 span,
  #option-2:checked ~ .option-2 span {
    color: #fff;
  }

  .wrapper input[type='radio'] {
    display: none;
  }
  .input-style {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 1rem 0rem;
    display: flex;
    background: var(--grey);
    padding: 1rem 0;
    border-radius: 0.5rem;
  }
`;
const initialContact = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const [contactState, contactDispatch] = useContacts();

  const { current } = contactState;
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(initialContact);
    }
  }, [current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contactDispatch, contact).then(() =>
        setContact(initialContact)
      );
    } else {
      updateContact(contactDispatch, contact);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent(contactDispatch);
  };
  return (
    <ContactFormStyles>
      <form onSubmit={onSubmit}>
        <h2 className='text-primary'>Add Contact</h2>
        <InputForm
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <InputForm
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <InputForm
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
        />
        <br />
        <h5>Contact Type</h5>
        <br/>
        <div className='wrapper'>
          <input
            type='radio'
            name='type'
            id='option-1'
            value='personal'
            checked={type === 'personal'}
            onChange={onChange}
          />
          <input
            type='radio'
            name='type'
            id='option-2'
            value='professional'
            checked={type === 'professional'}
            onChange={onChange}
          />
          <label htmlFor='option-1' className='option option-1'>
            <div className='dot'></div>
            <span>Personal</span>
          </label>
          <label htmlFor='option-2' className='option option-2'>
            <div className='dot'></div>
            <span>Professional</span>
          </label>
        </div>
        <div>
          <br />
          <br />
          <InputButton
            type='submit'
            value={current ? 'Update Contact' : 'Add Contact'}
          />
        </div>
        <br />
        {current && (
          <div>
            <InputButton type='submit' value='Login' />
          </div>
        )}
      </form>
    </ContactFormStyles>
  );
};

export default ContactForm;
