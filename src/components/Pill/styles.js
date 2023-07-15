import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;

  span {
    padding: 0.2rem 1rem;
    border: 2px solid #fff;
    background-color: #dc143c;
    border-radius: 30px;
  }

  @media screen and (max-width: 650px) {
    font-size: 1.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }
`;
