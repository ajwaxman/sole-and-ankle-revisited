/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen}>
      <Content aria-label="Mobile Menu">
        <MenuButton onClick={onDismiss}>
          <Icon id="close"/>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </MenuButton>
        <Filler />
        <MenuNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MenuNav>
        <MenuFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MenuFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  background: rgba(96, 100, 108, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  position: fixed;
  right: 0;
  height: 100%;
  width: 80%;
  max-width: 375px;
  padding: 32px;
`

const MenuButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--gray-900);
    font-weight: ${WEIGHTS.medium};
    font-size: 18px;
    line-height: 21px;

    &:first-of-type {
      color: var(--secondary);
    }
  }
`

const MenuFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

  a {
    text-decoration: none;
    color: var(--gray-700);
    font-size: 500;
    line-height: 16.44px;
  }
`

const Filler = styled.div`
  flex: 1;
`





export default MobileMenu;
