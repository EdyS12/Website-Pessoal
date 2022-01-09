import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #b08968;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  padding-top: 40px;
  overflow: hidden;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  padding: 280px 0 0 50px;
  color: #fff;

  @media screen and (max-width: 321px) {
    padding: 280px 0 0 20px;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 90%;
  text-align: left;
  /* border: black 2px solid; */

  a {
    position: relative;
  }

  a:after {
    content: "";
    position: absolute;

    background-color: #fff;
    transform-origin: bottom right;
    transition: 0.4s ease-in-out;
    height: 8px;
    width: 0;
    left: 0;
    bottom: 0;
  }

  a:hover:after {
    width: 100%;
    transform-origin: bottom right;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  justify-content: left;
  height: fit-content;
  font-family: "Roboto";
  font-weight: normal;
  font-size: 80px;
  text-decoration: none;
  /* border: black 2px solid; */
  color: #fff;
  cursor: pointer;

  &:hover {
    font-size: 82px;
    font-weight: 500;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 321px) {
    font-size: 54px;
  }
`;

export const SideButton = styled.div`
  display: flex;
  justify-content: center;
`;

/* export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #4d4dff;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #4d4dff;
  }
`; */
