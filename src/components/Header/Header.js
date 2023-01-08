import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">
            <div>Sale</div>
            <div>Sale</div>
          </NavLink>
          <NavLink href="/new">
            <div>New&nbsp;Releases</div>
            <div>New&nbsp;Releases</div>
          </NavLink>
          <NavLink href="/men">
            <div>Men</div>
            <div>Men</div>
          </NavLink>
          <NavLink href="/women">
            <div>Women</div>
            <div>Women</div>
          </NavLink>
          <NavLink href="/kids">
            <div>Kids</div>
            <div>Kids</div>
          </NavLink>
          <NavLink href="/collections">
            <div>Collections</div>
            <div>Collections</div>
          </NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);
  overflow-x: auto;
  overflow-y: hidden;
  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid var(--gray-900);
  }
  @media ${QUERIES.phoneAndBelow} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8vw - 3.75rem,
    3rem
  );
  margin: 0px 48px;
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
  }
`

const Side = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndBelow} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};
  height: 27px;
  overflow: hidden;

  div {
    transition: transform 250ms;
    transform: translateY(0px);

    &:last-of-type {
      font-weight: ${WEIGHTS.bold};
    }
  }

  &:hover div {
    transform: translateY(-27px);
    transition: transform 250ms;
  }

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
