/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
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
    <Wrapper isOpen={isOpen}>
      <Backdrop />
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
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from  {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  } 
  to {
    transform: translateX(0%);
  }
`

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  background: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(96, 100, 108, 0.8);
  animation: ${fadeIn} 400ms;
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
  animation: ${slideIn} 400ms both ease-out;
  animation-delay: 200ms;
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
  animation: ${fadeIn} 600ms both;
  animation-delay: 400ms;

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
