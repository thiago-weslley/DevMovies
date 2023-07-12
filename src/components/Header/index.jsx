import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Menu, Li } from "./styles";

const Header = () => {
  const { pathname } = useLocation();

  window.onscroll = () => {
    console.log('to deceno');
  }
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo principal" />
      <Menu>
        <Li $isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li $isActive={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </ContainerHeader>
  );
};

export default Header;
