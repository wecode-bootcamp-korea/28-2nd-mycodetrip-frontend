import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root { 
    --bg-dark-mode: #222;
    --bg-light-mode: #f0f3f5;
  }
  .html { 
    background-color: var(--bg-light-mode);

  }
  .html.dark { 
    background-color: var(--bg-dark-mode);
  }

  *,*::before, *::after { 
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  
  ul, li { 
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
