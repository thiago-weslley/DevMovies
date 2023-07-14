import { styled } from "styled-components";

export const Container = styled.div``;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  min-height: 50vh;
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
