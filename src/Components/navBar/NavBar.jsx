import React, { useState } from 'react';

import NavDropDown from './NavDropDown/NavDropDown';
import { Nav, NavLink, Bars, NavMenu, NavLogo } from './NavBarStyle';

import logo from '../../assets/images/Logo.svg';

function Navbar() {
  const [checkDropDownStatuts, setDropDownStatuts] = useState(false);
  const handleClick = () => setDropDownStatuts(!checkDropDownStatuts);
  const navItems = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];
  return (
    <>
      {checkDropDownStatuts && (
        <NavDropDown
          DropDownStatus={checkDropDownStatuts}
          closeDropDown={setDropDownStatuts}
        />
      )}
      <Nav>
        <NavLink to="/">
          <NavLogo src={logo} alt="PokeMon" />
        </NavLink>
        <Bars onClick={handleClick} />
        <NavMenu>
          {navItems.map((item, key) => {
            return (
              <NavLink to={item === 'Home' ? '/' : '/' + item} key={key}>
                {item}
              </NavLink>
            );
          })}
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
