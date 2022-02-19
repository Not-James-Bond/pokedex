import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/images/Logo.svg';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="PokeMon" style={logoStyle} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/pokedex" activeStyle>
            Pokédex
          </NavLink>
          <NavLink to="/Legendaries" activeStyle>
            Legendaries
          </NavLink>
          <NavLink to="/Documentation" activeStyle>
            Documentation
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;

const logoStyle = {
  minWidth: '10vw',
  height: 'auto',
};

const Nav = styled.nav`
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-around;
  padding: 0.5rem;
  z-index: 10;
`;

const NavLink = styled(Link)`
  font-family: 'Karla';
  font-style: normal;
  font-weight: normal;
  font-size: 2vw;
  line-height: 2.5vh;
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.3vw;
  cursor: pointer;

  &.active {
    text-underline-offset: 8px;
    text-decoration: underline;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #000000;

  @media screen and (max-width: 426px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 426px) {
    display: none;
  }
`;
