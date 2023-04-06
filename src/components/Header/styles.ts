import styled from 'styled-components';

export const Container = styled.header`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  ul {
    display: flex;
    gap: 3rem;
    align-items: center;

    transition: 0.6s;

    a {
      display: inline-block;
      position: relative;
      line-height: 2.5rem;
      transition: color 0.2s;

      font-size: 16px;

      cursor: pointer;

      width: 70px;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
