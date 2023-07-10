import Logo from "../../assets/logo.png";
import { ContainerHeader } from "./styles";

const Header = () => {
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo principal" />
      <ul>
        <li>Home</li>
        <li>Filmes</li>
        <li>Séries</li>
      </ul>
    </ContainerHeader>
  );
};

export default Header;
