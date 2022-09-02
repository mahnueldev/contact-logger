import React from 'react'
import styled from 'styled-components'

const AboutStyle = styled.div`
padding-top: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const About = () => {
  return (
    <AboutStyle>This ia what development is About</AboutStyle>
  )
}

export default About