import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Menu, Li } from "./styles";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderDetail = () => {
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
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes("detalhe")}>
          <AnchorLink href="#detailContainer">Detalhe</AnchorLink>
        </Li>
        <Li>
          <AnchorLink href="#trailers">Trailer</AnchorLink>
        </Li>
      </Menu>
    </ContainerHeader>
  );
};

export default HeaderDetail;
