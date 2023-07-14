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
  position: relative;
  z-index: -9;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

export const Container = styled.div`
  margin-top: -15rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Cover = styled.div`
  padding: 2rem;
  display: flex;

  img {
    width: 25rem;
    border-radius: 12px;
    animation: ${animationScale} .3s;
  }
`;
