import { styled, keyframes } from "styled-components";

const animationScale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  min-height: 50rem;
  position: absolute;
  z-index: -9;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  padding-top: 350px;
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 1050px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Cover = styled.div`
  padding: 2rem;
  display: flex;

  img {
    height: 50rem;
    border-radius: 12px;
    animation: ${animationScale} 0.3s;
    filter: drop-shadow(-10px -10px 8px rgba(0, 0, 0, 0.9));
  }

  @media screen and (max-width: 1050px) {
    img {
      height: 45rem;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      height: 34rem;
    }
  }
`;

export const Info = styled.div`
  padding: 2rem;
  width: 60%;

  h2 {
    font-size: 3.6rem;
  }

  p {
    margin: 2rem 0 3rem 0;
    text-align: justify;
  }

  @media screen and (max-width: 1050px) {
    width: 90%;

    h2 {
      font-size: 3.2rem;
    }
  }

  @media screen and (max-width: 650px) {
    h2 {
      text-align: center;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
