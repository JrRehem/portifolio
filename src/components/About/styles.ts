import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  margin-top: 12.5rem;
`

export const Profile = styled.div`

  .border__color {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.backgroundProfile};
    border-radius: 50%;
    width: 210px;
    height: 210px;

    .circle {
      background: ${(props) => props.theme.perfil};
      border-radius: 50%;
      width: 200px;
      height: 200px;

      img {
        border-radius: 50%;
      }
    }
  }
`
export const AboutMe = styled.div`
  width: 50%;

  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 32px;

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  p {
    color: ${(props) => props.theme.textPrimary};
    font-size: 16px;
    text-align: justify;

    margin-top: 1rem;
  }
`
