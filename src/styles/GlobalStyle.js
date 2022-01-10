import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after { 
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  
  ul { 
    list-style: none;
  }
  
  a { 
    text-decoration: none;
  }

  img { 
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
  }

  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  address,
  i,
  em {
    font-style: normal;
  }

  textarea {
    resize: none;
    outline: none;
    border: none;
  }
`;
