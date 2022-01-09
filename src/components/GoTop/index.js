import React from "react";
import Botao from "../../images/smallEspiral-02.svg";
import { ButtonWrapper, Logo } from "./goToElements";
import { animateScroll as scroll } from "react-scroll";

const Top = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ButtonWrapper>
        <p>Back to Top</p>
        <Logo to="/Home" onClick={toggleHome}>
          <img src={Botao} alt="botaoEspiral" />
        </Logo>
      </ButtonWrapper>
    </>
  );
};

export default Top;
