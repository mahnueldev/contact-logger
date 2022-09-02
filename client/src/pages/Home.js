import React from 'react'
import styled from 'styled-components';
import ContactForm from '../components/contacts/ContactForm';
import Contacts from '../components/contacts/Contacts'

const HomePageStyles = styled.div`
padding-top: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.bottompad{
  margin-bottom: 2rem;
}
`

const Home = () => {
  return (
    <HomePageStyles >
      <div style={{display:'flex'}}>
     <div> <Contacts /></div>
      <ContactForm />
      </div>
    </HomePageStyles>
  )
}

export default Home