import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
