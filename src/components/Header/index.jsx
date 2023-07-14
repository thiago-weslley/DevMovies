import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Menu, Li } from "./styles";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [changeBackground, setChangeBackground] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 15) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <ContainerHeader $changeBackground={changeBackground}>
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
