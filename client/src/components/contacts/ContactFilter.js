import React from 'react';
import {
  useContacts,
  filterContacts,
  clearFilter
} from '../../context/contact/ContactState';
import styled from 'styled-components';

const ContactFilterStyles = styled.div`
form{
display: flex;
flex-direction: column;
width:20rem;
align-items: center;

}
input{
  width: 90%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: transparent;
    margin: 0.5rem;
    color: var(--text);
    border: 2px solid var(--black);
    resize: none;   
}
`
const ContactFilter = () => {
  // we just need the conact dispatch without state.
  const contactDispatch = useContacts()[1];

  const onChange = (e) => {
    if (e.target.value !== '') {
      filterContacts(contactDispatch, e.target.value);
    } else {
      clearFilter(contactDispatch);
    }
  };

  return (
    <ContactFilterStyles>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Filter Contacts...' onChange={onChange} />
    </form>
    </ContactFilterStyles>
  );
};

export default ContactFilter;
