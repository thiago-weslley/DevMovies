import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export const Container = styled.div`
  z-index: 10;
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 60%;
  height: 100%;
  padding: 0 0 0 5rem;

  h1 {
    font-size: 4rem;
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
`;

export const Poster = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35rem;
    border-radius: 1.5rem;
    width: 30rem;
  }
`;
