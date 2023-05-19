import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 100px 0;
`

export const Profile = styled.div`
  .border__color {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.backgroundProfile};
    border-radius: 50%;
    width: 410px;
    height: 410px;

    .circle {
      background: ${(props) => props.theme.perfil};
      border-radius: 50%;
      width: 400px;
      height: 400px;

      img {
        border-radius: 50%;
        object-fit: contain;
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
