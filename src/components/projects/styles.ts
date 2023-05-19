import styled from "styled-components";

export const Container = styled.section`

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
    width: 450px;

    .item__project {
      background: ${(props) => props.theme.secondary};
      height: 150px;


      p {
        color: ${(props) => props.theme.textPrimary};
        padding: 1rem;
        text-align: justify;
      }
    }
  }

  .skill {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.75rem;
    column-gap: 0.5rem;
    width: 450px;

    span {
      background: ${(props) => props.theme.skill};
      border-radius: 10px;
      color: ${(props) => props.theme.textSkill};

      padding-top: 0.25rem;
      padding-bottom: 0.25rem;

      padding-left: 0.75rem;
      padding-right: 0.75rem;

      font-size: 14px;
    }
  }

  .icon {
    display: flex;
    justify-content: flex-end;
    width: 450px;

    .icons {
      color: ${(props) => props.theme.textSecondary};
      width: 40px;
      height: 40px;

      margin-left: 2rem;
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
    }
  }
`
