import React from 'react';

import styled from 'styled-components';

function Footer() {
  return (
    <FooterBody>
      <FooterText>
        Made with ❤️ for the PokéSpartans team Platzi Master
      </FooterText>
      <FooterText>Our Team</FooterText>
    </FooterBody>
  );
}

export default Footer;

const FooterBody = styled.span`
  font-family: 'Karla';
  font-weight: bold;
  box-sizing: border-box;
  font-size: 1.1vw;
  background-blend-mode: overlay;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  position: fixed;
  top: 94.63%;
  bottom: 5.22%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    font-size: 2vw;
  }
  @media screen and (max-width: 426px) {
    font-size: 3vw;
  }
`;

const FooterText = styled.div`
  padding-left: 6em;
  padding-right: 6em;

  @media screen and (max-width: 768px) {
    align-self: center;
    padding-left: 2em;
    padding-right: 2em;
  }
`;
