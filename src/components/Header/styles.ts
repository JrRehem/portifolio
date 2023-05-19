import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  width: 100vw;

  nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    top: 2rem;

    ul {
      position: fixed;
      display: flex;
      gap: 3rem;
      align-items: center;

      transition: 0.6s;

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        line-height: 2.5rem;
        color: ${props => props.theme.textPrimary};

        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.primary};
        }

        &.active {
          color: ${props => props.theme.primary};
          font-weight: bold;
        }
      }
    }
  }
`;
