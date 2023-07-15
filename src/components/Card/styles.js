import { styled } from "styled-components";

export const Container = styled.div`
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

  @media screen and (max-width: 580px) {
    h3 {
      font-size: 1.4rem;
      width: 80%;
    }

    img {
      height: 32rem;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      height: 25rem;
    }
  }

  @media screen and (max-width: 290px) {
    h3 {
      font-size: 1rem;
      width: 98%;
    }

    img {
      height: 18rem;
    }
  }
`;
