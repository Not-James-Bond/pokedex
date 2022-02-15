import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Span>
      <Div>Made with ❤️ for the PokéSpartans team Platzi Master</Div>
      <Div>Our Team</Div>
    </Span>
  );
}

export default Footer;

const Span = styled.span`
  font-family: 'Karla';
  font-weight: bold;
  box-sizing: border-box;
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
  }
  @media screen and (max-width: 426px) {
    font-size: 3vw;
  }
`;

const Div = styled.div`
  padding-left: 6em;
  padding-right: 6em;

  @media screen and (max-width: 768px) {
    align-self: center;
    padding-left: 2em;
    padding-right: 2em;
  }
`;
