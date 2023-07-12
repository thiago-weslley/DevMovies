import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 8rem;
  width: 100%;
  padding: 0 6rem;
  transition: background 0.4s ease-in-out;
  background: ${(props) => (props.$changeBackground ? "#000" : "tranparent")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 25rem;
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.9));
    transition: all 0.3s;
  }

  @media screen and (max-width: 800px) {
    img {
      display: none;
    }

    justify-content: center;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 5rem;
  transition: all 0.3s;
`;

export const Li = styled.li`
  position: relative;
  user-select: none;
  cursor: pointer;
  font-size: 2.2rem;
  filter: drop-shadow(3px 2px 1.5px rgba(0, 0, 0));
  transition: all 0.3s;

  a {
    color: white;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: #3d3de4;
    transition: width 0.25s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;
