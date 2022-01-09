import styled from "styled-components";
/* import { Link as LinkR } from "react-router-dom"; */
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  position: fixed;
  top: 0;
  z-index: 10;
  /* border: tomato 2px solid; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: right;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 60px 0 0;
  max-width: 1100px;
`;

/* export const NavLogo = styled(LinkR)`
  color: #251d33;
  width: 50%;
  height: 50%;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  #imagem {
    fill: none;
    stroke: #251d33;
  }
`; */

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #b08968;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: right;
  list-style: none;
  text-align: right;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: underline;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 22px;

  &.active {
    color: #b08968;
    font-weight: 500;
  }
`;
