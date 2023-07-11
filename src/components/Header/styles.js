import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  z-index: 11;
  position: fixed;
  height: 14rem;
  width: 100%;
  padding: 0.5rem 6rem;
  transition: all .3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40rem;
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.9));
    transition: all 0.3s;
  }

  ul {
    display: flex;
    gap: 5rem;
    transition: all .3s;
  }

  li {
    user-select: none;
    cursor: pointer;
    font-size: 2.8rem;
    filter: drop-shadow(3px 2px 1.5px rgba(0, 0, 0));
    transition: all .3s;
  }

  @media screen and (max-width: 1200px) {
    padding: 0.5rem 2rem;

    img {
      width: 35rem;
    }

    ul {
      gap: 4rem;
    }

    li {
      font-size: 2.5rem;
    }
  }
`;
