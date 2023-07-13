import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 9rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export const Container = styled.div`
  z-index: 10;
  display: flex;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 10rem 1rem 0 1rem;
  }


`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 60%;
  padding: 0 0 0 5rem;

  h1 {
    font-size: 3.8rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    gap: 3rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    align-items: center;

    h1 {
      font-size: 3.4rem;
      text-align: center;
    }

    p {
      width: 80%;
      font-size: 1.6rem;
      text-align: justify;
    }

    div {
      justify-content: center;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.4rem;
    }

    div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Poster = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 1.5rem;
    width: 30rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 450px) {
    img {
      width: 25rem;
    }
  }
`;
