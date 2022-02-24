import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import colors from '../../theme/colors.scss';

export const Nav = styled.nav`
  background: ${colors.RIPE_LEMON};
  box-shadow: 0px 4px 16px ${colors.BLACK_TRANS_SHADOW};
  height: 6.4rem;
  display: flex;
  position: fixed;
  justify-content: space-around;
  padding: 0.5rem;
  width: 100vw;
  z-index: 10;
`;
export const NavLogo = styled.img`
  min-width: 7rem;
  height: auto;
  @media screen and (max-width: 426px) {
    margin-right: 16rem;
  }
`;
export const NavLink = styled(Link)`
  font-family: 'Karla';
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${colors.BLACK};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    text-underline-offset: 0.6rem;
    text-decoration: underline;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.BLACK};

  @media screen and (max-width: 426px) {
    display: block;
    position: absolute;
    top: 2rem;
    height: 2.5rem;
    right: 4rem;
    font-size: 1.8rem;
    width: auto;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.8rem;

  @media screen and (max-width: 426px) {
    display: none;
  }
`;
