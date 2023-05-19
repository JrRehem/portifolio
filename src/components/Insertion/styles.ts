import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  line-height: 1.2;

  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 1rem;
    font-weight: normal;
  }

  .name {
    color: ${(props) => props.theme.textPrimary};
    font-size: 3.75rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  .dev {
    color: ${(props) => props.theme.textSecondary};
    font-size: 3.75rem;
    font-weight: bold;
  }

  button {
    background: ${(props) => props.theme.buttonContact};
    border-radius: 15px;
    border: none;

    color: ${(props) => props.theme.textPrimary};

    height: 60px;
    width: 235px;

    margin-top: 2rem;

    font-size: 20px;
    font-weight: bold;
  }
`
