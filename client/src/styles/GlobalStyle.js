import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  
:root{
  --green: #3de6af;
  --lightgreen: #92ffd8;
  --white: #ffff;
    --black: #1a1a1a;
    --grey: #eeeeec;
    --red: #eb6165;
    --yellow: #f6ad1f;
   
    /* --fade-blue: hsl(214,93%,93%); */
  }
html{
    font-size: 16px;
    font-family: 'Raleway', sans-serif,  monospace;
    font-weight: 400;
    color: var(--black);
}
h1 {
  font-weight: 600;
}
  ul{
    margin: 0 auto;
    list-style: none;
    
    
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .iconStyles{
  color: var(--dark-bg); 
  width: 1rem; 
  
 
 
}


`;
export default GlobalStyles;
