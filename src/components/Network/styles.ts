import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  position: fixed;

  height: 100vh;

  margin-left: 6rem;

  .git {
    position: relative;
    height: 40px;
    width: 40px;

    color: ${props => props.theme.icons};
  }

  .bottom {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${props => props.theme.icons};

    height: 40px;
    width: 40px;

    top: 1.25rem;
  }

  .line {
    width: 0;
    height: 115px;
    border-right: 1px solid ${props => props.theme.icons};
  }
`
