import React, {useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Spinner from '../Spinner';
import { useContacts, getContacts } from '../../context/contact/ContactState';
import ContactItem from './ContactItem';
import styled from 'styled-components'
 const ContactStyled =styled.div`
 .item{
  
 }
 
 `
const Contacts = () => {
  const [contactState, contactDispatch] = useContacts();

  const { contacts, filtered  } = contactState;

  useEffect(() => {
    getContacts(contactDispatch);
  }, [contactDispatch]);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <ContactStyled>
      {contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        null
      )}
    </ContactStyled>
  );
};

export default Contacts;
