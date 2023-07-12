import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 10rem;
  width: 100%;
  padding: 0 6rem;
  transition: all 0.3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30rem;
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.9));
    transition: all 0.3s;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 5rem;
  transition: all 0.3s;
`;

export const Li = styled.li`
  user-select: none;
  cursor: pointer;
  font-size: 2.6rem;
  filter: drop-shadow(3px 2px 1.5px rgba(0, 0, 0));
  transition: all 0.3s;

  a {
    color: white;
  }
`;
