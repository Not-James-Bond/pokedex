import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { NAV_ITEMS_MOBILE } from '../../../utils/constants';
import logo from '../../../assets/images/pokemon-text.svg';

import './navDropDown - styles.scss';

function NavDropDown(props) {
  const { DropDownStatus, closeDropDown } = props;
  const changeStatus = () => {
    closeDropDown(!DropDownStatus);
  };
  const listItems = (item, key) => (
    <Link
      className="dropdown-nav-link"
      to={item === 'Home' ? '/' : '/' + item}
      key={`dropDownItem${key}`}>
      {item}
    </Link>
  );

  return (
    <div className="dropdown" onClick={changeStatus}>
      <img className="pokemon-logo" src={logo} alt="PokeMon" />
      {NAV_ITEMS_MOBILE.map(listItems)}
    </div>
  );
}

export default NavDropDown;
