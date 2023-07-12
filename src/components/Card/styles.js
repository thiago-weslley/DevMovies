import { styled } from "styled-components";

export const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 20px;
    height: 40rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    h3 {
      font-size: 1.4rem;
    }

    img {
      height: 30rem;
    }
  }
`;
