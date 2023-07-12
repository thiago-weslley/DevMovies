import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ContainerHeader, Menu, Li } from "./styles";

const Header = () => {
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo principal" />
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </ContainerHeader>
  );
};

export default Header;
