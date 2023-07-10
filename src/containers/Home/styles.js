import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;