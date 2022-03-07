import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import NavDropDown from './NavDropDown/NavDropDown';
import { NAVBAR_ITEMS } from '../../utils/constants';

import logo from '../../assets/images/pokemon-text.svg';

import './navBar-styles.scss';

function Navbar() {
  const [checkDropDownStatuts, setDropDownStatuts] = useState(false);
  const handleClick = () => setDropDownStatuts(!checkDropDownStatuts);
  const listItems = (item, key) => (
    <Link
      className="nav-link"
      to={item === 'Home' ? '/' : '/' + item}
      key={`item${key}`}>
      {item}
    </Link>
  );

  return (
    <>
      {checkDropDownStatuts && (
        <NavDropDown
          DropDownStatus={checkDropDownStatuts}
          closeDropDown={setDropDownStatuts}
        />
      )}
      <nav className="nav">
        <Link className="nav-link" to="/">
          <img className="nav-logo" src={logo} alt="PokeMon" />
        </Link>
        <FaBars className="bars" onClick={handleClick} />
        <div className="nav-menu">{NAVBAR_ITEMS.map(listItems)}</div>
      </nav>
    </>
  );
}

export default Navbar;
