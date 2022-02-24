import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import colors from '../../../theme/colors.scss';

import logo from '../../../assets/images/Logo.svg';

function NavDropDown(props) {
  const { DropDownStatus, closeDropDown } = props;
  const changeStatus = () => {
    closeDropDown(!DropDownStatus);
    console.log('Modal onClick');
  };
  const navItems = ['Pokedex', 'Legendaries', 'El Equipo', 'Documentation'];
  return (
    <DropDown onClick={changeStatus}>
      <Img src={logo} alt="PokeMon" />
      {navItems.map((item, key) => {
        return (
          <NavLink to={item === 'Home' ? '/' : '/' + item} key={key}>
            {item}
          </NavLink>
        );
      })}
    </DropDown>
  );
}

export default NavDropDown;

const DropDown = styled.div`
  /* display: none; */
  position: absolute;
  height: 25.5rem;
  width: 100vw;
  background: linear-gradient(
    180deg,
    ${colors.RIPE_LEMON} 0%,
    ${colors.CORN} 100%
  );
  box-shadow: 4px 4px 24px ${colors.BLACK_TRANS_SHADOW};
  border-radius: 0px 0px 16px 16px;
  z-index: 50;
`;

const Img = styled.img`
  margin: 2rem 8rem 2rem 8rem;
`;

const NavLink = styled(Link)`
  color: ${colors.BLACK};
  flex-direction: column;
  font-family: 'Karla';
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;

  &.active {
    text-underline-offset: 0.6rem;
    text-decoration: underline;
  }
`;
