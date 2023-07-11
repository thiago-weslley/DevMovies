import { styled, css } from "styled-components";

const buttonStyles = css`
  border: 3px solid #fff;
  background: transparent;
  border-radius: 30px;
  padding: 1rem 2.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #ff0000;
    background: #fff;
  }
`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 7px 12px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #fff;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;
