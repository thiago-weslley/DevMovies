import { styled } from "styled-components";

export const Title = styled.h3`
  font-size: 2.4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 11rem;
    border-radius: 5px;
  }

  p {
    margin-top: 5px;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
  }

  @media screen and (max-width: 1050px) {
    justify-content: center;
  }
`;
