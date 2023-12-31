import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Menu, Li } from "./styles";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (window.scrollY >= 5) {
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
          <AnchorLink href="#homeContainer">Home</AnchorLink>
        </Li>
        <Li $isActive={pathname.includes("#topMoviesSlider")}>
          <AnchorLink href="#topMoviesSlider">Filmes</AnchorLink>
        </Li>
        <Li>
          <AnchorLink href="#seriesSlider">Séries</AnchorLink>
        </Li>
      </Menu>
    </ContainerHeader>
  );
};

export default Header;
