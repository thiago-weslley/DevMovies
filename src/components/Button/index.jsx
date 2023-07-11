import { ButtonRed, ButtonWhite } from "./styles";

const Button = ({ children, isRed }) => {
  return (
    <>
      {isRed ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  );
};

export default Button;
