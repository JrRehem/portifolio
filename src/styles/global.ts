import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primary};
      border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.textHighlight};
    }
  }

  html,
  body {
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
