import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 5rem;
  height: 150px;

  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 22px;
    font-weight: normal;
  }

  span {
    font-weight: bold;
  }

  .name {
    color: ${(props) => props.theme.textPrimary};
    font-size: 40px;
  }

  .dev {
    color: ${(props) => props.theme.textSecondary};
    font-size: 40px;
  }
`
