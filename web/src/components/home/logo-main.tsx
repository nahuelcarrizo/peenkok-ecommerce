import React, { useEffect, useRef, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';

import {device} from '../../config/device';

const LogoContainer = styled.a`
  ${tw`
    flex
    fixed
    top-0
    left-0

  `};

  @media ${device.desktop} {
  transition: transform 2.8s cubic-bezier(.16,1.08,.38,.98);
  will-change: transform;
  }
`;

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

interface IStyledLogoProps {
  transformPercentage: number;
}


const ScrollTransformLogo = () => {
 /*    const StyledLogo = useRef<HTMLAnchorElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const transform0 = "translate(0, 0) translate3d(0px, 0px, 0px) scale(1, 1)";
        const transform1 = "translate(-14.7231%, -22.9967%) translate3d(0px, 0px, 0px) scale(0.7047, 0.7047)";
        const transform2 = "translate(-29.4463%, -45.9935%) translate3d(0px, 0px, 0px) scale(0.4094, 0.4094)";
        const transform3 = "translate(-44.1694%, -68.9902%) translate3d(0px, 0px, 0px) scale(0.1142, 0.1142)";
  
        const styledLogo = StyledLogo.current;
  
        if (styledLogo) {
          const scrollPosition = window.scrollY;
          if (scrollPosition < 50) {
            styledLogo.style.transform = transform0;
          } else if (scrollPosition < 150) {
            styledLogo.style.transform = transform1;
          } else if (scrollPosition < 300) {
            styledLogo.style.transform = transform2;
          } else if (scrollPosition < 450) {
            styledLogo.style.transform = transform3;
          } 
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
   */
    return (
      <LogoContainer href="/" ref={StyledLogo}>
        <Logo src="/assets/logo.svg" alt="Logo" />
      </LogoContainer>
    );
  };

  const LogoMain = () => {
    return(
        <ScrollTransformLogo/>
    )
};
export default LogoMain;

