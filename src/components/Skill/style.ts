import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 32px;

    span {
      color: ${(props) => props.theme.primary};
    }
  }
`
export const Tooling = styled.div`
  display: flex;

  margin-top: 5rem;
`

export const ToolingSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-left: 3.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background: ${(props) => props.theme.secondary};
      border-radius: 10px;

      color: ${(props) => props.theme.textSecondary};

      padding: 1.5rem;
      width: 100%;

      font-size: 20px;

      &:hover {
        color: ${(props) => props.theme.textSkill};
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`
