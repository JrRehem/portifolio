import styled from "styled-components";

export const Container = styled.section`
  margin-top: 16rem;

  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 32px;

    span {
      color:  ${(props) => props.theme.primary};
    }
  }
`
export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;

  height: 350px;
`
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 530px;
  z-index: 9999;

  span {
    color: ${(props) => props.theme.primary};
    font-size: 24px;
    font-weight: bold;
  }

  .item {
    display: flex;
    align-items: center;
    position: relative;

    .item__project {
      background: ${(props) => props.theme.secondary};
      height: 120px;
      width: 550px;
      position: absolute;

      p {
        color: ${(props) => props.theme.textPrimary};
        padding: 1rem;
        text-align: justify;
      }
    }
  }

  .icon {
    align-self: flex-end;

    .icons {
      color: ${(props) => props.theme.textSecondary};
      width: 40px;
      height: 40px;

      margin-right: 2rem;
    }
  }
`

export const Project = styled.div`

  .project__dev {
    position: relative;
    .position {
      position: absolute;
      background: ${(props) => props.theme.bottom};
      height: 350px;
      width: 530px;
    }s
  }
`
